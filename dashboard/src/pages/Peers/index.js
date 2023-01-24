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
        fetch(`https://ip-api.com/batch`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(res)
        }).then(data => data.json())
          .then(ipRes => {
            setIpLocationData(ipRes);
          })
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


          <div class="table-responsive">
            <table class="table mb-0 table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>IP</th>
                  <th>Country</th>
                  <th>ISP</th>
                  <th>Services</th>
                  <th>Age(h)</th>
                  <th>Client</th>
                  <th>Traffic (MB)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>79</td>
                  <td>FLAG + Argentina</td>
                  <td>Telecom Argentina S</td>
                  <td>NETWORK - WITNESS - NETWORK LIMITED</td>
                  <td>36.6</td>
                  <td>Revo-Mercury 0.22.1(Node Name)</td>
                  <td>1.4</td>
                </tr>
              </tbody>
            </table>
          </div>
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
        <div className="modal-content">
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
                  <p className="text-muted font-size-14 mb-4">Scan your personal NFC Revo tag to enroll!</p>

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