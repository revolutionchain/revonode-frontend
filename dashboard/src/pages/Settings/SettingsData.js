import React, { useState } from 'react';
import { Card, CardBody, Col, Row, Button, Modal } from 'reactstrap';
import { useEffect } from 'react';
import Flag from 'react-world-flags'
import Select from 'react-select';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import SweetAlert from "react-bootstrap-sweetalert"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"


const SettingsDataWidget = props => {

  const options = [{ value: "AF", label: "Afghanistan" }, { value: "AX", label: "\u00c5land Islands" }, { value: "AL", label: "Albania" }, { value: "DZ", label: "Algeria" }, { value: "AS", label: "American Samoa" }, { value: "AD", label: "Andorra" }, { value: "AO", label: "Angola" }, { value: "AI", label: "Anguilla" }, { value: "AQ", label: "Antarctica" }, { value: "AG", label: "Antigua and Barbuda" }, { value: "AR", label: "Argentina" }, { value: "AM", label: "Armenia" }, { value: "AW", label: "Aruba" }, { value: "AU", label: "Australia" }, { value: "AT", label: "Austria" }, { value: "AZ", label: "Azerbaijan" }, { value: "BS", label: "Bahamas" }, { value: "BH", label: "Bahrain" }, { value: "BD", label: "Bangladesh" }, { value: "BB", label: "Barbados" }, { value: "BY", label: "Belarus" }, { value: "BE", label: "Belgium" }, { value: "BZ", label: "Belize" }, { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" }, { value: "BT", label: "Bhutan" }, { value: "BO", label: "Bolivia, Plurinational State of" }, { value: "BQ", label: "Bonaire, Sint Eustatius and Saba" }, { value: "BA", label: "Bosnia and Herzegovina" }, { value: "BW", label: "Botswana" }, { value: "BV", label: "Bouvet Island" }, { value: "BR", label: "Brazil" }, { value: "IO", label: "British Indian Ocean Territory" }, { value: "BN", label: "Brunei Darussalam" }, { value: "BG", label: "Bulgaria" }, { value: "BF", label: "Burkina Faso" }, { value: "BI", label: "Burundi" }, { value: "KH", label: "Cambodia" }, { value: "CM", label: "Cameroon" }, { value: "CA", label: "Canada" }, { value: "CV", label: "Cape Verde" }, { value: "KY", label: "Cayman Islands" }, { value: "CF", label: "Central African Republic" }, { value: "TD", label: "Chad" }, { value: "CL", label: "Chile" }, { value: "CN", label: "China" },
    { value: "CX", label: "Christmas Island" }, { value: "CC", label: "Cocos (Keeling) Islands" }, { value: "CO", label: "Colombia" }, { value: "KM", label: "Comoros" }, { value: "CG", label: "Congo" }, { value: "CD", label: "Congo, the Democratic Republic of the" }, { value: "CK", label: "Cook Islands" }, { value: "CR", label: "Costa Rica" }, { value: "CI", label: "C\u00f4te d'Ivoire" }, { value: "HR", label: "Croatia" }, { value: "CU", label: "Cuba" }, { value: "CW", label: "Cura\u00e7ao" }, { value: "CY", label: "Cyprus" }, { value: "CZ", label: "Czech Republic" }, { value: "DK", label: "Denmark" }, { value: "DJ", label: "Djibouti" }, { value: "DM", label: "Dominica" }, { value: "DO", label: "Dominican Republic" }, { value: "EC", label: "Ecuador" }, { value: "EG", label: "Egypt" }, { value: "SV", label: "El Salvador" }, { value: "GQ", label: "Equatorial Guinea" }, { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" }, { value: "ET", label: "Ethiopia" }, { value: "FK", label: "Falkland Islands (Malvinas)" }, { value: "FO", label: "Faroe Islands" }, { value: "FJ", label: "Fiji" }, { value: "FI", label: "Finland" }, { value: "FR", label: "France" }, { value: "GF", label: "French Guiana" }, { value: "PF", label: "French Polynesia" }, { value: "TF", label: "French Southern Territories" }, { value: "GA", label: "Gabon" }, { value: "GM", label: "Gambia" }, { value: "GE", label: "Georgia" }, { value: "DE", label: "Germany" }, { value: "GH", label: "Ghana" }, { value: "GI", label: "Gibraltar" }, { value: "GR", label: "Greece" }, { value: "GL", label: "Greenland" }, { value: "GD", label: "Grenada" }, { value: "GP", label: "Guadeloupe" }, { value: "GU", label: "Guam" }, { value: "GT", label: "Guatemala" }, { value: "GG", label: "Guernsey" }, { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" }, { value: "GY", label: "Guyana" }, { value: "HT", label: "Haiti" }, { value: "HM", label: "Heard Island and McDonald Islands" }, { value: "VA", label: "Holy See (Vatican City State)" }, { value: "HN", label: "Honduras" }, { value: "HK", label: "Hong Kong" }, { value: "HU", label: "Hungary" }, { value: "IS", label: "Iceland" }, { value: "IN", label: "India" }, { value: "ID", label: "Indonesia" }, { value: "IR", label: "Iran, Islamic Republic of" }, { value: "IQ", label: "Iraq" }, { value: "IE", label: "Ireland" }, { value: "IM", label: "Isle of Man" }, { value: "IL", label: "Israel" }, { value: "IT", label: "Italy" }, { value: "JM", label: "Jamaica" }, { value: "JP", label: "Japan" }, { value: "JE", label: "Jersey" }, { value: "JO", label: "Jordan" }, { value: "KZ", label: "Kazakhstan" }, { value: "KE", label: "Kenya" }, { value: "KI", label: "Kiribati" },
    { value: "KP", label: "Korea, Democratic People's Republic of" }, { value: "KR", label: "Korea, Republic of" }, { value: "KW", label: "Kuwait" }, { value: "KG", label: "Kyrgyzstan" }, { value: "LA", label: "Lao People's Democratic Republic" }, { value: "LV", label: "Latvia" }, { value: "LB", label: "Lebanon" }, { value: "LS", label: "Lesotho" }, { value: "LR", label: "Liberia" }, { value: "LY", label: "Libya" }, { value: "LI", label: "Liechtenstein" }, { value: "LT", label: "Lithuania" }, { value: "LU", label: "Luxembourg" }, { value: "MO", label: "Macao" }, { value: "MK", label: "Macedonia, the Former Yugoslav Republic of" }, { value: "MG", label: "Madagascar" }, { value: "MW", label: "Malawi" }, { value: "MY", label: "Malaysia" }, { value: "MV", label: "Maldives" }, { value: "ML", label: "Mali" }, { value: "MT", label: "Malta" }, { value: "MH", label: "Marshall Islands" }, { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauritania" }, { value: "MU", label: "Mauritius" }, { value: "YT", label: "Mayotte" }, { value: "MX", label: "Mexico" }, { value: "FM", label: "Micronesia, Federated States of" }, { value: "MD", label: "Moldova, Republic of" }, { value: "MC", label: "Monaco" }, { value: "MN", label: "Mongolia" }, { value: "ME", label: "Montenegro" }, { value: "MS", label: "Montserrat" }, { value: "MA", label: "Morocco" }, { value: "MZ", label: "Mozambique" }, { value: "MM", label: "Myanmar" }, { value: "NA", label: "Namibia" }, { value: "NR", label: "Nauru" }, { value: "NP", label: "Nepal" }, { value: "NL", label: "Netherlands" }, { value: "NC", label: "New Caledonia" }, { value: "NZ", label: "New Zealand" }, { value: "NI", label: "Nicaragua" }, { value: "NE", label: "Niger" }, { value: "NG", label: "Nigeria" }, { value: "NU", label: "Niue" }, { value: "NF", label: "Norfolk Island" },
    { value: "MP", label: "Northern Mariana Islands" }, { value: "NO", label: "Norway" }, { value: "OM", label: "Oman" }, { value: "PK", label: "Pakistan" }, { value: "PW", label: "Palau" }, { value: "PS", label: "Palestine, State of" }, { value: "PA", label: "Panama" }, { value: "PG", label: "Papua New Guinea" }, { value: "PY", label: "Paraguay" }, { value: "PE", label: "Peru" }, { value: "PH", label: "Philippines" }, { value: "PN", label: "Pitcairn" }, { value: "PL", label: "Poland" }, { value: "PT", label: "Portugal" }, { value: "PR", label: "Puerto Rico" }, { value: "QA", label: "Qatar" }, { value: "RE", label: "R\u00e9union" }, { value: "RO", label: "Romania" }, { value: "RU", label: "Russian Federation" }, { value: "RW", label: "Rwanda" }, { value: "BL", label: "Saint Barth\u00e9lemy" }, { value: "SH", label: "Saint Helena, Ascension and Tristan da Cunha" }, { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" }, { value: "MF", label: "Saint Martin (French part)" }, { value: "PM", label: "Saint Pierre and Miquelon" }, { value: "VC", label: "Saint Vincent and the Grenadines" }, { value: "WS", label: "Samoa" }, { value: "SM", label: "San Marino" }, { value: "ST", label: "Sao Tome and Principe" }, { value: "SA", label: "Saudi Arabia" }, { value: "SN", label: "Senegal" }, { value: "RS", label: "Serbia" }, { value: "SC", label: "Seychelles" }, { value: "SL", label: "Sierra Leone" }, { value: "SG", label: "Singapore" }, { value: "SX", label: "Sint Maarten (Dutch part)" }, { value: "SK", label: "Slovakia" }, { value: "SI", label: "Slovenia" }, { value: "SB", label: "Solomon Islands" }, { value: "SO", label: "Somalia" }, { value: "ZA", label: "South Africa" }, { value: "GS", label: "South Georgia and the South Sandwich Islands" }, { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" }, { value: "LK", label: "Sri Lanka" }, { value: "SD", label: "Sudan" }, { value: "SR", label: "Suriname" }, { value: "SJ", label: "Svalbard and Jan Mayen" }, { value: "SZ", label: "Swaziland" }, { value: "SE", label: "Sweden" }, { value: "CH", label: "Switzerland" }, { value: "SY", label: "Syrian Arab Republic" }, { value: "TW", label: "Taiwan, Province of China" }, { value: "TJ", label: "Tajikistan" }, { value: "TZ", label: "Tanzania, United Republic of" }, { value: "TH", label: "Thailand" }, { value: "TL", label: "Timor-Leste" }, { value: "TG", label: "Togo" }, { value: "TK", label: "Tokelau" }, { value: "TO", label: "Tonga" }, { value: "TT", label: "Trinidad and Tobago" }, { value: "TN", label: "Tunisia" }, { value: "TR", label: "Turkey" }, { value: "TM", label: "Turkmenistan" }, { value: "TC", label: "Turks and Caicos Islands" }, { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" }, { value: "UA", label: "Ukraine" }, { value: "AE", label: "United Arab Emirates" }, { value: "GB", label: "United Kingdom" }, { value: "US", label: "United States" }, { value: "UM", label: "United States Minor Outlying Islands" }, { value: "UY", label: "Uruguay" }, { value: "UZ", label: "Uzbekistan" }, { value: "VU", label: "Vanuatu" }, { value: "VE", label: "Venezuela, Bolivarian Republic of" }, { value: "VN", label: "Viet Nam" }, { value: "VG", label: "Virgin Islands, British" }, { value: "VI", label: "Virgin Islands, U.S." }, { value: "WF", label: "Wallis and Futuna" }, { value: "EH", label: "Western Sahara" }, { value: "YE", label: "Yemen" }, { value: "ZM", label: "Zambia" }, { value: "ZW", label: "Zimbabwe" }]


  const currentWifiData = {
    country: "",
    ssid: "",
    password: "",
    protocol: ""
  };
  
  const [currentWifiState, setCurrentWifiState] = useState(false);

useEffect(()=>{        
  if(props.wifiData){
    let countryTarget = (props.wifiData).replace("country=", "").slice(0,2);
    currentWifiData.country = options.find(e => e.value == countryTarget);
    currentWifiData.ssid = (props.wifiData).split('"')[1];
    currentWifiData.password = (props.wifiData).split('"')[3];
    currentWifiData.protocol = (props.wifiData).split('key_mgmt=')[1].split('\n')[0];
    setCurrentWifiState(currentWifiData);
  }

})



const [confirm_alert, setconfirm_alert] = useState(false)
const [confirm_alert2, setconfirm_alert2] = useState(false)
//const [success_msg, setsuccess_msg] = useState(false)
const [success_dlg, setsuccess_dlg] = useState(false)
const [dynamic_title, setdynamic_title] = useState("")
const [dynamic_description, setdynamic_description] = useState("")
const [error_dlg, seterror_dlg] = useState(false)

function handleButton(){  
  let titleRes;
  let descriptionRes;
  if(!buttonWifiState){    
    fetch(`http://${window.location.hostname}:3001/delwificonfig`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.text())
      .then(res => {
        if((res).includes("ok")){
          fetch(`http://${window.location.hostname}:3001/forcereboot`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }).then(data => data.text())
            .then(res => {
              if((res).includes("done")){
                titleRes = "Node Rebooting.."
                descriptionRes = "Please wait while your Node reboot. You will be redirected automatically.";
                setsuccess_dlg(true);
                setdynamic_title(titleRes);
                setdynamic_description(descriptionRes);
              }
            });       
          
        }
      });           
  }else {

    if(!currentWifiState.ssid){
      titleRes = "SSID error!"
      descriptionRes = "You must enter a SSID!"
      setconfirm_alert(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    } else if(!currentWifiState.password){
      titleRes = "Password error!"
      descriptionRes = "You must enter a valid password!"
      setconfirm_alert(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    } else if(!currentWifiState.password){
      titleRes = "Country error!"
      descriptionRes = "You must select a country!"
      setconfirm_alert(false);
      setdynamic_title(titleRes);
      setdynamic_description(descriptionRes);
      return seterror_dlg(true)
    }

    fetch(`http://${window.location.hostname}:3001/delwificonfig`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(data => data.text())
      .then(res => {
        if((res).includes("ok")){
          fetch(`http://${window.location.hostname}:3001/genwificonfig`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },          
            body: JSON.stringify(currentWifiData)
          }).then(data => data.text())
            .then(res => {
              if((res).includes("ok")){
                fetch(`http://${window.location.hostname}:3001/forcereboot`, {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                }).then(data => data.text())
                  .then(res => {
                    if((res).includes("done")){
                      titleRes = "Node Rebooting.."
                      descriptionRes = "Please wait while your Node reboot. You will be redirected automatically.";
                      setsuccess_dlg(true);
                      setdynamic_title(titleRes);
                      setdynamic_description(descriptionRes);
                    }
                  });       
                
              }
            });       
        }
      });       
  }
  
}

const [buttonWifiState, setButtonWifiState] = useState(true);


    return (
        <React.Fragment>
          
          {success_dlg ? (
                        <SweetAlert
                            success
                            title={dynamic_title}
                            showConfirm={dynamic_title.includes("Node Rebooting..") ? false : true}
                            timeout={dynamic_title.includes("Node Rebooting..") ? 300 : 0}
                            beforeUnmount={dynamic_title.includes("Node Rebooting..") ? () => {props.history.push('/login')} : () => {}}
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

            <Row>
                <Col md={12} xl={12} className="">
                  <Col xl={12} >
                  <Card>
                    <CardBody>
                      <div class="col-12">{/*
<h4 className="card-title mb-2">Node Wifi Current Data</h4>
                
          <div class="table-responsive">
            {props.wifiData && currentWifiState ? <div className='card'><div className='card-body'> <table class="table mb-0 table">
              <thead>
                <tr>
                  <th><i className="bx bx-flag"></i> Wifi SSID</th>
                  <th><i className="bx bx-world"></i> Password</th>
                  <th><i className="bx bx-server"></i> Protocol</th>
                  <th><i className="bx bx-wifi"></i> Country</th>
                </tr>
              </thead>
              <tbody>{ 
                
               
                    <tr>
                      <td style={{borderBottom: "none"}}>{currentWifiState.ssid} </td>
                      <td style={{borderBottom: "none"}}>{currentWifiState.password}</td>
                      <td style={{borderBottom: "none"}}>{currentWifiState.protocol} </td>
                      <td style={{borderBottom: "none"}}><Flag code={currentWifiState.country} height="12" /> { " " + currentWifiState.country} </td>
                    </tr>
                
              
                }
              </tbody>
            </table></div></div> : <div className='card'><div className='card-body' style={{display: "flex", alignItems: "center", width: "100%", textAlign: "center"}}><p style={{margin: "auto"}}>You are not yet connected to a WiFi network.</p></div></div>
            }
          </div>*/}
                        <h4 class="card-title"><i className="bx bx-wifi"></i>Node WiFi Settings</h4>
                        <p>Use this form to change your WiFi settings</p> 
                          <div class="card">                                     
                            <div class="card-body">
                            <AvForm
                              className="form-horizontal"
                              onValidSubmit={() => {
                                
                              }}
                            >
                            <div className="text-left">{/*
                              <Button type="submit" color="success">
                                Save/Modify
                                            </Button>*/}
                                            
                      <Col xl={3} lg={4} sm={6} className="mb-2">
                                  <div className="">
                                      <Button
                                          color={buttonWifiState ? "danger" : "primary" }
                                          onClick={() => {
                                              setconfirm_alert2(true)
                                          }}
                                          id="sa-success"
                                      >
                                          {buttonWifiState ? "Disable" : "Enable"}
                  </Button>
                                  </div>
                                  {confirm_alert2 ? (
                                      <SweetAlert
                                          title="Are you sure?"
                                          warning
                                          showCancel
                                          confirmButtonText="Yes, do it!"
                                          confirmBtnBsStyle="success"
                                          cancelBtnBsStyle="danger"
                                          onConfirm={() => {
                                            setButtonWifiState(!buttonWifiState);      
                                            setconfirm_alert2(false);                                        
                                          }}
                                          onCancel={() => setconfirm_alert2(false)}
                                      >
                                          {buttonWifiState ? "Your Node Wifi will be disabled and current Wifi data will be removed!" : "Your Node Wifi will be enabled and you must enter your wifi data."}
                                      </SweetAlert>
                                  ) : null}
                              </Col>
                            </div>
                              <div className="form-group">
                                <div className='select-container' style={{  marginTop: `15px` }}>
                            <label>SSID</label>
                                <input 
                                  name="ssid"
                                  label="SSID"
                                  defaultValue={currentWifiState.ssid}
                                  onChange={(e) => setCurrentWifiState({...currentWifiState, ssid: e.target.value })}
                                  className="form-control"
                                  placeholder="Enter WiFi Network Name"
                                  type="text"
                                  style={buttonWifiState ? {} : {backgroundColor: "#CCC"}}
                                  required
                                  readOnly={buttonWifiState ? false : true}
                                  ></input>
                                  </div>
                                  <div className='select-container' style={{  marginTop: `15px` }}>
                            <label>Password</label>
                                  <input 
                                  name="password"
                                  label="Password"
                                  defaultValue={currentWifiState.password}
                                  onChange={(e) => setCurrentWifiState({...currentWifiState, password: e.target.value })}
                                  className="form-control"
                                  placeholder="Enter Password"
                                  type="password"
                                  style={buttonWifiState ? {} : {backgroundColor: "#CCC"}}
                                  required
                                  readOnly={buttonWifiState ? false : true}
                                    ></input>
                                    </div>
                                    <div className='select-container' style={{  marginTop: `15px` }}>
                            <label>Encryption</label>
                                    <input 
                                  name="protocol"
                                  label="Encryption"
                                  defaultValue={currentWifiState.protocol}
                                  onChange={(e) => setCurrentWifiState({...currentWifiState, protocol: e.target.value })}
                                  className="form-control"
                                  placeholder="Select Encryption"
                                  type="select"
                                  style={buttonWifiState ? {} : {backgroundColor: "#CCC"}}
                                  required
                                  readOnly={buttonWifiState ? false : true}
                                      ></input>
                                      </div>
                                <div className='select-container' style={{  marginTop: `15px` }}>
                            <label>Country</label>
                                            {buttonWifiState ? currentWifiState && <Select
                                                onChange={(e) => setCurrentWifiState({...currentWifiState, country: {value: e.value, label: e.label}})}
                                                menuPlacement="auto"
                                                menuPosition="fixed"
                                                defaultValue={{ label: currentWifiState.country.label }}
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderColor: state.isFocused ? 'purple' : 'grey',
                                                        border: state.isFocused ? "2px solid #7c7cdd" : "2px solid #cccccc",
                                                        "&:hover": {
                                                            border: "2px solid #7c7cdd",
                                                        }
                                                    }), option: (provided, state) => ({
                                                        ...provided,
                                                        backgroundColor: state.isSelected ? "#7c7cdd" : "white",
                                                        color: "black",
                                                        "&:hover": {
                                                            border: "1px solid #7c7cdd",
                                                        }
                                                    }),
                                                }}

                                                options={options} /> : 
                                                <input 
                                              name="country"
                                              label="Country"
                                              defaultValue={currentWifiState.country.label}
                                              onChange={(e) => setCurrentWifiState({...currentWifiState, protocol: e.target.value })}
                                              className="form-control"
                                              type="select"
                                              style={buttonWifiState ? {} : {backgroundColor: "#CCC"}}
                                              required
                                              readOnly={buttonWifiState ? false : true}
                                                  ></input>}
                                        </div>
                              </div>
                              <div className="text-left mt-4">{/*
                                <Button type="submit" color="success">
                                  Save/Modify
                                              </Button>*/}
                                              
                        <Col xl={3} lg={4} sm={6} className="mb-2">
                                    <div className="">
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
                                            confirmButtonText="Yes, modify it!"
                                            confirmBtnBsStyle="success"
                                            cancelBtnBsStyle="danger"
                                            onConfirm={() => {
                                                
                                            }}
                                            onCancel={() => setconfirm_alert(false)}
                                        >
                                            Your Node Wifi data will be modified!
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
                  </Col>
              </Col>
            </Row>
        </React.Fragment>
    );
}

export default SettingsDataWidget;
