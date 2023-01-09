import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

class Badges extends Component {
    render() {
        return (
            <React.Fragment>
                <Col lg={12}>
                    <Card id="badges">
                        <CardBody>
                            <h4 className="card-title mb-4">Badges</h4>

                            <Row>
                                <Col lg={6}>
                                    <div>
                                        <h5 className="font-size-14">Basic</h5>
                                        <p className="card-title-desc">
                                            Add any of the below mentioned modifier
                                            classes to change the appearance of a badge.
                                        </p>
                                        <div>
                                            <span className="badge bg-primary me-1">
                                                Primary
                                            </span>
                                            <span className="badge bg-success me-1">
                                                Success
                                            </span>
                                            <span className="badge bg-info me-1">
                                                Info
                                            </span>
                                            <span className="badge bg-warning me-1">
                                                Warning
                                            </span>
                                            <span className="badge bg-danger me-1">
                                                Danger
                                            </span>
                                            <span className="badge bg-dark me-1">
                                                Dark
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mt-5 mt-lg-0">
                                        <h5 className="font-size-14">Pill</h5>
                                        <p className="card-title-desc">
                                            Use the <code>.rounded-pill</code> modifier
                                            class to make badges more rounded.
                                        </p>

                                        <div>
                                            <span className="badge rounded-pill bg-primary me-1">
                                                Primary
                                            </span>
                                            <span className="badge rounded-pill bg-success me-1">
                                                Success
                                            </span>
                                            <span className="badge rounded-pill bg-info me-1">
                                                Info
                                            </span>
                                            <span className="badge rounded-pill bg-warning me-1">
                                                Warning
                                            </span>
                                            <span className="badge rounded-pill bg-danger me-1">
                                                Danger
                                            </span>
                                            <span className="badge rounded-pill bg-dark me-1">
                                                Dark
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <div className="mt-5">
                                        <h5 className="font-size-14">Lighten</h5>
                                        <p className="card-title-desc">
                                            Use <code>.bg-soft-*</code> class for a
                                            badge lighten.
                                        </p>

                                        <div>
                                            <span className="badge badge-soft-primary me-1">
                                                Primary
                                            </span>
                                            <span className="badge badge-soft-success me-1">
                                                Success
                                            </span>
                                            <span className="badge badge-soft-info me-1">
                                                Info
                                            </span>
                                            <span className="badge badge-soft-warning me-1">
                                                Warning
                                            </span>
                                            <span className="badge badge-soft-danger me-1">
                                                Danger
                                            </span>
                                            <span className="badge badge-soft-dark me-1">
                                                Dark
                                            </span>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mt-5">
                                        <h5 className="font-size-14">Soft Pill</h5>
                                        <p className="card-title-desc">
                                            Use <code>.bg-soft-*</code> class for a pill
                                            badge.
                                        </p>

                                        <div>
                                            <span className="badge rounded-pill badge-soft-primary me-1">
                                                Primary
                                            </span>
                                            <span className="badge rounded-pill badge-soft-success me-1">
                                                Success
                                            </span>
                                            <span className="badge rounded-pill badge-soft-info me-1">
                                                Info
                                            </span>
                                            <span className="badge rounded-pill badge-soft-warning me-1">
                                                Warning
                                            </span>
                                            <span className="badge rounded-pill badge-soft-danger me-1">
                                                Danger
                                            </span>
                                            <span className="badge rounded-pill badge-soft-dark me-1">
                                                Dark
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <div className="mt-5">
                                        <h5 className="font-size-14">
                                            Badges in Buttons
                                        </h5>
                                        <p className="card-title-desc">
                                            Badges can be used as part of links or
                                            buttons to provide a counter.
                                        </p>

                                        <div className="button-items">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                Notifications{" "}
                                                <span className="badge bg-success ms-1">
                                                    4
                                                </span>
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                            >
                                                Messages{" "}
                                                <span className="badge bg-danger ms-1">
                                                    2
                                                </span>
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                            >
                                                Draft{" "}
                                                <span className="badge bg-success ms-1">
                                                    2
                                                </span>
                                            </button>{" "}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mt-5">
                                        <h5 className="font-size-14">
                                            Badges Position Examples
                                        </h5>
                                        <p className="card-title-desc">
                                            Example of Badges Position
                                        </p>

                                        <div className="d-flex flex-wrap gap-3">
                                            <button
                                                type="button"
                                                className="btn btn-primary position-relative"
                                            >
                                                Mails{" "}
                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                                    +99{" "}
                                                    <span className="visually-hidden">
                                                        unread messages
                                                    </span>
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-light position-relative"
                                            >
                                                Alerts{" "}
                                                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                                                    <span className="visually-hidden">
                                                        unread messages
                                                    </span>
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-primary position-relative p-0 avatar-xs rounded"
                                            >
                                                <span className="avatar-title bg-transparent">
                                                    <i className="bx bxs-envelope"></i>
                                                </span>
                                                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1">
                                                    <span className="visually-hidden">
                                                        unread messages
                                                    </span>
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-light position-relative p-0 avatar-xs rounded-circle"
                                            >
                                                <span className="avatar-title bg-transparent text-reset">
                                                    <i className="bx bxs-bell"></i>
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-light position-relative p-0 avatar-xs rounded-circle"
                                            >
                                                <span className="avatar-title bg-transparent text-reset">
                                                    <i className="bx bx-menu"></i>
                                                </span>
                                                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-success p-1">
                                                    <span className="visually-hidden">
                                                        unread messages
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default Badges;