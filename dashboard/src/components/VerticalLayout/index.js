import PropTypes from "prop-types";
import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  changeLayoutWidth,
  showRightSidebarAction,
  changelayoutMode,
} from "../../store/actions";

// Layout Related Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Rightbar from "../CommonForBoth/Rightbar";
import classNames from "classnames";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleMenuCallback = this.toggleMenuCallback.bind(this);
    this.hideRightbar = this.hideRightbar.bind(this);
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  componentDidMount() {
    //init body click event fot toggle rightbar
    document.body.addEventListener("click", this.hideRightbar, true);
    
    if (!this.props.isLogged) {
      return this.props.history.push('/login');
    }

    if (this.props.isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }

    // Scroll Top to 0
    window.scrollTo(0, 0);
    // let currentage = this.capitalizeFirstLetter(this.props.location.pathname)

    // document.title =
    //   currentage + " | Revo Node Manager"
    
    if (this.props.layoutMode) {
      this.props.changelayoutMode(this.props.layoutMode);
    }
    if (this.props.leftSideBarTheme) {
      this.props.changeSidebarTheme(this.props.leftSideBarTheme);
    }

    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth);
    }

    if (this.props.leftSideBarType) {
      this.props.changeSidebarType(this.props.leftSideBarType);
    }
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme);
    }
  }
  toggleMenuCallback = () => {
    if (this.props.leftSideBarType === "default") {
      this.props.changeSidebarType("condensed", this.state.isMobile);
    } else if (this.props.leftSideBarType === "condensed") {
      this.props.changeSidebarType("default", this.state.isMobile);
    }
  };

  
  tToggle = () => {
    /*
      set logic for changing sidebar
    */
    if (document.body.clientWidth >= 993) {
      //desktop view
      if (this.props.leftSideBarType === "default") {
        this.props.changeSidebarType("small");
      } else if (this.props.leftSideBarType === "small" || this.props.leftSideBarType === "compact") {
        this.props.changeSidebarType("default");
      }
    } else {
      //mobile view
      document.body.classList.toggle("sidebar-enable");
      this.props.changeSidebarType("default");
    }
  }

  //hides right sidebar on body click
  hideRightbar = (event) => {
    var rightbar = document.getElementById("right-bar");
    //if clicked in inside right bar, then do nothing
    if (rightbar && rightbar.contains(event.target)) {
      return;
    } else {
      //if clicked in outside of rightbar then fire action for hide rightbar
      this.props.showRightSidebarAction(false);
    }
  };

  componentWillUnmount() {
    //make sure to remove body click event fot toggle rightbar
    document.body.removeEventListener("click", this.hideRightbar, true);
  }

  render() {
    const isUIpath = window.location.pathname === "/ui-components";
    return (
      <React.Fragment>
        <div id="preloader">
          <div id="status">
            <div className="spinner-chase">
              <div className="chase-dot" />
              <div className="chase-dot" />
              <div className="chase-dot" />
              <div className="chase-dot" />
              <div className="chase-dot" />
              <div className="chase-dot" />
            </div>
          </div>
        </div>

        <div id="layout-wrapper">
          <Header toggleMenuCallback={this.toggleMenuCallback} history={this.props.history} />
          {this.props.userTyped?.user && <Sidebar
            type={this.props.leftSideBarType}
            isMobile={this.state.isMobile}
            typedUser={this.props.userTyped}
            tToggle={this.tToggle}
    />}

          <div
            className={classNames(
              { "main-content overflow-visible": isUIpath },
              { "main-content": !isUIpath }
            )}
          >
            {this.props.children}
          </div>

          <Footer history={this.props.history} />
        </div>
        {this.props.showRightSidebar ? <Rightbar /> : null}
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  changeLayoutWidth: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  layoutMode : PropTypes.any,
  leftSideBarType: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any,
};

const mapStatetoProps = (state) => {
  return {
    ...state.Layout,
    ...state.Login
  };
};
export default connect(mapStatetoProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  changelayoutMode,
  changeLayoutWidth,
  showRightSidebarAction,
})(withRouter(Layout));
