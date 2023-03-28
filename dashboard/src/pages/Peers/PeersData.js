import React, { useState } from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SweetAlert from "react-bootstrap-sweetalert"
import Flag from 'react-world-flags'
import addNodeImg from '../../assets/images/addnode.png';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const PeersDataWidget = props => {


  const [localPeersState, setLocalPeersState] = useState(false);
  const [externalPeersState, setExternalPeersState] = useState(false);
  const typedUser = useSelector(state => state.Login.userTyped);
  const [currentUrl, setCurrentUrl] = useState("");


  

  const [confirm_alert, setconfirm_alert] = useState(false)
  const [confirm_alert2, setconfirm_alert2] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)


  const [inputValue, setInputValue] = useState({
    ip: "",
  })

  useEffect(() => {
    let url;
    if ((window.location.hostname).includes("revo.host")) {
      url = `https://${window.location.hostname}/api`
    } else {
      url = `http://${window.location.hostname}:3001/api`
    }

    setCurrentUrl(url);
    let localPeers = [];
    let externalPeers = [];
    props.peersData.length && (props.ipLocationData).map((e, i) => {
      let currentPeerData = (props.peersData).find(j => j.addr == e.addr)

      if (currentPeerData?.network !== 'not_publicly_routable' && (currentPeerData?.addrlocal)?.split(":")[0] !== (currentPeerData?.addr)?.split(":")[0]) {
        externalPeers.push(e);
      } else if (currentPeerData?.network == "not_publicly_routable" || (currentPeerData?.addrlocal)?.split(":")[0] == (currentPeerData?.addr)?.split(":")[0]) {
        localPeers.push(e);
      }
    })
    setLocalPeersState(localPeers);
    setExternalPeersState(externalPeers);
  }, [props.peersData])


  
  function handleAddNodeButton() {
    let titleRes;
    let descriptionRes;
    let objData = {
      user: typedUser.user,
      pass: typedUser.pass,
      ipValue: inputValue.ip
    }
    
    fetch(`${currentUrl}/addnode`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.text())
      .then(res => {

        if (res == "ok") {
          titleRes = "Node Added Successfully!"
          descriptionRes = "Node added by IP successfully";
          setconfirm_alert(false);
          setsuccess_dlg(true);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
        }else if(res == "Error: Node already added"){
          titleRes = "Add Node Error!"
          descriptionRes = "Node already added!"
          setconfirm_alert(false);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
          return seterror_dlg(true)
        }
      })
  }


  
  function handleClearButton() {
    let titleRes;
    let descriptionRes;
    let objData = {
      user: typedUser.user,
      pass: typedUser.pass
    }
    
    fetch(`${currentUrl}/clearbanned`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.text())
      .then(res => {
        if (res == "ok") {
          titleRes = "Banned Peers Cleared!"
          descriptionRes = "All banned peers has been cleared successfully!";
          setconfirm_alert2(false);
          setsuccess_dlg(true);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
        }
      })
  }


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
                if(dynamic_title.includes("Add")){
                  setconfirm_alert(true);
                }else {
                  setconfirm_alert2(true);
                }
            }}
          >
            {dynamic_description}
          </SweetAlert>
        ) : null}
        <Col md={12} xl={12} className="">
          <Col xl={12} >
            {/*<button style={{ float: "right" }} type="button" id="sa-success" class="btn btn-secondary mx-2 mb-4">Add Node</button>*/}
            <div style={{ display: "inline-block", float: "right" }} className="m-2 mb-4">
              <Button
                color={"primary"}
                onClick={() => {
                  setconfirm_alert(true)
                }}
                id="sa-success"
                style={{ margin: "0" }}
              >
                Add Node
              </Button>
            </div>
            {confirm_alert ? (
              <SweetAlert
                title="Add a Node"
                showCancel
                confirmBtnText={"Add"}
                cancelBtnText={"Cancel"}
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => {
                  handleAddNodeButton();
                }}
                onCancel={() => {
                    setconfirm_alert(false);
                }}
              >
              <img style={{ display: "block", margin: "0 auto 10px auto", width: "70px", border: "2px solid", borderRadius: "50px", padding: "5px" }} src={addNodeImg}></img>
                {
                  <div>                
                    {<div style={{}}>
                      <div>
                        <label>Node IP</label>
                        <input
                          name="ip"
                          label="Node IP"
                          onChange={(e) => { setInputValue({ ...inputValue, ip: e.target.value }) }}
                          className="form-control"
                          placeholder="Enter a Node IP "
                          type="text"
                          style={{}}
                          required
                        ></input>
                      </div>
                      </div>}
                  </div> 
                  }
              </SweetAlert>
            ) : null}
            {/*<button style={{ float: "right" }} type="button" id="sa-success" class="btn btn-secondary  mx-2 mb-4">Clear Banned</button>*/}
            <div style={{ display: "inline-block", float: "right" }} className="m-2 mb-4">
              <Button
                color={"primary"}
                onClick={() => {
                  setconfirm_alert2(true)
                }}
                id="sa-success"
                style={{ margin: "0" }}
              >
                Clear Banned
              </Button>
            </div>
            {confirm_alert2 ? (
              <SweetAlert
                title="Clear Banned"
                showCancel
                warning
                confirmBtnText={"Confirm"}
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => {
                  handleClearButton();
                }}
                onCancel={() => {
                  setconfirm_alert2(false)
                }}
              >
                {/*<img style={{ display: "block", margin: "0 auto 10px auto", width: "70px", border: "2px solid", borderRadius: "50px" }} src={uxtoMergeImg}></img>*/}
                <p>{"Are you sure to clear all banned peers?"}</p>
              </SweetAlert>
            ) : null}
            <br></br>
            <br></br>
            <Card style={{ width: "100%" }}>
              <CardBody>
                <h4 className="card-title mb-2">External Peers - Connected</h4>
                <hr />

                <div class="table-responsive main-tables-container">
                  <table class="table mb-0 table">
                    <thead>
                      <tr>
                        <th><i className="bx bx-hash"></i></th>
                        <th><i className="bx bx-flag"></i> Address</th>
                        <th><i className="bx bx-world"></i> Country</th>
                        <th><i className="bx bx-server"></i> ISP</th>
                        <th><i className="bx bx-wifi"></i> Services</th>
                        <th><i className="bx bx-time-five"></i> Age</th>
                        <th><i className="bx bx-id-card"></i> Client</th>
                        <th><i className="bx bxs-cloud"></i> Traffic (MB)</th>
                      </tr>
                    </thead>
                    <tbody>{externalPeersState && externalPeersState.map((e, i) => {
                      let currentPeerData = (props.peersData).find(j => j.addr == e.addr)

                      if (currentPeerData && (currentPeerData.network !== 'not_publicly_routable' && (currentPeerData?.addrlocal)?.split(":")[0] !== (currentPeerData.addr).split(":")[0])) {
                        return (
                          <tr>
                            <th style={{ borderBottom: "none" }} scope="row">{i + 1}</th>
                            <td style={{ borderBottom: "none" }}><a target="_blank" href={"https://whois.domaintools.com/" + e.addr.split(":")[0]}>{e.addr.split(":")[0]}</a></td>
                            <td style={{ borderBottom: "none" }}><Flag code={e.country.iso_code} height="12" />  {" " + e.country.names.en} </td>
                            <td style={{ borderBottom: "none" }}>{e.traits.isp} </td>
                            <td style={{ borderBottom: "none" }}>{currentPeerData.servicesnames.map((j, k) => {
                              return (<button style={{ fontSize: "10px", marginLeft: "5px", marginBottom: "5px" }} type="button" className="btn btn-light btn-sm">{k < (currentPeerData.servicesnames).length - 1 ? j : j.replace("_", " ")}</button>)
                            }
                            )} </td>
                            <td style={{ borderBottom: "none" }}>{props.timePassed(currentPeerData.conntime)}</td>
                            <td style={{ borderBottom: "none" }}>{(currentPeerData.subver).replaceAll("/", "")} </td>
                            <td style={{ borderBottom: "none" }}>{((currentPeerData.bytessent + currentPeerData.bytesrecv) / 1048576).toFixed(2) + " MB"} </td>
                          </tr>
                        )
                      }
                    })
                    }
                    </tbody>
                  </table>
                </div>
                {
                  externalPeersState && externalPeersState.map((e, i) => {
                    let currentPeerData = (props.peersData).find(j => j.addr == e.addr)

                    if (currentPeerData && (currentPeerData.network !== 'not_publicly_routable' && (currentPeerData?.addrlocal)?.split(":")[0] !== (currentPeerData.addr).split(":")[0])) {
                      return (
                        <div key={e.txid + "responsive"} className='main-divs-container'>
                          <div class="dropdown-divider"></div>
                          <div className='main-divs-content'>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                #
                              </div>
                              <div style={{ width: "70%" }}>
                                {i + 1}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-flag"></i> Address
                              </div>
                              <div style={{ width: "70%" }}>
                                <a target="_blank" href={"https://whois.domaintools.com/" + e.addr.split(":")[0]}>{e.addr.split(":")[0]}</a>
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-world"></i> Country
                              </div>
                              <div style={{ width: "70%" }}>
                                <Flag code={e.country.iso_code} height="12" />  {" " + e.country.names.en}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-server"></i> ISP
                              </div>
                              <div style={{ width: "70%" }}>
                                {e.traits.isp}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-wifi"></i> Services
                              </div>
                              <div style={{ width: "70%" }}>
                                {currentPeerData.servicesnames.map((j, k) => {
                                  return (<button style={{ fontSize: "10px", marginLeft: "5px", marginBottom: "5px" }} type="button" className="btn btn-light btn-sm">{k < (currentPeerData.servicesnames).length - 1 ? j : j.replace("_", " ")}</button>)
                                }
                                )}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-time-five"></i> Age
                              </div>
                              <div style={{ width: "70%" }}>
                                {props.timePassed(currentPeerData.conntime)}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-id-card"></i> Client
                              </div>
                              <div style={{ width: "70%" }} >
                                {(currentPeerData.subver).replaceAll("/", "")}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bxs-cloud"></i> Traffic (MB)
                              </div>
                              <div style={{ width: "70%" }} >
                                {((currentPeerData.bytessent + currentPeerData.bytesrecv) / 1048576).toFixed(2) + " MB"}
                              </div>
                            </div>
                          </div>
                        </div>)
                    }
                  })}
                <br></br>
                <h4 className="card-title mb-2">Local Peers - Connected</h4>
                <hr />
                <div class="table-responsive main-tables-container">
                  <table class="table mb-0 table">
                    <thead>
                      <tr>
                        <th><i className="bx bx-hash"></i></th>
                        <th><i className="bx bx-flag"></i> Address</th>
                        <th><i className="bx bx-world"></i> Country</th>
                        <th><i className="bx bx-server"></i> ISP</th>
                        <th><i className="bx bx-wifi"></i> Services</th>
                        <th><i className="bx bx-time-five"></i> Age</th>
                        <th><i className="bx bx-id-card"></i> Client</th>
                        <th><i className="bx bxs-cloud"></i> Traffic (MB)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        localPeersState && localPeersState.map((e, i) => {
                          let currentPeerData = (props.peersData).find(j => j.addr == e.addr);
                          if (currentPeerData && (currentPeerData.network == "not_publicly_routable" || (currentPeerData?.addrlocal).split(":")[0] == (currentPeerData.addr).split(":")[0])) {
                            return (
                              <tr>
                                <th style={{ borderBottom: "none" }} scope="row">{i + 1}</th>
                                <td style={{ borderBottom: "none" }}>{(currentPeerData?.addrlocal)?.split(":")[0] == (currentPeerData.addr).split(":")[0] ? currentPeerData.addrbind.split(":")[0] : currentPeerData.addr.split(":")[0]} </td>
                                <td style={{ borderBottom: "none" }}><Flag code={e.country.iso_code} height="12" />  {" " + e.country.names.en}  </td>
                                <td style={{ borderBottom: "none" }}>{e.traits.isp}</td>
                                <td style={{ borderBottom: "none" }}>{currentPeerData.servicesnames.map((j, k) => {
                                  return (<button style={{ fontSize: "10px", marginLeft: "5px", marginBottom: "5px" }} type="button" className="btn btn-light btn-sm">{k < (currentPeerData.servicesnames).length - 1 ? j : j.replace("_", " ")}</button>)
                                })}</td>
                                <td style={{ borderBottom: "none" }}>{props.timePassed(currentPeerData.conntime)}</td>
                                <td style={{ borderBottom: "none" }}>{(currentPeerData.subver).replaceAll("/", "")}</td>
                                <td style={{ borderBottom: "none" }}>{((currentPeerData.bytessent + currentPeerData.bytesrecv) / 1048576).toFixed(2) + " MB"}</td>
                              </tr>
                            )
                          }
                        })
                      }
                    </tbody>
                  </table>
                </div>
                {
                  localPeersState && localPeersState.map((e, i) => {
                    let currentPeerData = (props.peersData).find(j => j.addr == e.addr);
                    if (currentPeerData && (currentPeerData.network == "not_publicly_routable" || (currentPeerData?.addrlocal).split(":")[0] == (currentPeerData.addr).split(":")[0])) {
                      return (
                        <div key={e.txid + "responsive"} className='main-divs-container'>
                          <div class="dropdown-divider"></div>
                          <div className='main-divs-content'>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                #
                              </div>
                              <div style={{ width: "70%" }}>
                                {i + 1}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-flag"></i> Address
                              </div>
                              <div style={{ width: "70%" }}>
                                {(currentPeerData?.addrlocal)?.split(":")[0] == (currentPeerData.addr).split(":")[0] ? currentPeerData.addrbind.split(":")[0] : currentPeerData.addr.split(":")[0]}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-world"></i> Country
                              </div>
                              <div style={{ width: "70%" }}>
                                <Flag code={e.country.iso_code} height="12" />  {" " + e.country.names.en}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-server"></i> ISP
                              </div>
                              <div style={{ width: "70%" }}>
                                {e.traits.isp}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-wifi"></i> Services
                              </div>
                              <div style={{ width: "70%" }}>
                                {currentPeerData.servicesnames.map((j, k) => {
                                  return (<button style={{ fontSize: "10px", marginLeft: "5px", marginBottom: "5px" }} type="button" className="btn btn-light btn-sm">{k < (currentPeerData.servicesnames).length - 1 ? j : j.replace("_", " ")}</button>)
                                }
                                )}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-time-five"></i> Age
                              </div>
                              <div style={{ width: "70%" }}>
                                {props.timePassed(currentPeerData.conntime)}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bx-id-card"></i> Client
                              </div>
                              <div style={{ width: "70%" }} >
                                {(currentPeerData.subver).replaceAll("/", "")}
                              </div>
                            </div>
                            <div style={{ display: "flex", width: "100%" }}>
                              <div style={{ width: "30%" }}>
                                <i className="bx bxs-cloud"></i> Traffic (MB)
                              </div>
                              <div style={{ width: "70%" }} >
                                {((currentPeerData.bytessent + currentPeerData.bytesrecv) / 1048576).toFixed(2) + " MB"}
                              </div>
                            </div>
                          </div>
                        </div>)
                    }
                  })}
              </CardBody>
            </Card>
          </Col>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default PeersDataWidget;
