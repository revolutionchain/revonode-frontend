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
  const typedUser = useSelector(state => state.Login.userTyped);

  function timePassed(timestamp) {
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

  const [currentUrl, setCurrentUrl] = useState("");
  const getStatesData = () => {

      let url;
      if((window.location.hostname).includes("revo.host")){
        url = `https://${window.location.hostname}/api`
      }else {
        url = `http://${window.location.hostname}:3001/api`
      }
  
      setCurrentUrl(url);
    fetch(`${url}/getpeers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
    }).then(data => data.json())
      .then(res => {
        setPeersData(res);
      })
      .catch(err => setPeersData(false)); 
      fetch(`${url}/getpeersip`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
      }).then(data => data.json())
        .then(res => {        
          setIpLocationData(res);        
        })
        .catch(err => setIpLocationData(false));    
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
  
  }, [typedUser])

  return (
    <React.Fragment>
      {peersData?.length && ipLocationData ? <div className="page-content">
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
          {<Widget peersData={peersData} ipLocationData={ipLocationData} timePassed={timePassed} />}
          {<PeersData peersData={peersData} ipLocationData={ipLocationData} timePassed={timePassed} />}

        </Container>
      </div> : <div style={{marginTop: "50vh"}} class="nb-spinner"></div>
      }
    </React.Fragment>
  );
}

Peers.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Peers)