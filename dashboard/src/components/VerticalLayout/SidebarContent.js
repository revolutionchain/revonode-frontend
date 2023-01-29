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

            <li>
              <Link to="/tips" className="waves-effect">
                <i className='bx bx bxs-rocket'></i>
                <span key="t-ui-elements">{props.t("Tips")}</span>
              </Link>
            </li>           
            
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
