import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from "reactstrap"

//import images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import maintenance from '../../assets/images/maintenance.png';

const Maintenance = props => {
    return (
        <React.Fragment>
            <div className="my-5 pt-sm-5">
                <Container>
                    <MetaTags>
                        <title>Maintenance | Samply - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <Row>
                        <Col md={12}>
                            <div className="text-center mb-5">
                                <Link to="/dashboard" className="auth-logo">
                                    <img src={logoDark} alt="" height="24" className="auth-logo-dark" />
                                    <img src={logoLight} alt="" height="24" className="auth-logo-light" />
                                </Link>

                                <h3 className="mt-5">Site is Under Maintenance</h3>
                                <p className="font-size-15 text-muted">Please check back in sometime.</p>
                            </div>
                            <Card className="overflow-hidden">
                                <Row className="g-0">

                                    <Col lg={{ size: 6, order: 1 }} className="order-2">
                                        <div className="p-lg-5 p-4">

                                            <div className="maintenance-box">
                                                <div className="d-flex">
                                                    <div className="avatar-xs me-3">
                                                        <span className="avatar-title bg-primary bg-soft rounded-circle">
                                                            <i className="mdi mdi-access-point-network text-primary"></i>
                                                        </span>
                                                    </div>

                                                    <div className="flex-1">
                                                        <h5 className="font-size-15 text-uppercase">Why is the Site Down?</h5>
                                                        <p className="text-muted">There are many variations of passages of
                                                            Lorem Ipsum available, but the majority have suffered alteration.</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex mt-4">
                                                    <div className="avatar-xs me-3">
                                                        <span className="avatar-title bg-primary bg-soft rounded-circle">
                                                            <i className="mdi mdi-clock-outline text-primary"></i>
                                                        </span>
                                                    </div>

                                                    <div className="flex-1">
                                                        <h5 className="font-size-15 text-uppercase">What is the Downtime?</h5>
                                                        <p className="text-muted">Contrary to popular belief, Lorem Ipsum is not
                                                    simply random text. It has roots in a piece of classical.</p>
                                                    </div>
                                                </div>

                                                <div className="d-flex mt-4">
                                                    <div className="avatar-xs me-3">
                                                        <span className="avatar-title bg-primary bg-soft rounded-circle">
                                                            <i className="mdi mdi-email-outline text-primary"></i>
                                                        </span>
                                                    </div>

                                                    <div className="flex-1">
                                                        <h5 className="font-size-15 text-uppercase">Do you need Support?</h5>
                                                        <p className="text-muted mb-0">If you are going to use a passage of Lorem
                                                    Ipsum, you need to be sure there isn't anything embar.. <a
                                                                href="mailto:no-reply@domain.com"
                                                                className="text-decoration-underline">no-reply@domain.com</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                    <Col lg={{ size: 6, order: 2 }} className="order-1">
                                        <div className="p-lg-5 p-4 bg h-100">

                                            <div className="maintenance-img">
                                                <img src={maintenance} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Maintenance;