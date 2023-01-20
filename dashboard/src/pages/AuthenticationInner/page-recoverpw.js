import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Card, Col, Container, Form, Input, Label, Row } from 'reactstrap';

//import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

function PageRecoverpw(props) {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Recover Password | Revo Node Manager</title>
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
                                                <h5>Reset Password</h5>
                                                <p className="text-muted">Re-Password with Samply.</p>
                                            </div>

                                            <div className="mt-4 pt-3">

                                                <div className="alert alert-success mb-4" role="alert">
                                                    Enter your Email and instructions will be sent to you!
                                            </div>

                                                <Form>

                                                    <div className="mb-3">
                                                        <Label className="fw-semibold" for="useremail">Email</Label>
                                                        <Input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                                                    </div>

                                                    <div className="mt-4 text-end">
                                                        <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
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
                                <p>Remember It ? <Link to="/login" className="fw-semibold text-decoration-underline"> Login  </Link> </p>
                                <p>© {(new Date().getFullYear())} <b>Samply</b>. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default PageRecoverpw;