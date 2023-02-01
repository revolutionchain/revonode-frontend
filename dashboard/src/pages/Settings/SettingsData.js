import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import Flag from 'react-world-flags'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const SettingsDataWidget = props => {

  const currentWifiData = {
    country: "",
    ssid: "",
    password: "",
    protocol: ""
  };
  
  const [currentWifiState, setCurrentWifiState] = useState(false);

useEffect(()=>{        
  if(props.wifiData){
    currentWifiData.country = (props.wifiData).replace("country=", "").slice(0,2);
    currentWifiData.ssid = (props.wifiData).split('"')[1];
    currentWifiData.password = (props.wifiData).split('"')[3];
    currentWifiData.protocol = (props.wifiData).split('key_mgmt=')[1].split('\n')[0];
    setCurrentWifiState(currentWifiData);
  }

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
                
          <div class="table-responsive">
            {props.wifiData && currentWifiState ? <div className='card'><div className='card-body'> <table class="table mb-0 table">
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
                      <td style={{borderBottom: "none"}}>{currentWifiState.ssid} </td>
                      <td style={{borderBottom: "none"}}>{currentWifiState.password}</td>
                      <td style={{borderBottom: "none"}}>{currentWifiState.protocol} </td>
                      <td style={{borderBottom: "none"}}><Flag code={currentWifiState.country} height="12" /> { " " + currentWifiState.country} </td>
                    </tr>
                
              
                }
              </tbody>
            </table></div></div> : <div className='card'><div className='card-body' style={{display: "flex", alignItems: "center", width: "100%", textAlign: "center"}}><p style={{margin: "auto"}}>You are not yet connected to a WiFi network.</p></div></div>
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
