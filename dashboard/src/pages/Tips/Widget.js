import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

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
    }
]


const Widget = props => {

    const [ widgetState, setWidgetState ] = useState(false);
useEffect(()=>{        
    //widget[0].count = ""
    setWidgetState(widget);
})

    return (
        <React.Fragment>
            <Row>                
                    <Col md={6} xl={12} className="d-flex">
                    {widgetState &&  widgetState.map((widget, key) => (
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
