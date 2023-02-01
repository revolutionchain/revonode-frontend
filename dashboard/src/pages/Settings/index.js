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

  useEffect(() => {
    if (!isLogged) {
      props.history.push('/login');
    }


    fetch(`http://${window.location.hostname}:3001/getwificonfig`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.text())
      .then(res => {
        if(!(res).includes("Error")){
          setWifiData(res);
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
          {<SettingsData wifiData={wifiData} />}

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
