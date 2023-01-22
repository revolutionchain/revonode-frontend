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
                <CardBody>
                    <CardTitle className="mb-4">Global Peer Distribution</CardTitle>
                    <hr />
                        <div className="d-flex mt-1 col-xl-12">
                            <div className="col-xl-6"></div>
                            {/*<MapChart ipLocationData={props.ipLocationData}/>*/}
                        </div>
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
