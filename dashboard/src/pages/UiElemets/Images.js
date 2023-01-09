import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';

//import images
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

const Images = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="images">
                    <CardBody>
                        <h4 className="card-title mb-4">Images</h4>

                        <Row>
                            <div className="col-xl-6">
                                <div className="">
                                    <h5 className="font-size-14">
                                        Rounded & Circle
                                    </h5>
                                    <p className="card-title-desc">
                                        Use classes
                                        <code>.rounded</code> and{" "}
                                        <code>.rounded-circle</code>.
                                    </p>

                                    <Row>
                                        <div className="col-md-6">
                                            <img
                                                className="rounded me-2"
                                                alt="200x200"
                                                width="200"
                                                src={img4}
                                                data-holder-rendered="true"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mt-4 mt-md-0">
                                                <img
                                                    className="rounded-circle avatar-xl"
                                                    alt="200x200"
                                                    src={avatar4}
                                                    data-holder-rendered="true"
                                                />
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="mt-4 mt-lg-0">
                                    <h5 className="font-size-14">Thumbnails</h5>
                                    <p className="card-title-desc">
                                        In addition to our border-radius utilities,
                                        you can use
                                        <code className="highlighter-rouge">
                                            .img-thumbnail
                                        </code>{" "}
                                        to give an image a rounded 1px border
                                        appearance.
                                    </p>

                                    <Row>
                                        <div className="col-md-6">
                                            <img
                                                className="img-thumbnail"
                                                alt="200x200"
                                                width="200"
                                                src={img3}
                                                data-holder-rendered="true"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mt-4 mt-md-0">
                                                <img
                                                    className="img-thumbnail rounded-circle avatar-xl"
                                                    alt="200x200"
                                                    src={avatar3}
                                                    data-holder-rendered="true"
                                                />
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </Row>

                        <Row className="mt-3">
                            <Col lg={12}>
                                <h5 className="font-size-14 mb-4">Sizes</h5>
                                <Row>
                                    <div className="col-md-6">
                                        <Row>
                                            <div className="col-lg-4">
                                                <div>
                                                    <img
                                                        src={avatar3}
                                                        alt=""
                                                        className="rounded avatar-sm"
                                                    />
                                                    <p className="mt-2 mb-lg-0">
                                                        <code>.avatar-sm</code>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <img
                                                        src={avatar4}
                                                        alt=""
                                                        className="rounded avatar-md"
                                                    />
                                                    <p className="mt-2  mb-lg-0">
                                                        <code>.avatar-md</code>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <img
                                                        src={avatar5}
                                                        alt=""
                                                        className="rounded avatar-lg"
                                                    />
                                                    <p className="mt-2 mb-md-0">
                                                        <code>.avatar-lg</code>
                                                    </p>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="col-md-6">
                                        <Row>
                                            <div className="col-lg-4">
                                                <div>
                                                    <img
                                                        src={avatar3}
                                                        alt=""
                                                        className="rounded-circle avatar-sm"
                                                    />
                                                    <p className="mt-2 mb-lg-0">
                                                        <code>.avatar-sm</code>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <img
                                                        src={avatar4}
                                                        alt=""
                                                        className="rounded-circle avatar-md"
                                                    />
                                                    <p className="mt-2  mb-lg-0">
                                                        <code>.avatar-md</code>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <img
                                                        src={avatar5}
                                                        alt=""
                                                        className="rounded-circle avatar-lg"
                                                    />
                                                    <p className="mt-2 mb-0">
                                                        <code>.avatar-lg</code>
                                                    </p>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default Images;