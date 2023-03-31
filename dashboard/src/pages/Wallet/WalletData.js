import React from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SweetAlert from "react-bootstrap-sweetalert"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'reactstrap';
import walletIcon from '../../assets/images/walletmodalicon.png';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const WalletDataWidget = props => {

  const typedUser = useSelector(state => state.Login.userTyped);
  const [currentUrl, setCurrentUrl] = useState("");



  const [confirm_alert, setconfirm_alert] = useState(false)
  const [confirm_alert2, setconfirm_alert2] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)

  const [walletPassState, setWalletPassState] = useState(false);


  const [continuePressed, setContinuePressed] = useState(false);

  const [inputValue, setInputValue] = useState({
    address: "",
    coinsAmount: 0,
    walletPass: ""
  })

  const [generatedList, setGeneratedList] = useState(false);
  const [addressesList, setAdressesList] = useState(false);

  useEffect(() => {
    let url;
    if ((window.location.hostname).includes("revo.host")) {
      url = `https://${window.location.hostname}/api`
    } else {
      url = `http://${window.location.hostname}:3001/api`
    }
    setCurrentUrl(url);

    let generated = (props.listtransactions).filter(e => !e?.generated).slice(0, 20);
    setGeneratedList(generated);

    let objData = {
      user: typedUser.user,
      pass: typedUser.pass
    } 
    
    fetch(`${url}/listadressessgroupings`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.json())
      .then(res => {
        setAdressesList(res);
      })


  }, [props.listtransactions])


  const [isWalletValid, setIsWalletValid] = useState(false);


  function handleAddressInput() {
    let objData = {
      user: typedUser.user,
      pass: typedUser.pass,
      walletAddress: inputValue.address
    }

    if ((objData.walletAddress).length == 34) {
      fetch(`${currentUrl}/validateaddress`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData)
      }).then(data => data.text())
        .then(res => {
          if (res == "ok") {
            setInputValue({ ...inputValue, address: objData.walletAddress })
            setIsWalletValid(true);
          } else if (res.includes("error")) {
            setIsWalletValid(false);
          }
        })
    } else {
      setIsWalletValid(false);
    }

  }


  const [isValidAmount, setIsValidAmount] = useState(false);

  function handleAmountInput() {
    let amount = parseFloat(inputValue.coinsAmount);
    if (typeof (amount) == 'number' && amount <= (props.nodeData[9].balance).toFixed(8)) {
      return true;
    } else {
      return false;
    }
  }



  function checkWalletPass() {

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
      setconfirm_alert(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    }


    let objData = {
      walletPassword: walletPassState,
      user: typedUser.user,
      pass: typedUser.pass
    }
    fetch(`${currentUrl}/walletunlock`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.text())
      .then(res => {
        if ((res).includes("ok")) {
          sendCoins();
        } else {
          titleRes = "Wallet password error!"
          descriptionRes = res;
          setconfirm_alert2(false);
          setconfirm_alert(false);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
          return seterror_dlg(true)
        }
      });
  }



  function sendCoins() {
    let titleRes;
    let descriptionRes;
    let objData = {
      user: typedUser.user,
      pass: typedUser.pass,
      address: inputValue.address,
      amount: inputValue.coinsAmount
    }

    fetch(`${currentUrl}/sendtoaddress`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.text())
      .then(res => {

        if (res.length == 64) {
          titleRes = "Coins sent Successfully!"
          descriptionRes = [<span style={{ display: "block" }}>Transaction Id</span>, <a target="_blank" href={`https://mainnet.revo.network/tx/${res}`}><strong>{res}</strong></a>];
          setconfirm_alert(false);
          setsuccess_dlg(true);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
        } else if (res.includes("error")) {
          titleRes = "Send Coins Error!"
          descriptionRes = "Coins couldn't be sent!"
          setconfirm_alert(false);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
          return seterror_dlg(true)
        }
      })
  }




  const dateoptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'CET' };

  const icons = []

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
            showConfirm={true}
            onConfirm={() => {
              seterror_dlg(false)
              if (dynamic_title.includes("Add")) {
                setconfirm_alert(true);
              } else {
                setconfirm_alert2(true);
              }
            }}
          >
            {dynamic_description}
          </SweetAlert>
        ) : null}
        <Col md={12} xl={12} className="">
          <Col xl={12} >
            { addressesList && addressesList.filter(e => e[1] > 0).map(e=> {
              return (
                <div key={e[1]} className="d-none ms-1"><div style={{
                  height: "100%", display: "flex", alignItems: "center"
                }}>
                  <CopyToClipboard text={`${e[0]}`}
                    onCopy={() => { }}>
                    <button className="btn btn-outline-success " id="CopyTooltip" >{walletAddress}</button>
                  </CopyToClipboard>
                  <Tooltip placement="bottom" isOpen={tooltipOpen} target="CopyTooltip" toggle={() => setTooltipOpen(!tooltipOpen)}>
                    Click to copy
                  </Tooltip>
                </div>
              </div>
              )
            }) }
            {/*<button style={{ float: "right" }} type="button" id="sa-success" class="btn btn-secondary  mx-2 mb-4">Send</button>*/}
            <div style={{ display: "inline-block", float: "right" }} className="m-2 mb-4">
              <Button
                color={"primary"}
                onClick={() => {
                  setconfirm_alert(true)
                }}
                id="sa-success"
                style={{ margin: "0" }}
              >
                Send
              </Button>
            </div>
            {confirm_alert ? (
              <SweetAlert
                title="Send Coins"
                showCancel
                confirmBtnText={!continuePressed && !isValidAmount && !isWalletValid ? "Continue" : "Confirm"}
                cancelBtnText={"Cancel"}
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => {
                  if (continuePressed && isValidAmount && isWalletValid) {
                    checkWalletPass();
                  } else {
                    let amount = handleAmountInput();
                    handleAddressInput();
                    setIsValidAmount(amount);
                    setContinuePressed(true);
                  }
                }}
                onCancel={() => {
                  setconfirm_alert(false);
                  setIsValidAmount(false);
                  setIsWalletValid(false);
                  setInputValue({
                    address: "",
                    coinsAmount: 0,
                    walletPass: ""
                  })
                  setContinuePressed(false);
                }}
              >
                {/*<img style={{ display: "block", margin: "0 auto 10px auto", width: "70px", border: "2px solid", borderRadius: "50px", padding: "5px" }} src={addNodeImg}></img>*/}
                {
                  (!isValidAmount || !isWalletValid || !continuePressed) ?
                    <div>
                      {<div style={{}}>
                        <div>
                          <label>Wallet Address</label>
                          <input
                            name="address"
                            label="Wallet Address"
                            onChange={(e) => { setInputValue({ ...inputValue, address: e.target.value }) }}
                            defaultValue={(inputValue.address).length ? inputValue.address : ""}
                            className="form-control"
                            placeholder="Enter a Wallet Address"
                            type="text"
                            style={continuePressed ? isWalletValid ? { borderColor: "green" } : { borderColor: "red" } : {}}
                            required
                          ></input>
                        </div>
                        <div>
                          <label>Coins Amount</label>
                          <input
                            name="amount"
                            label="Coins Amount"
                            onChange={(e) => {
                              setInputValue({ ...inputValue, coinsAmount: e.target.value })
                            }}
                            defaultValue={(inputValue.coinsAmount).length ? (inputValue.coinsAmount) : ""}
                            className="form-control"
                            placeholder="Enter Coins Amount"
                            type="number"
                            style={continuePressed ? isValidAmount ? { borderColor: "green" } : { borderColor: "red" } : {}}
                            required
                          ></input>
                        </div>
                      </div>}
                    </div> :
                    <div>
                      {<img style={{ display: "block", margin: "0 auto 10px auto", width: "70px", border: "2px solid", borderRadius: "50px", padding: "5px" }} src={walletIcon}></img>}
                      <p>{"Enter your wallet unlock password to send coins."}</p>
                      {<input
                        type="password"
                        className="form-control"
                        placeholder="Enter Wallet Password"
                        onChange={(e) => {
                          setWalletPassState(e.target.value);
                        }}
                      />}
                    </div>
                }
              </SweetAlert>
            ) : null}
            <br></br>
            <br></br>
            <Card style={{ width: "100%" }}>
              <CardBody>
                <h4 className="card-title mb-2">Most Recent Transactions</h4>
                <hr />

                <div class="table-responsive main-tables-container">
                  <table class="table mb-0 table">
                    <thead>
                      <tr>
                        <th><i className="bx bx-transfer-alt"></i> Type</th>
                        <th><i className="bx bx-down-arrow-circle"></i> Address</th>
                        <th><i className="bx bx-time-five"></i> Time</th>
                        <th><i className="bx bx-hash"></i> TX Id</th>
                        <th><i className="fas fa-coins"></i> Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        generatedList && generatedList.map(e => {
                          return (<tr>
                            <th style={{ borderBottom: "none" }} scope="row">{e.category == 'receive' ? <i className='bx bx-left-down-arrow-circle text-primary'></i> : <i className='bx bx-right-top-arrow-circle text-danger'></i>}</th>
                            <td style={{ borderBottom: "none" }}><a target="_blank" href={props.nodeData[11].EXPLORER_URL + "address/" + e.address}>{e.address}</a></td>
                            <td style={{ borderBottom: "none" }}>{new Date((e.time) * 1000).toLocaleString("en-US", dateoptions)}</td>
                            <td style={{ borderBottom: "none" }}><a target="_blank" href={props.nodeData[11].EXPLORER_URL + "tx/" + e.txid}>{e.txid}</a></td>
                            <td style={{ borderBottom: "none" }}><b>{(e.amount > 0 ? "+" + e.amount : e.amount) + " RVO"}</b></td>
                          </tr>)

                        })
                      }
                    </tbody>
                  </table>
                </div>
                {
                  generatedList && generatedList.map(e => {
                    return (
                      <div key={e.txid + "responsive"} className='main-divs-container'>
                        <div class="dropdown-divider"></div>
                        <div className='main-divs-content'>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-transfer-alt"></i> Type
                            </div>
                            <div style={{ width: "70%" }}>
                              {e.category == 'receive' ? <i className='bx bx-left-down-arrow-circle text-primary'></i> : <i className='bx bx-right-top-arrow-circle text-danger'></i>}
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-down-arrow-circle"></i> Address
                            </div>
                            <div style={{ width: "70%" }}>
                              <a target="_blank" href={props.nodeData[11].EXPLORER_URL + "address/" + e.address}>{e.address}</a>
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-time-five"></i> Time
                            </div>
                            <div style={{ width: "70%" }}>
                              {new Date((e.time) * 1000).toLocaleString("en-US", dateoptions)}
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-hash"></i> TX Id
                            </div>
                            <div style={{ width: "70%" }}>
                              <a target="_blank" href={props.nodeData[11].EXPLORER_URL + "tx/" + e.txid}>{e.txid}</a>
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="fas fa-coins"></i> Amount
                            </div>
                            <div style={{ width: "70%" }}>
                              <b>{(e.amount > 0 ? "+" + e.amount : e.amount) + " RVO"}</b>
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

export default WalletDataWidget;
