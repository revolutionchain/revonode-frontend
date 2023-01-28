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

import Widget from './Widget';

import { useSelector } from 'react-redux';
import BlocksData from './BlocksData';


const Blocks = props => {

  const isLogged = useSelector(state => state.Login.isLogged);

  const [nodeData, setNodeData] = useState(false);

  function farAway(seconds) {
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
      fetch(`http://${window.location.hostname}:3001/getlastestblocks`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(data => data.json())
        .then(res => {
          console.log(res);
        });    
    
  }, [])

  return (
    <React.Fragment>
      {nodeData?.length && <div className="page-content">
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
              breadcrumbItem={props.t("Blocks")}
            />
          }
          {/* import Widget */}
          <Widget nodeData={nodeData} farAway={farAway} />
          <BlocksData />

        </Container>
      </div>
      }
    </React.Fragment>
  );
}

Blocks.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Blocks)