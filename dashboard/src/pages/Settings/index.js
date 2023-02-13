import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import PropTypes from 'prop-types';
import {
  Container
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";

import { useSelector } from 'react-redux';
import SettingsData from './SettingsData';


const Settings = props => {

  const isLogged = useSelector(state => state.Login.isLogged);
  const [wifiData, setWifiData] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const typedUser = useSelector(state => state.Login.userTyped);
  const [domainState, setDomainState] = useState({
    eth: "",
    wifi: ""
  })

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(async () => {
    let url;
    if((window.location.hostname).includes("revo.host")){
      url = `https://${window.location.hostname}/api`
    }else {
      url = `http://${window.location.hostname}:3001/api`
    }

    setCurrentUrl(url);
    if (!isLogged) {
      return props.history.push('/login');
    }

    fetch(`${url}/getdomain`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
    }).then(data => data.json())
      .then(res => {
        setDomainState(res);
      });       


    fetch(`${url}/getwificonfig`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
    }).then(data => data.text())
      .then(res => {
        if(!(res).includes("Error")){
          setWifiData(res);
        }else {
          setWifiData("Error");
        }
      });       

      
    
  }, [])

  return (
    <React.Fragment>
      {<div className="page-content">
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
              breadcrumbItem={props.t("Settings")}
            />
          }
          {/* import Widget */}
          {wifiData && <SettingsData wifiData={wifiData} domainState={domainState} loaded={loaded} setLoaded={setLoaded} />}

        </Container>
      </div>
      }
    </React.Fragment>
  );
}

Settings.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Settings)
