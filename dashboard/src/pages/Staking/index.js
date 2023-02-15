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
import StakingData from './StakingData';


const Staking = props => {

  const isLogged = useSelector(state => state.Login.isLogged);  

  const [nodeData, setNodeData] = useState(false);
  const [listunspentState, setListunspentState] = useState(false);
  const typedUser = useSelector(state => state.Login.userTyped);

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
      fetch(`${url}/listunspent`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
      }).then(data => data.json())
        .then(res => {        
          setListunspentState(res);        
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
      {nodeData?.length && listunspentState ? <div className="page-content">
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
              breadcrumbItem={props.t("Staking")}
            />
          }
          {/* import Widget */}
          {<Widget nodeData={nodeData} listunspentState={listunspentState} />}
          {<StakingData listunspentState={listunspentState} nodeData={nodeData} />}

        </Container>
      </div> : <div style={{marginTop: "50vh"}} class="nb-spinner"></div>
      }
    </React.Fragment>
  );
}

Staking.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Staking)