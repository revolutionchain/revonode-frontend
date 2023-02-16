import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


const BlocksDataWidget = props => {


  useEffect(() => {
  }, [])

  return (
    <React.Fragment>
      <Row>
        <Col md={12} xl={12} className="">
          <Col xl={12} >
            <Card>
              <CardBody>
                <h4 className="card-title mb-2">Blocks - Synced</h4>
                <hr />

                <div class="table-responsive main-tables-container">
                  <table class="table mb-0 table">
                    <thead>
                      <tr>
                        <th><i className="bx bxs-cube"></i> Block</th>
                        <th><i className="bx bx-hash"></i> Hash</th>
                        <th><i className="bx bx-time-five"></i> Time</th>
                        <th><i className="mdi mdi-weight"></i> Size (Bytes)</th>
                        <th><i className="bx bx-transfer-alt"></i> TXs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        props.lastestBlocks && (props.lastestBlocks).map(e => {
                          return (
                            <tr key={e.hash}>
                              <th style={{ borderBottom: "none" }} scope="row">{e.height} </th>
                              <td style={{ borderBottom: "none" }}><a target="_blank" href={props.nodeData[11].EXPLORER_URL + "block/" + e.hash}>{e.hash} </a></td>
                              <td style={{ borderBottom: "none" }}>{props.farAway(e.time)} ago</td>
                              <td style={{ borderBottom: "none" }}>{e.size} </td>
                              <td style={{ borderBottom: "none" }}>{(e.tx).length} </td>
                            </tr>)
                        })
                      }
                    </tbody>
                  </table>
                </div>{
                  props.lastestBlocks && (props.lastestBlocks).map(e => {
                    return (
                      <div key={e.txid + "responsive"} className='main-divs-container'>
                        <div class="dropdown-divider"></div>
                        <div className='main-divs-content'>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bxs-cube"></i> Block
                            </div>
                            <div style={{ width: "70%" }}>
                              {e.height}
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-hash"></i> Hash
                            </div>
                            <div style={{ width: "70%" }}>
                              <a target="_blank" href={props.nodeData[11].EXPLORER_URL + "block/" + e.hash}>{e.hash} </a>
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-time-five"></i> Time
                            </div>
                            <div style={{ width: "70%" }}>
                              {props.farAway(e.time)} ago
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="mdi mdi-weight"></i> Size (Bytes)
                            </div>
                            <div style={{ width: "70%" }}>
                              {e.size}
                            </div>
                          </div>
                          <div style={{ display: "flex", width: "100%" }}>
                            <div style={{ width: "30%" }}>
                              <i className="bx bx-transfer-alt"></i> TXs
                            </div>
                            <div style={{ width: "70%" }}>
                              {(e.tx).length}
                            </div>
                          </div>
                        </div>
                      </div>)
                  })}
              </CardBody>
            </Card>
          </Col>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default BlocksDataWidget;
