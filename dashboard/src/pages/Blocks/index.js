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
  const typedUser = useSelector(state => state.Login.userTyped);

  function farAway(seconds) {
    var numyears = (Math.floor(seconds / 31536000)) > 0 ? ((Math.floor(seconds / 31536000)) + ((Math.floor(seconds / 31536000)) > 1 ? " years, " : " year, ")) : "" ;
      var numdays = Math.floor((seconds % 31536000) / 86400) > 0 ? (Math.floor((seconds % 31536000) / 86400) + (Math.floor((seconds % 31536000) / 86400) > 1 ? " days, " : " day, ")) : "" ;
      var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600) > 0 ? (Math.floor(((seconds % 31536000) % 86400) / 3600) + (Math.floor(((seconds % 31536000) % 86400) / 3600) > 1 ? " hours, " : " hour, ")) : "" ;
      var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) > 0 ? (Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) + ( Math.floor((((seconds % 31536000) % 86400) % 3600) / 60) > 1 ? " minutes, " : " minute, ")) : "";
      var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);
      let result =  numyears + numdays + numhours + numminutes + numseconds + " seconds"
      return result;
    }

    const [lastestBlocks, setLastestBlocks] = useState(false);
    
    const [currentUrl, setCurrentUrl] = useState("");
    const getStatesData = () => {
  
        let url;
        if((window.location.hostname).includes("revo.host")){
          url = `https://${window.location.hostname}/api`
        }else {
          url = `http://${window.location.hostname}:3001/api`
        }
    
        setCurrentUrl(url);
      fetch(`${url}/getdashboarddata`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
      }).then(data => data.json())
        .then(res => {
          setNodeData(res);
        });    
        fetch(`${url}/getlastestblocks`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
        }).then(data => data.json())
          .then(res => {
            setLastestBlocks(res);
          });          
    }

  useEffect(() => {
    if (!isLogged) {
      return props.history.push('/login');
    }

    getStatesData();

    const interval = setInterval(() => {
      getStatesData();
    }, 30000);
  
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  
    
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
          {nodeData && lastestBlocks && <Widget nodeData={nodeData} farAway={farAway} lastestBlocks={lastestBlocks} />}
          {lastestBlocks && <BlocksData lastestBlocks={lastestBlocks} farAway={farAway} nodeData={nodeData} />}

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
