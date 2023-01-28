import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import Flag from 'react-world-flags'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const PeersDataWidget = props => {


  const [ localPeersState, setLocalPeersState ] = useState(false);
  const [ externalPeersState, setExternalPeersState ] = useState(false);

    
useEffect(()=>{        
  let localPeers = [];
  let externalPeers = [];
  props.peersData.length && (props.ipLocationData).map((e,i) => {
  let currentPeerData = (props.peersData).find(j => j.addr == e.addr)
  
  if(currentPeerData.network !== 'not_publicly_routable' && (currentPeerData?.addrlocal)?.split(":")[0] !== (currentPeerData.addr).split(":")[0]){
    externalPeers.push(e);
  } else if(currentPeerData.network == "not_publicly_routable" || (currentPeerData?.addrlocal).split(":")[0] == (currentPeerData.addr).split(":")[0]){
    localPeers.push(e);
  }
})
setLocalPeersState(localPeers);
setExternalPeersState(externalPeers);
})


    return (
        <React.Fragment>
            <Row>
                    <Col md={12} xl={12} className="">
                        <Col xl={12} >
                        <Card>
                            <CardBody>
<h4 className="card-title mb-2">External Peers - Connected</h4>
<hr />
                
          <div class="table-responsive">
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
              <tbody>{ externalPeersState && externalPeersState.map((e,i) => {
                let currentPeerData = (props.peersData).find(j => j.addr == e.addr)
                
                if(currentPeerData.network !== 'not_publicly_routable' && (currentPeerData?.addrlocal)?.split(":")[0] !== (currentPeerData.addr).split(":")[0]){
                return (
                    <tr>
                      <th style={{borderBottom: "none"}} scope="row">{i+1}</th>
                      <td style={{borderBottom: "none"}}>{e.addr.split(":")[0]} </td>
                      <td style={{borderBottom: "none"}}><Flag code={e.country.iso_code} height="12" />  {" " + e.country.names.en} </td>
                      <td style={{borderBottom: "none"}}>{e.traits.isp} </td>
                      <td style={{borderBottom: "none"}}>{currentPeerData.servicesnames.map((j,k) => k < (currentPeerData.servicesnames).length - 1 ? j + " - " : j.replace("_", " ") )} </td>
                      <td style={{borderBottom: "none"}}>{props.timePassed(currentPeerData.conntime)}</td>
                      <td style={{borderBottom: "none"}}>{(currentPeerData.subver).replaceAll("/", "")} </td>

                      console.log(currentPeerData.bytessent + currentPeerData.bytesrecv);

                      <td style={{borderBottom: "none"}}>{((currentPeerData.bytessent + currentPeerData.bytesrecv) / 1048576).toFixed(2) + " MB"} </td>
                    </tr>
                )}
              })
                }
              </tbody>
            </table>
          </div>
          <br></br>
          <h4 className="card-title mb-2">Local Peers - Connected</h4>
          <hr />
          <div class="table-responsive">
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
                    if(currentPeerData.network == "not_publicly_routable" || (currentPeerData?.addrlocal).split(":")[0] == (currentPeerData.addr).split(":")[0]){
                      return (
                        <tr>
                          <th style={{borderBottom: "none"}} scope="row">{i+1}</th>
                          <td style={{borderBottom: "none"}}>{(currentPeerData?.addrlocal)?.split(":")[0] == (currentPeerData.addr).split(":")[0] ? currentPeerData.addrbind.split(":")[0] : currentPeerData.addr.split(":")[0]} </td>
                          <td style={{borderBottom: "none"}}><Flag code={e.country.iso_code} height="12" />  {" " + e.country.names.en}  </td>
                          <td style={{borderBottom: "none"}}>{e.traits.isp}</td>
                          <td style={{borderBottom: "none"}}>{currentPeerData.servicesnames.map((j,k) => k < (currentPeerData.servicesnames).length - 1 ? j + " - " : j.replace("_", " ") )}</td>
                          <td style={{borderBottom: "none"}}>{props.timePassed(currentPeerData.conntime)}</td>
                          <td style={{borderBottom: "none"}}>{(currentPeerData.subver).replaceAll("/", "")}</td>
                          <td style={{borderBottom: "none"}}>{((currentPeerData.bytessent + currentPeerData.bytesrecv) / 1048576).toFixed(2) + " MB"}</td>
                        </tr>                        
                      )
                    }
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

export default PeersDataWidget;
