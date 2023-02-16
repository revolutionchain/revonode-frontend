import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const StakingDataWidget = props => {

  const [orderedState, setOrderedState] = useState(false);

  useEffect(() => {
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


  }, [props.listunspentState])



  return (
    <React.Fragment>
      <Row>
        <Col md={12} xl={12} className="">
          <Col xl={12} >
            <button style={{ float: "right" }} type="button" id="sa-success" class="btn btn-secondary  m-2 mb-4">UTXO Split</button>
            <button style={{ float: "right" }} type="button" id="sa-success" class="btn btn-secondary  m-2 mb-4">UTXO Merge</button>
            <br></br>
            <br></br>
            <Card style={{ width: "100%" }}>
              <CardBody>
                <h4 className="card-title mb-2">My UTXOs</h4>
                <hr />

                <div class="table-responsive main-tables-container">
                  <table class="table mb-0 table">
                    <thead>
                      <tr>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx-hash"></i> TX id</th>
                        <th style={{ paddingLeft: '0' }}><i className="fas fa-coins"></i> Amount</th>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx-down-arrow-circle"></i> Address</th>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx-data"></i> Vout</th>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx bx-label"></i> Label</th>
                        <th style={{ paddingLeft: '0' }}><i className="bx bx-check-shield"></i> Confirms</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        orderedState && (orderedState).map(e => {
                          return (
                            <tr key={e.txid} >
                              <th style={{ borderBottom: "none", paddingLeft: "0" }} scope="row"><a target="_blank" className={e.confirmations < 500 ? "text-muted" : ""} href={`${props.nodeData[11].EXPLORER_URL}tx/${e.txid}`}>{e.txid} </a></th>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }}><b>{e.amount + " RVO"}</b></td>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }}>{e.address}</td>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }}>{e.vout}</td>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }}>{e.label} </td>
                              <td style={{ borderBottom: "none", paddingLeft: "0" }} className={e.confirmations < 500 ? "text-warning" : "text-primary"}>{e.confirmations} </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>{
                  orderedState && (orderedState).map(e => {
                    return (
                <div key={e.txid + "responsive"} className='main-divs-container'>
                  <div className='main-divs-title'>
                    <h5><i className="bx bx-hash"></i> TX id</h5>
                    <span>{e.txid}</span>
                  </div>
                  <div className='main-divs-content'>
                    <div style={{display: "flex", width: "100%"}}>
                      <div style={{width: "30%"}}>
                        <i className="fas fa-coins"></i> Amount
                      </div>
                      <div style={{width: "70%"}}>
                        <b>{e.amount + " RVO"}</b>
                      </div>
                    </div>
                    <div style={{display: "flex", width: "100%"}}>
                      <div style={{width: "30%"}}>
                        <i className="bx bx-down-arrow-circle"></i> Address
                      </div>
                      <div style={{width: "70%"}}>
                      {e.address}
                      </div>
                    </div>
                    <div style={{display: "flex", width: "100%"}}>
                      <div style={{width: "30%"}}>
                        <i className="bx bx-data"></i> Vout
                      </div>
                      <div style={{width: "70%"}}>
                      {e.vout}
                      </div>
                    </div>
                    <div style={{display: "flex", width: "100%"}}>
                      <div style={{width: "30%"}}>
                        <i className="bx bx bx-label"></i> Label
                      </div>
                      <div style={{width: "70%"}}>
                      {e.label}
                      </div>
                    </div>
                    <div style={{display: "flex", width: "100%"}}>
                      <div style={{width: "30%"}}>
                        <i className="bx bx-check-shield"></i> Confirms
                      </div>
                      <div style={{width: "70%"}} className={e.confirmations < 500 ? "text-warning" : "text-primary"}>
                      {e.confirmations}
                      </div>
                    </div>
                  </div>
                </div>)})}
              </CardBody>
            </Card>
          </Col>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default StakingDataWidget;
