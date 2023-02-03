import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Button,
  Modal
} from "reactstrap"

import SweetAlert from "react-bootstrap-sweetalert"
//i18n
import { withTranslation } from "react-i18next"
// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// users
import user1 from "../../../assets/images/users/avatar-1.jpg"

const ProfileMenu = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  const [username, setusername] = useState("Admin")

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.displayName)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.username)
      }
    }
  }, [props.success])



  function handleButton() {
    let titleRes;
    let descriptionRes;
    

  }



  const [confirm_alert, setconfirm_alert] = useState(false)
  const [confirm_alert2, setconfirm_alert2] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)




  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const [powerModal, setPowerModal] = useState(false)

  function tog_standard() {
    setPowerModal(!setPowerModal)
  }




  return (
    <React.Fragment>
      {success_dlg ? (
        <SweetAlert
          success
          title={dynamic_title}
          onConfirm={() => {
            setsuccess_dlg(false)
          }}
        >
          {dynamic_description}
        </SweetAlert>
      ) : null}

      {error_dlg ? (
        <SweetAlert
          error
          title={dynamic_title}
          onConfirm={() => {
            seterror_dlg(false)
          }}
        >
          {dynamic_description}
        </SweetAlert>
      ) : null}
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-2 me-1">{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <Link to="/profile"><DropdownItem>
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {props.t("Profile")}{" "}
          </DropdownItem></Link>
          <Link to="/settings"><DropdownItem>
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            {props.t("Settings")}
          </DropdownItem></Link>
          <Link to="/backup"><DropdownItem>
            <i className="bx bx-save font-size-16 align-middle me-1" />
            {props.t("Backup")}
          </DropdownItem></Link>
          <Link to="/update"><DropdownItem>
            <i className="bx bx bx-planet font-size-16 align-middle me-1" />
            {props.t("Update")}
          </DropdownItem></Link>
          <div className="dropdown-divider" />
          <Link to="/logout" className="dropdown-item">
            <i className="bx bx-log-out font-size-16 align-middle me-1" />
            <span>{props.t("Logout")}</span>
          </Link>
          <div onClick={() => {
            setPowerModal(true)
          }} to="/#" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Power")}</span>
          </div><Modal
            isOpen={powerModal}
            role="dialog"
            autoFocus={true}
            centered
            data-toggle="modal"
            toggle={() => {
              setPowerModal(!powerModal)
            }}
          >
          {confirm_alert ? (
            <SweetAlert
              title="Are you sure?"
              warning
              showCancel
              confirmButtonText="Yes, reboot it!"
              confirmBtnBsStyle="success"
              cancelBtnBsStyle="danger"
              onConfirm={() => handleButton()}
              onCancel={() => setconfirm_alert(false)}
            >
              Your Node will be rebooted.
            </SweetAlert>
          ) : null}
          
        {confirm_alert2 ? (
          <SweetAlert
            title="Are you sure?"
            warning
            showCancel
            confirmButtonText="Yes, power off it!"
            confirmBtnBsStyle="success"
            cancelBtnBsStyle="danger"
            onConfirm={() => handleButton()}
            onCancel={() => setconfirm_alert2(false)}
          >
            Your Node will be turned off.
          </SweetAlert>
        ) : null}
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <button type="button" className="btn-close"
                  onClick={() => {
                    tog_standard()
                  }}></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <div className="avatar-md mx-auto mb-4">
                    {/* style={{ backgroundColor:"#eff2f7" }}  */}
                    <div className="avatar-title bg-light  rounded-circle text-primary h1">
                      <i className="fas fa-parachute-box"></i>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <h4 className="text-primary">Power Menu</h4>
                      <p className={"text-muted font-size-14 mb-4"}></p>

                      <div className='' style={{ display: "flex", alignItems: "center", width: "100%", textAlign: "center" }}>

                        <Col xl={3} lg={4} sm={6} style={{ margin: "auto" }} className="mb-2">
                            <Button
                              color="primary"
                              onClick={() => {
                                setconfirm_alert(true)
                                setPowerModal(false)
                              }}
                              id="sa-success"
                            >
                              Reboot
                            </Button>
                          <Button
                            color="primary"
                            onClick={() => {
                              setconfirm_alert2(true)
                              setPowerModal(!powerModal)
                            }}
                            id="sa-success"
                          >
                            Power off
                          </Button>
                        </Col>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)
