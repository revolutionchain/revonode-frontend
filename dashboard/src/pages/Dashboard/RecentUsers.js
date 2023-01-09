import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getRecentUsers } from "../../store/actions";

const RecentUsers = (props) => {
  const { recentUsers, onGetRecentUsers } = props;
  useEffect(() => {
    onGetRecentUsers();
  }, [onGetRecentUsers]);

  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <div className="float-end">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-2">
                    <UncontrolledDropdown>
                      <DropdownToggle className="text-reset" tag="a">
                        <span className="text-muted">Status:</span>{" "}
                        <span className="fw-semibold">
                          Active<i className="mdi mdi-chevron-down ms-1"></i>
                        </span>
                      </DropdownToggle>

                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem className="dropdown-item" href="#">
                          Active
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" href="#">
                          Blocked
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                  <li className="list-inline-item">
                    <UncontrolledDropdown className="ms-3">
                      <DropdownToggle className="text-reset" tag="a">
                        <span className="text-muted">Sort By:</span>{" "}
                        <span className="fw-semibold">
                          Name<i className="mdi mdi-chevron-down ms-1"></i>
                        </span>
                      </DropdownToggle>

                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>ID</DropdownItem>
                        <DropdownItem>Job title</DropdownItem>
                        <DropdownItem>Name</DropdownItem>
                        <DropdownItem>Location</DropdownItem>
                        <DropdownItem>Email</DropdownItem>
                        <DropdownItem>Phone</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </div>

              <h4 className="card-title mb-4">Recent Users</h4>
              <div className="table-responsive">
                <table className="table table-hover table-borderless align-middle table-centered table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Job title</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th colSpan="2">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((recentUsers, key) => (
                      <tr key={key}>
                        <td>{recentUsers.id}</td>
                        <td>
                          <img
                            src={recentUsers.avatar}
                            alt="user"
                            className="rounded-circle h-auto avatar-xs me-2"
                          />
                          <span>{recentUsers.name}</span>
                        </td>
                        <td>{recentUsers.jobTitle}</td>
                        <td>{recentUsers.email}</td>
                        <td>{recentUsers.phone}</td>
                        <td>
                          <span className={"badge bg-" + recentUsers.statusColor + " bg-soft text-" + recentUsers.statusColor}>
                            {recentUsers.status}
                          </span>
                        </td>
                        <td>{recentUsers.location}</td>
                        <td>
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="text-muted font-size-16"
                              tag="a"
                              role="button"
                            >
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
                    ))}

                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

RecentUsers.propTypes = {
  recentUsers: PropTypes.array,
  onGetRecentUsers: PropTypes.func,
};

const mapStateToProps = ({ Dashboard }) => ({
  recentUsers: Dashboard.recentUsers,
});

const mapDispatchToProps = (dispatch) => ({
  onGetRecentUsers: () => dispatch(getRecentUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentUsers);
