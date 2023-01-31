import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
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
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)
  const { resetProfileFlag } = props;

  const typedMail = useSelector(state => state.Login.userTyped.user);

  
  useEffect(() => {
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



  

  const [userEmail, setUserEmail] = useState({
    user: "",
  })



  const [userPass, setUserPass] = useState({
    pass: "",
    rePass: ""
  })


  const [errorMsg, setErrorMsg] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleButton = (value) => {
    if (!value?.user || !value?.user?.includes('@') || !value?.user?.split('@')[1]?.includes('.')) {
      setErrorMsg("You must write your email!");
    } else if (value.user.includes(' ')) {
      setErrorMsg("you entered an invalid character!");
    }
    if (value?.pass && value?.pass !== value?.rePass) {
      setErrorMsg("Passwords don't match!");
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


  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Revo Node Manager</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Samply" breadcrumbItem="Profile" />

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

          <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <AvForm
                className="form-horizontal"
                onValidSubmit={(e, v) => {
                  handleValidSubmit(e, v)
                }}
              >
                <div className="form-group">
                  <AvField
                    name="username"
                    label="User Name"
                    value={name}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    required
                  />
                  <AvField name="idx" value={idx} type="hidden" />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Edit User Name
                  </Button>
                </div>
              </AvForm>
            </CardBody>
          </Card>

                              <Card>
                                <CardBody>
                                  <div class="col-12">
                                    <h4 class="card-title"><i className="bx bx-envelope"></i> Change your email</h4> 
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
                                        <div className="text-center mt-4">
                                          <Button type="submit" color="danger">
                                            Edit Email
                                          </Button>
                                        </div>
                                      </AvForm>
                                      </div>
                                    </div>
                                  </div> 
                                </CardBody>
                              </Card>

<h4 className="card-title mb-4">Change Password</h4>

<Card>
  <CardBody>
    <AvForm
      className="form-horizontal"
      onValidSubmit={() => {
        handleButton(userPass)
      }}
    >
      <div className="form-group">
        <AvField
          name="pass"
          label="Password"
          onChange={e => handlePassInput(e)}
          className="form-control"
          placeholder="Enter Password"
          type="password"
          required
        />
        <AvField
          name="rePass"
          label="Password"
          onChange={e => handlePassInput(e)}
          className="form-control"
          placeholder="Re Write Password"
          type="password"
          required
        />
        <AvField name="idx" value={idx} type="hidden" />
      </div>
      <div className="text-center mt-4">
        <Button type="submit" color="danger">
          Edit Password
        </Button>
      </div>
    </AvForm>
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
