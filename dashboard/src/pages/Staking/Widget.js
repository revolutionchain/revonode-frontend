import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const widget = [
    {
        id: 1,
        title: 'Total UTXOs',
        text: '',
        count: '0',
        dollor: true,
        icon: 'bx bx-transfer-alt text-primary',
        secondIcon: '',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Currently Staking',
        text: '',
        count: '0.00000000',
        dollor: true,
        icon: 'mdi mdi-pickaxe text-warning',
        secondIcon: '',
        percentage: '4.58%',
        color: 'danger',
        upArrow: false
    },
    {
        id: 3,
        title: 'Validated Blocks',
        text: '',
        count: '0',
        dollor: false,
        icon: 'bx bxs-component text-primary',
        secondIcon: '',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    }
]


const Widget = props => {

    const [ widgetState, setWidgetState ] = useState(false);
    
useEffect(()=>{        
    //widget[0].count = "";
    widget[1].count = (props.nodeData[9].stake).toFixed(8) + " RVO"
    //widget[2].count = "";
    setWidgetState(widget);
})

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
                                            {widget.count}
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
