import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Form, Label, Row } from 'reactstrap';

//Verification code package
import AuthCode from "react-auth-code-input"

//import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

function PageTwoStepVerification(props) {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Two Step Verification | Samply - React Admin & Dashboard Template</title>
            </MetaTags>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center mb-5 text-muted">
                                <Link to="/dashboard" className="auth-logo">
                                    <img src={logoDark} alt="" height="28" className="auth-logo-dark" />
                                    <img src={logoLight} alt="" height="28" className="auth-logo-light" />
                                </Link>
                                <p className="font-size-15 text-muted mt-3">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card>
                                <CardBody>
                                    <div className="p-2">
                                        <div className="text-center">

                                            <div className="avatar-md mx-auto">
                                                <div className="avatar-title rounded-circle bg-light">
                                                    <i className="bx bxs-envelope h1 mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                            <div className="p-2 mt-4">

                                                <h4>Verify your email</h4>
                                                <p className="mb-5 text-muted">Please enter the 4 digit code sent to <span
                                                    className="font-weight-semibold">example@abc.com</span></p>

                                                <Form>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <div className="mb-3 verification">
                                                                <Label for="digit1-input" className="visually-hidden">Dight 1</Label>
                                                                <AuthCode
                                                                    characters={4}
                                                                    onChange={() => null}
                                                                    className="form-control form-control-lg text-center"
                                                                    allowedCharacters="^[0-9]"
                                                                    inputStyle={{
                                                                        width: "76px",
                                                                        height: "42px",
                                                                        padding: "8px",
                                                                        borderRadius: "8px",
                                                                        fontSize: "16px",
                                                                        textAlign: "center",
                                                                        marginRight: "15px",
                                                                        border: "1px solid #ced4da",
                                                                        textTransform: "uppercase",
                                                                    }}
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>

                                                <div className="mt-4">
                                                    <Link to="/dashboard" className="btn btn-success w-md">Confirm</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>Did't receive a code ? <Link to="#" className="fw-semibold text-decoration-underline text-primary"> Resend </Link> </p>
                                <p>© {(new Date().getFullYear())} <b>Samply</b>. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default PageTwoStepVerification;