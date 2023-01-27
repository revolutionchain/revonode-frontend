import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const TipsDataWidget = props => {

    
useEffect(()=>{        
})

const icons = []

    return (
        <React.Fragment>
            <Row>
                    <Col md={12} xl={12} className="">
                        <Col xl={12} >
                        <Card>
                            <CardBody>
<h4 className="card-title mb-2">Transactions</h4>
<hr />
                
          <div class="table-responsive">
            <table class="table mb-0 table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Sender</th>
                  <th>Receiver</th>
                  <th>Time</th>
                  <th>TX Id</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{borderBottom: "none"}} scope="row">incoming/outgoing/staked</th>
                  <td style={{borderBottom: "none"}}>RNDTope6F6eRRtLWMRz87J3zDiB5txcriT</td>
                  <td style={{borderBottom: "none"}}>RNDTope6F6eRRtLWMRz87J3zDiB5txcriT</td>                  
                  <td style={{borderBottom: "none"}}>2023-01-22 22:40:12 (0 m ago)</td>
                  <td style={{borderBottom: "none"}}><a href="https://mainnet.revo.network/tx/3c02d74714c908c28faf37ec1137caf483b328ba1d5eba814a251acca4e4164b">3c02d74714c908c28faf37ec1137caf483b328ba1d5eba814a251acca4e4164b</a></td>
                  <td style={{borderBottom: "none"}}>186.932 RVO</td>
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

export default TipsDataWidget;
