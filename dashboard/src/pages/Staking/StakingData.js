import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const StakingDataWidget = props => {
  

useEffect(()=>{        
  

})

    return (
        <React.Fragment>
            <Row>
                    <Col md={12} xl={12} className="">
                        <Col xl={12} >
                        <Card>
                            <CardBody>
<h4 className="card-title mb-2">My UTXOs</h4>
<hr />
                
<div class="table-responsive">
            <table class="table mb-0 table">
              <thead>
                <tr>
                  <th><i className="bx bx-hash"></i> TX id</th>
                  <th><i className="fas fa-coins"></i> Amount</th>
                  <th><i className="bx bx-down-arrow-circle"></i> Address</th>
                  <th><i className="bx bx-data"></i> Vout</th>
                  <th><i className="bx bx bx-label"></i> Label</th>
                  <th><i className="bx bx-check-shield"></i> Confirms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{borderBottom: "none"}} scope="row"><a href="https://mainnet.revo.network/tx/3c02d74714c908c28faf37ec1137caf483b328ba1d5eba814a251acca4e4164b">3c02d74714c908c28faf37ec1137caf483b328ba1d5eba814a251acca4e4164b</a></th>
                  <td style={{borderBottom: "none"}}>34.65 RVO</td>
                  <td style={{borderBottom: "none"}}>RNDTope6F6eRRtLWMRz87J3zDiB5txcriT</td>
                  <td style={{borderBottom: "none"}}>8</td>
                  <td style={{borderBottom: "none"}}>Label</td>
                  <td style={{borderBottom: "none"}}>127</td>
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

export default StakingDataWidget;
