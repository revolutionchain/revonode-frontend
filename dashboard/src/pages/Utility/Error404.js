import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "reactstrap"

import error404 from '../../assets/images/404-error.png';

const Profile = props => {
    return (
        <React.Fragment>
            <div className="my-5 pt-sm-5">
                <MetaTags>
                    <title>404 Error | Samply - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="text-center">
                                <div>
                                    <Row className="justify-content-center">
                                        <Col sm={5}>
                                            <div>
                                                <img src={error404} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <h4 className="text-uppercase mt-4">Sorry, page not found</h4>
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

export default Profile;