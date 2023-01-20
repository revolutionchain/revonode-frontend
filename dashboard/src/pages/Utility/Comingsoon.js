import React from 'react';
import MetaTags from 'react-meta-tags';

//Import Countdown
import Countdown from "react-countdown"

import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import comingSoon from '../../assets/images/coming-soon-img.png';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'reactstrap';

const Comingsoon = props => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>You are good to go!</span>
        } else {
            return (
                <>
                    <div className="coming-box">
                        {days} <span>Days</span>
                    </div>{" "}
                    <div className="coming-box">
                        {hours} <span>Hours</span>
                    </div>{" "}
                    <div className="coming-box">
                        {minutes} <span>Minutes</span>
                    </div>{" "}
                    <div className="coming-box">
                        {seconds} <span>Seconds</span>
                    </div>
                </>
            )
        }
    }
    return (
        <React.Fragment>
            <div className="my-5 pt-sm-5">
                <MetaTags>
                    <title>Coming Soon | Revo Node Manager</title>
                </MetaTags>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="text-center mb-5">
                                <Link to="/dashboard" className="auth-logo">
                                    <img src={logoDark} alt="" height="24" className="auth-logo-dark" />
                                    <img src={logoLight} alt="" height="24" className="auth-logo-light" />
                                </Link>
                                <p className="font-size-15 text-muted mt-3">Responsive <strong>Bootstrap 5</strong> Admin Dashboard</p>
                            </div>
                            <Card className="overflow-hidden">
                                <Row className="g-0">
                                    <Col lg={{ size: 6, order: 1 }} className="order-2">
                                        <div className="p-lg-5 p-4">
                                            <h5>Let's get started with Samply</h5>
                                            <p className="font-size-15 text-muted">It will be as simple as in fact it will be occidental.</p>

                                            <div className="mt-5">
                                                <div className="counter-number">
                                                    <Countdown date="2021/12/31" renderer={renderer} />
                                                </div>
                                            </div>

                                            <div className="input-section mt-5">
                                                <Row>
                                                    
                                                    <Col>
                                                        <div className="position-relative">
                                                            <input type="email" className="form-control" placeholder="Enter email address..." />
                                                        </div>
                                                    </Col>
                                                    <div className="col-auto">
                                                        <button type="submit" className="btn btn-primary w-md waves-effect waves-light">Subscribe</button>
                                                    </div>
                                                </Row>
                                            </div>

                                        </div>
                                    </Col>
                                    <Col lg={6} className="order-1 order-lg-2">
                                        <div className="p-lg-5 p-4 bg h-100">

                                            <div className="comingsoon-img">
                                                <img src={comingSoon} alt="" className="img-fluid mx-auto d-block" />
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

export default Comingsoon;