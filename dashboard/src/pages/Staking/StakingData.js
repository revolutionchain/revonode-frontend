import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const StakingDataWidget = props => {
  
  const [orderedState, setOrderedState] = useState(false);

useEffect(()=>{        
  let orderedList = props.listunspentState;
  
  orderedList.sort(function (a, b) {
    if (a.confirmations > b.confirmations) {
        return 1;
    }
    if (a.confirmations < b.confirmations) {
        return -1;
    }
    return 0;
});

setOrderedState(orderedList);

},[props.listunspentState])

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
                {
                  (props.listunspentState).map(e => {
                    return (
                      <tr key={e.txid} >
                        <th style={{borderBottom: "none"}} scope="row"><a href={`https://testnet.revo.network/tx/${e.txid}`}>{e.txid} </a></th>
                        <td style={{borderBottom: "none"}}>{e.amount + " RVO"}</td>
                        <td style={{borderBottom: "none"}}>{e.address}</td>
                        <td style={{borderBottom: "none"}}>{e.vout}</td>
                        <td style={{borderBottom: "none"}}>{e.label} </td>
                        <td style={{borderBottom: "none"}}>{e.confirmations} </td>
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

export default StakingDataWidget;
