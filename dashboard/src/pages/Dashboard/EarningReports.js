import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { scaleLinear } from "d3-scale";


//import images 
import widget from '../../assets/images/widget-img.png';
import ApexRadial from '../AllCharts/ApexRadial';

const blockchainInfo = [
    {
        title: "Chain",
        icon: "mdi mdi-checkbox-multiple-blank-outline text-info",
        value: ""
    },
    {
        title: "Blocks Size",
        icon: "far fa-hdd text-info",
        value: ""
    },
    {
        title: "Blockchain Size",
        icon: "far fa-hdd text-info",
        value: ""
    },
    {
        title: "Difficulty",
        icon: "mdi mdi-key-variant text-info",
        value: ""
    },
    {
        title: "Mediantime",
        icon: "mdi mdi-clock-time-nine-outline text-info",
        value: ""
    },
]


function EarningReports(props) {

    const [peersState, setPeersState] = useState(false);
    const [totalPeers, setTotalPeers] = useState(false);
    const [randomColorsState, setRandomColorsState] = useState (false);

    const minValue = 0 // based on the data array above
    const maxValue = 1000 // based on the data array above
    
    const minColor = "#56aee2"
    const maxColor = "#5668e2"
  
    const customScale = scaleLinear()
      .domain([minValue,maxValue])
      .range([minColor,maxColor])

      function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      

    useEffect(() => {
        blockchainInfo[0].value = props.nodeData[0].chain;
        blockchainInfo[1].value = ((props.nodeData[7].size_on_disk) / 1000000000).toFixed(2) + "GB";
        blockchainInfo[2].value = (props.nodeData[0].difficulty.proof_of_stake).toFixed(3);
        blockchainInfo[3].value = props.nodeData[7].mediantime;
        let peersCount = [];
        let peers = 0;
        props.peersData.map(e => {
            let target = peersCount.find(elem => elem?.name == e.subver.split("/")[1]);
            if (target) {
                target.count = target.count + 1;
            } else {
                peersCount.push({ name: e.subver.split("/")[1], count: 1 });
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
        var randomColors = [];
        peersCount.map((e, i) => {
            function getRandomColor() {
                var num=Math.floor(Math.random() * 256);
                var color = [];
                color[0] = 86;
                color[1] = num;
                color[2] = 226;                

                if(randomColors.includes(color)){
                  return getRandomColor();
                }
                else{
                  let definedColor = rgbToHex(color[0], color[1], color[2]);
                  randomColors.push(definedColor)
                }                       
            }
            getRandomColor()
        })
        setPeersState(peersCount);
        setTotalPeers(peers);
        !randomColorsState && setRandomColorsState(randomColors);         
    })

    

    return (
        <React.Fragment>
            <Col xl={3}>
                <Card className="bg-pattern">
                    <CardBody>

                        <h4 className="card-title mb-3">Blockchain</h4>
                        <hr />
                        <div className="mt-1">
                            {props.nodeData.length && blockchainInfo.map(e => {
                                return (<div className="d-flex">
                                    <div style={{ width: "50%" }}>
                                        <i className={e.icon}></i>{" " + e.title}
                                    </div>
                                    <div style={{ width: "50%" }}>
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
                                        <i className="mdi mdi-bullhorn-outline text-info"></i>
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
                {/*
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
                    </div>}

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
                        {
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
                        </Row>}
                    </CardBody>
                </Card>*/
                }
            </Col>
            <Col xl={5}>
                <Card className="bg-pattern">
                    <CardBody>

                        <h4 className="card-title mb-6">Top Peer Clients</h4>
                        <hr />
                        <div className="mt-1 d-flex">
                            <div className='col-xl-6'>
                                {totalPeers && <PieChart
                                    animation
                                    animationDuration={500}
                                    animationEasing="ease-out"
                                    center={[50, 50]}
                                    data={peersState.map((e, i) => {
                                        /*[
                                            {
                                                color: "#5668e2",
                                                title: "One",
                                                value: 10,
                                            },
                                            {
                                                color: "#56e2cf",
                                                title: "Two",
                                                value: 15,
                                            },
                                            {
                                                color: "#56aee2",
                                                title: "Three",
                                                value: 20,
                                            },
                                        ]*/
                                        
                                        return  {
                                            color: randomColorsState[i],
                                            title: e.name,
                                            value: e.count
                                        }
                                        
                                    })}
                                    labelPosition={50}
                                    lengthAngle={360}
                                    lineWidth={50}
                                    paddingAngle={1}
                                    radius={50}
                                    startAngle={0}
                                    viewBoxSize={[100, 100]}
                                />}
                            </div>
                            {props.peersData.length && peersState.length && peersState?.map((e, i) => {
                                return (<div key={i} className="d-flex col-xl-6">
                                    <div style={{ width: "50%" }}>
                                        {e.name}
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        {totalPeers && totalPeers >= 1 ? e?.count / totalPeers * 100 + "%" : '100%'}
                                    </div>
                                </div>)
                            })
                            }
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default EarningReports;