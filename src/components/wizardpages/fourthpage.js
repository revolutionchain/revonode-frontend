import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Modal from 'react-modal';
import rescanIcon from '../../styles/images/rescan-icon.png'
import failedIcon from '../../styles/images/failed.png'
const { REACT_APP_LOCAL_NODE_ETH_IP } = process.env;
const { REACT_APP_LOCAL_NODE_WIFI_IP } = process.env;

const REACT_APP_LOCAL_NODE_IP = REACT_APP_LOCAL_NODE_WIFI_IP || REACT_APP_LOCAL_NODE_ETH_IP;



export default function Fourthpage({ currentPage, setCurrentPage }) {

    const [wifiData, setWifiData] = useState(false);
    const [checkedState, setCheckedState] = useState([]);
    const [selectedWifi, setSelectedWifi] = useState([]);
    const [input, setInput] = useState({
        essid: "",
        pass: "",
        country: ""
    });


    useEffect(async () => {
        let getwifidata = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/wifiscan`);
        setWifiData(getwifidata.data.split('	').filter(e => e.includes('SSID:')));
    }, [])

    function handleCheckbox(elem, pos) {
        wifiData.map((e, i) => {
            if (pos == i) {
                let checkedArr = wifiData.map(e => false);
                checkedArr[i] = true;
                setCheckedState(checkedArr);
                setSelectedWifi(e.slice(5));
                setInput({
                    ...input,
                    [elem.target.name]: elem.target.value
                })
            }
        })
    }


    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    const [errorFound, setErrorFound] = useState('');

    async function handleConnect() {
        if (input?.essid.length && input?.pass.length && input?.country.length) {
            let genwificonfig = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/genwificonfig`, input);
            if (genwificonfig.data.includes('ok')) {
                setCurrentPage(currentPage + 1)
            }
        } else if (!input?.essid.length) {
            setErrorFound('You must select a WiFi network!');
            openModal();
        } else if (!input?.pass.length) {
            setErrorFound('You have not entered a password!');
            openModal();
        } else if (!input?.country.length) {
            setErrorFound('you must select the abbreviation of your country!');
            openModal();
        }
    }

    const [getError, setGetError] = useState(false);
    async function handleRescan() {
        setIsLoading(true);
        try {
            let getwifidata = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/wifiscan`);
            setWifiData(getwifidata.data.split('	').filter(e => e.includes('SSID:')));
        } catch {
            setGetError(true);
        }
        setIsLoading(false);
    }

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


    const [isLoading, setIsLoading] = useState(false);

    function handleSelect(e) {
        setInput({
            ...input,
            country: e.value
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


    return (
        <div className=''>
            <div style={{ minHeight: `calc(72vh - 50px)` }}>
                <img src={rescanIcon} className='button-style next-button rescan-button' onClick={() => handleRescan()} />
                <h2>Wifi</h2>
                <h3>The use of a wired ethernet network is highly recommended to guarantee the node maximum performance levels. However, if it is not possible to use a LAN cable, you can connect your node in WiFi making sure to keep it as close as possible to your WiFi router. If you're planning to use a cable, great! You can skip this page.</h3>
                <div>
                    <div style={{
                        backgroundColor: `#EEE`,
                        textAlign: `left`,
                        paddingLeft: `10px`,
                        paddingTop: `5px`,
                    }}><span>WiFi Networks</span></div>
                    {
                        wifiData.length && !isLoading ? wifiData?.map((e, i) => {
                            return <div className='div-wifi-container' >
                                <div style={{ display: `flex` }}>
                                    {<input type="checkbox" name='essid' value={e.slice(6, e.length - 1)} checked={checkedState[i]} onClick={(e) => handleCheckbox(e, i)}></input>}
                                    <span style={{ fontSize: `16px` }}>{'Wifi name: ' + e.slice(5, e.length - 1)}</span>
                                </div>
                                <div>
                                    {checkedState[i] && <input style={{ width: `60%`, fontSize: `16px` }} type='password' name='pass' placeholder="Password" onChange={(e) => handleInput(e)}></input>}
                                    {checkedState[i] &&
                                        <div style={{ width: `45%`, marginTop: `15px` }}>
                                            <Select
                                                onChange={handleSelect}
                                                menuPlacement="auto"
                                                menuPosition="fixed"
                                                defaultValue={{ label: 'Select Country Code' }}
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

                                                options={options} />
                                        </div>}
                                </div>
                            </div>
                        }) : <div style={{ paddingTop: `60px` }} ><div class="nb-spinner"></div></div>
                    }
                </div>
            </div>
            <div style={{ display: `flex` }}>
                <div style={{ width: `30%`, textAlign: `left` }}>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='button-style back-button'>Back</button>
                </div>

                <div style={{ width: `70%`, textAlign: `right` }}>
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style skip-button'>Skip</button>
                    <button onClick={() => handleConnect()} className='button-style next-button'>Connect</button>
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
                    <img className='warning-icon' src={failedIcon} />
                    <div className="div-balance-title div-abm-title">{errorFound}</div>
                    <button onClick={closeModal} className='button-style back-button modal-button'>Ok</button>
                </Modal>
            </div>
        </div>
    )
}
