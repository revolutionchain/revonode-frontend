import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux';

import SweetAlert from "react-bootstrap-sweetalert"


import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Modal,  
} from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// Redux
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb"

import avatar from "../../assets/images/users/avatar-1.jpg"
// actions
import { editProfile, resetProfileFlag } from "../../store/actions"


const UserProfile = props => {

  const isLogged = useSelector(state => state.Login.isLogged);

  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)
  const { resetProfileFlag } = props;

  const typedMail = useSelector(state => state.Login.userTyped.user);

  
  useEffect(() => {

    if (!isLogged) {
      props.history.push('/login');
    }

    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName)
        setemail(obj.email)
        setidx(obj.uid)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username)
        setemail(typedMail)
        setidx(obj.uid)
      }
      setTimeout(() => {
        resetProfileFlag();
      }, 3000);
    }
  }, [props.success, resetProfileFlag])

  function handleValidSubmit(event, values) {
    props.editProfile(values)
  }

  function tog_standard() {
    setMessageModal(!setMessageModal)
  }
  

  const [messageModal, setMessageModal] = useState(false)

  

  const [userEmail, setUserEmail] = useState({
    type: "user",
    user: "",
  })



  const [userPass, setUserPass] = useState({
    type: "pass",
    pass: "",
    rePass: ""
  })


  const [errorMsg, setErrorMsg] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleButton = (value) => {
    if (value.type == "user" && (!value?.user || !value?.user?.includes('@') || !value?.user?.split('@')[1]?.includes('.'))) {
      setErrorMsg({ errorTitle: "Email error!", solution: "You must write an email!"});
      return setMessageModal(true);
    } else if (value.type == "user" && value?.user?.includes(' ')) {
      setErrorMsg({errorTitle: "Email error!", solution: "You entered an invalid character!"});
      return setMessageModal(true);
    }

    if(value.type == "pass" && !value?.pass){
      setErrorMsg({errorTitle: "Password error!", solution: "You must enter a Password!"});
      return setMessageModal(true);
    }

    if (value?.pass && value?.pass !== value?.rePass) {
      setErrorMsg({errorTitle: "Password error!", solution: "Passwords don't match!"});
      return setMessageModal(true);
    }
    fetch(`http://${window.location.hostname}:3001/modifyprofile`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    }).then(data => data.text())
      .then(res => {  
        console.log(res);
      });{/*
    setSuccessMsg("Registration succesfully! You'll be now redirected to login");
    openModal();*/}
  }


  const handleEmailInput = (e) => {
    setUserEmail({
      ...userEmail,
      [e.target.name]: e.target.value
    })
  }



  const handlePassInput = (e) => {
    setUserPass({
      ...userPass,
      [e.target.name]: e.target.value
    })
  }


  const [confirm_alert, setconfirm_alert] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Revo Node Manager</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Samply" breadcrumbItem="Profile" />
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

          <Row>
            <Col lg="12">
              {props.error && props.error ? (
                <Alert color="danger">{props.error}</Alert>
              ) : null}
              {props.success ? (
                <Alert color="success">{props.success}</Alert>
              ) : null}

              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-1 align-self-center">
                      <div className="text-muted">
                        <h5>{name}</h5>
                        <p className="mb-1">{email}</p>
                        {/*<p className="mb-0">Id no: #{idx}</p>*/}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Card>
            <CardBody>
              <div class="col-12">
                <h4 class="card-title"><i className="bx bx-envelope"></i> Change your email</h4>
                <p>Use this form to change your dashboard login email</p> 
                  <div class="card">                                     
                    <div class="card-body">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={() => {
                          handleButton(userEmail)
                          }}
                    >
                    <div className="form-group">
                      <AvField
                              name="user"
                              label="Email"
                              onChange={e => handleEmailInput(e)}
                              className="form-control"
                              placeholder="Enter Email"
                              type="text"
                              required
                        />
                            <AvField name="idx" value={idx} type="hidden" />
                            </div>
                          <div className="text-right mt-4">
                        <Button type="submit" color="success">Save</Button>
                      </div>
                    </AvForm>
                  </div>
                </div>
              </div> 
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div class="col-12">
                <h4 class="card-title"><i className="bx bx-check-shield"></i> Change your password</h4>
                <p>Use this form to change your dashboard login password</p>  
                  <div class="card">                                     
                    <div class="card-body">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={() => {
                        handleButton(userPass)
                      }}
                    >
                      <div className="form-group">
                      <AvField
                          name="oldpass"
                          label="Current Password"
                          onChange={e => handlePassInput(e)}
                          className="form-control"
                          placeholder="Enter current Password"
                          type="password"
                          required
                        />
                        <AvField
                          name="pass"
                          label="Password"
                          onChange={e => handlePassInput(e)}
                          className="form-control"
                          placeholder="Enter new Password"
                          type="password"
                          required
                        />
                        <AvField
                          name="rePass"
                          label="Password"
                          onChange={e => handlePassInput(e)}
                          className="form-control"
                          placeholder="Enter new Password again"
                          type="password"
                          required
                        />
                        <AvField name="idx" value={idx} type="hidden" />
                      </div>
                      <div className="text-right mt-4">{/*
                        <Button type="submit" color="success">
                          Modify Password
                        </Button>
                    */}

                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                    <div className="p-3">
                                        <Button
                                            color="primary"
                                            onClick={() => {
                                                setconfirm_alert(true)
                                            }}
                                            id="sa-success"
                                        >
                                            Click me
                    </Button>
                                    </div>
                                    {confirm_alert ? (
                                        <SweetAlert
                                            title="Are you sure?"
                                            warning
                                            showCancel
                                            confirmButtonText="Yes, delete it!"
                                            confirmBtnBsStyle="success"
                                            cancelBtnBsStyle="danger"
                                            onConfirm={() => {
                                                setconfirm_alert(false)
                                                setsuccess_dlg(true)
                                                setdynamic_title("Deleted")
                                                setdynamic_description("Your file has been deleted.")
                                                handleButton(userPass)
                                            }}
                                            onCancel={() => setconfirm_alert(false)}
                                        >
                                            You won't be able to revert this!
                                        </SweetAlert>
                                    ) : null}
                                </Col>
                      </div>
                    </AvForm>
                  </div>
                </div>
              </div> 
            </CardBody>
          </Card>
        </Container>
      </div><Modal
        isOpen={messageModal}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setMessageModal(!messageModal)
        }}
      >
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
                {/* style={{ backgroundColor:"#eff2f7" }}  
                <div className="avatar-title bg-light  rounded-circle text-primary h1">
                  <i className="fas fa-parachute-box"></i>
                </div>*/}
              </div>

              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <h4 className="text-danger">{errorMsg.errorTitle}</h4>
                  <p className="text-muted font-size-14 mb-4" >{errorMsg.solution} </p>
{/*
                    <Button color="primary" type="button" id="button-addon2">
                      
            </Button>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, { editProfile, resetProfileFlag })(UserProfile)
)
