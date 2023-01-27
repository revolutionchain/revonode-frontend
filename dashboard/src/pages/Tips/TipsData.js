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
        <h4 className="card-title mb-2">Most useful tips for your node</h4>
        <hr />
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Backup your wallet!</h4>
              <p class="card-title-desc">
              Backing up your Revo blockchain wallet is essential because it allows you to <b>restore your wallet</b> in case of any issues or hardware failures. <br></br>
              The backup file, named <b>wallet.dat</b>, contains all of the information needed to access your funds and transactions on the Revo network. Your file is encrypted with the wallet password you choosed during the node installation wizard. Without the password, you will not be able to access your funds. <br></br>
              It's important to note that the only way to restore a wallet without the encryption password is by having the address private key. <br></br>
              Without a backup, you risk losing access to your funds <b>permanently</b> if your wallet node becomes broken or corrupt. By regularly creating and securely storing a backup of your wallet.dat file, you can ensure that your funds will always be safe and accessible. It is highly recommended to backup your wallet.dat file after every transaction and store it in a secure location.
              </p>
              <a href="/backup">Backup my wallet!</a>              
            </div>
          </div>
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
