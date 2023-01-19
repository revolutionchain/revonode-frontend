import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Form, Input, Row } from 'reactstrap';

//import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const PageLogin = props => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Login |R</title>
            </MetaTags>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <div className="text-center mb-5">
                                <Link to="/dashboard" className="auth-logo">
                                    <img src={logoDark} alt="" height="28" className="auth-logo-dark" />
                                    <img src={logoLight} alt="" height="28" className="auth-logo-light" />
                                </Link>
                                <p className="font-size-15 text-muted mt-3">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>
                            </div>
                            <Card className="overflow-hidden">
                                <Row className="g-0">
                                    <Col lg={6}>
                                        <div className="p-lg-5 p-4">

                                            <div>
                                                <h5>Welcome Back !</h5>
                                                <p className="text-muted">Sign in to continue to Samply.</p>
                                            </div>

                                            <div className="mt-4 pt-3">
                                                <Form>

                                                    <div className="mb-3">
                                                        <label htmlFor="username" className="fw-semibold">Username</label>
                                                        <Input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                    </div>

                                                    <div className="mb-3 mb-4">
                                                        <label htmlFor="userpassword" className="fw-semibold">Password</label>
                                                        <Input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                    </div>

                                                    <div className="row align-items-center">
                                                        <Col xs={6}>
                                                            <div className="form-check">
                                                                <Input type="checkbox" className="form-check-input font-size-16" id="remember-check" />
                                                                <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                                                            </div>
                                                        </Col>
                                                        <Col xs={6}>
                                                            <div className="text-end">
                                                                <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                                            </div>
                                                        </Col>
                                                    </div>

                                                    <div className="mt-4">
                                                        <Link to="/pages-recoverpw" className="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                                                    </div>
                                                </Form>
                                            </div>

                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div className="p-lg-5 p-4 bg-auth h-100 d-none d-lg-block">
                                            <div className="bg-overlay"></div>
                                        </div>
                                    </Col>

                                </Row>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>Don't have an account ? <Link to="/pages-register" className="fw-semibold text-decoration-underline text-primary"> Sign up </Link> </p>
                                <p>© {new Date().getFullYear()} <b>Samply</b>. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default PageLogin;