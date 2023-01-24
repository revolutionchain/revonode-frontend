import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const PeersData = props => {

    
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
<h4 className="card-title mb-2">Blocks - Synced</h4>
<hr />
                
          <div class="table-responsive">
            <table class="table mb-0 table">
              <thead>
                <tr>
                  <th>Block</th>
                  <th>Hash</th>
                  <th>Time</th>
                  <th>Size</th>
                  <th>Fees (RVO)</th>
                  <th>TXs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{borderBottom: "none"}} scope="row">274888</th>
                  <td style={{borderBottom: "none"}}><a href="https://mainnet.revo.network/block/b8e66f1aba990d8c25399fe8bb6a8b8b1fdb2996a08223a0339f76c5d7903b18">b8e66f1aba990d8c25399fe8bb6a8b8b1fdb2996a08223a0339f76c5d7903b18</a></td>
                  <td style={{borderBottom: "none"}}>2023-01-22 22:40:12 (0 m ago)</td>
                  <td style={{borderBottom: "none"}}>0.1</td>
                  <td style={{borderBottom: "none"}}>00001291</td>
                  <td style={{borderBottom: "none"}}>3</td>
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

export default PeersData;
