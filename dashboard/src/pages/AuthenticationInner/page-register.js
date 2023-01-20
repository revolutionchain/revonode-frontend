import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Form, Label, Row } from 'reactstrap';

//import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const PageRegister = props => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Register | Revo Node Manager</title>
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
                                                <h5>Register account</h5>
                                                <p className="text-muted">Get your free Samply account now.</p>
                                            </div>

                                            <div className="mt-4 pt-3">
                                                <Form>
                                                    <div className="mb-3">
                                                        <Label className="fw-semibold" htmlFor="useremail">Email</Label>
                                                        <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <Label className="fw-semibold" htmlFor="username">Username</Label>
                                                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                                    </div>

                                                    <div className="mb-3">
                                                        <Label className="fw-semibold" htmlFor="userpassword">Password</Label>
                                                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                    </div>

                                                    <div className="mt-4 text-end">
                                                        <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Register</button>
                                                    </div>

                                                    <div className="mt-4 text-center">
                                                        <p className="mb-0 text-muted">By registering you agree to the Samply <Link to="#" className="text-primary fw-semibold text-decoration-underline">Terms of Use</Link></p>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="col-lg-6">
                                        <div className="p-lg-5 p-4 bg-auth h-100 d-none d-lg-block">
                                            <div className="bg-overlay"></div>
                                        </div>
                                    </div>
                                </Row>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>Already have an account ? <Link to="login" className="fw-semibold text-decoration-underline"> Login </Link> </p>
                                <p>© {(new Date().getFullYear())} <b>Samply</b>. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default PageRegister;