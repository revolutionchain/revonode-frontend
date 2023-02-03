import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { Link } from "react-router-dom"

const TipsDataWidget = props => {

    
useEffect(()=>{        
},[])

const icons = []

    return (
        <React.Fragment>
            <Row>
                    <Col md={12} xl={12} className="">
                        <Col xl={12} >
                            <Card>
                                <CardBody>
                                  <div class="col-12">
                                  <h4 class="card-title"><i className="bx bx-wallet"></i> Backup your wallet!</h4>
                                    <div class="card">
                                      <div class="card-body">
                                        <p>
                                        Backing up your Revo blockchain wallet is essential because it allows you to <b>restore your wallet</b> in case of any issues or hardware failures. <br></br>
                                        The backup file, named <b>wallet.dat</b>, contains all of the information needed to access your funds and transactions on the Revo network. Your file is encrypted with the wallet password you choosed during the node installation wizard. Without the password, you will not be able to access your funds.
                                        It's important to note that the only way to restore a wallet without the encryption password is by having the address private key. <br></br>
                                        Without a backup, you risk losing access to your funds <b>permanently</b> if your wallet node becomes broken or corrupt. By regularly creating and securely storing a backup of your wallet.dat file, you can ensure that your funds will always be safe and accessible. It is highly recommended to backup your wallet.dat file after every transaction and store it in a secure location.
                                        </p>
                                        <Link to="/backup">Backup my wallet!</Link>              
                                      </div>
                                    </div>
                                  </div>
                                </CardBody>
                            </Card>      
                            <Card>
                                <CardBody>    
                                  <div class="col-12">
                                  <h4 class="card-title"><i className="bx bx-radar"></i> Become a Full Node!</h4>   
                                    <div class="card">                                                                       
                                      <div class="card-body">                                        
                                        <p>
                                        Having a <b>public IP</b> (ipv4) and opening <b>port 6969</b> on your router is crucial for optimizing your Revo blockchain node's performance. With a public IP, your node is able to connect to up to 1000 peers on the network, increasing the possibility of staking RVO coins more frequently and providing greater reliability. On the other hand, nodes that are behind a NAT or firewall, with no public IP and open port, will only be able to connect to a maximum of 8 nodes as a relay node: limiting their ability to participate in the network effectively and reduces the chances of staking new coins. <br></br>
                                        Opening port 6969 for your Revo node and having a public IP is always recommended. If you can't open your port manually, you can contact your Internet Service Provider (ISP) for assistance.
                                        </p>
                                        <p>Follow the link below for instructions or to check if your 6969 port is open:</p>
                                        <a target="_blank" href="https://www.yougetsignal.com/tools/open-ports/">Check if my port is open</a><br></br>
                                        <a target="_blank" href="https://letmegooglethat.com/?q=what+is+my+public+ip%3F&l=1">What is my public IP?</a><br></br>
                                        <a target="_blank" href="https://letmegooglethat.com/?q=how+to+open+ports+on+my+router">How to open ports on my router?</a><br></br>              
                                      </div>                                      
                                    </div>
                                  </div>
                                  </CardBody>
                            </Card>      
                            <Card>
                                <CardBody>
                                  <div class="col-12">
                                    <h4 class="card-title"><i className="mdi mdi-ethernet"></i> Ethernet or WiFi?</h4>                                     
                                    <div class="card">                                     
                                      <div class="card-body">                                        
                                        <p>
                                        A wired ethernet connection is generally considered to be more <b>reliable and faster</b> than a wireless connection such as WiFi. This is because wired connections are not subject to interference from other wireless devices or networks, and the signal is not subject to degradation over distance. Additionally, wired connections are typically faster than wireless connections, as they have a larger bandwidth and lower latency. This makes them more suitable for use in blockchain node server applications, where reliability and speed are important factors.
                                        </p>                                        
                                      </div>
                                    </div>
                                  </div>
                                  </CardBody>
                            </Card>      
                            <Card>
                                <CardBody>
                                  <div class="col-12">
                                    <h4 class="card-title"><i className="mdi mdi-pickaxe"></i> UTXO Splitting - Increase your mining efficency</h4> 
                                    <div class="card">                                     
                                      <div class="card-body">                                        
                                        <p>
                                        Splitting UTXOs, or "unspent transaction outputs," can increase the chances of staking more coins in a Proof of Stake (PoS) blockchain because it allows for a greater number of smaller stakes to be made rather than a single large stake. This is because in PoS, the probability of validating a block is proportional to the stake held by the validator. By splitting UTXOs into smaller amounts, an individual can spread their stake across multiple smaller stakes, increasing their overall chances of being selected to validate a block and earn rewards. Additionally, if the stake is spread among multiple UTXOs, it becomes harder for an attacker to target and compromise a specific stake.
                                        </p>
                                        <p>You can split your UTXOs in your <Link to="/staking">staking page</Link>.</p>
                                      </div>
                                    </div>
                                  </div>
                                  </CardBody>
                            </Card>      
                            <Card>
                                <CardBody>
                                  <div class="col-12">
                                    <h4 class="card-title"><i className="bx bxs-terminal"></i> Change SSH default password</h4> 
                                    <div class="card">                                     
                                      <div class="card-body">
                                        <p>
                                          It's suggested to change the default password as soon as possible to secure your Revo blockchain node and protect your data. Remember that if you lose the new SSH password, you will need to fully reflash the node operating system to regain access. Here's an how to:
                                        </p>
                                        <p>
                                        - Open a terminal or command prompt on your local machine (Windows/Linux/Mac)<br></br>
                                        - Use the <b>ssh</b> command to connect to the Revo node console. Default username is <i>revo</i> and the default password is <i>revo2023</i><br></br>
                                        - Once logged in, use the <b>passwd</b> command to change the default password. You will be prompted to enter the current password, and then asked to enter a new password<br></br>
                                        - After succesfully changing the password, use <b>exit</b> command to log out of the Revo node console.<br></br>
                                        - To login again, use the new SSH password.
                                        </p>
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
