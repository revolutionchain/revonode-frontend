import React, { useState } from 'react';
import {
    Card,
    Col,
    Row,
    CardBody,
    Modal,
} from "reactstrap";

const Modals = () => {
    const [modal_standard, setmodal_standard] = useState(false);
    const [modal_large, setmodal_large] = useState(false);
    const [modal_xlarge, setmodal_xlarge] = useState(false);
    const [modal_small, setmodal_small] = useState(false);
    const [modal_center, setmodal_center] = useState(false);
    const [modal_scroll, setmodal_scroll] = useState(false);
    const [modal_fullscreen, setmodal_fullscreen] = useState(false);
    const [modal_backdrop, setmodal_backdrop] = useState(false);

    function removeBodyCss() {
        document.body.classList.add("no_padding");
    }

    function tog_standard() {
        setmodal_standard(!modal_standard);
        removeBodyCss();
    }

    function tog_fullscreen() {
        setmodal_fullscreen(!modal_fullscreen);
        removeBodyCss();
    }

    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
        removeBodyCss();
    }


    function tog_large() {
        setmodal_large(!modal_large);
        removeBodyCss();
    }

    function tog_xlarge() {
        setmodal_xlarge(!modal_xlarge);
        removeBodyCss();
    }

    function tog_small() {
        setmodal_small(!modal_small);
        removeBodyCss();
    }

    function tog_center() {
        setmodal_center(!modal_center);
        removeBodyCss();
    }

    function tog_scroll() {
        setmodal_scroll(!modal_scroll);
        removeBodyCss();
    }
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="modals">
                    <CardBody>
                        <h4 className="card-title mb-4">Modals</h4>

                        <div>
                            <div>
                                <h5 className="font-size-14">Basic</h5>
                                <p className="card-title-desc">
                                    Toggle a working modal demo by clicking the
                                    button below. It will slide down and fade in
                                    from the top of the page.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        tog_standard();
                                    }}
                                    className="btn btn-primary "
                                    data-toggle="modal"
                                    data-target="#myModal"
                                >
                                    Standard Modal
                                </button>

                                <Modal
                                    isOpen={modal_standard}
                                    toggle={() => {
                                        tog_standard();
                                    }}
                                >
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title mt-0"
                                            id="myModalLabel"
                                        >
                                            Modal Heading
                                        </h5>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setmodal_standard(false);
                                            }}
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <h5>
                                            Overflowing text to show scroll behavior
                                        </h5>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                tog_standard();
                                            }}
                                            className="btn btn-secondary "
                                            data-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary "
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </Modal>
                            </div>

                            <div className="mt-4 pt-2">
                                <h5 className="font-size-14">Optional Sizes</h5>
                                <p className="card-title-desc">
                                    Modals have three optional sizes, available
                                    via modifier classes to be placed on a{" "}
                                    <code>.modal-dialog</code>.
                                </p>

                                <div className="button-items">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tog_xlarge();
                                        }}
                                        className="btn btn-primary "
                                        data-toggle="modal"
                                        data-target=".bs-example-modal-xl"
                                    >
                                        Extra large modal
                                    </button>{" "}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tog_large();
                                        }}
                                        className="btn btn-success waves-effect waves-light "
                                        data-toggle="modal"
                                        data-target=".bs-example-modal-lg"
                                    >
                                        Large modal
                                    </button>{" "}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tog_small();
                                        }}
                                        className="btn btn-danger waves-effect waves-light"
                                        data-toggle="modal"
                                        data-target=".bs-example-modal-sm"
                                    >
                                        Small modal
                                    </button>{" "}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tog_fullscreen();
                                        }}
                                        className="btn btn-info "
                                        data-toggle="modal"
                                    >
                                        Full Screen
                                    </button>{" "}
                                </div>

                                <Modal
                                    size="xl"
                                    isOpen={modal_xlarge}
                                    toggle={() => {
                                        tog_xlarge();
                                    }}
                                >
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title mt-0"
                                            id="myExtraLargeModalLabel"
                                        >
                                            Extra large modal
                                        </h5>
                                        <button
                                            onClick={() => {
                                                setmodal_xlarge(false);
                                            }}
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p className="mb-0">
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                </Modal>
                                <Modal
                                    size="lg"
                                    isOpen={modal_large}
                                    toggle={() => {
                                        tog_large();
                                    }}
                                >
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title mt-0"
                                            id="myLargeModalLabel"
                                        >
                                            Large Modal
                                        </h5>
                                        <button
                                            onClick={() => {
                                                setmodal_large(false);
                                            }}
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p className="mb-0">
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                </Modal>
                                <Modal
                                    size="sm"
                                    isOpen={modal_small}
                                    toggle={() => {
                                        tog_small();
                                    }}
                                >
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title mt-0"
                                            id="mySmallModalLabel"
                                        >
                                            Small Modal
                                        </h5>
                                        <button
                                            onClick={() => {
                                                setmodal_small(false);
                                            }}
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p className="mb-0">
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                </Modal>

                                <Modal
                                    size="xl"
                                    isOpen={modal_fullscreen}
                                    toggle={() => {
                                        tog_fullscreen();
                                    }}
                                    className="modal-fullscreen"
                                >
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title mt-0"
                                            id="exampleModalFullscreenLabel"
                                        >
                                            Fullscreen Modal
                                        </h5>
                                        <button
                                            onClick={() => {
                                                setmodal_fullscreen(false);
                                            }}
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <h5>
                                            Overflowing text to show scroll behavior
                                        </h5>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                tog_fullscreen();
                                            }}
                                            className="btn btn-secondary "
                                            data-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary "
                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </Modal>
                            </div>
                        </div>

                        <Row className="mt-3">
                            <div className="col-xl-4 col-md-6">
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Vertically Centered
                                    </h5>
                                    <p className="card-title-desc">
                                        Add <code>.modal-dialog-centered</code> to{" "}
                                        <code>.modal-dialog</code> to vertically
                                        center the modal.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary "
                                    onClick={() => {
                                        tog_center();
                                    }}
                                    data-toggle="modal"
                                    data-target=".bs-example-modal-center"
                                >
                                    Center modal
                                </button>
                                <Modal
                                    isOpen={modal_center}
                                    toggle={() => {
                                        tog_center();
                                    }}
                                    centered={true}
                                >
                                    <div className="modal-header">
                                        <h5 className="modal-title mt-0">
                                            Center Modal
                                        </h5>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setmodal_center(false);
                                            }}
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p className="mb-0">
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                    </div>
                                </Modal>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <div className="mt-4">
                                    <h5 className="font-size-14">Scrollable</h5>
                                    <p className="card-title-desc">
                                        You can also create a scrollable modal that
                                        allows scroll the modal body by adding{" "}
                                        <code>.modal-dialog-scrollable</code> to{" "}
                                        <code>.modal-dialog</code>.
                                    </p>

                                    <button
                                        type="button"
                                        className="btn btn-primary "
                                        onClick={() => {
                                            tog_scroll();
                                        }}
                                        data-toggle="modal"
                                    >
                                        Scrollable modal
                                    </button>
                                </div>
                                <Modal
                                    isOpen={modal_scroll}
                                    toggle={() => {
                                        tog_scroll();
                                    }}
                                    scrollable={true}
                                >
                                    <div className="modal-header">
                                        <h5 className="modal-title mt-0">
                                            Scrollable modal
                                        </h5>
                                        <button
                                            type="button"
                                            onClick={() => setmodal_scroll(false)}
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet
                                            fermentum. Cras justo odio, dapibus ac
                                            facilisis in, egestas eget quam. Morbi leo
                                            risus, porta ac consectetur ac, vestibulum
                                            at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel
                                            scelerisque nisl consectetur et. Vivamus
                                            sagittis lacus vel augue laoreet rutrum
                                            faucibus dolor auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed
                                            consectetur. Praesent commodo cursus
                                            magna, vel scelerisque nisl consectetur
                                            et. Donec sed odio dui. Donec ullamcorper
                                            nulla non metus auctor fringilla.
                                        </p>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={() => setmodal_scroll(false)}
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                </Modal>
                            </div>

                            <div className="col-xl-4 col-md-6">
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Static Backdrop
                                    </h5>
                                    <p className="card-title-desc">
                                        When backdrop is set to static, the modal
                                        will not close when clicking outside it.
                                        Click the button below to try it.
                                    </p>

                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            tog_backdrop();
                                        }}
                                        data-toggle="modal"
                                    >
                                        Static backdrop modal
                                    </button>
                                    <Modal
                                        isOpen={modal_backdrop}
                                        toggle={() => {
                                            tog_backdrop();
                                        }}
                                        scrollable={true}
                                        id="staticBackdrop"
                                    >
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="staticBackdropLabel"
                                            >
                                                Modal title
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                onClick={() => {
                                                    setmodal_backdrop(false);
                                                }}
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>
                                                I will not close if you click outside
                                                me. Don't even try to press escape key.
                                            </p>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-light"
                                                onClick={() => {
                                                    setmodal_backdrop(false);
                                                }}
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                Understood
                                            </button>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Modals;