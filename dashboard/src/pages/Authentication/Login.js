import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import Modal from 'react-modal';
import failedIcon from '../../assets/images/failed.png'


import '../../assets/style.css'
import astronauteImageLogin from '../../assets/images/AstronauteImageLogin.svg'
import revoLogo from '../../assets/images/revo-light.png';
import openEye from '../../assets/images/open-eye.png'
import closedEye from '../../assets/images/closed-eye.png'
import userIcon from '../../assets/images/user-icon.png'
import passIcon from '../../assets/images/pass-icon.png'

import { Row, Col, Alert, Container, Card } from "reactstrap"

// Redux
import { connect, useSelector } from "react-redux"
import { withRouter, Link, Redirect } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// actions
import { loginUser, apiError, socialLogin, startLogin } from "../../store/actions"

// import images
import logo from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"

import { useDispatch } from 'react-redux';

const Login = (props) => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.loginUser(values, props.history)
  }


  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      fetch(`http://${window.location.hostname}:3001/checklocalip`)
        .then(response => response)
        .then(data => console.log(data.ok));
    } catch (err) {
      window.location.reload();
    }
    fetch(`http://${window.location.hostname}:3001/checkmaster`)
      .then(response => response.text())
      .then(data => {
        if (!data.includes("master")) {
          window.location.href = `http://${window.location.hostname}/install/wizard`;
        }
      });
    fetch(`http://${window.location.hostname}:3001/checkuser`)
      .then(response => response.json())
      .then(data => {
        if (data == false) {
          props.history.push('/register');
        }
      })
  }, []);

  const [userData, setUserData] = useState({
    user: "",
    pass: ""
  })


  const handleInputs = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }



  const [passButtonState, setPassButtonState] = useState(true);

  function handlePassButton() {
    passButtonState ? setPassButtonState(false) : setPassButtonState(true);
  }


  const [errorMsg, setErrorMsg] = useState("");

  const handleButton = (value) => {
    if (!value.user || !value.user.includes('@') || !value.user.split('@')[1].includes('.')) {
      setErrorMsg("You must write your email!");
      return openModal();
    } else if (!value.pass) {
      setErrorMsg('You must write your password!');
      return openModal();
    }
    fetch(`http://${window.location.hostname}:3001/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userData.user, pass: userData.pass })
    }).then(data => data.json())
      .then(res => {
        if (res == true) {
          dispatch(startLogin(value, props.history));
        } else {
          setErrorMsg('Incorrect email or password!');
          openModal();
        }
      });
  }


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
      textAlign: 'center',
      backgroundColor: 'transparent'
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal(e) {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div class="main">
      <div style={{ padding: 0 }} class="container">
        <div class="signup-content">
          <div class="signup-desc">
            <div class="signup-desc-content">
              <img className="revo-lgo" src={revoLogo} />
              <p style={{ marginBottom: `0` }} class="desc">
                {"Welcome Back!"}
              </p>
              <p style={{ margin: `0 !important` }} className='desc'>Sign in to view your Dashboard</p>
              {/*<img src="images/signup-img.jpg" alt="" class="signup-img" />*/}
            </div>
            <img className={`astronautImageLogin`} src={astronauteImageLogin} />
          </div>
          <div class="signup-form-conent">
            <div id="signup-form" class="signup-form" >
              <h3></h3>
              <fieldset>
                <div class="form-group-principal">
                  <div className='content-container'>
                    <div className="">
                      <div>
                        <h2>Revo Node Manager</h2>
                      </div>
                      <div className="mt-4 pt-3">
                        <AvForm
                          className="form-horizontal"
                        >
                          {props.error && typeof props.error === "string" ? (
                            <Alert color="danger">{props.error}</Alert>
                          ) : null}

                          <div style={{ display: `flex`, alignItems: `center` }}>
                            <img style={{ width: `30px`, height: `30px`, marginTop: `5px` }} src={userIcon} />
                            <input className='data-input' type='text' name='user' placeholder="Enter email" onChange={(e) => handleInputs(e)}></input>
                          </div>
                          {/*
                          <div className="mb-3">                            
                            <label>Email</label>
                            <input
                              name='user'
                              value={userData.user}
                              className="form-control"
                              placeholder="Enter email"
                              onChange={(e) => handleInputs(e)}
                              type="text"
                            ></input>
                          </div>
                          <div className="mb-3">
                            <label>Password</label>
                            <input
                              name='pass'
                              value={userData.pass}
                              className="form-control"
                              placeholder="Enter password"
                              onChange={(e) => handleInputs(e)}
                              type="password"
                            ></input>

                          </div>*/}
                          <div style={{ display: `flex`, alignItems: `center`, margin: `5px 0` }}>
                            <img style={{ width: `30px`, height: `30px`, marginTop: `5px` }} src={passIcon} />
                            <div className='data-input input-container'><input className='data-input' style={{ width: `100%`, border: `none` }} type={passButtonState ? 'password' : 'text'} name='pass' placeholder="Enter password" onChange={(e) => handleInputs(e)}></input><button onClick={() => handlePassButton()} style={{ height: `30px`, border: `none`, backgroundColor: `transparent` }}><img style={{ width: `40px`, height: `30px` }} src={passButtonState ? openEye : closedEye} /></button></div>
                          </div>
                        </AvForm>
                      </div>
                    </div>
                  </div>
                  <div className='buttons-container' >
                    <div className='left'>
                    </div>
                    <div className='right'>
                      <button onClick={() => handleButton(userData)} className='button-style next-button'>Log In</button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className='Modal'>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {<img className='warning-icon' src={failedIcon} />}
          <div className="div-balance-title div-abm-title">{errorMsg}</div>
          <button onClick={closeModal} className='button-style back-button modal-button'>Ok</button>
        </Modal>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func
}