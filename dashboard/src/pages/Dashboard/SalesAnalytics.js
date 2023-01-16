import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import SalesAnalyticsChart from '../AllCharts/SalesAnalyticsChart';

const nodeInfo = [
    {
        title: "Client",
        value: ""
    },
    {
        title: "Protocol",
        value: ""
    },
    {
        title: "Port",
        value: ""
    },
    {
        title: "Services",
        value: ""
    },
    {
        title: "Uptime",
        value: ""
    },
    {
        title: "Node Time",
        value: ""
    },
    {
        title: "IPv4",
        value: ""
    },
    {
        title: "IPv6",
        value: ""
    },
    {
        title: "Tor",
        value: ""
    },
    {
        title: "Pruning Mode",
        value: ""
    },
    {
        title: "Block Only Mode",
        value: ""
    },
    {
        title: "Mempool Limited",
        value: ""
    },
    {
        title: "Traffic Limit Set",
        value: ""
    }
]

const SalesAnalytics = props => {
    const [menu, setMenu] = useState(false);

    
useEffect(()=>{        
    nodeInfo[0].value = (props.nodeData[4].subversion).split("(")[0].slice(1);
    nodeInfo[1].value = props.nodeData[4].protocolversion;
    nodeInfo[2].value = "6969";
    nodeInfo[3].value = props.nodeData[4].localservicesnames[0] + " " + props.nodeData[4].localservicesnames[1] + " " + props.nodeData[4].localservicesnames[2];
    nodeInfo[4].value = props.nodeData[5];
    nodeInfo[5].value = props.nodeData[6];
    nodeInfo[6].value = props.nodeData[4].networks[0].reachable;
    nodeInfo[7].value = props.nodeData[4].networks[1].reachable;
    nodeInfo[8].value = (props.nodeData[7].pruned).toString();
    nodeInfo[9].value = "false";
    nodeInfo[10].value = "false";
    nodeInfo[11].value = "false";
    nodeInfo[12].value = props.nodeData[0].chain;
    console.log(nodeInfo);
})


    return (
        <React.Fragment>
            <Col xl={8}>
                <Card className="card-height-100">
                    <CardBody>
                        <div className="float-end">
                            <Dropdown isOpen={menu}
                                toggle={() => setMenu(!menu)}>
                                <DropdownToggle className="dropdown-toggle text-reset" tag="a">
                                    <span className="fw-semibold">Sort By:</span> <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                    <DropdownItem>Yearly</DropdownItem>
                                    <DropdownItem>Monthly</DropdownItem>
                                    <DropdownItem>Weekly</DropdownItem>
                                    <DropdownItem>Today</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <h4 className="card-title mb-4">Nodes</h4>

                        <div className="mt-1">
                            {props.nodeData.length && nodeInfo.map(e => {
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
                            {
                        /*
                            <ul className="list-inline main-chart mb-0">
                                <li className="list-inline-item chart-border-left me-0 border-0">
                                    <h3 className="text-primary">$<span data-plugin="counterup">2,371</span><span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Income</span></h3>
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