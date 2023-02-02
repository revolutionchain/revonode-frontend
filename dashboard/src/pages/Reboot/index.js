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
import RebootData from './RebootData';


const Reboot = props => {

  const isLogged = useSelector(state => state.Login.isLogged);

  useEffect(() => {
    if (!isLogged) {
      return props.history.push('/login');
    }
    
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
              breadcrumbItem={props.t("Reboot")}
            />
          }
          {/* import Widget */}
          {<RebootData  />}

        </Container>
      </div>
      }
    </React.Fragment>
  );
}

Reboot.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Reboot)
