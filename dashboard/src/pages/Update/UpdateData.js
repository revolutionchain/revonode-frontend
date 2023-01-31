import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const UpdateDataWidget = props => {

    
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
                        <h4 class="card-title"><i className="bx bx-planet"></i>Update your Node</h4>
                        <p>Update your node</p> 
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

export default UpdateDataWidget;
