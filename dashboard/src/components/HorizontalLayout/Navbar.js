import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"

const Navbar = props => {
  const [app, setapp] = useState(false)
  const [email, setemail] = useState(false)
  const [component, setcomponent] = useState(false)
  const [form, setform] = useState(false)
  const [table, settable] = useState(false)
  const [icon, seticon] = useState(false)
  const [extra, setextra] = useState(false)
  const [auth, setauth] = useState(false)

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })
  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <i className="bx bxs-dashboard me-2"></i><span>{props.t("Dashboard")}</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ui-components">
                    <i className="bx bx-briefcase me-2"></i><span>{props.t("UI Elements")}</span>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      setapp(!app)
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bxs-grid me-2"></i>
                    {props.t("Advanced Kit")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <Link to="/advanced-sweet-alert" className="dropdown-item">
                      {props.t("Sweet-Alert")}
                    </Link>
                    <Link to="/advanced-rangeslider" className="dropdown-item">
                      {props.t("Range Slider")}
                    </Link>
                    <Link to="/advanced-notifications" className="dropdown-item">
                      {props.t("Notifications")}
                    </Link>
                    <Link to="/advanced-carousel" className="dropdown-item">
                      {props.t("Carousel")}
                    </Link>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setcomponent(!component)
                    }}
                  >
                    <i className="bx bxs-cube-alt me-2"></i>
                    {props.t("Apps")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: component })}
                  >
                    <Link to="calendar" className="dropdown-item" key="t-calendar">{props.t("Calendar")}</Link>
                    <Link to="chat" className="dropdown-item" key="t-chat">{props.t("Chat")}</Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setemail(!email)
                        }}
                      >
                        {props.t("Email")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="/email-inbox" className="dropdown-item">
                          {props.t("Inbox")}
                        </Link>
                        <Link to="/email-read" className="dropdown-item">
                          {props.t("Read Email")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      setauth(!auth)
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bx-file me-2"></i>
                    {props.t("Extra pages")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: auth })}>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setauth(!auth)
                        }}
                      >
                        {props.t("Authentication")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: auth })}
                      >
                        <Link to="/pages-login" className="dropdown-item">
                          {props.t("Login")}
                        </Link>
                        <Link to="/pages-register" className="dropdown-item">
                          {props.t("Register")}
                        </Link>
                        <Link to="/pages-recoverpw" className="dropdown-item">
                          {props.t("Recover Password")}
                        </Link>
                        <Link to="/pages-lock-screen" className="dropdown-item">
                          {props.t("Lock Screen")}
                      </Link>
                        <Link to="/pages-confirm-mail" className="dropdown-item">
                          {props.t("Confirm Mail")}
                        </Link>
                        <Link to="/pages-email-verification" className="dropdown-item">
                          {props.t("Email verification")}
                        </Link>
                        <Link to="/pages-two-step-verification" className="dropdown-item">
                          {props.t("Two step verification")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setauth(!auth)
                        }}
                      >
                        {props.t("Utility")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: auth })}
                      >
                        <Link to="/pages-starter" className="dropdown-item">
                          {props.t("Starter Page")}
                        </Link>
                        <Link to="/pages-preloader" className="dropdown-item">
                          {props.t("Preloader")}
                        </Link>
                        <Link to="/pages-profile" className="dropdown-item">
                          {props.t("Profile")}
                        </Link>
                        <Link to="/pages-invoice" className="dropdown-item">
                          {props.t("Invoice")}
                        </Link>
                        <Link to="/pages-maintenance" className="dropdown-item">
                          {props.t("Maintenance")}
                        </Link>
                        <Link to="/pages-comingsoon" className="dropdown-item">
                          {props.t("Coming Soon")}
                        </Link>
                        <Link to="/pages-timeline" className="dropdown-item">
                          {props.t("Timeline")}
                        </Link>
                        <Link to="/pages-pricing" className="dropdown-item">
                          {props.t("Pricing")}
                        </Link>
                        <Link to="/pages-404" className="dropdown-item">
                          {props.t("Error 404")}
                        </Link>
                        <Link to="/pages-500" className="dropdown-item">
                          {props.t("Error 500")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)
