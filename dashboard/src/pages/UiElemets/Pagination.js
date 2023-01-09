import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody, Col, Row } from 'reactstrap';

const Pagination = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <div className="card overflow-hidden" id="pagination">
                    <CardBody>
                        <h4 className="card-title mb-4">Pagination</h4>

                        <Row>
                            <Col lg={6}>
                                <div className="">
                                    <h5 className="font-size-14">Basic</h5>
                                    <p className="card-title-desc">
                                        Pagination links indicate a series of
                                        related content exists across multiple
                                        pages.
                                    </p>

                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#">
                                                    Previous
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    Next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>

                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination mb-0">
                                            <li className="page-item">
                                                <Link
                                                    className="page-link"
                                                    to="#"
                                                    aria-label="Previous"
                                                >
                                                    &lt;
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link className="page-link" to="#">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link
                                                    className="page-link"
                                                    to="#"
                                                    aria-label="Next"
                                                >
                                                    &gt;
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4 mt-lg-0">
                                    <h5 className="font-size-14">Custom</h5>
                                    <p className="card-title-desc">
                                        Add <code>.pagination-rounded</code> with{" "}
                                        <code>.pagination</code> class for rounded
                                        pagination.
                                    </p>

                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination pagination-rounded mb-0">
                                            <li className="page-item">
                                                <Link
                                                    className="page-link"
                                                    to="#"
                                                    aria-label="Previous"
                                                >
                                                    <i className="mdi mdi-chevron-left"></i>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link className="page-link" to="#">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link
                                                    className="page-link"
                                                    to="#"
                                                    aria-label="Next"
                                                >
                                                    <i className="mdi mdi-chevron-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">Sizing</h5>
                                    <p className="card-title-desc">
                                        Add <code>.pagination-lg</code> or{" "}
                                        <code>.pagination-sm</code> for pagination
                                        additional sizes.
                                    </p>

                                    <nav aria-label="...">
                                        <ul className="pagination pagination-lg">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#">
                                                    Previous
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    Next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>

                                    <nav aria-label="...">
                                        <ul className="pagination pagination-sm mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#">
                                                    Previous
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" to="#">
                                                    Next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </div>
            </Col>
        </React.Fragment>
    );
}

export default Pagination;