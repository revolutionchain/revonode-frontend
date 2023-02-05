import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const WalletDataWidget = props => {

    
useEffect(()=>{        

},[])


const dateoptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'CET' };

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
                  <th><i className="bx bx-transfer-alt"></i> Type</th>
                  <th><i className="bx bx-right-top-arrow-circle"></i> Sender</th>
                  <th><i className="bx bx-down-arrow-circle"></i> Receiver</th>
                  <th><i className="bx bx-time-five"></i> Time</th>
                  <th><i className="bx bx-hash"></i> TX Id</th>
                  <th><i className="fas fa-coins"></i> Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  (props.listtransactions).map(e=> {
                    return (<tr>
                      <th style={{borderBottom: "none"}} scope="row">{e?.generated ? "Staked" : e.category == 'receive' ? "Incoming" : "Outgoing"}</th>
                      <td style={{borderBottom: "none"}}>{e?.generated ? "Coinstake" : e.category == 'receive' ? e.address : props.walletAddress } </td>
                      <td style={{borderBottom: "none"}}>{e.category == 'receive' || e.category == 'generated' ? props.walletAddress : e.address} </td>                  
                      <td style={{borderBottom: "none"}}>{ new Date((e.time)*1000).toLocaleString("en-US",dateoptions)}</td>
                      <td style={{borderBottom: "none"}}><a href={"https://testnet.revo.network/tx/" + e.txid}>{e.txid}</a></td>
                      <td style={{borderBottom: "none"}}>{e.amount + " RVO"}</td>
                    </tr>)

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

export default WalletDataWidget;
