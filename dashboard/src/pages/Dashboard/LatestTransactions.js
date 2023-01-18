import React, { useEffect } from "react"
import { Card, CardBody, CardTitle, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getLatestTransaction } from "../../store/actions";
import MapChart from "./MapChart";

const LatestTranaction = (props) => {

    const { latestTransaction, onLatestTransactions } = props;

    useEffect(() => {
        onLatestTransactions();
    }, [onLatestTransactions]);

    return (
        <React.Fragment>
            <Card>
                <CardBody>{/*
                    <div className="float-end">
                        <UncontrolledDropdown>
                            <DropdownToggle className="text-reset" tag="a" id="dropdownMenuButton3">
                                <span className="fw-semibold">Sort By:</span> <span className="text-muted">Recent<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </DropdownToggle>

                            <DropdownMenu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                                <DropdownItem>Maximum</DropdownItem>
                                <DropdownItem>Recent</DropdownItem>
                                <DropdownItem>Minimum</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>*/}
                    <CardTitle className="mb-4">Global Peer Distribution</CardTitle>
                        <div className="mt-1 col-xl-12">
                            <div className="col-xl-6"></div>
                            <MapChart ipLocationData={props.ipLocationData}/>
                        </div>{/*
                    <div className="table-responsive">
                        <table className="table align-middle table-striped table-nowrap mb-0">
                            <tbody>
                                {latestTransaction.map((users, key) => (
                                    <tr key={key}>
                                        <td>
                                            <img src={users.avatar} alt=""
                                                className="avatar-xs rounded-circle me-2" />
                                            {users.name}
                                        </td>
                                        <td><i className={"mdi mdi-checkbox-blank-circle text-" + users.statusColor}></i> {users.status}
                                        </td>
                                        <td>
                                            ${users.price}
                                        </td>
                                        <td>
                                            {users.date}
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-light btn-sm waves-effect"> <i className='mdi mdi-square-edit-outline me-1'></i> Edit</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>*/}
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

LatestTranaction.propTypes = {
    latestTransaction: PropTypes.array,
    onLatestTransactions: PropTypes.func,
};

const mapStateToProps = ({ Dashboard }) => ({
    latestTransaction: Dashboard.latestTransaction,
});

const mapDispatchToProps = (dispatch) => ({
    onLatestTransactions: () => dispatch(getLatestTransaction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestTranaction);
