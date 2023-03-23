import React, { useState } from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import uxtoImg from '../../assets/images/uxto.png';
import uxtoMergeImg from '../../assets/images/merge.png';
import SweetAlert from "react-bootstrap-sweetalert"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const StakingDataWidget = props => {

  const [orderedState, setOrderedState] = useState(false);
  const typedUser = useSelector(state => state.Login.userTyped);
  const [currentUrl, setCurrentUrl] = useState("");
  const [walletPassState, setWalletPassState] = useState(false);




  const [confirm_alert, setconfirm_alert] = useState(false)
  const [confirm_alert2, setconfirm_alert2] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)



  const [isManual, setIsManual] = useState(false);
  const [inputValue, setInputValue] = useState({
    min: 100,
    max: 100
  })

  useEffect(() => {
    let url;
    if ((window.location.hostname).includes("revo.host")) {
      url = `https://${window.location.hostname}/api`
    } else {
      url = `http://${window.location.hostname}:3001/api`
    }

    setCurrentUrl(url);
    let orderedList = props.listunspentState;

    orderedList.sort(function (a, b) {
      if (a.confirmations > b.confirmations) {
        return 1;
      }
      if (a.confirmations < b.confirmations) {
        return -1;
      }
      return 0;
    });

    setOrderedState(orderedList);


  }, [props.listunspentState])


  function handleSplitButton() {
    fetch(`${currentUrl}/splitutxosforaddress`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ utxoValues: inputValue, user: typedUser.user, pass: typedUser.pass })
    }).then(data => data.text())
      .then(res => {
        if ((res).includes("ok")) {
          console.log("uxto response: ok");
        }
      });
  }


  function handleMergeButton() {
    let titleRes;
    let descriptionRes;
    let invalidPassChar = false;
    if (walletPassState) {
      if (walletPassState.includes(" ")) {
        invalidPassChar = true;
      }
    }

    if (!walletPassState || invalidPassChar) {
      titleRes = "Wallet password error!"
      descriptionRes = "You must enter a valid password!"
      setconfirm_alert2(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    }


    let objData = {
      walletPassword: walletPassState,
      user: typedUser.user,
      pass: typedUser.pass
    }
    fetch(`${currentUrl}/walletunlockforstaking`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.text())
      .then(res => {
        if ((res).includes("ok")) {
          fetch(`${currentUrl}/mergeunspent`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(objData)
          }).then(data => data.text())
            .then(res => {

              if ((res).includes("ok")) {
                titleRes = "UTXO Merge Success!"
                descriptionRes = "UTXO Merge done successfully";
                setconfirm_alert2(false);
                setsuccess_dlg(true);
                setdynamic_title(titleRes);
                setdynamic_description(descriptionRes);
              }
            })
        } else {
          titleRes = "Wallet password error!"
          descriptionRes = res;
          setconfirm_alert2(false);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
          return seterror_dlg(true)
        }
      });


  }


  !confirm_alert && isManual && setIsManual(false);

  return (
    <React.Fragment>
      <Row>
        {success_dlg ? (
          <SweetAlert
            success
            title={dynamic_title}
            showConfirm={true}
            timeout={0}
            onConfirm={() => {
              setsuccess_dlg(false)
            }}
          >
            {dynamic_description}
          </SweetAlert>
        ) : null}

        {error_dlg ? (
          <SweetAlert
            error
            title={dynamic_title}
            showConfirm={dynamic_title.includes("Wallet password error!") ? false : true}
            timeout={dynamic_title.includes("Wallet password error!") ? 2 : 0}
            onConfirm={() => {
              setTimeout(() => {
                seterror_dlg(false)
                setconfirm_alert2(true);
              }, 2000)
            }}
          >
            {dynamic_description}
          </SweetAlert>
        ) : null}
        <Col md={12} xl={12} className="">
          <Col xl={12} >
            {/*<button style={{ float: "right" }} type="button" id="sa-success" class="btn btn-secondary  m-2 mb-4">UTXO Split</button>*/}

            <div style={{ display: "inline-block", float: "right", display: "none" }} className="m-2 mb-4">
              <Button
                color={"primary"}
                onClick={() => {
                  setconfirm_alert(true)
                }}
                id="sa-success"
                style={{ margin: "0" }}
              >
                UTXO Split
              </Button>
            </div>
            {confirm_alert ? (
              <SweetAlert
                title="UTXO Splitting"
                showCancel={!isManual}
                confirmBtnText={isManual ? "Confirm" : "Manual"}
                cancelBtnText="Automatic"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="success"
                onConfirm={() => {
                  if (!isManual) {
                    setIsManual(true);
                  } else {
                    handleSplitButton();
                  }
                }}
                onCancel={() => {
                  //setconfirm_alert(false)
                  handleSplitButton();
                }}
              >
                <img style={{ display: "block", margin: "0 auto 10px auto", width: "70px", border: "2px solid", borderRadius: "50px" }} src={uxtoImg}></img>
                <span style={{ display: "block" }}>Available Balance</span>
                {(props.nodeData[9].balance).toFixed(8) + " RVO"}
                {isManual && <div style={{ display: "flex" }}>
                  <div>
                    <label>Minimum</label>
                    <input
                      name="min"
                      label="Minimum"
                      defaultValue={100}
                      onChange={(e) => { setInputValue({ ...inputValue, min: e.target.value }) }}
                      className="form-control"
                      placeholder="Enter minimum value"
                      type="text"
                      style={{}}
                      required
                    ></input>
                  </div>
                  <div>
                    <label>Maximum</label>
                    <input
                      name="max"
                      label="Maximum"
                      defaultValue={100}
                      onChange={(e) => { setInputValue({ ...inputValue, max: e.target.value }) }}
                      className="form-control"
                      placeholder="Enter maximum value"
                      type="text"
                      style={{}}
                      required
                    ></input>
                  </div>
                </div>}
              </SweetAlert>
            ) : null}
            <div style={{ display: "inline-block", float: "right", display: "none" }} className="m-2 mb-4">
              <Button
                color={"primary"}
                onClick={() => {
                  setconfirm_alert2(true)
                }}
                id="sa-success"
                style={{ margin: "0" }}
              >
                UTXO Merge
              </Button>
            </div>
            {confirm_alert2 ? (
              <SweetAlert
                title="UTXO Merge"
                showCancel={false}
                confirmBtnText={"Confirm"}
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => {
                  handleMergeButton();
                }}
                onCancel={() => {
                  setconfirm_alert2(false)
                }}
              >
                <img style={{ display: "block", margin: "0 auto 10px auto", width: "70px", border: "2px solid", borderRadius: "50px" }} src={uxtoMergeImg}></img>
                <p>{"Enter your wallet unlock password to confirm the merging of all your utxos."}</p>
                {<input
                  type="password"
                  className="form-control"
                  placeholder="Enter Wallet Password"
                  onChange={(e) => {
                    setWalletPassState(e.target.value);
                  }}
                />}
              </SweetAlert>
            ) : null}
            <br></br>
            <br></br>
            <Card style={{ width: "100%" }}>
              <CardBody>
                <h4 className="card-title mb-2">My UTXOs</h4>
                <hr />

                <div class="table-responsive main-tables-container">
                  <table class="table mb-0 table">
                    <thead>
                      <tr>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx-hash"></i> TX id</th>
                        <th style={{ paddingLeft: '0' }}><i className="fas fa-coins"></i> Amount</th>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx-down-arrow-circle"></i> Address</th>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx-data"></i> Vout</th>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx bx-label"></i> Label</th>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx-check-shield"></i> Confirms</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        orderedState && (orderedState).map(e => {
                          return (
                            <tr key={e.txid} >
                              <th style={{ borderBottom: "none", paddingLeft: "0" }} scope="row"><a target="_blank" className={e.confirmations < 500 ? "text-muted" : ""} href={`${props.nodeData[11].EXPLORER_URL}tx/${e.txid}`}>{e.txid} </a></th>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }}><b>{e.amount + " RVO"}</b></td>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }}>{e.address}</td>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }}>{e.vout}</td>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }}>{e.label} </td>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }} className={e.confirmations < 500 ? "text-warning" : "text-primary"}>{e.confirmations} </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>{
                  orderedState && (orderedState).map(e => {
                    return (
                      <div key={e.txid + "responsive"} className='main-divs-container'>
                        <div class="dropdown-divider"></div>
                        <div className='main-divs-content'>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-hash"></i> TX id
                            </div>
                            <div style={{ width: "70%" }}>
                              <a target="_blank" className={e.confirmations < 500 ? "text-muted" : ""} href={`${props.nodeData[11].EXPLORER_URL}tx/${e.txid}`}>{e.txid} </a>
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="fas fa-coins"></i> Amount
                            </div>
                            <div style={{ width: "70%" }}>
                              <b>{e.amount + " RVO"}</b>
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-down-arrow-circle"></i> Address
                            </div>
                            <div style={{ width: "70%" }}>
                              {e.address}
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-data"></i> Vout
                            </div>
                            <div style={{ width: "70%" }}>
                              {e.vout}
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx bx-label"></i> Label
                            </div>
                            <div style={{ width: "70%" }}>
                              {e.label}
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-check-shield"></i> Confirms
                            </div>
                            <div style={{ width: "70%" }} className={e.confirmations < 500 ? "text-warning" : "text-primary"}>
                              {e.confirmations}
                            </div>
                          </div>
                        </div>
                      </div>)
                  })}
              </CardBody>
            </Card>
          </Col>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default StakingDataWidget;
