import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const PageEmailVerification = props => {
    return (
        <React.Fragment>
        <MetaTags>
          <title>Email Verification | Samply - React Admin & Dashboard Template</title>
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
                            <p className="mt-3 font-size-15">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>
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
                                            <p className="text-muted">We have sent you verification email <span className="font-weight-semibold">example@abc.com</span>, Please check it</p>
                                            <div className="mt-4">
                                                <Link to="/dashboard" className="btn btn-success w-md">Verify email</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <div className="mt-5 text-center">
                            <p>Did't receive an email ? <Link to="#" className="fw-semibold text-primary text-decoration-underline"> Resend </Link> </p>
                            <p>© {(new Date().getFullYear())} <b>Samply</b>. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </React.Fragment>
    );
}

export default PageEmailVerification;