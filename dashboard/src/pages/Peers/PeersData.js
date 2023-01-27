import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import Flag from 'react-world-flags'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

function secondsToString(seconds) {
  var numyears = (Math.floor(seconds / 31536000)) > 0 ? ((Math.floor(seconds / 31536000)) + ((Math.floor(seconds / 31536000)) > 1 ? " years, " : " year, ")) : "" ;
  var numdays = Math.floor((seconds % 31536000) / 86400) > 0 ? (Math.floor((seconds % 31536000) / 86400) + (Math.floor((seconds % 31536000) / 86400) > 1 ? " days, " : " day, ")) : "" ;
  var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600) > 0 ? (Math.floor(((seconds % 31536000) % 86400) / 3600) + (Math.floor(((seconds % 31536000) % 86400) / 3600) > 1 ? " hours, " : " hour, ")) : "" ;
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) > 0 ? (Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) + ( Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) > 1 ? " minutes, " : " minute, ")) : "";
  var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
  let result =  numyears + numdays + numhours + numminutes + numseconds + " seconds"
  return result;

}

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
<h4 className="card-title mb-2">Peers - Connected</h4>
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
                return (
                    <tr>
                      <th style={{borderBottom: "none"}} scope="row">{i+1}</th>
                      <td style={{borderBottom: "none"}}>{e.addr.slice(0,-5)} </td>
                      <td style={{borderBottom: "none"}}><Flag code={e.country.iso_code} height="12" />  {" " + e.country.names.en} </td>
                      <td style={{borderBottom: "none"}}>{e.traits.isp} </td>
                      <td style={{borderBottom: "none"}}>{currentPeerData.servicesnames.map((j,k) => k < (currentPeerData.servicesnames).length - 1 ? j + " - " : j.replace("_", " ") )} </td>
                      <td style={{borderBottom: "none"}}>{secondsToString(currentPeerData.conntime)}</td>
                      <td style={{borderBottom: "none"}}>{(currentPeerData.subver).replaceAll("/", "")} </td>
                      <td style={{borderBottom: "none"}}>{((currentPeerData.bytessent + currentPeerData.bytesrecv) / 1048576).toFixed(2) + " MB"} </td>
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

export default PeersDataWidget;
