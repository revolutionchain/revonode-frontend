import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Tooltip } from 'reactstrap';


// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logoSm from "../../assets/images/revo-light.svg";
import logoSmLight from "../../assets/images/revo-light.svg";
import logoDark from "../../assets/images/revo-light.svg";
import logoLight from "../../assets/images/revo-light.svg";

//i18n
import { withTranslation } from "react-i18next";

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions";

const Header = (props) => {
  const [search, setsearch] = useState(false);

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  function tToggle() {
    /*
      set logic for changing sidebar
    */
    if (document.body.clientWidth >= 993) {
      //desktop view
      if (props.leftSideBarType === "default") {
        props.changeSidebarType("small");
      } else if (props.leftSideBarType === "small" || props.leftSideBarType === "compact") {
        props.changeSidebarType("default");
      }
    } else {
      //mobile view
      document.body.classList.toggle("sidebar-enable");
      props.changeSidebarType("default");
    }
  }
  
  const [walletAddress, setWalletAddress] = useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  useEffect(()=> {
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
  },[])

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div style={{alignItems: `flex-start`}} className="navbar-header">
          <div className="d-flex">
            <div style={props.leftSideBarType === "default" ? {height: `100px`} : {height: `70px`}} className="navbar-brand-box d-none d-md-none d-lg-block">
              <span className="logo logo-dark">
                <span className="logo-sm" style={props.leftSideBarType === "default" ? {} : {marginLeft: `-20px`}}>{
                  props.leftSideBarType === "default" ? <img src={logoSm} alt="" height="22" /> : <img src={logoSm} alt="" height="22" width="60" />                  
                  }
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="23" />
                </span>
              </span>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm" style={props.leftSideBarType === "default" ? {} : {marginLeft: `-20px`}}>{
                  props.leftSideBarType === "default" ? <img style={{maxHeight: `50px`, marginTop: `30px`}} src={logoSmLight} alt="" /> : <img src={logoSmLight} alt="" height="22" width="60" />                  
                  }
                </span>
                <span className="logo-lg" style={props.leftSideBarType === "default" ? {} : {marginLeft: `-20px`}}>{
                  props.leftSideBarType === "default" ? <img style={{maxHeight: `50px`, marginTop: `30px`}} src={logoLight} alt="" /> : <img src={logoLight} alt="" height="22" width="60" />                  
                  }
                </span>
              </Link>              
            </div>
            <button
              type="button"
              onClick={() => {
                tToggle();
              }}
              className="btn btn-sm px-3 font-size-16 header-item "
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            <form style={{display: `flex`, alignItems: `center`}} className="font-size-16 header-item">
              <div className="position-relative">              
              <h4 style={{ marginBottom: `0`}}>Node Manager</h4>
              {/*
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}
                />
                <span className="mdi mdi-magnify" />*/}
              </div>
            </form>
          </div>
          <div className="d-flex">
            {/*<div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => {
                  setsearch(!search);
                }}
                type="button"
                className="btn header-item noti-icon"
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  search
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <button className="btn btn-primary" type="submit">
                        <i className="mdi mdi-magnify" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>*/}

            {/*<LanguageDropdown />*/}

            <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen();
                }}
                className="btn header-item noti-icon "
                data-toggle="fullscreen"
              >
                <i className="mdi mdi-fullscreen" />
              </button>
            </div>

{walletAddress && <div className="dropdown d-none d-lg-inline-block ms-1"><div style={{ height: "100%", display: "flex", alignItems: "center" 
}}>
  <CopyToClipboard text={`${walletAddress}`}
                        onCopy={() => { }}>
                        <button className="btn btn-outline-success " id="CopyTooltip" >{walletAddress}</button>
                    </CopyToClipboard>
        <Tooltip placement="bottom" isOpen={tooltipOpen} target="CopyTooltip" toggle={()=> setTooltipOpen(!tooltipOpen)}>
          Click to copy
        </Tooltip>
</div></div>}

            {/*<NotificationDropdown />*/}
            
            <ProfileMenu walletAddress={walletAddress} />
{/*
            <div
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar);
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div>*/}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } =
    state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header));
