import React, { useState } from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import SweetAlert from "react-bootstrap-sweetalert"


const StakingDataWidget = props => {

  const [orderedState, setOrderedState] = useState(false);
  const [buttonStakingState, setButtonStakingState] = useState(true);

  useEffect(() => {
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

  useEffect(()=> {
    
    fetch(`http://${window.location.hostname}:3001/getstakinginfo`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
      .then(res => {
        if(res.staking){
          setButtonStakingState(true);
        }else {
          setButtonStakingState(false);
        }
      });
  },[])


  const [confirm_alert, setconfirm_alert] = useState(false)
  const [confirm_alert2, setconfirm_alert2] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)



  const [walletPassState, setWalletPassState] = useState(false);


  function handleButton(stakingState) {
    let titleRes;
    let descriptionRes;
    if (stakingState) {
      fetch(`http://${window.location.hostname}:3001/walletlockforstaking`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(data => data.text())
        .then(res => {
          titleRes = "Staking Disabled"
          descriptionRes = res;
          setconfirm_alert2(false);
          setsuccess_dlg(true);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
          setButtonStakingState(!buttonStakingState);
        });
    } else {

      if (!walletPassState) {
        titleRes = "Wallet password error!"
        descriptionRes = "You must enter a password!"
        setconfirm_alert2(false);
        setdynamic_title(titleRes);
        setdynamic_description(descriptionRes);
        return seterror_dlg(true)
      }


      let objData = {
        walletPassword: walletPassState
      }
      fetch(`http://${window.location.hostname}:3001/walletunlockforstaking`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData)
      }).then(data => data.text())
        .then(res => {
          if ((res).includes("ok")) {
            titleRes = "You are Staking!"
            descriptionRes = "Staking enabled successfully";
            setconfirm_alert2(false);
            setsuccess_dlg(true);
            setdynamic_title(titleRes);
            setdynamic_description(descriptionRes);
            setButtonStakingState(!buttonStakingState);
          }else {
            titleRes = "Wallet password error!"
            descriptionRes = res;
            setconfirm_alert2(false);
            setdynamic_title(titleRes);
            setdynamic_description(descriptionRes);
            return seterror_dlg(true)
          }
        });
    }

  }


  return (
    <React.Fragment>
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
            setTimeout(()=> {
              seterror_dlg(false)
              setconfirm_alert2(true);
            }, 2000)
          }}
        >
          {dynamic_description}
        </SweetAlert>
      ) : null}
      <Row>
        <Col md={12} xl={12} className="">
          <Col xl={12} >
            <button style={{ float: "right" }} type="button" id="sa-success" class="btn btn-secondary  m-2 mb-4">UTXO Split</button>
            <button style={{ float: "right" }} type="button" id="sa-success" class="btn btn-secondary  m-2 mb-4">UTXO Merge</button>
            <Col xl={3} lg={4} sm={6} className="mb-2">
              <div className="">
                <Button
                  color={buttonStakingState ? "danger" : "primary"}
                  onClick={() => {
                    setconfirm_alert2(true)
                  }}
                  id="sa-success"
                  className='m-2 mb-4'
                >
                  <i className="mdi mdi-pickaxe"></i> {buttonStakingState ? "Disable" : "Enable"} Staking
                </Button>
              </div>
              {confirm_alert2 ? (
                <SweetAlert
                  title={buttonStakingState ? "Staking will be disabled!" : "Staking will be enabled!"}
                  warning
                  showCancel
                  confirmButtonText="Yes, do it!"
                  confirmBtnBsStyle="success"
                  cancelBtnBsStyle="danger"
                  onConfirm={() => {
                    { handleButton(buttonStakingState); }
                    setconfirm_alert2(false);
                  }}
                  onCancel={() => setconfirm_alert2(false)}
                >
                  <p>{buttonStakingState ? "You are going to disable mining on this node." : "Enter your wallet unlock password to enable staking."}</p>
                  {!buttonStakingState && <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Wallet Password"
                    onChange={(e) => {
                      setWalletPassState(e.target.value);
                    }}
                  />}
                </SweetAlert>
              ) : null}
            </Col>
            <br></br>
            <br></br>
            <Card style={{ width: "100%" }}>
              <CardBody>
                <h4 className="card-title mb-2">My UTXOs</h4>
                <hr />

                <div class="table-responsive">
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
                              <th style={{ borderBottom: "none", paddingLeft: "0" }} scope="row"><a className={e.confirmations < 500 ? "text-muted" : ""} href={`${props.nodeData[11].EXPLORER_URL}tx/${e.txid}`}>{e.txid} </a></th>
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
                </div>
              </CardBody>
            </Card>
          </Col>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default StakingDataWidget;
