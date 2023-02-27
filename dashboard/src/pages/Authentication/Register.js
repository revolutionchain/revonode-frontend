import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Row, Col, Card, Alert, Container } from "reactstrap"
import MetaTags from 'react-meta-tags';
import Modal from 'react-modal';
import failedIcon from '../../assets/images/failed.png'
import successIcon from '../../assets/images/success.png'


import '../../assets/style.css'
import astronauteImageRegister from '../../assets/images/AstronauteImageRegister.svg'
import revoLogo from '../../assets/images/revo-light.png';
import openEye from '../../assets/images/open-eye.png'
import closedEye from '../../assets/images/closed-eye.png'
import userIcon from '../../assets/images/user-icon.png'
import passIcon from '../../assets/images/pass-icon.png'

import { useDispatch, useSelector } from "react-redux";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { registerUser, apiError, registerUserFailed, userRegister } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// import images
import logo from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"

const Register = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.registerUser(values)
  }

  const dispatch = useDispatch();

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(async () => {
    let url;
    if((window.location.hostname).includes("revo.host")){
      url = `https://${window.location.hostname}/api`
    }else {
      url = `http://${window.location.hostname}:3001/api`
    }

    setCurrentUrl(url);
    document.body.classList.add('bg-reglog');
    props.apiError("")
    fetch(`${url}/checkuser`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        if (data == true) {
          props.history.push('/login');
        }
      })
    return function cleanup() {
      document.body.className = "";
    };
  },[]);


  const [userData, setUserData] = useState({
    user: "",
    pass: "",
    rePass: ""
  })



  const [errorMsg, setErrorMsg] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleButton = (value) => {
    if (!value.user || !value.user.includes('@') || !value.user.split('@')[1].includes('.')) {
      setErrorMsg("You must write your email!");
      return openModal();
    } else if (value.user.includes(' ')) {
      setErrorMsg("you entered an invalid character!");
      return openModal();
    }else if (!value.pass) {
      setErrorMsg("You must write your password!");
      return openModal();
    } else if (value.pass !== value.rePass) {
      setErrorMsg("Passwords don't match!");
      return openModal();
    }
    dispatch(userRegister(value, props.history));
    setSuccessMsg("Registration succesfully! You'll be now redirected to login");
    openModal();
  }


  const handleInputs = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
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



  const [passButtonState, setPassButtonState] = useState(true);

  function handlePassButton() {
    passButtonState ? setPassButtonState(false) : setPassButtonState(true);
  }

  return (
    <div class="main">
      <div style={{ padding: 0 }} class="container-g">
        <div class="signup-content">
          <div class="signup-desc">
            <div class="signup-desc-content">
              <img className="revo-lgo" src={revoLogo} />
              <p style={{ marginBottom: `0` }} class="desc">
                {"Dashboard visibility is exposed to your LAN Network, please create a new account to secure your node"}
              </p>
            </div>
            <img className={`astronautImageLogin`} src={astronauteImageRegister} />
          </div>
          <div class="signup-form-conent">
            <div id="signup-form" class="signup-form" >
              <h3></h3>
              <fieldset>
                <div class="form-group-principal">
                  <div className='content-container'>
                    <div className="">
                      <div>
                        <h2>Secure your Dashboard</h2>
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
                            <input autocomplete="off" className='data-input' type='text' name='user' placeholder="Enter email" onChange={(e) => handleInputs(e)}></input>
                          </div>
                          <div style={{ display: `flex`, alignItems: `center`, margin: `5px 0` }}>
                            <img style={{ width: `30px`, height: `30px`, marginTop: `5px` }} src={passIcon} />
                            <div autocomplete="off" className='data-input input-container'><input className='data-input' style={{ width: `100%`, border: `none` }} type={passButtonState ? 'password' : 'text'} name='pass' placeholder="Enter password" onChange={(e) => handleInputs(e)}></input><button onClick={() => handlePassButton()} style={{ height: `30px`, border: `none`, backgroundColor: `transparent` }}><img style={{ width: `40px`, height: `30px` }} src={passButtonState ? openEye : closedEye} /></button></div>
                          </div>
                          <div style={{ display: `flex`, alignItems: `center` }}>
                            <img style={{ width: `30px`, height: `30px`, marginTop: `5px` }} src={passIcon} />
                            <div autocomplete="off" className='data-input input-container'><input className='data-input' style={{ width: `100%`, border: `none` }} type={passButtonState ? 'password' : 'text'} name='rePass' placeholder="Repeat password" onChange={(e) => handleInputs(e)}></input><button onClick={() => handlePassButton()} style={{ height: `30px`, border: `none`, backgroundColor: `transparent` }}><img style={{ width: `40px`, height: `30px` }} src={passButtonState ? openEye : closedEye} /></button></div>
                          </div>
                        </AvForm>
                      </div>
                    </div>
                  </div>
                  <div className='buttons-container' >
                    <div className='left'>
                    </div>
                    <div className='right'>
                      <button onClick={() => handleButton(userData)} className='button-style next-button'>Register</button>
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
          { successMsg.length < 1 && <img className='warning-icon' src={failedIcon} />}
          { successMsg.length > 1 && <img className='warning-icon' src={successIcon} />}
          <div className={ successMsg.length < 1 ? "div-balance-title div-abm-title" : "div-balance-title div-abm-title success-adjust"}>{successMsg.length < 1 ? errorMsg : successMsg}</div>
          {successMsg < 1 && <button onClick={closeModal} className='button-style back-button modal-button'>Ok</button>}
        </Modal>
      </div>
    </div>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)


