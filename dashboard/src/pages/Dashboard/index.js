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
import NodeInfo from './NodeInfo';
import WalletChainInfo from './WalletChainInfo';
import PeersInfo from './PeersInfo';

import { useSelector } from 'react-redux';


const Dashboard = props => {

  const [subscribemodal, setSubscribemodal] = useState(false)

  const isLogged = useSelector(state => state.Login.isLogged);
  const typedMail = useSelector(state => state.Login.userTyped.user);
  const typedUser = useSelector(state => state.Login.userTyped);

  function tog_standard() {
    setSubscribemodal(!setSubscribemodal)
  }

  function showUptime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);
    const remainingDays = days % 365;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    let output = "";
    if (years > 0) output += `${years} years`;
    if (remainingDays > 0) output += ` ${remainingDays} days`;
    if (remainingHours > 0) output += ` ${remainingHours} hours`;
    if (remainingMinutes > 0) output += ` ${remainingMinutes} minutes`;
    return output;
  }

  function farAway(seconds) {
    var numyears = (Math.floor(seconds / 31536000)) > 0 ? ((Math.floor(seconds / 31536000)) + ((Math.floor(seconds / 31536000)) > 1 ? " years, " : " year, ")) : "";
    var numdays = Math.floor((seconds % 31536000) / 86400) > 0 ? (Math.floor((seconds % 31536000) / 86400) + (Math.floor((seconds % 31536000) / 86400) > 1 ? " days, " : " day, ")) : "";
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600) > 0 ? (Math.floor(((seconds % 31536000) % 86400) / 3600) + (Math.floor(((seconds % 31536000) % 86400) / 3600) > 1 ? " hours, " : " hour, ")) : "";
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) > 0 ? (Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) + (Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) > 1 ? " minutes, " : " minute, ")) : "";
    var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
    let result = numyears + numdays + numhours + numminutes + numseconds + " seconds"
    return result;
  }

  const [nodeData, setNodeData] = useState(false);
  const [peersData, setPeersData] = useState(false);
  const [ipLocationData, setIpLocationData] = useState(false);
  const [publicIp, setPublicIp] = useState(false);


  const [currentUrl, setCurrentUrl] = useState("");

  const getStatesData = () => {
    if (!isLogged) {
      return props.history.push('/login');
    }
    let url;
    if ((window.location.hostname).includes("revo.host")) {
      url = `https://${window.location.hostname}/api`
    } else {
      url = `http://${window.location.hostname}:3001/api`
    }

    setCurrentUrl(url);
    let objData = {
      user: typedUser.user,
      pass: typedUser.pass,
    }

    fetch(`${url}/getdashboarddata`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.json())
      .then(res => {
        setNodeData(res);
      });
    fetch(`${url}/getpeers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.json())
      .then(res => {
        setPeersData(res);
      });
    fetch(`${url}/getpeersip`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.json())
      .then(res => {
        setIpLocationData(res);
      });
    fetch(`${url}/checktokenmail`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.text())
      .then(res => {
        if (res.includes("the mail has not been sent yet")) {
          setSubscribemodal(true)
        }
      });
    fetch(`${url}/showpublicip`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData)
    }).then(data => data.text())
      .then(res => {
        setPublicIp(res);
      });
  }

  useEffect(() => {
    document.body.classList.remove('bg-reglog');
    if (!isLogged) {
      return props.history.push('/login');
    }

    getStatesData();

    const interval = setInterval(() => {
      getStatesData();
    }, 30000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.


  }, [])

  const [modalData, setModalData] = useState({
    email: typedMail,
    token: ""
  }, [])


  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  function handleButton() {
    fetch(`${currentUrl}/sendtokenmail`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: modalData.email, token: modalData.token, user: typedUser.user, pass: typedUser.pass })
    }).then(data => data.text())
      .then(res => {
        if (res.includes("OK")) {
          setSuccessMsg("Enrollment succesfully! Your airdrop is incoming!");
        } else {
          setErrorMsg("You entered an invalid token!");
        }
      });
  }

  return (
    <React.Fragment>
      {nodeData?.length && peersData?.length && publicIp ? <div className="page-content">
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
          <Widget nodeData={nodeData} peersData={peersData} farAway={farAway} />

          <Row>
            <NodeInfo nodeData={nodeData} showUptime={showUptime} publicIp={publicIp} />
            <WalletChainInfo nodeData={nodeData} peersData={peersData} showUptime={showUptime} />
          </Row>
          <Row>
            <Col xl={10}>
              {ipLocationData && <PeersInfo ipLocationData={ipLocationData} />}
            </Col>{/*
            <Col xl={6}>
              <LatestOrders />
        </Col>*/}
          </Row>{/*
          <RecentUsers />
      */}
        </Container>
      </div> : <div style={{marginTop: "50vh"}} class="nb-spinner"></div>
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
                  <p className={errorMsg.length > 1 ? "font-size-14 mb-4 text-danger" : successMsg.length > 1 ? "text-primary font-size-14 mb-4" : "text-muted font-size-14 mb-4"}>{errorMsg.length > 1 ? errorMsg : successMsg.length > 1 ? successMsg : "Scan your personal NFC Revo tag to enroll!"} </p>

                  {errorMsg.length < 1 ? successMsg.length > 1 ? <div></div> : <div className="input-group bg-light rounded">
                    <Input type="text" name='token' value={modalData.token} onChange={(e) => setModalData({ ...modalData, token: e.target.value })} className="form-control bg-transparent border-0" placeholder="Write your code here!" />
                    <Button
                      color="primary"
                      onClick={() => {
                        handleButton()
                      }}
                      id="sa-success"
                    >
                      <i className="bx bxs-paper-plane"></i>
                    </Button>{/*<button onClick={handleButton} style={{backgroundColor: "rgba(var(--bs-primary-rgb),var(--bs-text-opacity)) !important"}} type="button" id="sa-success">
                      <i className="bx bxs-paper-plane"></i>
                    </button>
                    <Button color="primary" type="button" id="button-addon2">
                      
            </Button>*/}
                  </div> : <Button
                    color="primary"
                    onClick={() => {
                      setErrorMsg("")
                    }}
                    id="sa-success"
                  >
                    Try again!
                  </Button>}
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