import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import PropTypes from 'prop-types';
import {
  Col,
  Container, Row,
  Modal,
  Input,
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

  function tog_standard() {
    setSubscribemodal(!setSubscribemodal)
  }
  
  function showUptime(seconds) {
    const timestamp = seconds + (new Date("1970-01-01")).getTime() / 1000;
    const currentTime = Date.now() / 1000;
    const timeDiff = currentTime - timestamp;
    const yearsPassed = Math.floor(timeDiff / 31536000);
    const remainingTime = timeDiff % 31536000;
    const daysPassed = Math.floor(remainingTime / 86400);
    const hoursPassed = Math.floor((remainingTime % 86400) / 3600);
    const minutesPassed = Math.floor((remainingTime % 3600) / 60);
    let output = '';
    if(yearsPassed > 0){
       output += `${yearsPassed} Years `
    }
    if (daysPassed > 0 || yearsPassed > 0) {
        output += `${daysPassed} Days `;
    }
    if (hoursPassed > 0 || daysPassed > 0 || yearsPassed > 0) {
        output += `${hoursPassed} Hours `;
    }
    if (minutesPassed > 0 || hoursPassed > 0 || daysPassed > 0 || yearsPassed > 0) {
        output += `${minutesPassed} Minutes `;
    }
    return output;
}


  const [nodeData, setNodeData] = useState(false);
  const [peersData, setPeersData] = useState(false);
  const [ipLocationData, setIpLocationData] = useState(false);

  useEffect(() => {
    document.body.classList.remove('bg-reglog');
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
        setIpLocationData(res);        
      });
      fetch(`http://${window.location.hostname}:3001/checktokenmail`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(data => data.text())
        .then(res => {        
          if(res.includes("the mail has not been sent yet")){
            setSubscribemodal(true)
          }
        });

  }, [])

  const [ modalData, setModalData ] = useState({
    email: typedMail,
    token: ""
  })


  const [ errorMsg, setErrorMsg ] = useState("");
  const [ successMsg, setSuccessMsg ] = useState("");

  function handleButton() {
    fetch(`http://${window.location.hostname}:3001/sendtokenmail`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: modalData.email, token: modalData.token })
    }).then(data => data.text())
      .then(res => {  
        if(res.includes("OK")){
          setSuccessMsg("Enrollment succesfully! Your airdrop is incoming!");
        } else {
          setErrorMsg("You entered an invalid token!");
        }
      });
  }

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
          <Widget nodeData={nodeData} showUptime={showUptime} />

          <Row>
            <NodeInfo nodeData={nodeData} showUptime={showUptime} />
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
                  <p className={errorMsg.length > 1 ? "font-size-14 mb-4 text-danger" : successMsg.length > 1 ? "text-primary font-size-14 mb-4" : "text-muted font-size-14 mb-4"}>{errorMsg.length > 1 ? errorMsg : successMsg.length > 1 ? successMsg : "Scan your personal NFC Revo tag to enroll!"} </p>

                  { errorMsg.length < 1 ? successMsg.length > 1 ? <div></div> : <div className="input-group bg-light rounded">
                    <Input type="text" name='token' value={modalData.token} onChange={(e)=> setModalData({...modalData, token: e.target.value})} className="form-control bg-transparent border-0" placeholder="Write your code here!" />
                    <button onClick={handleButton} color="primary" type="button" id="button-addon2">
                      <i className="bx bxs-paper-plane"></i>
                    </button>{/*
                    <Button color="primary" type="button" id="button-addon2">
                      
            </Button>*/}
                  </div> : <button onClick={() => setErrorMsg("")} color="primary" type="button" id="button-addon2">Try again!</button>}
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