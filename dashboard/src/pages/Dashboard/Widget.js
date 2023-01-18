import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const widget = [
    {
        id: 1,
        title: 'Total Connections',
        text: 'New Peers',
        count: 'value',
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
        text: 'Current Peers',
        count: '2568',
        dollor: true,
        icon: 'bx bxs-cloud-upload text-success',
        secondIcon: 'bx bx-chevron-right text-primary',
        percentage: '4.58%',
        color: 'danger',
        upArrow: false
    },
    {
        id: 3,
        title: 'Total Download Traffic (MB)',
        text: 'Current Peers',
        count: '258410',
        dollor: false,
        icon: 'bx bxs-cloud-download text-primary',
        secondIcon: 'bx bx-chevron-right text-primary',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    },
    {
        id: 4,
        title: 'Banned Peers',
        text: 'Last 24h',
        count: '9582',
        dollor: false,
        icon: 'mdi-cancel text-success',
        secondIcon: 'bx bx-plus-medical text-primary',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 5,
        title: 'TX in Mempool',
        text: 'Usage',
        count: '9582',
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
        text: 'Ago',
        count: '9582',
        dollor: false,
        icon: ' bx bxs-cube-alt text-success',
        secondIcon: 'mdi-clock-time-nine-outline text-primary',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
]


const Widget = props => {

    
useEffect(()=>{        
    widget[0].count = props.nodeData[0].connections.total;
    widget[1].count = props.nodeData[1].totalbytessent;
    widget[2].count = props.nodeData[1].totalbytesrecv;
    widget[3].count = props.nodeData[2].length > 0 ? props.nodeData[2].length : "0";
    widget[4].count = props.nodeData[3].size;
    widget[5].count = props.nodeData[0].headers;
})

const icons = []

    return (
        <React.Fragment>
            <Row>
                
                    <Col md={6} xl={12} className="d-flex">
                    {widget.map((widget, key) => (
                        <Col xl={2} key={key}>
                        <Card>
                            <CardBody>{/*
                                <div className="float-end">
                                    <div className="avatar-sm mx-auto mb-4">
                                        <span className="avatar-title rounded-circle bg-light font-size-24">
                                            <i className={widget.icon}></i>
                                        </span>
                                    </div>
                                </div>*/}
                                <div>
                                    <p style={{fontSize: '8px'}} className="text-muted text-uppercase "><i className={widget.icon}></i>{" " + widget.title}</p>
                                    <h4 className="mb-1 mt-1">
                                        {/*widget.dollor === true ? '' : ''*/}
                                        <span className="counter-value" data-target="58425">
                                            {widget.id == 2 || widget.id == 3 ? (widget.count/1000000000).toFixed(2) : widget.count}
                                        </span></h4>
                                </div>
                                <p className="text-muted mt-3 mb-0">
                                    <span className={"badge badge-soft-" + widget.color + " me-1"}>

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
