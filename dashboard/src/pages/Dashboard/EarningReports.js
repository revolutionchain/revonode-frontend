import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';

//import images 
import widget from '../../assets/images/widget-img.png';
import ApexRadial from '../AllCharts/ApexRadial';

function EarningReports(props) {
    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="bg-pattern">
                    <CardBody>
                        <Row className="align-items-center">
                            <Col sm={8}>
                                <div className="avatar-xs mb-3">
                                    <span className="avatar-title rounded-circle bg-light font-size-24">
                                        <i className="mdi mdi-bullhorn-outline text-primary"></i>
                                    </span>
                                </div>
                                <p className="font-size-18">Enhance your <b>Campaign</b> for better outreach <i className="mdi mdi-arrow-right"></i></p>
                                <div className="mt-4">
                                    <Link to="/pages-pricing" className="btn btn-success waves-effect waves-light">Upgrade Account!</Link>
                                </div>
                            </Col>
                            <div className="col-sm-4">
                                <div className="mt-4 mt-sm-0">
                                    <img src={widget} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <div className="float-end">
                            <UncontrolledDropdown>
                                <DropdownToggle className="text-reset" tag="a" id="dropdownMenuButton2">
                                    <span className="fw-semibold">Report By:</span> <span className="text-muted">Monthly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem>Yearly</DropdownItem>
                                    <DropdownItem>Monthly</DropdownItem>
                                    <DropdownItem>Weekly</DropdownItem>
                                    <DropdownItem>Today</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>

                        <h4 className="card-title mb-4">Earning Reports</h4>
                        <Row>
                            <Col sm={6}>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <p className="text-muted mb-1">This Month</p>
                                        <h5 className="mt-0">$12,582<small className="badge badge-light-success font-13">+15%</small></h5>
                                    </Col>

                                    <Col xs={6}>
                                        <p className="text-muted mb-1">Last Month</p>
                                        <h5 className="mt-0">$98,741 <small className="badge badge-light-danger font-13">-5%</small></h5>
                                    </Col>
                                </Row>
                                <p className="text-muted"><span className="text-success me-1"> 12%<i className="mdi mdi-arrow-up"></i></span>From previous period</p>

                                <div className="mt-4">
                                    <Link to="#" className="btn btn-primary waves-effect waves-light btn-sm">Generate Reports <i className="mdi mdi-arrow-right ms-1"></i></Link>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="mt-4 mt-sm-0">
                                    <ApexRadial />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

            </Col>
        </React.Fragment>
    );
}

export default EarningReports;