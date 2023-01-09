import React, { useEffect } from 'react';
import { Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Loader from "../../components/Common/Loader"

import { getLatestOrders } from "../../store/actions";

function LatestOrders(props) {
    const { latestOrders, onLatestOrders, loading } = props;

    useEffect(() => {
        onLatestOrders();
    }, [onLatestOrders]);

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="float-end">
                        <UncontrolledDropdown>
                            <DropdownToggle className="text-reset" tag="a" id="dropdownMenuButton4">
                                <span className="text-muted">Status:</span> <span className="fw-semibold">All<i className="mdi mdi-chevron-down ms-1"></i></span>
                            </DropdownToggle>

                            <DropdownMenu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton4">
                                <DropdownItem>All</DropdownItem>
                                <DropdownItem>Delivered</DropdownItem>
                                <DropdownItem>Shipped</DropdownItem>
                                <DropdownItem>Cancelled</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>

                    <h4 className="card-title mb-4">Latest Orders</h4>
                    {
                        loading ?
                            <Loader loading={loading} />
                            :
                            <div className="table-responsive">
                                <table className="table align-middle table-striped table-nowrap mb-0">
                                    <tbody>
                                        {latestOrders.map((orders, key) => (
                                            <tr key={key}>
                                                <td>{orders.id}</td>
                                                <td>
                                                    <img src={orders.image} alt="" style={{ height: '32px' }} className="rounded me-2" />
                                                    {orders.name}
                                                </td>
                                                <td><span className={"badge rounded-pill bg-" + orders.statusColor + " bg-soft text-" + orders.statusColor}>{orders.status}</span></td>
                                                <td>
                                                    ${orders.price}
                                                </td>
                                                <td>
                                                    {orders.date}
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-light btn-sm waves-effect"> <i className='mdi mdi-square-edit-outline me-1'></i> Edit</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                    }

                </CardBody>
            </Card>
        </React.Fragment>
    );
}

LatestOrders.propTypes = {
    latestOrders: PropTypes.array,
    loading: PropTypes.bool,
    onLatestOrderss: PropTypes.func,
};

const mapStateToProps = ({ Dashboard }) => ({
    latestOrders: Dashboard.latestOrders,
    loading: Dashboard.loading
});

const mapDispatchToProps = (dispatch) => ({
    onLatestOrders: () => dispatch(getLatestOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LatestOrders);

