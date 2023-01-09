import React, { useState } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import SalesAnalyticsChart from '../AllCharts/SalesAnalyticsChart';

const SalesAnalytics = props => {
    const [menu, setMenu] = useState(false)
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card className="card-height-100">
                    <CardBody>
                        <div className="float-end">
                            <Dropdown isOpen={menu}
                                toggle={() => setMenu(!menu)}>
                                <DropdownToggle className="dropdown-toggle text-reset" tag="a">
                                    <span className="fw-semibold">Sort By:</span> <span className="text-muted">Yearly<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>

                                <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                    <DropdownItem>Yearly</DropdownItem>
                                    <DropdownItem>Monthly</DropdownItem>
                                    <DropdownItem>Weekly</DropdownItem>
                                    <DropdownItem>Today</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <h4 className="card-title mb-4">Sales Analytics</h4>

                        <div className="mt-1">
                            <ul className="list-inline main-chart mb-0">
                                <li className="list-inline-item chart-border-left me-0 border-0">
                                    <h3 className="text-primary">$<span data-plugin="counterup">2,371</span><span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Income</span></h3>
                                </li>
                                <li className="list-inline-item chart-border-left me-0">
                                    <h3><span data-plugin="counterup">258</span><span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Sales</span>
                                    </h3>
                                </li>
                                <li className="list-inline-item chart-border-left me-0">
                                    <h3><span data-plugin="counterup">3.6</span>%<span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Conversation Ratio</span></h3>
                                </li>
                                <li className="list-inline-item chart-border-left me-0">
                                    <h3><span data-plugin="counterup">52</span>k<span className="text-muted d-inline-block fw-normal font-size-15 ms-3">Users</span></h3>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-3">
                            <SalesAnalyticsChart />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default SalesAnalytics;