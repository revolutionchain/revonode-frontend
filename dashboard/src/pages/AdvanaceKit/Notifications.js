import React from 'react';
import MetaTags from 'react-meta-tags';
import {
    Alert,
    Col,
    Row,
    Card,
    CardBody,
    UncontrolledAlert,
    Container,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Notifications = props => {
    const toast1 = () => {
        document.getElementById("toast1").style.display = "none";
    }
    const toast2 = () => {
        document.getElementById("toast2").style.display = "none";
    }
    const toast3 = () => {
        document.getElementById("toast3").style.display = "none";
    }
    const toast4 = () => {
        document.getElementById("toast4").style.display = "none";
    }
    const toast5 = () => {
        document.getElementById("toast5").style.display = "none";
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Notifications | Samply - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Advanced Kit" breadcrumbItem="Notifications" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Toast Notifications</h4>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="p-2">
                                                <h5 className="font-size-14">Basic</h5>
                                                <p className="card-title-desc">
                                                    Toasts are as flexible as you need and have very little required markup.
                                                    At a minimum, we require a single element to contain your
                                                    “toasted” content and strongly encourage a dismiss button.
                                                    </p>
                                                <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" id="toast1">
                                                    <div className="toast-header">
                                                        <i className="mdi mdi-account me-1 text-primary"></i>
                                                        <strong className="me-auto">Bootstrap</strong>
                                                        <small className="text-muted">11 mins ago</small>
                                                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"
                                                            onClick={toast1}
                                                        ></button>
                                                    </div>
                                                    <div className="toast-body">
                                                        Hello, world! This is a toast message.
                                                        </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="p-2">
                                                <h5 className="font-size-14">Translucent</h5>
                                                <p className="card-title-desc">
                                                    Toasts are slightly translucent, too, so they blend over
                                                    whatever they might appear over. For browsers that
                                                        support the <code className="highlighter-rouge">backdrop-filter</code> CSS property,
                                                        we’ll also attempt to blur the elements under a toast.
                                                    </p>
                                                <div className="bg-light p-3">
                                                    <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" id="toast2">
                                                        <div className="toast-header">
                                                            <i className="mdi mdi-account me-1 text-info"></i>
                                                            <strong className="me-auto">Bootstrap</strong>
                                                            <small className="text-muted">11 mins ago</small>
                                                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"
                                                                onClick={toast2}
                                                            ></button>
                                                        </div>
                                                        <div className="toast-body">
                                                            Hello, world! This is a toast message.
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="p-2">
                                                <h5 className="font-size-14">Stacking</h5>
                                                <p className="card-title-desc">
                                                    For systems that generate more notifications, consider using a wrapping element
                                                    so they can easily stack.
                                                    </p>
                                                <div className="bg-light">
                                                    <div aria-live="polite" aria-atomic="true" className="position-relative" style={{ minHeight: '230px' }}>
                                                        <div className="toast-container position-absolute top-0 end-0 p-2 p-lg-3">

                                                            <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" id="toast3">
                                                                <div className="toast-header">
                                                                    <i className="mdi mdi-account me-1 text-primary"></i>
                                                                    <strong className="me-auto">Bootstrap</strong>
                                                                    <small className="text-muted">just now</small>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"
                                                                        onClick={toast3}
                                                                    ></button>
                                                                </div>
                                                                <div className="toast-body">
                                                                    See? Just like this.
                                                                    </div>
                                                            </div>

                                                            <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" id="toast4">
                                                                <div className="toast-header">
                                                                    <i className="mdi mdi-account me-1 text-primary"></i>
                                                                    <strong className="me-auto">Bootstrap</strong>
                                                                    <small className="text-muted">2 sec ago</small>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"
                                                                        onClick={toast4}
                                                                    ></button>
                                                                </div>
                                                                <div className="toast-body">
                                                                    Heads up, toasts will stack automatically
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="p-2">
                                                <h5 className="font-size-14">Placement</h5>
                                                <p className="card-title-desc">
                                                    You can also get fancy with flexbox utilities to align toasts horizontally
                                                    and/or vertically.
                                                    </p>
                                                <div className="bg-light p-2 p-lg-3">
                                                    <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: '200px' }}>

                                                        <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" id="toast5">
                                                            <div className="toast-header">
                                                                <i className="mdi mdi-account me-1 text-primary"></i>
                                                                <strong className="me-auto">Bootstrap</strong>
                                                                <small>9 min ago</small>
                                                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"
                                                                    onClick={toast5}
                                                                ></button>
                                                            </div>
                                                            <div className="toast-body">
                                                                Hello, world! This is a toast message.
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-4">Alerts Notifications</h4>
                                    <Row>
                                        <Col xl={6}>
                                            <div className="">

                                                <h4 className="font-size-14">Default Notifications Alerts</h4>
                                                <p className="card-title-desc">
                                                    Alerts are available for any length of
                                                    text, as well as an optional dismiss button. For proper styling, use one
                    of the four <strong>required</strong> contextual classes (e.g., <code
                                                    >.alert-success</code>). For inline dismissal, use the alerts jQuery plugin.
                  </p>

                                                <div className="mb-4">
                                                    <Alert color="primary">
                                                        A simple primary alert—check it out!
                    </Alert>
                                                    <Alert color="secondary" role="alert">
                                                        A simple secondary alert—check it out!
                    </Alert>
                                                    <Alert color="success" role="alert">
                                                        A simple success alert—check it out!
                    </Alert>
                                                    <Alert color="danger" role="alert">
                                                        A simple danger alert—check it out!
                    </Alert>
                                                    <Alert color="warning" role="alert">
                                                        A simple warning alert—check it out!
                    </Alert>
                                                    <Alert color="info" className="mb-0" role="alert">
                                                        A simple info alert—check it out!
                    </Alert>
                                                </div>

                                            </div>
                                        </Col>
                                        
                                        <Col xl={6}>
                                           
                                                <h4 className="font-size-14">Link color</h4>
                                                <p className="card-title-desc">Alerts  as an optional dismiss button. Use the <code>.alert-link</code> utility class to
                                                    quickly provide matching colored links within any alert.</p>

                                                    <div className="mb-4">
                                                        <Alert color="primary">
                                                            A simple primary alert with{" "}
                                                            <Link to="#" className="alert-link">
                                                                an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                                                        <Alert color="secondary">
                                                            A simple secondary alert with{" "}
                                                            <Link to="#" className="alert-link">
                                                                an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                                                        <Alert colr="success">
                                                            A simple success alert with{" "}
                                                            <Link to="#" className="alert-link">
                                                                an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                                                        <Alert color="danger">
                                                            A simple danger alert with{" "}
                                                            <Link to="#" className="alert-link">
                                                                an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                                                        <Alert color="warning">
                                                            A simple warning alert with{" "}
                                                            <Link to="#" className="alert-link">
                                                                an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                                                        <Alert color="info" className="mb-0">
                                                            A simple info alert with{" "}
                                                            <Link to="#" className="alert-link">
                                                                an example link
                      </Link>
                      . Give it a click if you like.
                    </Alert>
                                                    </div>
                                        </Col>
</Row>
                                        <Row className="mt-4">
                                        <Col xl={6}>
                                           
                                        <h4 className="font-size-14">Dismissing</h4>
                                                    <p className="card-title-desc">
                                                        Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding
                  to the right of the alert and positions the <code>.btn-close</code> button.
                  </p>

                                                    <div className="">
                                                        <UncontrolledAlert color="primary">
                                                            A simple primary alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert color="secondary" role="alert">
                                                            A simple secondary alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert color="success" role="alert">
                                                            A simple success alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert color="danger" role="alert">
                                                            A simple danger alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert color="warning" role="alert">
                                                            A simple warning alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert
                                                            color="info"
                                                            className="mb-0"
                                                            role="alert"
                                                        >
                                                            A simple info alert—check it out!
                    </UncontrolledAlert>
                                                    </div>
                                        </Col>

                                        <Col xl={6}>
                                            
                                        <h4 className="font-size-14">With Icon</h4>
                                        <p className="card-title-desc">
                                                    Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding
                                                    to the right of the alert and positions the <code>.btn-close</code> button &amp; with Icon.
                                                </p>
                                                    <div className="">
                                                        <UncontrolledAlert
                                                            color="primary"
                                                            className="alert-dismissible fade show"
                                                            role="alert"
                                                        >
                                                            <i className="mdi mdi-bullseye-arrow me-2"></i>A simple
                      primary alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert
                                                            color="secondary"
                                                            className="alert-dismissible fade show"
                                                            role="alert"
                                                        >
                                                            <i className="mdi mdi-grease-pencil me-2"></i>A simple
                      secondary alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert
                                                            color="success"
                                                            className="alert-dismissible fade show"
                                                            role="alert"
                                                        >
                                                            <i className="mdi mdi-check-all me-2"></i>A simple success
                      alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert
                                                            color="danger"
                                                            className="alert-dismissible fade show"
                                                            role="alert"
                                                        >
                                                            <i className="mdi mdi-block-helper me-2"></i>A simple
                      danger alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert
                                                            color="warning"
                                                            className="alert-dismissible fade show"
                                                            role="alert"
                                                        >
                                                            <i className="mdi mdi-alert-outline me-2"></i>A simple
                      warning alert—check it out!
                    </UncontrolledAlert>
                                                        <UncontrolledAlert
                                                            color="info"
                                                            className="alert-dismissible fade show mb-0"
                                                            role="alert"
                                                        >
                                                            <i className="mdi mdi-alert-circle-outline me-2"></i>A
                      simple info alert—check it out!
                    </UncontrolledAlert>
                                                    </div>
                                                
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Notifications;