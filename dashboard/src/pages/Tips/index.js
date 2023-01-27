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
import WalletData from './TipsData';


const Wallet = props => {

  const isLogged = useSelector(state => state.Login.isLogged);

  const [nodeData, setNodeData] = useState(false);

  useEffect(() => {
    if (!isLogged) {
      props.history.push('/login');
    }

    //request api things here
           
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
              breadcrumbItem={props.t("Tips")}
            />
          }
          {/* import Widget */}
          <Widget nodeData={nodeData} />
          <TipsData />

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