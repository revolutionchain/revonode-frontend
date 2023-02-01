import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const SettingsDataWidget = props => {

    
useEffect(()=>{        
})

    return (
        <React.Fragment>
            <Row>
                <Col md={12} xl={12} className="">
                  <Col xl={12} >
                  <Card>
                    <CardBody>
                      <div class="col-12">
<h4 className="card-title mb-2">Node Wifi Current Data</h4>
<hr />
                
          <div class="table-responsive">
            {!props.wifiData ? <table class="table mb-0 table">
              <thead>
                <tr>
                  <th><i className="bx bx-flag"></i> Wifi SSID</th>
                  <th><i className="bx bx-world"></i> Password</th>
                  <th><i className="bx bx-server"></i> Protocol</th>
                  <th><i className="bx bx-wifi"></i> Country</th>
                </tr>
              </thead>
              <tbody>{ 
                
               
                    <tr>
                      <td style={{borderBottom: "none"}}>{} </td>
                      <td style={{borderBottom: "none"}}>{/*<Flag code={e.country.iso_code} height="12" />  " " + e.country.names.en*/} </td>
                      <td style={{borderBottom: "none"}}>{} </td>
                      <td style={{borderBottom: "none"}}>{} </td>
                    </tr>
                
              
                }
              </tbody>
            </table> : <div style={{width: "100%", textAlign: "center"}}><p>You are not yet connected to a WiFi network.</p></div>
            }
          </div>
                        <h4 class="card-title"><i className="bx bx-wifi"></i>Node WiFi Settings</h4>
                        <p>Use this form to change your WiFi settings</p> 
                          <div class="card">                                     
                            <div class="card-body">
                            
                          </div>
                        </div>
                      </div> 
                    </CardBody>
                  </Card>
                  </Col>
              </Col>
            </Row>
        </React.Fragment>
    );
}

export default SettingsDataWidget;
