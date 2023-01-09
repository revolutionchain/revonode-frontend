import React from 'react';
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import { Link } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import img1 from '../../assets/images/small/img-2.jpg';
import img2 from '../../assets/images/small/img-3.jpg';
import img3 from '../../assets/images/small/img-4.jpg';

const Profile = props => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Timeline | Samply - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Pages" breadcrumbItem="Timeline" />

                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <div className="timeline">
                                <div className="timeline-item timeline-left">
                                    <div className="timeline-block">
                                        <div className="time-show-btn mt-0">
                                            <Link to="#" className="btn btn-success w-lg">2021</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-block">
                                        <Card className="timeline-box">
                                            <CardBody>
                                                <span className="timeline-icon"></span>
                                                <div className="timeline-date">
                                                    <i className="mdi mdi-circle-medium circle-dot"></i> 16 March
                                                    </div>
                                                <h5 className="mt-3 foont-size-15"> Timeline event One</h5>
                                                <div className="text-muted">
                                                    <p className="mb-0">It will be as simple as occidental in fact. To an english person, it will seem like simplified English, as a skeptical friend</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>

                                <div className="timeline-item timeline-left">
                                    <div className="timeline-block">
                                        <Card className="timeline-box">
                                            <CardBody>
                                                <span className="timeline-icon"></span>
                                                <div className="timeline-date">
                                                    <i className="mdi mdi-circle-medium circle-dot"></i> 19 February
                                                    </div>
                                                <h5 className="mt-3 foont-size-15"> Timeline event Two</h5>
                                                <div className="text-muted">
                                                    <p className="mb-0">To achieve this, it would be necessary to have more common words.</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-block">
                                        <Card className="timeline-box">
                                            <CardBody>
                                                <span className="timeline-icon"></span>
                                                <div className="timeline-date">
                                                    <i className="mdi mdi-circle-medium circle-dot"></i> 15 January
                                                    </div>
                                                <h5 className="mt-3 foont-size-15"> Timeline event Three</h5>
                                                <div className="text-muted">
                                                    <p>The new common language will be more simple and regular than the existing European languages be as simple as occidental</p>

                                                </div>
                                                <div className="timeline-album">
                                                    <Link to="#" className="mr-1">
                                                        <img src={img1} alt="" />
                                                    </Link>{" "}
                                                    <Link to="#" className="mr-1">
                                                        <img src={img2} alt="" />
                                                    </Link>{" "}
                                                    <Link to="#" className="mr-1">
                                                        <img src={img3} alt="" />
                                                    </Link>{" "}
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>

                                <div className="timeline-item timeline-left">
                                    <div className="timeline-block">
                                        <div className="time-show-btn mt-0">
                                            <Link to="#" className="btn btn-success w-lg">2020</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-item timeline-left">
                                    <div className="timeline-block">
                                        <Card className="timeline-box">
                                            <CardBody>
                                                <span className="timeline-icon"></span>
                                                <div className="timeline-date">
                                                    <i className="mdi mdi-circle-medium circle-dot"></i> 11 July
                                                    </div>
                                                <h5 className="mt-3 foont-size-15"> Timeline event Four</h5>
                                                <div className="text-muted">
                                                    <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ab illo inventore veritatis et</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>

                                <div className="timeline-item">
                                    <div className="timeline-block">
                                        <Card className="timeline-box">
                                            <CardBody>
                                                <span className="timeline-icon"></span>
                                                <div className="timeline-date">
                                                    <i className="mdi mdi-circle-medium circle-dot"></i> 07 July
                                                    </div>
                                                <h5 className="mt-3 foont-size-15"> Timeline event Five</h5>
                                                <div className="text-muted">
                                                    <p className="mb-0">Itaque earum rerum hic tenetur a sapiente delectus, ut aut doloribus asperiores.</p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
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