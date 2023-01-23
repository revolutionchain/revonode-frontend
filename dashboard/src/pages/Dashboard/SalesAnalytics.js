import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col } from 'reactstrap';

const nodeInfo = [
    {
        title: "Name",
        icon: "far fa-id-card text-info",
        value: ""
    }, {
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
        nodeInfo[0].value = (props.nodeData[4].subversion).split("(")[1].slice(0,(props.nodeData[4].subversion).length - 1).slice(0,-2)
        nodeInfo[1].value = (props.nodeData[4].subversion).split("(")[0].slice(1);
        nodeInfo[2].value = props.nodeData[4].protocolversion;
        nodeInfo[3].value = "6969";
        nodeInfo[4].value = <div>{
            props.nodeData[4].localservicesnames.map(e => {
                return (<button style={{ fontSize: "10px", marginLeft: "5px", marginBottom: "5px" }} type="button" className="btn btn-light btn-sm">{e[0] + e.slice(1).toLowerCase().replace("_", " ")}</button>)
            }
            )}</div>
        nodeInfo[5].value = props.secondsToString(props.nodeData[5]);
        nodeInfo[6].value = props.nodeData[6];
        nodeInfo[7].value = props.nodeData[4].networks[0].reachable;
        nodeInfo[8].value = props.nodeData[4].networks[1].reachable;
        nodeInfo[9].value = props.nodeData[4].networks[3].reachable;
        nodeInfo[10].value = "No"
        nodeInfo[11].value = (props.nodeData[7].pruned).toString();
        nodeInfo[12].value = "No";
        nodeInfo[13].value = "No";
        nodeInfo[14].value = "No";
    })


    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <CardBody>
                        <h4 className="card-title mb-2">Node</h4>
                        <hr />
                        <div className="mt-1">
                            {props.nodeData.length && nodeInfo.map(e => {
                                return (<div className="d-flex mb-2">
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

                        <div className="mt-3">
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default SalesAnalytics;