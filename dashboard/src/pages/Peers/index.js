import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import PropTypes from 'prop-types';
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

import Widget from './Widget';

import { useSelector } from 'react-redux';
import PeersData from './PeersData';

const Peers = props => {

  const isLogged = useSelector(state => state.Login.isLogged);

  const [peersData, setPeersData] = useState(false);
  const [ipLocationData, setIpLocationData] = useState(false);

  function timePassed(unixtimestamp) {
    const currentTime = Date.now() / 1000;
    const timeDiff = currentTime - unixtimestamp;
    const daysPassed = Math.floor(timeDiff / 86400);
    const minutesPassed = Math.floor((timeDiff % 86400) / 60);
    return `${daysPassed} days and ${minutesPassed} minutes`;
  }

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
          {ipLocationData && <Widget peersData={peersData} ipLocationData={ipLocationData} timePassed={timePassed} />}
          {ipLocationData && <PeersData peersData={peersData} ipLocationData={ipLocationData} timePassed={timePassed} />}

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