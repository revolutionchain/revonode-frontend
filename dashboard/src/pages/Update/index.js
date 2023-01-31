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
import UpdateData from './UpdateData';


const Settings = props => {

  const isLogged = useSelector(state => state.Login.isLogged);

  useEffect(() => {
    if (!isLogged) {
      props.history.push('/login');
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
              breadcrumbItem={props.t("Update")}
            />
          }
          {/* import Widget */}
          {<UpdateData  />}

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
