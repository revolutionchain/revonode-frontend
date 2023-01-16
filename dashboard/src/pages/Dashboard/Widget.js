import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect, useState } from 'react';

const widget = [
    {
        id: 1,
        title: 'Total Connections',
        count: 'value',
        dollor: true,
        icon: 'mdi mdi-cash-multiple text-primary',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Total Upload Traffic (GB)',
        count: '2568',
        dollor: true,
        icon: 'mdi mdi-refresh-circle text-success',
        percentage: '4.58%',
        color: 'danger',
        upArrow: false
    },
    {
        id: 3,
        title: 'Total Download Traffic (MB)',
        count: '258410',
        dollor: false,
        icon: 'mdi mdi-account-group text-primary',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    },
    {
        id: 5,
        title: 'TX in Mempool',
        count: '9582',
        dollor: false,
        icon: 'mdi mdi-cart-check text-success',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 6,
        title: 'Lastest Block',
        count: '9582',
        dollor: false,
        icon: 'mdi mdi-cart-check text-success',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
]

useEffect(()=>{    
    fetch(`http://${window.location.hostname}:3001/getdashboarddata`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
      .then(res => {
        widget[0].count = res[0].connections.total;
        widget[1].count = res[1].totalbytessent;
        widget[2].count = res[1].totalbytesrecv;
        widget[3].count = res[2].length > 0 ? data[2].length : "0";
        widget[4].count = res[3].size;
        widget[5].count = res[0].headers;
      });
})

const Widget = props => {
    return (
        <React.Fragment>
            <Row>
                
                    <Col md={6} xl={12} className="d-flex">
                    {widget.map((widget, key) => (
                        <Col xl={2} key={key}>
                        <Card>
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
                        </Col>
                ))}
                    </Col>
            </Row>
        </React.Fragment>
    );
}

export default Widget;