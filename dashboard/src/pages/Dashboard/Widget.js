import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

const widget = [
    {
        id: 1,
        title: 'Total Revenue',
        count: '58425',
        dollor: true,
        icon: 'mdi mdi-cash-multiple text-primary',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Total Refunds',
        count: '2568',
        dollor: true,
        icon: 'mdi mdi-refresh-circle text-success',
        percentage: '4.58%',
        color: 'danger',
        upArrow: false
    },
    {
        id: 3,
        title: 'Active Users',
        count: '258410',
        dollor: false,
        icon: 'mdi mdi-account-group text-primary',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    },
    {
        id: 4,
        title: 'All Time Orders',
        count: '9582',
        dollor: false,
        icon: 'mdi mdi-cart-check text-success',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
]

const Widget = props => {
    return (
        <React.Fragment>
            <Row>
                
                    <Col md={6} xl={12}>
                    {widget.map((widget, key) => (
                        <Card key={key}>
                            <CardBody>
                                <div className="float-end">
                                    <div className="avatar-sm mx-auto mb-4">
                                        <span className="avatar-title rounded-circle bg-light font-size-24">
                                            <i className={widget.icon}></i>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-muted text-uppercase fw-semibold">{widget.title}</p>
                                    <h4 className="mb-1 mt-1">
                                        {widget.dollor === true ? '$' : ''}
                                        <span className="counter-value" data-target="58425">
                                            {widget.count}
                                        </span></h4>
                                </div>
                                <p className="text-muted mt-3 mb-0">
                                    <span className={"badge badge-soft-" + widget.color + " me-1"}>

                                        {widget.upArrow === true ?
                                            <i className="mdi mdi-arrow-up-bold me-1"></i> : <i className="mdi mdi-arrow-down-bold me-1"></i>
                                        }
                                        {widget.percentage}
                                    </span> since last week
                            </p>
                            </CardBody>
                        </Card>
                ))}
                    </Col>
            </Row>
        </React.Fragment>
    );
}

export default Widget;