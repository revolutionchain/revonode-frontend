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

  function secondsToString(seconds) {
    var numyears = (Math.floor(seconds / 31536000)) > 0 ? ((Math.floor(seconds / 31536000)) + ((Math.floor(seconds / 31536000)) > 1 ? " years, " : " year, ")) : "" ;
    var numdays = Math.floor((seconds % 31536000) / 86400) > 0 ? (Math.floor((seconds % 31536000) / 86400) + (Math.floor((seconds % 31536000) / 86400) > 1 ? " days, " : " day, ")) : "" ;
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600) > 0 ? (Math.floor(((seconds % 31536000) % 86400) / 3600) + (Math.floor(((seconds % 31536000) % 86400) / 3600) > 1 ? " hours, " : " hour, ")) : "" ;
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) > 0 ? (Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) + ( Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) > 1 ? " minutes, " : " minute, ")) : "";
    var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
    let result =  numyears + numdays + numhours + numminutes + numseconds + " seconds"
    return result;
  
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
          {ipLocationData && <Widget peersData={peersData} ipLocationData={ipLocationData} secondsToString={secondsToString} />}
          {ipLocationData && <PeersData peersData={peersData} ipLocationData={ipLocationData} secondsToString={secondsToString} />}

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