import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import Flag from 'react-world-flags'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const PeersDataWidget = props => {

    
useEffect(()=>{        
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
                  <th>ID</th>
                  <th>IP</th>
                  <th>Country</th>
                  <th>ISP</th>
                  <th>Services</th>
                  <th>Age(h)</th>
                  <th>Client</th>
                  <th>Traffic (MB)</th>
                </tr>
              </thead>
              <tbody>{ props.peersData.length && (props.ipLocationData).map((e,i) => {
                let currentPeerData = (props.peersData).find(j => j.addr == e.addr)
                
                if(currentPeerData.network !== 'not_publicly_routable'){
                return (
                    <tr>
                      <th style={{borderBottom: "none"}} scope="row">{i+1}</th>
                      <td style={{borderBottom: "none"}}>{e.addr.split(":")[0]} </td>
                      <td style={{borderBottom: "none"}}><Flag code={e.country.iso_code} height="12" />  {" " + e.country.names.en} </td>
                      <td style={{borderBottom: "none"}}>{e.traits.isp} </td>
                      <td style={{borderBottom: "none"}}>{currentPeerData.servicesnames.map((j,k) => k < (currentPeerData.servicesnames).length - 1 ? j + " - " : j.replace("_", " ") )} </td>
                      <td style={{borderBottom: "none"}}>{props.timePassed(currentPeerData.conntime)}</td>
                      <td style={{borderBottom: "none"}}>{(currentPeerData.subver).replaceAll("/", "")} </td>
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
                  <th>ID</th>
                  <th>IP</th>
                  <th>Country</th>
                  <th>ISP</th>
                  <th>Services</th>
                  <th>Age(h)</th>
                  <th>Client</th>
                  <th>Traffic (MB)</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.peersData.length && (props.ipLocationData).map((e, i) => {
                    let currentPeerData = (props.peersData).find(j => j.addr == e.addr);
                    if(!currentPeerData){
                      currentPeerData = (props.peersData).find(j => j.network == 'not_publicly_routable');
                      return (
                        <tr>
                          <th style={{borderBottom: "none"}} scope="row">{i+1}</th>
                          <td style={{borderBottom: "none"}}>{currentPeerData.addr} </td>
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
