import React, { useState } from 'react';
import { Card, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledDropdown } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
//SimpleBar
import SimpleBar from "simplebar-react"

//import images
import user1 from '../../../assets/images/users/avatar-3.jpg'
import user2 from '../../../assets/images/users/avatar-4.jpg'
import user3 from '../../../assets/images/users/avatar-5.jpg'
import user4 from '../../../assets/images/users/avatar-7.jpg'

const ProfileTab = props => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <React.Fragment>
            <Card className="mb-0">
                <Nav tabs justified className="nav-tabs-custom" role="tablist">
                    <NavItem>
                        <NavLink
                            to="#"
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            <i className="mdi mdi-account-circle-outline font-size-20"></i>
                            <span className="d-none d-sm-block">About</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="#"
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            <i className="mdi mdi-clipboard-text-outline font-size-20"></i>
                            <span className="d-none d-sm-block">Tasks</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="#"
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}>
                            <i className="mdi mdi-email-outline font-size-20"></i>
                            <span className="d-none d-sm-block">Messages</span>
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent className="p-4" activeTab={activeTab}>
                    <TabPane id="about" role="tabpanel" tabId="1">
                        <div>
                            <div>
                                <h5 className="font-size-16 mb-4">Experience</h5>
                                <ul className="activity-feed mb-0 ps-2">
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <p className="text-muted mb-1">2019 - 2021</p>
                                            <h5 className="font-size-16">UI/UX Designer</h5>
                                            <p>Abc Company</p>
                                            <p className="text-muted">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual</p>
                                        </div>
                                    </li>
                                    <li className="feed-item">
                                        <div className="feed-item-list">
                                            <p className="text-muted mb-1">2017 - 2019</p>
                                            <h5 className="font-size-16">Graphic Designer</h5>
                                            <p>Xyz Company</p>
                                            <p className="text-muted">It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h5 className="font-size-16 mb-4">Projects</h5>

                                <div className="table-responsive">
                                    <table className="table table-nowrap table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Projects</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col" style={{ width: '120px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">01</th>
                                                <td><Link to="#" className="text-dark">Brand Logo Design</Link></td>
                                                <td>
                                                    18 Jan, 2021
                                                                    </td>
                                                <td>
                                                    <span className="badge badge-soft-primary font-size-12">Open</span>
                                                </td>
                                                <td>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle className="text-muted font-size-18 px-2" tag="a">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </DropdownToggle>

                                                        <DropdownMenu className="dropdown-menu-end">
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">02</th>
                                                <td><Link to="#" className="text-dark">Samply Admin</Link></td>
                                                <td>
                                                    06 Jan, 2021
                                                                    </td>
                                                <td>
                                                    <span className="badge badge-soft-primary font-size-12">Open</span>
                                                </td>
                                                <td>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle className="text-muted font-size-18 px-2" tag="a">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </DropdownToggle>

                                                        <DropdownMenu className="dropdown-menu-end">
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">03</th>
                                                <td><Link to="#" className="text-dark">Chat app Design</Link></td>
                                                <td>
                                                    28 Feb, 2021
                                                                    </td>
                                                <td>
                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle className="text-muted font-size-18 px-2" tag="a">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </DropdownToggle>

                                                        <DropdownMenu className="dropdown-menu-end">
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">04</th>
                                                <td><Link to="#" className="text-dark">Samply Landing</Link></td>
                                                <td>
                                                    13 Feb, 2021
                                                                    </td>
                                                <td>
                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle className="text-muted font-size-18 px-2" tag="a">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </DropdownToggle>

                                                        <DropdownMenu className="dropdown-menu-end">
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">05</th>
                                                <td><Link to="#" className="text-dark">Authentication Pages</Link></td>
                                                <td>
                                                    06 Feb, 2021
                                                                    </td>
                                                <td>
                                                    <span className="badge badge-soft-success font-size-12">Complete</span>
                                                </td>
                                                <td>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle className="text-muted font-size-18 px-2" tag="a">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </DropdownToggle>

                                                        <DropdownMenu className="dropdown-menu-end">
                                                            <DropdownItem>Action</DropdownItem>
                                                            <DropdownItem>Another action</DropdownItem>
                                                            <DropdownItem>Something else here</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane id="tasks" role="tabpanel" tabId="2">
                        <div>
                            <h5 className="font-size-16 mb-3">Active</h5>

                            <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '60px' }}>
                                                <div className="form-check font-size-16 text-center">
                                                    <input type="checkbox" className="form-check-input" id="tasks-activeCheck2" />
                                                    <label className="form-check-label" htmlFor="tasks-activeCheck2"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#" className="fw-bold text-dark">Ecommerce Product Detail</Link>
                                            </td>

                                            <td>27 Feb, 2021</td>
                                            <td style={{ width: '160px' }}><span className="badge badge-soft-primary font-size-12">Active</span></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check font-size-16 text-center">
                                                    <input type="checkbox" className="form-check-input" id="tasks-activeCheck1" />
                                                    <label className="form-check-label" htmlFor="tasks-activeCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#" className="fw-bold text-dark">Ecommerce Product</Link>
                                            </td>

                                            <td>26 Feb, 2021</td>
                                            <td><span className="badge badge-soft-primary font-size-12">Active</span></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="font-size-16 my-3">Upcoming</h5>

                            <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '60px' }}>
                                                <div className="form-check font-size-16 text-center">
                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck3" />
                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck3"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#" className="fw-bold text-dark">Chat app Page</Link>
                                            </td>

                                            <td>-</td>
                                            <td style={{ width: '160px' }}><span className="badge badge-soft-secondary font-size-12">Waiting</span></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check font-size-16 text-center">
                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck2" />
                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck2"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#" className="fw-bold text-dark">Email Pages</Link>
                                            </td>

                                            <td>04 Jan, 2021</td>
                                            <td><span className="badge badge-soft-primary font-size-12">Approved</span></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check font-size-16 text-center">
                                                    <input type="checkbox" className="form-check-input" id="tasks-upcomingCheck1" />
                                                    <label className="form-check-label" htmlFor="tasks-upcomingCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#" className="fw-bold text-dark">Contacts Profile Page</Link>
                                            </td>

                                            <td>-</td>
                                            <td><span className="badge badge-soft-secondary font-size-12">Waiting</span></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 className="font-size-16 my-3">Complete</h5>

                            <div className="table-responsive">
                                <table className="table table-nowrap table-centered">
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '60px' }}>
                                                <div className="form-check font-size-16 text-center">
                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck3" />
                                                    <label className="form-check-label" htmlFor="tasks-completeCheck3"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#" className="fw-bold text-dark">UI Elements</Link>
                                            </td>

                                            <td>27 Feb, 2021</td>
                                            <td style={{ width: '160px' }}><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check font-size-16 text-center">
                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck2" />
                                                    <label className="form-check-label" htmlFor="tasks-completeCheck2"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#" className="fw-bold text-dark">Authentication Pages</Link>
                                            </td>

                                            <td>27 Feb, 2021</td>
                                            <td><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check font-size-16 text-center">
                                                    <input type="checkbox" className="form-check-input" id="tasks-completeCheck1" />
                                                    <label className="form-check-label" htmlFor="tasks-completeCheck1"></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="#" className="fw-bold text-dark">Admin Layout</Link>
                                            </td>

                                            <td>26 Feb, 2021</td>
                                            <td><span className="badge badge-soft-success font-size-12">Complete</span></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane id="messages" role="tabpanel" tabId="3">
                        <div>
                            <SimpleBar style={{ maxHeight: '430px' }}>
                                <div className="me-3">
                                    <div className="d-flex align-items-start border-bottom py-4">
                                        <img className="me-2 rounded-circle avatar-xs" src={user1} alt="" />
                                        <div className="flex-1">
                                            <h5 className="font-size-15 mt-0 mb-1">Marion Walker <small className="text-muted float-end">1 hr ago</small></h5>
                                            <p className="text-muted">If several languages coalesce, the grammar of the resulting .</p>

                                            <Link to="#" className="text-muted font-13 d-inline-block"><i
                                                className="mdi mdi-reply"></i> Reply</Link>

                                            <div className="d-flex align-items-start mt-4">
                                                <img className="me-2 rounded-circle avatar-xs" src={user2} alt="" />
                                                <div className="flex-1">
                                                    <h5 className="font-size-15 mt-0 mb-1">Shanon Marvin <small className="text-muted float-end">1 hr ago</small></h5>
                                                    <p className="text-muted">It will be as simple as in fact, it will be Occidental. To it will seem like simplified .</p>


                                                    <Link to="#" className="text-muted font-13 d-inline-block">
                                                        <i className="mdi mdi-reply"></i> Reply
                                                                        </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start border-bottom py-4">
                                        <img className="me-2 rounded-circle avatar-xs" src={user3} alt="" />
                                        <div className="flex-1">
                                            <h5 className="font-size-15 mt-0 mb-1">Janice Morgan <small className="text-muted float-end">2 hrs ago</small></h5>
                                            <p className="text-muted">To achieve this, it would be necessary to have uniform pronunciation.</p>

                                            <Link to="#" className="text-muted font-13 d-inline-block"><i
                                                className="mdi mdi-reply"></i> Reply</Link>

                                        </div>
                                    </div>

                                    <div className="d-flex align-items-start border-bottom py-4">
                                        <img className="me-2 rounded-circle avatar-xs" src={user4} alt="" />
                                        <div className="flex-1">
                                            <h5 className="font-size-15 mt-0 mb-1">Patrick Petty <small className="text-muted float-end">3 hrs ago</small></h5>
                                            <p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit </p>

                                            <Link to="#" className="text-muted font-13 d-inline-block"><i
                                                className="mdi mdi-reply"></i> Reply</Link>

                                        </div>
                                    </div>
                                </div>
                            </SimpleBar>

                            <div className="border rounded mt-4">
                                <form action="#">
                                    <div className="px-2 py-1 bg-light">

                                        <div className="btn-group" role="group">
                                            <button type="button" className="btn btn-sm btn-link text-dark"><i className="mdi mdi-link-variant"></i></button>
                                            <button type="button" className="btn btn-sm btn-link text-dark"><i className="mdi mdi-emoticon-excited-outline"></i></button>
                                            <button type="button" className="btn btn-sm btn-link text-dark"><i className="mdi mdi-at"></i></button>
                                        </div>

                                        <div className="float-end">
                                            <button type="button" className="btn btn-sm btn-link text-dark"><i className="mdi mdi-send"></i></button>

                                        </div>

                                    </div>
                                    <textarea rows="3" className="form-control border-0 resize-none" placeholder="Your Message..."></textarea>

                                </form>
                            </div>
                        </div>
                    </TabPane>
                </TabContent>
            </Card>
        </React.Fragment>
    );
}

export default ProfileTab;