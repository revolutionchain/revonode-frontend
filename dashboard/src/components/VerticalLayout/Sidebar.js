import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"
import SidebarContent from "./SidebarContent"
const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="h-100">
          {props.typedUser?.user && (props.type !== "condensed" ? <SidebarContent typedUser={props.typedUser} tToggle={props.tToggle} /> : <SidebarContent typedUser={props.typedUser} />)}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  )
}

Sidebar.propTypes = {
  type: PropTypes.string,
}

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  }
}
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)))
