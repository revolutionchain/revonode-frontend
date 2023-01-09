import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

class Buttons extends Component {
    render() {
        return (
            <React.Fragment>
                <Col lg={12}>
                    <Card id="buttons">
                        <CardBody>
                            <h4 className="card-title mb-4">Buttons</h4>
                            <div>
                                <h5 className="font-size-14">Basic</h5>
                                <p className="card-title-desc">
                                    Bootstrap includes six predefined button styles,
                                    each serving its own semantic purpose..
                                </p>
                                <div className="button-items">
                                    <button
                                        type="button"
                                        className="btn btn-primary waves-effect waves-light"
                                    >
                                        Primary
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-light waves-effect"
                                    >
                                        Light
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-success waves-effect waves-light"
                                    >
                                        Success
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-info waves-effect waves-light"
                                    >
                                        Info
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-warning waves-effect waves-light"
                                    >
                                        Warning
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-danger waves-effect waves-light"
                                    >
                                        Danger
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-dark waves-effect waves-light"
                                    >
                                        Dark
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-link waves-effect"
                                    >
                                        Link
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-secondary waves-effect waves-light"
                                    >
                                        Secondary
                                    </button>{" "}
                                </div>
                            </div>
                            <Row className="mt-3">
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <h5 className="font-size-14">Outline</h5>
                                        <p className="card-title-desc">
                                            Replace the default modifier classes with
                                            the{" "}
                                            <code className="highlighter-rouge">
                                                .btn-outline-*
                                            </code>{" "}
                                            ones to remove all background images and
                                            colors on any button.
                                        </p>

                                        <div className="button-items">
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary waves-effect waves-light"
                                            >
                                                Primary
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary waves-effect"
                                            >
                                                Secondary
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-outline-success waves-effect waves-light"
                                            >
                                                Success
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-outline-info waves-effect waves-light"
                                            >
                                                Info
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning waves-effect waves-light"
                                            >
                                                Warning
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger waves-effect waves-light"
                                            >
                                                Danger
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-outline-dark waves-effect waves-light"
                                            >
                                                Dark
                                            </button>{" "}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <h5 className="font-size-14">Rounded</h5>
                                        <p className="card-title-desc">
                                            Use class <code>.btn-rounded</code> for
                                            button round.
                                        </p>

                                        <div className="button-items">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-rounded waves-effect waves-light"
                                            >
                                                Primary
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-secondary btn-rounded waves-effect waves-light"
                                            >
                                                Secondary
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-success btn-rounded waves-effect waves-light"
                                            >
                                                Success
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-info btn-rounded waves-effect waves-light"
                                            >
                                                Info
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-rounded waves-effect waves-light"
                                            >
                                                Warning
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-danger btn-rounded waves-effect waves-light"
                                            >
                                                Danger
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-rounded waves-effect waves-light"
                                            >
                                                Dark
                                            </button>{" "}
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <h5 className="font-size-14">Sizes</h5>
                                        <p className="card-title-desc">
                                            Add <code>.btn-lg</code> or{" "}
                                            <code>.btn-sm</code> for additional sizes.
                                        </p>

                                        <div className="button-items">
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-lg waves-effect waves-light"
                                            >
                                                Large button
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-warning btn-sm waves-effect waves-light"
                                            >
                                                Small button
                                            </button>{" "}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mt-4">
                                        <h5 className="font-size-14">Width</h5>
                                        <p className="card-title-desc">
                                            Add <code>.w-xs</code>, <code>.w-sm</code>,{" "}
                                            <code>.w-md</code> and <code> .w-lg</code>{" "}
                                            class for additional buttons width.
                                        </p>

                                        <div className="button-items">
                                            <button
                                                type="button"
                                                className="btn btn-primary w-xs waves-effect waves-light"
                                            >
                                                Xs
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-danger w-sm waves-effect waves-light"
                                            >
                                                Small
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-warning w-md waves-effect waves-light"
                                            >
                                                Medium
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-success w-lg waves-effect waves-light"
                                            >
                                                Large
                                            </button>{" "}
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col lg={6}>
                                    <div className="mt-4">
                                        <h5 className="font-size-14">Tags</h5>
                                        <p className="card-title-desc">
                                            The <code>.btn </code>
                                            classes are designed to be used with the{" "}
                                            <code>&lt;button&gt;</code> element.
                                            However, you can also use these classes on{" "}
                                            <code>&lt;a&gt;</code> or{" "}
                                            <code>&lt;input&gt;</code> elements (though
                                            some browsers may apply a slightly different
                                            rendering).
                                        </p>

                                        <div className="button-items">
                                            <Link
                                                className="btn btn-primary waves-effect waves-light"
                                                to="#"
                                                role="button"
                                            >
                                                Link
                                            </Link>{" "}
                                            <button
                                                className="btn btn-success waves-effect waves-light"
                                                type="submit"
                                            >
                                                Button
                                            </button>{" "}
                                            <input
                                                className="btn btn-info"
                                                type="button"
                                                value="Input"
                                            />{" "}
                                            <input
                                                className="btn btn-danger"
                                                type="submit"
                                                value="Submit"
                                            />{" "}
                                            <input
                                                className="btn btn-warning"
                                                type="reset"
                                                value="Reset"
                                            />{" "}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </React.Fragment>
        );
    }
}

export default Buttons;