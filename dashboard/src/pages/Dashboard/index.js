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


const Dashboard = props => {

  const [subscribemodal, setSubscribemodal] = useState(false)

  function tog_standard() {
    setSubscribemodal(!setSubscribemodal)
  }

  useEffect(() => {
    setTimeout(() => {
      setSubscribemodal(true)
    }, 2000);
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        {props.isTitle ?
          <MetaTags>
            <title>Preloader | Samply - React Admin & Dashboard Template</title>
          </MetaTags>
          :
          <MetaTags>
            <title>Dashboard | Samply - React Admin & Dashboard Template</title>
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
          <Widget />

          <Row>
            <SalesAnalytics />
            <EarningReports />
          </Row>
          <Row>
            <Col xl={6}>
              <LatestTransactions />
            </Col>
            <Col xl={6}>
              <LatestOrders />
            </Col>
          </Row>
          <RecentUsers />
        </Container>
      </div>
      <Modal
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
                  <i className="mdi mdi-email-open"></i>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <h4 className="text-primary">Subscribe !</h4>
                  <p className="text-muted font-size-14 mb-4">Subscribe our newletter and get notification to stay update.</p>

                  <div className="input-group bg-light rounded">
                    <Input type="email" className="form-control bg-transparent border-0" placeholder="Enter Email address" />
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