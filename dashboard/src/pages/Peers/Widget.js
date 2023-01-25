import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const widget = [
    {
        id: 1,
        title: 'Total Peers',
        text: '0 New Peers',
        count: '0',
        dollor: true,
        icon: 'bx bxs-user text-secondary',
        secondIcon: 'bx bx-plus-medical text-primary',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Most Popular Client Version',
        text: '0 Peers',
        count: '0',
        dollor: true,
        icon: 'bx bxs-star text-warning',
        secondIcon: '',
        percentage: '4.58%',
        color: 'danger',
        upArrow: false
    },
    {
        id: 3,
        title: 'Most Popular Country',
        text: '0 Peers',
        count: '0',
        dollor: false,
        icon: 'bx bx-world text-secondary',
        secondIcon: '',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    },
    {
        id: 4,
        title: 'Most Populars ISP',
        text: '0 Peers',
        count: '0',
        dollor: false,
        icon: 'mdi mdi-server text-danger',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 5,
        title: 'Total Traffic (GB)',
        text: 'Upload',
        count: '0',
        dollor: false,
        icon: 'mdi mdi-apple-icloud text-secondary',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 6,
        title: 'Traffic by Current Peers (GB)',
        text: 'of toal Traffic',
        count: '0',
        dollor: false,
        icon: 'mdi mdi-apple-icloud text-info',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
]


const Widget = props => {

    
useEffect(()=>{        
    widget[0].count = ""
    widget[1].count = ""
    widget[2].count = ""
    widget[3].count = ""
    widget[4].count = ""
    widget[5].count = ""
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
                                    <p style={{fontSize: '14px'}} className="text-muted text-uppercase p-title"><i className={widget.icon}></i>{" " + widget.title}</p>
                                    <h4 className="mb-1 mt-1">
                                        {/*widget.dollor === true ? '' : ''*/}
                                        <span className="counter-value" data-target="58425">
                                            {widget.id == 2 || widget.id == 3 ? (widget.count/1000000000).toFixed(2) : widget.count}
                                        </span></h4>
                                </div>
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
