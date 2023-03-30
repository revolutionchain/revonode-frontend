import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"



const Widget = props => {

    const [ widgetState, setWidgetState ] = useState(false);
useEffect(()=>{        
    
    const widget = [
        {
            id: 1,
            title: 'Balance',
            text: '',
            count: '0',
            dollor: true,
            icon: 'bx bx-wallet text-primary',
            secondIcon: '',
            percentage: '2.65%',
            color: 'success',
            upArrow: true
        },
        {
            id: 2,
            title: 'Unconfirmed',
            text: '',
            count: '0',
            dollor: true,
            icon: 'bx bxs-time-five text-primary',
            secondIcon: '',
            percentage: '4.58%',
            color: 'danger',
            upArrow: false
        },
        {
            id: 3,
            title: 'Immature',
            text: '',
            count: '0',
            dollor: false,
            icon: 'bx bx-left-down-arrow-circle text-primary',
            secondIcon: '',
            percentage: '14.33%',
            color: 'success',
            upArrow: true
        },
        {
            id: 4,
            title: 'Staking',
            text: '',
            count: '0',
            dollor: false,
            icon: 'mdi mdi-pickaxe text-primary',
            secondIcon: '',
            percentage: '0.55%',
            color: 'warning',
            upArrow: true
        },
        {
            id: 5,
            title: 'Wallet Version',
            text: '',
            count: '0',
            dollor: false,
            icon: 'mdi mdi-apple-icloud text-primary',
            secondIcon: '',
            percentage: '0.55%',
            color: 'warning',
            upArrow: true
        },
        {
            id: 6,
            title: 'TX Count',
            text: '',
            count: '0',
            dollor: false,
            icon: 'mdi mdi-database text-primary',
            secondIcon: '',
            percentage: '0.55%',
            color: 'warning',
            upArrow: true
        }
    ]
    widget[0].count = (props.nodeData[9].balance).toFixed(8) + " RVO"
    widget[1].count = (props.nodeData[9].unconfirmed_balance).toFixed(8) + " RVO"
    widget[2].count = (props.nodeData[9].immature_balance).toFixed(8) + " RVO"
    widget[3].count = (props.nodeData[9].stake).toFixed(8) + " RVO"
    widget[4].count = props.nodeData[9].walletversion
    widget[5].count = props.nodeData[9].txcount;
    setWidgetState(widget);
},[props.nodeData])

    return (
        <React.Fragment>
            <Row>                
                    <Col md={12} xl={12} className="d-flex flex-wrap">
                    {widgetState &&  widgetState.map((widget, key) => (
                        <Col xs={12}  sm={6} md={2} xl={2} key={key}>
                        <Card style={{minHeight: "100px"}}>
                            <CardBody>{/*
                                <div className="float-end">
                                    <div className="avatar-sm mx-auto mb-4">
                                        <span className="avatar-title rounded-circle bg-light font-size-24">
                                            <i className={widget.icon}></i>
                                        </span>
                                    </div>
                                </div>*/}
                                <div>
                                    <p style={{fontSize: '14px'}} className="text-muted text-uppercase p-title"><i className={widget.icon}></i>{" " + widget.title}</p>
                                </div>
                                    <h4 style={{position: "absolute", top: "0", height: "100%", display: "flex", alignItems: "center", fontSize: "18px" }} className="mb-1 mt-3">
                                        {/*widget.dollor === true ? '' : ''*/}
                                        <span className="counter-value" data-target="58425">
                                            {widget.count}
                                        </span></h4>
                                <p className="text-muted mt-3 mb-0">
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
