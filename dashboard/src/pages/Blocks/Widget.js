import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const widget = [
    {
        id: 1,
        title: 'Showing last',
        text: 'blocks',
        count: '25',
        dollor: true,
        icon: 'bx bxs-component',
        secondIcon: '',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Last Block',
        text: '0 seconds ago',
        count: '284532',
        dollor: true,
        icon: 'bx bxs-cube',
        secondIcon: '',
        percentage: '4.58%',
        color: 'success',
        upArrow: false
    },
    {
        id: 3,
        title: 'Size',
        text: '0 MB avg. block size',
        count: '0.02',
        dollor: false,
        icon: 'mdi mdi-database text-secondary',
        secondIcon: '',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    },
    {
        id: 4,
        title: 'Total Fees',
        text: '0 avg. fees per block',
        count: '0',
        dollor: false,
        icon: 'bx bx-money text-danger',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 5,
        title: 'Transactions',
        text: '0.31 KB avg. TX size',
        count: '0',
        dollor: false,
        icon: 'bx bx-line-chart text-secondary',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    }
]


const Widget = props => {

    
useEffect(()=>{        
    //widget[0].count = props.nodeData[0].connections.total;
    //widget[1].count = props.nodeData[1].totalbytessent;
    //widget[2].count = props.nodeData[1].totalbytesrecv;
    //widget[3].count = props.nodeData[2].length > 0 ? props.nodeData[2].length : "0";
    //widget[4].count = props.nodeData[3].size;
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
