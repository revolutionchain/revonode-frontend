import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const widget = [
    {
        id: 1,
        title: 'Total Connections',
        text: '0 New Peers',
        count: '0',
        dollor: true,
        icon: 'bx bxs-user text-primary',
        secondIcon: 'bx bx-plus-medical text-primary',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Total Upload Traffic (GB)',
        text: '0 GB Current Peers',
        count: '0',
        dollor: true,
        icon: 'bx bxs-cloud-upload text-success',
        secondIcon: 'bx bx-chevron-right text-info',
        percentage: '4.58%',
        color: 'danger',
        upArrow: false
    },
    {
        id: 3,
        title: 'Total Download Traffic (GB)',
        text: '0 GB Current Peers',
        count: '0',
        dollor: false,
        icon: 'bx bxs-cloud-download text-primary',
        secondIcon: 'bx bx-chevron-right text-info',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    },
    {
        id: 4,
        title: 'Banned Peers',
        text: 'Last 24h',
        count: '0',
        dollor: false,
        icon: 'bx bx-error-alt text-success',
        secondIcon: 'bx bx-plus-medical text-danger',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 5,
        title: 'TX in Mempool',
        text: '0% Usage',
        count: '0',
        dollor: false,
        icon: 'bx bxs-data text-success',
        secondIcon: 'dripicons-battery-low text-primary',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 6,
        title: 'Lastest Block',
        text: 'm ago',
        count: '0',
        dollor: false,
        icon: ' bx bxs-cube-alt text-warning',
        secondIcon: 'mdi mdi-clock-time-nine-outline text-info',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
]


const Widget = props => {

    const [ widgetState, setWidgetState ] = useState(false);

    
useEffect(()=>{        
    let totalBytesSent = 0;
    let totalBytesRecv = 0;
    (props.peersData).map(e=> {
        totalBytesSent = totalBytesSent + e.bytessent;
        totalBytesRecv = totalBytesRecv + e.bytesrecv;
    })

    widget[0].count = props.nodeData[0].connections.total;
    widget[1].count = props.nodeData[1].totalbytessent;
    widget[1].text = (totalBytesSent/1000000000).toFixed(3) + " GB Upload of all peers";
    widget[2].count = props.nodeData[1].totalbytesrecv;
    widget[2].text = (totalBytesRecv/1000000000).toFixed(3) + " GB Download of all peers";
    widget[3].count = props.nodeData[2].length > 0 ? props.nodeData[2].length : "0";
    widget[4].count = props.nodeData[3].size;
    widget[5].count = props.nodeData[0].blocks;
    widget[5].text = props.farAway((props.nodeData[10].time)) + " ago";

    setWidgetState(widget);
},[props.nodeData])


return (
        <React.Fragment>
            <Row>
                
                    <Col md={12} xl={12} className="d-flex flex-wrap">
                    {widgetState && widgetState.map((widget, key) => (
                        <Col xs={12}  sm={6} md={2} xl={2} key={key}>
                        <Card>
                            <CardBody>
                                <div>
                                    <p style={{fontSize: '14px'}} className="text-muted text-uppercase p-title"><i className={widget.icon}></i>{" " + widget.title}</p>
                                </div>
                                    <h4  style={{position: "absolute", top: "0", height: "100%", position: "absolute", alignItems: "center"}} className="mb-1 mt-1">
                                        <span className="counter-value" data-target="58425">
                                            {widget.id == 2 || widget.id == 3 ? (widget.count/1073741824).toFixed(3) : widget.id == 6 ? <a target="_blank" href={"https://testnet.revo.network/block/" + widget.count}>{widget.count}</a> : widget.count }
                                        </span></h4>
                                <p style={{position: `absolute`, bottom: `0`}} className="text-muted mt-3 mb-4">
                                    <span className={""}>

                                        {/*widget.upArrow === true ?
                                            <i className="mdi mdi-arrow-up-bold me-1"></i> : <i className="mdi mdi-arrow-down-bold me-1"></i>
                                        */}
                                        <i className={widget.secondIcon}></i>{" " + widget.text}
                                    </span> 
                            </p>
                            </CardBody>
                        </Card>
                        </Col>
                ))}
                    </Col>
            </Row>
        </React.Fragment>
    );
}

export default Widget;
