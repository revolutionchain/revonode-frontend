import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
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
                      <td style={{borderBottom: "none"}}>{e.addr} </td>
                      <td style={{borderBottom: "none"}}>{ e.country.names.en} </td>
                      <td style={{borderBottom: "none"}}>{e.traits.isp} </td>
                      <td style={{borderBottom: "none"}}>{currentPeerData.servicesnames.map((j,k) => k < (currentPeerData.servicesnames).length ? j + " - " : j )} </td>
                      <td style={{borderBottom: "none"}}>36.6</td>
                      <td style={{borderBottom: "none"}}>{(currentPeerData.subver).replaceAll("/", "")} </td>
                      <td style={{borderBottom: "none"}}>{currentPeerData.bytessent + currentPeerData.bytesrecv / 1000000000 + " GB"} </td>
                    </tr>
                )
              })
                }
                <tr>
                  <th style={{borderBottom: "none"}} scope="row">1</th>
                  <td style={{borderBottom: "none"}}>79</td>
                  <td style={{borderBottom: "none"}}>FLAG + Argentina</td>
                  <td style={{borderBottom: "none"}}>Telecom Argentina S</td>
                  <td style={{borderBottom: "none"}}>NETWORK - WITNESS - NETWORK LIMITED</td>
                  <td style={{borderBottom: "none"}}>36.6</td>
                  <td style={{borderBottom: "none"}}>Revo-Mercury 0.22.1(Node Name)</td>
                  <td style={{borderBottom: "none"}}>1.4</td>
                </tr>
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
