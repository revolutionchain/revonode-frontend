import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

import user from '../../../assets/images/users/avatar-4.jpg';

const LeftSidebarProfile = () => {
    return (
        <React.Fragment>
            <Card className="h-100">
                <CardBody>
                    <div>
                        <UncontrolledDropdown className="float-end">
                            <DropdownToggle className="text-body font-size-18" tag="a">
                                <i className="mdi mdi-dots-vertical"></i>
                            </DropdownToggle>

                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Remove</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <div className="clearfix"></div>

                        <div className="text-center bg-pattern">
                            <img src={user} alt="" className="avatar-xl img-thumbnail rounded-circle mb-3" />
                            <h4 className="text-primary mb-2">Marcus Johne</h4>
                            <h5 className="text-muted font-size-13 mb-3">UI/UX Designer</h5>
                            <div className="text-center">
                                <Link to="#" className="btn btn-success me-2 waves-effect waves-light btn-sm"><i className="mdi mdi-email-outline me-1"></i>Send Mail</Link>{" "}
                                <Link to="#" className="btn btn-primary waves-effect waves-light btn-sm"><i className="mdi mdi-phone-outline me-1"></i>PhoneCall</Link>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <h5 className="font-size-16">About</h5>
                        <p className="">Hi I'm Marcus,has been the industry's standard dummy text To an English person, it will seem like
                            simplified.</p>
                        <ul className="ps-3">
                            <li>it will seem like simplified.</li>
                            <li>To achieve this, it would be necessary to have uniform pronunciation</li>
                        </ul>
                    </div>

                    <hr className="my-4" />

                    <div className="">
                        <h5 className="font-size-16">My Skills</h5>
                        <div className="mt-3">
                            <span className="badge badge-soft-dark font-size-12 me-2">Javascript</span>{" "}
                            <span className="badge badge-soft-dark font-size-12 me-2">HTML</span>{" "}
                            <span className="badge badge-soft-dark font-size-12 me-2">Laravel</span>{" "}
                            <span className="badge badge-soft-dark font-size-12 me-2">Angular</span>{" "}
                            <span className="badge badge-soft-dark font-size-12 me-2">Android</span>{" "}
                            <span className="badge badge-soft-dark font-size-12 me-2">Bootstrap</span>{" "}
                        </div>
                    </div>

                    <hr className="my-4" />
                    <div className="table-responsive">
                        <h5 className="font-size-16">Personal Information</h5>

                        <div>
                            <p className="mb-1 text-muted">Mobile :</p>
                            <h5 className="font-size-14">012-234-5678</h5>
                        </div>
                        <div className="mt-3">
                            <p className="mb-1 text-muted">E-mail :</p>
                            <h5 className="font-size-14">marcus@samply.com</h5>
                        </div>
                        <div className="mt-3">
                            <p className="mb-1 text-muted">Location :</p>
                            <h5 className="font-size-14">California, United States</h5>
                        </div>

                    </div>

                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default LeftSidebarProfile;