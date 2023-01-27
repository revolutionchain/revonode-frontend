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
                                  <div class="col-12">
                                    <div class="card">
                                      <div class="card-body">
                                        <h4 class="card-title">Backup your wallet!</h4>
                                        <p class="card-title-desc">
                                        Backing up your Revo blockchain wallet is essential because it allows you to <b>restore your wallet</b> in case of any issues or hardware failures. <br></br>
                                        The backup file, named <b>wallet.dat</b>, contains all of the information needed to access your funds and transactions on the Revo network. Your file is encrypted with the wallet password you choosed during the node installation wizard. Without the password, you will not be able to access your funds.
                                        It's important to note that the only way to restore a wallet without the encryption password is by having the address private key. <br></br>
                                        Without a backup, you risk losing access to your funds <b>permanently</b> if your wallet node becomes broken or corrupt. By regularly creating and securely storing a backup of your wallet.dat file, you can ensure that your funds will always be safe and accessible. It is highly recommended to backup your wallet.dat file after every transaction and store it in a secure location.
                                        </p>
                                        <a href="/backup">Backup my wallet!</a>              
                                      </div>
                                      <br></br>
                                      <div class="card-body">
                                        <h4 class="card-title">Become a Full Node!</h4>
                                        <p class="card-title-desc">
                                        Having a <b>public IP</b> (ipv4) and opening <b>port 6969</b> on your router is crucial for optimizing your Revo blockchain node's performance. With a public IP, your node is able to connect to up to 1000 peers on the network, increasing the possibility of staking RVO coins more frequently and providing greater reliability. On the other hand, nodes that are behind a NAT or firewall, with no public IP and open port, will only be able to connect to a maximum of 8 nodes as a relay node: limiting their ability to participate in the network effectively and reduces the chances of staking new coins. <br></br>
                                        Opening port 6969 for your Revo node and having a public IP is always recommended. If you can't open your port manually, you can contact your Internet Service Provider (ISP) for assistance.
                                        </p>
                                        <p>Follow the link below for instructions or to check if your 6969 port is open:</p>
                                        <a target="_blank" href="https://www.yougetsignal.com/tools/open-ports/">Check if my port is open</a>
                                        <a target="_blank" href="https://letmegooglethat.com/?q=what+is+my+public+ip%3F&l=1">What is my public IP?</a>
                                        <a target="_blank" href="https://letmegooglethat.com/?q=how+to+open+ports+on+my+router">How to open ports on my router?</a>                 
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
