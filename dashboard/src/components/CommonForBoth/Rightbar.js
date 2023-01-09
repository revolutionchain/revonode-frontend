import React from "react"
import PropTypes from 'prop-types'

import { connect } from "react-redux"
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changeLayoutPosition,
  changePreloader,
  changeTopbarTheme,
  changelayoutMode,
  showRightSidebarAction,
} from "../../store/actions"

//SimpleBar
import SimpleBar from "simplebar-react"

import { Link } from "react-router-dom"

const RightSidebar = props => {
  return (
    <React.Fragment>
      <div className="right-bar" id="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center bg-dark p-3">
              <h5 className="m-0 me-2 text-white">Theme Customizer</h5>
              <Link
                to="#"
                onClick={e => {
                  e.preventDefault()
                  props.showRightSidebarAction(false)
                }}
                className="right-bar-toggle ms-auto"
              >
                <i className="mdi mdi-close noti-icon"></i>
              </Link>
            </div>

            <hr className="m-0" />

            <div className="p-4">
              <h6 className="mb-3">Layouts</h6>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="radioVertical"
                  name="radioFruit"
                  value="vertical"
                  className="form-check-input"
                  checked={props.layoutType === "vertical"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayout(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioVertical" className="form-check-label">Vertical</label>
              </div>
              {"   "}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="radioHorizontal"
                  name="radioFruit"
                  value="horizontal"
                  className="form-check-input"
                  checked={props.layoutType === "horizontal"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayout(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioHorizontal" className="form-check-label">Horizontal</label>
              </div>
              <h6 className="mt-4 mb-3">Layout Mode</h6>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value="light"
                  className="form-check-input"
                  checked={props.layoutMode === "light"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changelayoutMode(e.target.value)
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="radioThemeLight">Light</label>
              </div>
              {"   "}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value="dark"
                  className="form-check-input"
                  checked={props.layoutMode === "dark"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changelayoutMode(e.target.value)
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="radioThemeDark">Dark</label>
              </div>

              <h6 className="mt-4 mb-3">Layout Width</h6>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value="fluid"
                  className="form-check-input"
                  checked={props.layoutWidth === "fluid"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayoutWidth(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioFluid" className="form-check-label">Fluid</label>
              </div>
              {"   "}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value="boxed"
                  className="form-check-input"
                  checked={props.layoutWidth === "boxed"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayoutWidth(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioBoxed" className="form-check-label">Boxed</label>
              </div>
              <h6 className="mt-4 mb-3">Layout Position</h6>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="layout-position-fixed"
                  name="layout-position"
                  value={false}
                  className="form-check-input"
                  checked={props.layoutPosition === "false"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayoutPosition(e.target.value)
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="layout-position-fixed">Fixed</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="layout-position-scrollable"
                  name="layout-position"
                  value={true}
                  className="form-check-input"
                  checked={props.layoutPosition === "true"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeLayoutPosition(e.target.value)
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="layout-position-scrollable">Scrollable</label>
              </div>


              <h6 className="mt-4 mb-3">Topbar Color</h6>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="topbar-color-light"
                  name="topbar-color"
                  value="light"
                  className="form-check-input"
                  checked={props.topbarTheme === "light"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeTopbarTheme(e.target.value)
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="topbar-color-light">Light</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="topbar-color-dark"
                  name="topbar-color"
                  value="dark"
                  className="form-check-input"
                  checked={props.topbarTheme === "dark"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeTopbarTheme(e.target.value)
                    }
                  }}
                />
                <label className="form-check-label" htmlFor="topbar-color-dark">Dark</label>
              </div>
              {props.layoutType === "vertical" ? (
                <React.Fragment>
                  <h6 className="mt-4 mb-3 sidebar-setting">Sidebar Size</h6>

                  <div className="form-check sidebar-setting">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sidebar-size"
                      id="sidebar-size-default"
                      value="default"
                      checked={props.leftSideBarType === "default"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value)
                        }
                      }} />
                    <label className="form-check-label" htmlFor="sidebar-size-default">Default</label>
                  </div>
                  <div className="form-check sidebar-setting">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sidebar-size"
                      id="sidebar-size-compact"
                      value="compact"
                      checked={props.leftSideBarType === "compact"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value)
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor="sidebar-size-compact">Compact</label>
                  </div>
                  <div className="form-check sidebar-setting">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sidebar-size"
                      id="sidebar-size-small"
                      value="small"
                      checked={props.leftSideBarType === "small"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarType(e.target.value)
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor="sidebar-size-small">Small (Icon View)</label>
                  </div>
                  <h6 className="mt-4 mb-3 sidebar-setting">Sidebar Color</h6>

                  <div className="form-check sidebar-setting">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sidebar-color"
                      id="sidebar-color-light"
                      value="light"
                      checked={props.leftSideBarTheme === "light"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme(e.target.value)
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor="sidebar-color-light">Light</label>
                  </div>
                  <div className="form-check sidebar-setting">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sidebar-color"
                      id="sidebar-color-dark"
                      value="dark"
                      checked={props.leftSideBarTheme === "dark"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme(e.target.value)
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor="sidebar-color-dark">Dark</label>
                  </div>
                  <div className="form-check sidebar-setting">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sidebar-color"
                      id="sidebar-color-brand"
                      value="brand"
                      checked={props.leftSideBarTheme === "brand"}
                      onChange={e => {
                        if (e.target.checked) {
                          props.changeSidebarTheme(e.target.value)
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor="sidebar-color-brand">Brand</label>
                  </div>
                </React.Fragment>
              ) : null}
            </div>
          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </React.Fragment>
  )
}

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changePreloader: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  changelayoutMode: PropTypes.func,
  changeLayoutPosition: PropTypes.func,
  isPreloader: PropTypes.any,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  topbarTheme: PropTypes.any,
  layoutMode: PropTypes.any,
  layoutPosition: PropTypes.any,
}

const mapStateToProps = state => {
  return { ...state.Layout }
}

export default connect(mapStateToProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeLayoutWidth,
  changeLayoutPosition,
  changeTopbarTheme,
  changelayoutMode,
  changePreloader,
  showRightSidebarAction,
})(RightSidebar)
