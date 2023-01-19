import React from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import logoDark from '../../assets/images/logo-dark.png';

const Invoice = props => {
    const printInvoice = () => {
        window.print()
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Invoice | Revo Node Manager</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Pages" breadcrumbItem="Invoice" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div className="invoice-title">
                                        <h4 className="float-end font-size-16">Order # 12345</h4>
                                        <div className="mb-4">
                                            <img src={logoDark} alt="logo" height="24" />
                                        </div>
                                    </div>

                                    <Row>
                                        <Col sm={6}>
                                            <address>
                                                <strong>Billed To:</strong><br />
                                                    John Smith<br />
                                                    1234 Main<br />
                                                    Apt. 4B<br />
                                                    Springfield, ST 54321
                                                </address>
                                        </Col>
                                        <Col sm={6} className="text-sm-end">
                                            <address className="mt-2 mt-sm-0">
                                                <strong>Shipped To:</strong><br />
                                                    Kenny Rigdon<br />
                                                    1234 Main<br />
                                                    Apt. 4B<br />
                                                    Springfield, ST 54321
                                                </address>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} className="mt-3">
                                            <address>
                                                <strong>Payment Method:</strong><br />
                                                    Visa ending **** 4242<br />
                                                    jsmith@email.com
                                                </address>
                                        </Col>
                                        <Col sm={6} className="mt-3 text-sm-end">
                                            <address>
                                                <strong>Order Date:</strong><br />
                                                    January 16, 2021<br /><br />
                                            </address>
                                        </Col>
                                    </Row>
                                    <div className="py-2 mt-3">
                                        <h3 className="font-size-15 font-weight-bold">Order summary</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-nowrap">
                                            <thead className="table-light">
                                                <tr>
                                                    <th style={{ width: '70px' }}>No.</th>
                                                    <th>Item</th>
                                                    <th className="text-end">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td>Samply - Admin Dashboard Template</td>
                                                    <td className="text-end">$499.00</td>
                                                </tr>

                                                <tr>
                                                    <td>02</td>
                                                    <td>Samply - Landing Template</td>
                                                    <td className="text-end">$399.00</td>
                                                </tr>

                                                <tr>
                                                    <td>03</td>
                                                    <td>Samply - Admin Dashboard Template</td>
                                                    <td className="text-end">$499.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2" className="text-end">
                                                        <strong>Sub Total</strong>
                                                    </td>
                                                    <td className="text-end">$1397.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2" className="border-0 text-end">
                                                        <strong>Shipping</strong></td>
                                                    <td className="border-0 text-end">$13.00</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2" className="border-0 text-end">
                                                        <strong>Total</strong></td>
                                                    <td className="border-0 text-end"><h4 className="m-0">$1410.00</h4></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-print-none">
                                        <div className="float-end">
                                            <Link to="#" onClick={printInvoice} className="btn btn-success waves-effect waves-light me-1"><i className="fa fa-print"></i></Link>{" "}
                                            <Link to="#" className="btn btn-primary w-md waves-effect waves-light">Send</Link>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Invoice;