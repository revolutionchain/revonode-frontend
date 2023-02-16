import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import SweetAlert from "react-bootstrap-sweetalert"
import { Card, CardBody, Col, Row, Button } from 'reactstrap';

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


  
  const [buttonStakingState, setButtonStakingState] = useState(true);
  const [ buttonStateLoaded, setButtonStateLoaded ] = useState(false);

  const getStatesData = () => {
    let url;
    if((window.location.hostname).includes("revo.host")){
      url = `https://${window.location.hostname}/api`
    }else {
      url = `http://${window.location.hostname}:3001/api`
    }

    setCurrentUrl(url);
    
    fetch(`${url}/getstakinginfo`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: props.typedUser.user, pass: props.typedUser.pass})
    }).then(data => data.json())
      .then(res => {
        if(res.enabled){
          setButtonStakingState(true);
        }else {
          setButtonStakingState(false);
        }
        setButtonStateLoaded(true);
      });
  }

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(async () => {
    
    getStatesData();
      
  
      const interval = setInterval(() => {
        getStatesData();
      }, 30000);
    
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    
  },[props.typedUser])


  const [confirm_alert, setconfirm_alert] = useState(false)
  const [confirm_alert2, setconfirm_alert2] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)



  const [walletPassState, setWalletPassState] = useState(false);


  function handleButton(stakingState) {
    let titleRes;
    let descriptionRes;
    let invalidPassChar = false;    
    if(walletPassState) {
          if(walletPassState.includes(" ")){
              invalidPassChar = true;
          }
  }          
    if (stakingState) {
      fetch(`${currentUrl}/walletlockforstaking`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: props.typedUser.user, pass: props.typedUser.pass})
      }).then(data => data.text())
        .then(res => {
          titleRes = "Staking Disabled"
          descriptionRes = res;
          setconfirm_alert2(false);
          setsuccess_dlg(true);
          setdynamic_title(titleRes);
          setdynamic_description(descriptionRes);
          setButtonStakingState(!buttonStakingState);
        });
    } else {

      if (!walletPassState || invalidPassChar) {
        titleRes = "Wallet password error!"
        descriptionRes = "You must enter a valid password!"
        setconfirm_alert2(false);
        setdynamic_title(titleRes);
        setdynamic_description(descriptionRes);
        return seterror_dlg(true)
      }


      let objData = {
        walletPassword: walletPassState,
        user: props.typedUser.user,
        pass: props.typedUser.pass
      }
      fetch(`${currentUrl}/walletunlockforstaking`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objData)
      }).then(data => data.text())
        .then(res => {
          if ((res).includes("ok")) {
            titleRes = "You are Staking!"
            descriptionRes = "Staking enabled successfully";
            setconfirm_alert2(false);
            setsuccess_dlg(true);
            setdynamic_title(titleRes);
            setdynamic_description(descriptionRes);
            setButtonStakingState(!buttonStakingState);
          }else {
            titleRes = "Wallet password error!"
            descriptionRes = res;
            setconfirm_alert2(false);
            setdynamic_title(titleRes);
            setdynamic_description(descriptionRes);
            return seterror_dlg(true)
          }
        });
    }

  }

  return (
    <React.Fragment>
      {success_dlg ? (
        <SweetAlert
          success
          title={dynamic_title}
          showConfirm={true}
          timeout={0}
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
          showConfirm={dynamic_title.includes("Wallet password error!") ? false : true}
          timeout={dynamic_title.includes("Wallet password error!") ? 2 : 0}
          onConfirm={() => {
            setTimeout(() => {
              seterror_dlg(false)
              setconfirm_alert2(true);
            }, 2000)
          }}
        >
          {dynamic_description}
        </SweetAlert>
      ) : null}
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
              <Link onClick={() => props.showRightSidebarAction(false)} to="/dashboard" className="waves-effect">
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
            {buttonStateLoaded && <li style={{position: "absolute", bottom: "0"}}>
              <Col xl={12} lg={12} sm={12} className="mb-2">
                <div className="" style={{textAlign: "center"}}>
                  <Button
                    color={buttonStakingState ? "danger" : "primary"}
                    onClick={() => {
                      setconfirm_alert2(true)
                    }}
                    id="sa-success"
                    className='m-2 mb-4'
                  >
                    <i className="mdi mdi-pickaxe"></i> {buttonStakingState ? "Disable" : "Enable"} Staking
                  </Button>
                </div>
                {confirm_alert2 ? (
                  <SweetAlert
                    title={buttonStakingState ? "Staking will be disabled!" : "Staking will be enabled!"}
                    warning
                    showCancel
                    confirmButtonText="Yes, do it!"
                    confirmBtnBsStyle="success text-white"
                    cancelBtnBsStyle="danger text-white"
                    onConfirm={() => {
                      { handleButton(buttonStakingState); }
                      setconfirm_alert2(false);
                    }}
                    onCancel={() => setconfirm_alert2(false)}
                  >
                    <p>{buttonStakingState ? "You are going to disable mining on this node." : "Enter your wallet unlock password to enable staking."}</p>
                    {!buttonStakingState && <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Wallet Password"
                      onChange={(e) => {
                        setWalletPassState(e.target.value);
                      }}
                    />}
                  </SweetAlert>
                ) : null}
              </Col>
            </li>}

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
