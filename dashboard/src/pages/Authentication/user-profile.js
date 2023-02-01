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
    rePass: "",
    oldpass: ""
  })


  const [errorMsg, setErrorMsg] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleButton = (value) => {
    let titleRes;
    let descriptionRes;
    if (value.type == "user" && (!value?.user || !value?.user?.includes('@') || !value?.user?.split('@')[1]?.includes('.'))) {
      titleRes = "Email error!"
      descriptionRes = "You must write an email!"
      setconfirm_alert(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    } else if (value.type == "user" && value?.user?.includes(' ')) {
      titleRes = "Email error!"
      descriptionRes = "You entered an invalid character!"
      setconfirm_alert(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    }

    if(value.type == "pass" && !value?.oldpass){
      titleRes = "Password error!"
      descriptionRes = "You must enter your current Password!"
      setconfirm_alert2(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    }

    if(value.type == "pass" && !value?.pass){
      titleRes = "Password error!"
      descriptionRes = "You must enter a Password!"
      setconfirm_alert2(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    }

    if (value?.pass !== value?.rePass) {
      titleRes = "Password error!"
      descriptionRes = "Passwords don't match!"
      setconfirm_alert2(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
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
        if(!res.includes('Wrong')){
          if(res && value.type == "user"){
            titleRes = "Modified"
            descriptionRes = "Your email has been changed."
            setconfirm_alert(false);
          }else if(res && value.type == "pass"){
            titleRes = "Modified"
            descriptionRes = "Your password has been changed."
            setconfirm_alert2(false);
          }
          
          setsuccess_dlg(true);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
        }else {
          titleRes = "Password error!"
          descriptionRes = res;
          setconfirm_alert2(false);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
          return seterror_dlg(true)
        }
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
  const [confirm_alert2, setconfirm_alert2] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)


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
                                {/*setsuccess_dlg(false)*/}
                                props.history.push('/login');
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

          
          <Card>
            <CardBody>
              <div class="col-12">
                <h4 class="card-title"><i className="bx bx-envelope"></i> Change your email</h4>
                <h4 class="card-title">({email})</h4>
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
                        {/*<Button type="submit" color="success">Save</Button>*/}
                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                    <div className="p-3">
                                        <Button
                                            color="primary"
                                            onClick={() => {
                                                setconfirm_alert(true)
                                            }}
                                            id="sa-success"
                                        >
                                            Save
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
                                                handleButton(userEmail)
                                            }}
                                            onCancel={() => setconfirm_alert(false)}
                                        >
                                            Your dashboard Email will be changed!
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
                          label="New Password"
                          onChange={e => handlePassInput(e)}
                          className="form-control"
                          placeholder="Enter new Password"
                          type="password"
                          required
                        />
                        <AvField
                          name="rePass"
                          label="Repeat new Password"
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
                                                setconfirm_alert2(true)
                                            }}
                                            id="sa-success"
                                        >
                                            Modify Password
                    </Button>
                                    </div>
                                    {confirm_alert2 ? (
                                        <SweetAlert
                                            title="Are you sure?"
                                            warning
                                            showCancel
                                            confirmButtonText="Yes, delete it!"
                                            confirmBtnBsStyle="success"
                                            cancelBtnBsStyle="danger"
                                            onConfirm={() => {
                                                handleButton(userPass)
                                            }}
                                            onCancel={() => setconfirm_alert2(false)}
                                        >
                                            Your password will be changed!
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
      </div>
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
