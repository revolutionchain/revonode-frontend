import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import SalesAnalyticsChart from '../AllCharts/SalesAnalyticsChart';

const nodeInfo = [
    {
        title: "Client",
        icon: "far fa-id-card text-info",
        value: ""
    },
    {
        title: "Protocol",
        icon: "bx bx-transfer text-info",
        value: ""
    },
    {
        title: "Port",
        icon: "bx bx-wifi text-info",
        value: ""
    },
    {
        title: "Services",
        icon: "fas fa-bullhorn text-info",
        value: ""
    },
    {
        title: "Uptime",
        icon: "mdi mdi-clock-time-nine-outline text-info",
        value: ""
    },
    {
        title: "Node Time",
        icon: "mdi mdi-clock-time-nine-outline text-info",
        value: ""
    },
    {
        title: "IPv4",
        icon: "mdi mdi-checkbox-marked-outline text-primary",
        value: ""
    },
    {
        title: "IPv6",
        icon: "mdi mdi-checkbox-marked-outline text-primary",
        value: ""
    },
    {
        title: "i2p",
        icon: "mdi mdi-checkbox-marked-outline text-info",
        value: ""
    },
    {
        title: "Tor",
        icon: "mdi mdi-checkbox-blank-outline text-info",
        value: ""
    },
    {
        title: "Pruning Mode",
        icon: "mdi mdi-checkbox-blank-outline text-info",
        value: ""
    },
    {
        title: "Block Only Mode",
        icon: "mdi mdi-checkbox-blank-outline text-info",
        value: ""
    },
    {
        title: "Mempool Limited",
        icon: "mdi mdi-checkbox-blank-outline text-info",
        value: ""
    },
    {
        title: "Traffic Limit Set",
        icon: "mdi mdi-checkbox-blank-outline text-info",
        value: ""
    }
]

const SalesAnalytics = props => {
    const [menu, setMenu] = useState(false);


    useEffect(() => {
        nodeInfo[0].value = (props.nodeData[4].subversion).split("(")[0].slice(1);
        nodeInfo[1].value = props.nodeData[4].protocolversion;
        nodeInfo[2].value = "6969";
        nodeInfo[3].value = <div>{
            props.nodeData[4].localservicesnames.map(e => {
                return (<button style={{fontSize: "10px"}} type="button" className="btn btn-light btn-sm">{e[0] + e.slice(1).toLowerCase().replace("_", " ")}</button>)
            }
            )}</div>
        nodeInfo[4].value = props.nodeData[5];
        nodeInfo[5].value = props.nodeData[6];
        nodeInfo[6].value = props.nodeData[4].networks[0].reachable;
        nodeInfo[7].value = props.nodeData[4].networks[1].reachable;
        nodeInfo[8].value = props.nodeData[4].networks[3].reachable;
        nodeInfo[9].value = props.nodeData[4].networks[2].reachable;
        nodeInfo[10].value = (props.nodeData[7].pruned).toString();
        nodeInfo[11].value = "false";
        nodeInfo[12].value = "false";
        nodeInfo[13].value = "false";
    })


    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <CardBody>
                        <h4 className="card-title mb-4">Nodes</h4>

                        <div className="mt-1">
                            {props.nodeData.length && nodeInfo.map(e => {
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
                            {
                        /*
                            <ul className="list-inline main-chart mb-0">
                                <li className="list-inline-item chart-border-left me-0 border-0">
                                    <h3 className="text-info">$<span data-plugin="counterup">2,371</span><span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Income</span></h3>
                                </li>
                                <li className="list-inline-item chart-border-left me-0">
                                    <h3><span data-plugin="counterup">258</span><span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Sales</span>
                                    </h3>
                                </li>
                                <li className="list-inline-item chart-border-left me-0">
                                    <h3><span data-plugin="counterup">3.6</span>%<span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Conversation Ratio</span></h3>
                                </li>
                                <li className="list-inline-item chart-border-left me-0">
                                    <h3><span data-plugin="counterup">52</span>k<span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Users</span></h3>
                                </li>
                            </ul>*/}
                        </div>

                        <div className="mt-3">
                            {/*<SalesAnalyticsChart />*/}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default SalesAnalytics;