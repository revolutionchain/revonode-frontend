import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import PropTypes from 'prop-types';
import {
  Col,
  Container, Row,
  Modal,
  Input,
  Button
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

import Widget from './Widget';
import SalesAnalytics from './SalesAnalytics';
import EarningReports from './EarningReports';
import LatestTransactions from './LatestTransactions';
import LatestOrders from './LatestOrders';
import RecentUsers from './RecentUsers';

import { useSelector } from 'react-redux';


const Dashboard = props => {

  const [subscribemodal, setSubscribemodal] = useState(false)

  const isLogged = useSelector(state => state.Login.isLogged);

  function tog_standard() {
    setSubscribemodal(!setSubscribemodal)
  }

  const [nodeData, setNodeData] = useState(false);
  const [peersData, setPeersData] = useState(false);
  const [ipLocationData, setIpLocationData] = useState(false);

  useEffect(() => {
    if (!isLogged) {
      props.history.push('/login');
    }
    fetch(`http://${window.location.hostname}:3001/getdashboarddata`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
      .then(res => {
        setNodeData(res);
      });
    fetch(`http://${window.location.hostname}:3001/getpeers`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
      .then(res => {
        setPeersData(res);
      });
    fetch(`http://${window.location.hostname}:3001/getpeersip`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
      .then(res => {
        let ipArrData = [];
        res.map(e => {
          fetch(`https://ipapi.co/${e.query}/json/`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }).then(ipData => ipData.json())
          .then(ipRes => {
            ipArrData.push(ipRes);
          })

        })
        setIpLocationData(ipArrData);
        
      });

    setTimeout(() => {
      setSubscribemodal(true)
    }, 2000);
  }, [])

  return (
    <React.Fragment>
      {nodeData?.length && peersData?.length && <div className="page-content">
        {props.isTitle ?
          <MetaTags>
            <title>Preloader | Revo Node Manager</title>
          </MetaTags>
          :
          <MetaTags>
            <title>Dashboard | Revo Node Manager</title>
          </MetaTags>
        }

        <Container fluid>
          {/* Render Breadcrumb */}
          {props.isTitle ?
            <Breadcrumbs
              title={props.t("Pages")}
              breadcrumbItem={props.t("Preloader")}
            />
            :
            <Breadcrumbs
              title={props.t("Dashboard")}
              breadcrumbItem={props.t("Dashboard")}
            />
          }
          {/* import Widget */}
          <Widget nodeData={nodeData} />

          <Row>
            <SalesAnalytics nodeData={nodeData} />
            <EarningReports nodeData={nodeData} peersData={peersData} />
          </Row>
          <Row>
            <Col xl={10}>
              {ipLocationData && <LatestTransactions ipLocationData={ipLocationData} />}
            </Col>{/*
            <Col xl={6}>
              <LatestOrders />
        </Col>*/}
          </Row>{/*
          <RecentUsers />
      */}
        </Container>
      </div>
      }<Modal
        isOpen={subscribemodal}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setSubscribemodal(!subscribemodal)
        }}
      >
        <div className="modal-content bg-pattern">
          <div className="modal-header border-bottom-0">
            <button type="button" className="btn-close"
              onClick={() => {
                tog_standard()
              }}></button>
          </div>
          <div className="modal-body">
            <div className="text-center mb-4">
              <div className="avatar-md mx-auto mb-4">
                {/* style={{ backgroundColor:"#eff2f7" }}  */}
                <div className="avatar-title bg-light  rounded-circle text-primary h1">
                  <i className="fas fa-parachute-box"></i>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <h4 className="text-primary">Early Adopters Airdrop!</h4>
                  <p className="text-muted font-size-14 mb-4">Scan your personal NFC Revo tag, your code and send to enroll!</p>

                  <div className="input-group bg-light rounded">
                    <Input type="email" className="form-control bg-transparent border-0" placeholder="Write your code here!" />
                    <Button color="primary" type="button" id="button-addon2">
                      <i className="bx bxs-paper-plane"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Dashboard)