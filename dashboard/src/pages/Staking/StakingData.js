import React from 'react';
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
                  <th>TX Id</th>
                  <th>Amount</th>
                  <th>Address</th>
                  <th>Vout</th>
                  <th>Label</th>
                  <th>Confirms</th>
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
