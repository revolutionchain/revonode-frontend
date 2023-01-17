import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { useEffect } from 'react';


//import images 
import widget from '../../assets/images/widget-img.png';
import ApexRadial from '../AllCharts/ApexRadial';

const blockchainInfo = [
    {
        title: "Chain",
        value: ""
    },
    {
        title: "Size",
        value: ""
    },
    {
        title: "Difficulty",
        value: ""
    },
    {
        title: "Mediantime",
        value: ""
    },
]


function EarningReports(props) {

    const [ peersState, setPeersState ] = useState(false);
    const [ totalPeers, setTotalPeers ] = useState(false);
    
useEffect(()=>{        
    blockchainInfo[0].value = props.nodeData[0].chain;
    blockchainInfo[1].value = ((props.nodeData[7].size_on_disk)/1000000000).toFixed(2) + "GB";
    blockchainInfo[2].value = (props.nodeData[0].difficulty.proof_of_stake).toFixed(3);
    blockchainInfo[3].value = props.nodeData[7].mediantime;
    let peersCount = [];
    let peers = 0;
    props.peersData.map(e => {
        let target = peersCount.find(elem => elem?.name == e.subver.split("(")[0].replaceAll("/", ""));
        if(target){
            target.count = target.count + 1;
        }else {
            peersCount.push({name: e.subver.split("(")[0].replaceAll("/", ""), count: 1});
        }
        peers = peers + 1;
    });    
    peersCount.sort(function (a, b) {
        if (a.count < b.count) {
          return 1;
        }
        if (a.count > b.count) {
          return -1;
        }
        return 0;
      });
    setPeersState(peersCount);
    setTotalPeers(peers);
})


    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="bg-pattern">
                    <CardBody>
                        
                    <h4 className="card-title mb-4">Blockchain</h4>
                        <div className="mt-1">
                            {props.nodeData.length && blockchainInfo.map(e => {
                                return (<div className="d-flex">
                                    <div style={{width: "50%"}}>
                                        {e.title}
                                    </div>
                                    <div style={{width: "50%"}}>
                                        {e?.value}
                                    </div>
                                </div>)
                            })
                            }
                        </div>
                        {/*<Row className="align-items-center">
                            <Col sm={8}>
                                <div className="avatar-xs mb-3">
                                    <span className="avatar-title rounded-circle bg-light font-size-24">
                                        <i className="mdi mdi-bullhorn-outline text-primary"></i>
                                    </span>
                                </div>
                                <p className="font-size-18">Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right"></i></p>
                                <div className="mt-4">
                                    <Link to="/pages-pricing" className="btn btn-success waves-effect waves-light">Upgrade Account!</Link>
                                </div>
                            </Col>
                            <div className="col-sm-4">
                                <div className="mt-4 mt-sm-0">
                                    <img src={widget} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </Row>*/}
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        {/*<div className="float-end">
                            <UncontrolledDropdown>
                                <DropdownToggle className="text-reset" tag="a" id="dropdownMenuButton2">
                                    <span className="fw-semibold">Report By:</span> <span className="text-muted">Monthly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>Yearly</DropdownItem>
                                    <DropdownItem>Monthly</DropdownItem>
                                    <DropdownItem>Weekly</DropdownItem>
                                    <DropdownItem>Today</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                    </div>*/}

                        <h4 className="card-title mb-4">Top Peer Clients</h4>
                        <div className="mt-1">
                            {props.peersData.length && peersState.length && peersState?.map((e, i) => {
                                return (<div key={i} className="d-flex">
                                    <div style={{width: "50%"}}>
                                        {e.name}
                                    </div>
                                    <div style={{width: "50%"}}>
                                        {totalPeers && totalPeers >= 1 ?  e?.count / totalPeers * 100 +  "%" : '100%'}
                                    </div>
                                </div>)
                            })
                            }
                        </div>
                        {/*
                        <Row>
                            <Col sm={6}>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <p className="text-muted mb-1">This Month</p>
                                        <h5 className="mt-0">$12,582<small className="badge badge-light-success font-13">+15%</small></h5>
                                    </Col>

                                    <Col xs={6}>
                                        <p className="text-muted mb-1">Last Month</p>
                                        <h5 className="mt-0">$98,741 <small className="badge badge-light-danger font-13">-5%</small></h5>
                                    </Col>
                                </Row>
                                <p className="text-muted"><span className="text-success me-1"> 12%<i className="mdi mdi-arrow-up"></i></span>From previous period</p>

                                <div className="mt-4">
                                    <Link to="#" className="btn btn-primary waves-effect waves-light btn-sm">Generate Reports <i className="mdi mdi-arrow-right ms-1"></i></Link>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="mt-4 mt-sm-0">
                                    <ApexRadial />
                                </div>
                            </Col>
                        </Row>*/}
                    </CardBody>
                </Card>

            </Col>
        </React.Fragment>
    );
}

export default EarningReports;