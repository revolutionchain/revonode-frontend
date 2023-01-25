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
import PeersData from './PeersData';


const Peers = props => {

  const [subscribemodal, setSubscribemodal] = useState(false)

  const isLogged = useSelector(state => state.Login.isLogged);

  function tog_standard() {
    setSubscribemodal(!setSubscribemodal)
  }

  const [nodeData, setNodeData] = useState(false);
  const [peersData, setPeersData] = useState(false);

  useEffect(() => {
    if (!isLogged) {
      props.history.push('/login');
    }
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

    setTimeout(() => {
      setSubscribemodal(true)
    }, 2000);
  }, [])

  return (
    <React.Fragment>
      {peersData?.length && <div className="page-content">
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
              breadcrumbItem={props.t("Peers")}
            />
          }
          {/* import Widget */}
          <Widget peersData={peersData} />
          <PeersData />

        </Container>
      </div>
      }
    </React.Fragment>
  );
}

Peers.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Peers)