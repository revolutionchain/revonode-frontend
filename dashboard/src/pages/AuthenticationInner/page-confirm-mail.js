import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const PageConfirmMail = props => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Confirm Mail | Samply - React Admin & Dashboard Template</title>
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
                                <p className="mt-3 font-size-15">Responsive <strong>Bootstrap 5</strong> Admin Dashboard</p>
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
                                                    <i className="bx bx-mail-send h1 mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                            <div className="p-2 mt-4">
                                                <h4 className="fw-semibold">Success !</h4>
                                                <p className="text-muted"><strong>All good!</strong> Your invoice was sent to your email. You'll be notified when someone will open it.</p>
                                                <div className="mt-4">
                                                    <Link to="/dashboard" className="btn btn-success">Back to Home</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>© {(new Date().getFullYear())} <b>Samply</b>. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default PageConfirmMail;