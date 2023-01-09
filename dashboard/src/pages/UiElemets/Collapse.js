import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Col, Row, Collapse } from 'reactstrap';

const Collapses = () => {
    const [col5, setcol5] = useState(true);
    const [col6, setcol6] = useState(true);
    const [col7, setcol7] = useState(true);


    const t_col5 = () => {
        setcol5(!col5);
    };

    const t_col6 = () => {
        setcol6(!col6);
    };

    const t_col7 = () => {
        setcol7(!col7);
    };

    const t_col8 = () => {
        setcol6(!col6);
        setcol7(!col7);
    };
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="collapse">
                    <CardBody>
                        <CardTitle className="h4 mb-0">Collapse</CardTitle>
                        <Row>
                            <Col xl="6">
                                <div className="mt-4">
                                    <h5 className="font-size-14">Example</h5>
                                    <p className="card-title-desc">
                                        You can use a link with the{" "}
                                        <code className="highlighter-rouge">href</code>{" "}
                                        attribute, or a button with the{" "}
                                        <code className="highlighter-rouge">data-target</code>{" "}
                                        attribute. In both cases, the{" "}
                                        <code className="highlighter-rouge">
                                            {" "}
                                            data-toggle=&quot;collapse&ldquo;
                                        </code>{" "}
                                        is required.
                                    </p>

                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                        <Link
                                            to="#"
                                            onClick={t_col5}
                                            style={{ cursor: "pointer" }}
                                            className="btn btn-primary mo-mb-2"
                                        >
                                            Link with href{" "}
                                        </Link>
                                        <button
                                            onClick={t_col5}
                                            className="btn btn-primary mo-mb-2"
                                            type="button"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Button with data-target
                                        </button>
                                    </div>
                                    <Collapse isOpen={col5}>
                                        <Card>
                                            <CardBody>
                                                Anim pariatur cliche reprehenderit, enim eiusmod
                                                high life accusamus terry richardson ad squid.
                                                Nihil anim keffiyeh helvetica, craft beer labore
                                                wes anderson cred nesciunt sapiente ea proident.
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Col>
                            <Col xl="6">
                                <div className="mt-4">
                                    <h5 className="font-size-14">Multiple targets</h5>
                                    <p className="card-title-desc">
                                        A <code>&lt;button&gt;</code> or{" "}
                                        <code>&lt;a&gt;</code> can show and hide multiple
                                        elements by referencing them with a selector in its{" "}
                                        <code>href</code> or <code>data-bs-target</code>{" "}
                                        attribute.
                                    </p>

                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                        <Link
                                            to="#"
                                            onClick={t_col6}
                                            style={{ cursor: "pointer" }}
                                            className="btn btn-primary"
                                        >
                                            Toggle first element
                                        </Link>
                                        <button
                                            onClick={t_col7}
                                            className="btn btn-primary"
                                            type="button"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Toggle second element
                                        </button>

                                        <button
                                            onClick={t_col8}
                                            className="btn btn-primary"
                                            type="button"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Toggle both element
                                        </button>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Collapse isOpen={col6}>
                                                <Card>
                                                    <CardBody className="border shadow-none text-muted mb-0">
                                                        Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high life accusamus terry richardson
                                                        ad squid. Nihil anim keffiyeh helvetica, craft
                                                        beer labore wes anderson cred nesciunt
                                                        sapiente ea proident.
                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>
                                        <div className="col">
                                            <Collapse isOpen={col7}>
                                                <Card>
                                                    <CardBody className="border shadow-none text-muted mb-0">
                                                        Anim pariatur cliche reprehenderit, enim
                                                        eiusmod high life accusamus terry richardson
                                                        ad squid. Nihil anim keffiyeh helvetica, craft
                                                        beer labore wes anderson cred nesciunt
                                                        sapiente ea proident.
                                                    </CardBody>
                                                </Card>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Collapses;