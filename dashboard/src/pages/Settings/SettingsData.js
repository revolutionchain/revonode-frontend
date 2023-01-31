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
                        <h4 class="card-title"><i className="bx bx-wifi"></i>Node WiFi Settings</h4>
                        <p>Use this form to change your WiFi settings</p> 
                          <div class="card">                                     
                            <div class="card-body">
                            <div class="react-switch-bg" style="height: 28px; width: 56px; margin: 0px; position: relative; background: rgb(2, 164, 153); border-radius: 14px; cursor: pointer; transition: background 0.25s ease 0s;"><div style="height: 28px; width: 30px; position: relative; opacity: 1; pointer-events: none; transition: opacity 0.25s ease 0s;"><div style="display: flex; justify-content: center; align-items: center; height: 100%; font-size: 12px; color: rgb(255, 255, 255); padding-right: 2px;"> Enable WiFi</div></div><div style="height: 28px; width: 30px; position: absolute; opacity: 0; right: 0px; top: 0px; pointer-events: none; transition: opacity 0.25s ease 0s;"><div style="display: flex; justify-content: center; align-items: center; height: 100%; font-size: 12px; color: rgb(255, 255, 255); padding-right: 2px;"> Disable WiFi</div></div></div>
                            
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
