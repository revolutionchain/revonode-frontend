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
import WalletData from './WalletData';


const Wallet = props => {

  const isLogged = useSelector(state => state.Login.isLogged);

  const [nodeData, setNodeData] = useState(false);
  const [listtransactions, setListtransactions] = useState(false);
  const [walletAddress, setWalletAddress] = useState(false);

  const getStatesData = () => {
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
      
      fetch(`http://${window.location.hostname}:3001/listtransactions`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(data => data.json())
        .then(res => {        
          setListtransactions(res);        
        }); 
        fetch(`http://${window.location.hostname}:3001/getwalletaddress`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.text())
    .then(res => {
      setWalletAddress(res);
    })
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
              breadcrumbItem={props.t("Wallet")}
            />
          }
          {/* import Widget */}
          <Widget nodeData={nodeData} />
          {listtransactions && <WalletData listtransactions={listtransactions} walletAddress={walletAddress} />}

        </Container>
      </div>
      }
    </React.Fragment>
  );
}

Wallet.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Wallet)