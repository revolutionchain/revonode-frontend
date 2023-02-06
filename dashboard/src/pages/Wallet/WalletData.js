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
                        <button style={{float: "right"}} type="button" id="sa-success" class="btn btn-secondary  mx-2 mb-4">Send</button>
                        <br></br>
                        <br></br>
                        <Card style={{width: "100%"}}>
                            <CardBody>
<h4 className="card-title mb-2">Most Recent Transactions</h4>
<hr />
                
          <div class="table-responsive">
            <table class="table mb-0 table">
              <thead>
                <tr>
                  <th><i className="bx bx-transfer-alt"></i> Type</th>
                  <th><i className="bx bx-down-arrow-circle"></i> Address</th>
                  <th><i className="bx bx-time-five"></i> Time</th>
                  <th><i className="bx bx-hash"></i> TX Id</th>
                  <th><i className="fas fa-coins"></i> Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  (props.listtransactions).filter(e => !e?.generated).map(e=> {
                    return (<tr>
                      <th style={{borderBottom: "none"}} scope="row">{ e.category == 'receive' ? <i className='bx bx-left-down-arrow-circle text-primary'></i> : <i className='bx bx-right-top-arrow-circle text-danger'></i> }</th>
                      <td style={{borderBottom: "none"}}><a target="_blank" href={"https://testnet.revo.network/address/" + e.address}>{e.address}</a></td>             
                      <td style={{borderBottom: "none"}}>{ new Date((e.time)*1000).toLocaleString("en-US",dateoptions)}</td>
                      <td style={{borderBottom: "none"}}><a target="_blank" href={"https://testnet.revo.network/tx/" + e.txid}>{e.txid}</a></td>
                      <td style={{borderBottom: "none"}}><b>{(e.amount > 0 ? "+" + e.amount : e.amount) + " RVO"}</b></td>
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
