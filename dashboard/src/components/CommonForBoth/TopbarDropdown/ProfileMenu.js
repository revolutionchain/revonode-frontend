import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import PropTypes from 'prop-types'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Button,
  Modal,
  Tooltip
} from "reactstrap"


import { CopyToClipboard } from 'react-copy-to-clipboard';


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

  const [currentUrl, setCurrentUrl] = useState("");
  const typedUser = useSelector(state => state.Login.userTyped);

  useEffect(async () => {
    let url;
    if((window.location.hostname).includes("revo.host")){
      url = `https://${window.location.hostname}/api`
    }else {
      url = `http://${window.location.hostname}:3001/api`
    }

    setCurrentUrl(url);
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




  const [confirm_alert, setconfirm_alert] = useState(false)
  const [confirm_alert2, setconfirm_alert2] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [success_dlg2, setsuccess_dlg2] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)




  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const [powerModal, setPowerModal] = useState(false)

  function tog_standard() {
    setPowerModal(!setPowerModal)
  }

  const [tooltipOpen, setTooltipOpen] = React.useState(false);



  return (
    <React.Fragment>
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

        {props.walletAddress && <div className="dropdown d-flex d-lg-none ms-1"><div style={{ height: "100%", display: "flex", alignItems: "center", margin: "auto" 
}}>
  <CopyToClipboard text={`${props.walletAddress}`}
                        onCopy={() => { }}>
                        <button className="btn btn-outline-success " id="CopyTooltip" >{props.walletAddress}</button>
                    </CopyToClipboard>
        <Tooltip placement="bottom" isOpen={tooltipOpen} target="CopyTooltip" toggle={()=> setTooltipOpen(!tooltipOpen)}>
          Click to copy
        </Tooltip>
</div></div>}
          <div className="dropdown-divider d-lg-none" />
          <Link to="/profile"><DropdownItem>
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {props.t("Profile")}{" "}
          </DropdownItem></Link>
          { <Link to="/settings"><DropdownItem>
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            {props.t("Settings")}
          </DropdownItem></Link>}
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
            setPowerModal(true);
            setMenu(false);
          }} to="/#" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Power")}</span>
          </div>
          <Modal
            isOpen={powerModal}
            role="dialog"
            autoFocus={true}
            centered
            data-toggle="modal"/*
            toggle={() => {
              setPowerModal(!powerModal)
            }}*/
          >
            {confirm_alert ? (
              <SweetAlert
                title="Are you sure?"
                warning
                showCancel
                confirmButtonText="Yes, reboot it!"
                confirmBtnBsStyle="success"
                cancelBtnBsStyle="danger"
                onConfirm={() => {
                  let titleRes;
                  let descriptionRes;
                  fetch(`${currentUrl}/reboot`, {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user: typedUser.user, pass: typedUser.pass})
                  }).then(data => data.text())
                    .then(res => {
                      if ((res).includes("done")) {
                        titleRes = "Node Rebooting.."
                        descriptionRes = "Please wait while your Node reboot. You will be redirected automatically.";
                        setconfirm_alert(false);
                        setsuccess_dlg2(true);
                        setdynamic_title(titleRes);
                        setdynamic_description(descriptionRes);
                      }
                    });
                }}
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
                onConfirm={() => {
                  let titleRes;
                  let descriptionRes;
                  fetch(`${currentUrl}/shutdown`, {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({  user: typedUser.user, pass: typedUser.pass })
                  }).then(data => data.text())
                    .then(res => {
                      if ((res).includes("done")) {
                        titleRes = "Shutting Down Node.."
                        descriptionRes = "Your node is shutting down now.";
                        setdynamic_title(titleRes);
                        setdynamic_description(descriptionRes);
                        setconfirm_alert2(false);
                        setsuccess_dlg(true);
                      }
                    });
                }}
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
                      <i className="bx bx-power-off"></i>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <h4 className="text-primary">Power</h4>
                      <p className={"text-muted font-size-14 mb-4"}></p>

                      <div className='' style={{ display: "flex", alignItems: "center", width: "100%", textAlign: "center" }}>

                        <Col xl={3} lg={4} sm={6} style={{ margin: "auto" }} className="mb-2">
                          <Button
                            color="primary"
                            onClick={() => {
                              setconfirm_alert(true)
                            }}
                            id="sa-success"
                          >
                            Reboot
                          </Button>
                          <div className="mt-3">
                            <Button
                              color="primary"
                              onClick={() => {
                                setconfirm_alert2(true)
                              }}
                              id="sa-success"
                            >
                              Power off
                            </Button>
                          </div>

                          {success_dlg ? (
                            <SweetAlert
                              success
                              title={dynamic_title}
                              showConfirm={false}
                              timeout={300}
                              onConfirm={() => {
                                  setTimeout(() => {
                                    window.open(`https://revo.network/`, '_self');
                                  }, 5000)
                                {/*setsuccess_dlg(false)*/ }                      
                              }}
                            >
                              {dynamic_description}
                            </SweetAlert>
                          ) : null}
                          {success_dlg2 ? (
                            <SweetAlert
                              success
                              title={dynamic_title}
                              showConfirm={false}
                              timeout={300}
                              onConfirm={() => {
                                  setTimeout(() => {
                                    window.open(`http://${window.location.hostname}/login`, '_self');
                                  }, 100000);    
                                {/*setsuccess_dlg(false)*/ }                      
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
