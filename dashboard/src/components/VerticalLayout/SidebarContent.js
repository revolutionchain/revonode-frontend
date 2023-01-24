import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname, activateParentDropdown])

  useEffect(() => {
    ref.current.recalculate()
  }, []);

  const scrollElement = (item) => {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>{/*
            <li>
              <Link to="/dashboard">
                <i className='bx bxs-dashboard'></i>
                <span key="t-dashboard">{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li className="menu-title mt-3">More</li>*/}
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className='bx bxs-dashboard'></i>
                <span key="t-ui-elements">{props.t("Dashboard")}</span>
              </Link>
            </li>
            
            <li>
              <Link to="/staking" className="waves-effect">
                <i className='mdi mdi-pickaxe'></i>
                <span key="t-ui-elements">{props.t("Staking")}</span>
              </Link>
            </li>

            <li>
              <Link to="/wallet" className="waves-effect">
                <i className='bx bx-wallet'></i>
                <span key="t-ui-elements">{props.t("Wallet")}</span>
              </Link>
            </li>

            <li>
              <Link to="/transactions" className="waves-effect">
                <i className='bx bx-transfer'></i>
                <span key="t-ui-elements">{props.t("Transactions")}</span>
              </Link>
            </li>
                   
            
            <li>
              <Link to="/blocks" className="waves-effect">
                <i className='bx bxs-component'></i>
                <span key="t-ui-elements">{props.t("Blocks")}</span>
              </Link>
            </li>
            
            
            <li>
              <Link to="/peers" className="waves-effect">
                <i className='bx bx-radar'></i>
                <span key="t-ui-elements">{props.t("Peers")}</span>
              </Link>
            </li>
            
            {/*

            <li>
              <Link to="/#" className="waves-effect">
                <span className="badge rounded-pill bg-success float-end">9</span>
                <i className='bx bx-user-circle' ></i>
                <span>{props.t("Authentication")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/pages-login">{props.t("Login")}</Link></li>
                <li><Link to="/pages-register">{props.t("Register")}</Link></li>
                <li><Link to="/pages-recoverpw">{props.t("Recover Password")}</Link></li>
                <li><Link to="/pages-lock-screen">{props.t("Lock Screen")}</Link></li>
                <li><Link to="/pages-confirm-mail">{props.t("Confirm Mail")}</Link></li>
                <li><Link to="/pages-email-verification">{props.t("Email Verification")}</Link></li>
                <li><Link to="/pages-two-step-verification">{props.t("Two Step Verification")}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className='bx bx-file'></i>
                <span>{props.t("Pages")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/pages-starter">{props.t("Starter Page")}</Link></li>
                <li><Link to="/pages-preloader">{props.t("Preloader")}</Link></li>
                <li><Link to="/pages-profile">{props.t("Profile")}</Link></li>
                <li><Link to="/pages-invoice">{props.t("Invoice")}</Link></li>
                <li><Link to="/pages-maintenance">{props.t("Maintenance")}</Link></li>
                <li><Link to="/pages-comingsoon">{props.t("Coming Soon")}</Link></li>
                <li><Link to="/pages-timeline">{props.t("Timeline")}</Link></li>
                <li><Link to="/pages-pricing">{props.t("Pricing")}</Link></li>
                <li><Link to="/pages-404">{props.t("Error 404")}</Link></li>
                <li><Link to="/pages-500">{props.t("Error 500")}</Link></li>
              </ul>
            </li>

            <li className="menu-title mt-3" key="t-adminkit">{props.t("Admin Kit")}</li>

            <li>
              <Link to="/ui-components" className="waves-effect">
                <i className='bx bx-briefcase'></i>
                <span key="t-ui-elements">{props.t("UI Elements")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className='bx bxs-cube-alt'></i>
                <span>{props.t("Advanced Kit")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/advanced-sweet-alert">{props.t("Sweet-Alert")}</Link></li>
                <li><Link to="/advanced-rangeslider">{props.t("Range Slider")}</Link></li>
                <li><Link to="/advanced-notifications">{props.t("Notifications")}</Link></li>
                <li><Link to="/advanced-carousel">{props.t("Carousel")}</Link></li>
              </ul>
            </li>

            

            <li>
              <Link to="/#" className="waves-effect">
                <i className='bx bxs-magic-wand' ></i>
                <span className="badge rounded-pill bg-danger float-end">2</span>
                <span>{props.t("Forms")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/form-elements">{props.t("Form Elements")}</Link></li>
                <li><Link to="/form-advanced">{props.t("Form Advanced")}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className='bx bx-table' ></i>
                <span>{props.t("Tables")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/tables-basic">{props.t("Bootstrap Tables")}</Link></li>
                <li><Link to="/tables-datatable">{props.t("Data Tables")}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/charts" className="waves-effect">
                <i className='bx bx-doughnut-chart' ></i>
                <span key="t-charts">{props.t("Charts")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className='bx bx-layer' ></i>
                <span key="t-icons">{props.t("Icons")}</span>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/icons-boxicons">{props.t("Boxicons")}</Link></li>
                <li><Link to="/icons-materialdesign">{props.t("Material Design")}</Link></li>
                <li><Link to="/icons-dripicons">{props.t("Dripicons")}</Link></li>
                <li><Link to="/icons-fontawesome">{props.t("Font Awesome 5")}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/maps" className="waves-effect">
                <i className='bx bx-map'></i>
                <span key="t-maps">{props.t("Maps")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow ">
                <i className="bx bx-share-alt"></i>
                <span>{props.t("Multi Level")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/#">{props.t("Level 1.1")}</Link>
                </li>
                <li>
                  <Link to="/#" className="has-arrow">
                    {props.t("Level 1.2")}
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/#">{props.t("Level 2.1")}</Link>
                    </li>
                    <li>
                      <Link to="/#">{props.t("Level 2.2")}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>*/}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
