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

<h4 className="card-title mb-2">Peers</h4>
<hr />
                
          <div class="table-responsive">
            <table class="table mb-0 table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>IP</th>
                  <th>Country</th>
                  <th>ISP</th>
                  <th>Services</th>
                  <th>Age(h)</th>
                  <th>Client</th>
                  <th>Traffic (MB)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>79</td>
                  <td>FLAG + Argentina</td>
                  <td>Telecom Argentina S</td>
                  <td>NETWORK - WITNESS - NETWORK LIMITED</td>
                  <td>36.6</td>
                  <td>Revo-Mercury 0.22.1(Node Name)</td>
                  <td>1.4</td>
                </tr>
              </tbody>
            </table>
          </div>
            </Row>
        </React.Fragment>
    );
}

export default PeersData;
