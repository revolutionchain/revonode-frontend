import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Col, Container, Row } from 'reactstrap';

//import images
import serverError from "../../assets/images/server-error.png"

const Error500 = props => {
    return (
        <React.Fragment>
            <div className="my-5 pt-sm-5">
                <MetaTags>
                    <title>500 Error | Samply - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="text-center">
                                <div>
                                    <Row className="justify-content-center">
                                        <Col sm={5}>
                                            <div className="">
                                                <img src={serverError} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <h4 className="text-uppercase mt-4">Internal Server Error</h4>
                                <p className="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                                <div className="mt-5">
                                    <Link className="btn btn-primary waves-effect waves-light" to="/dashboard">Back to Dashboard</Link>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Error500;