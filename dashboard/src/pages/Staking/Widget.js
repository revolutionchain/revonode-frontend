import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const widget = [
    {
        id: 1,
        title: 'Total UTXOs',
        text: '',
        count: '0',
        dollor: true,
        icon: 'bx bx-transfer-alt text-primary',
        secondIcon: '',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Currently Staking',
        text: '',
        count: '0',
        dollor: true,
        icon: 'mdi mdi-pickaxe text-warning',
        secondIcon: '',
        percentage: '4.58%',
        color: 'danger',
        upArrow: false
    },
    {
        id: 3,
        title: 'Validated Blocks',
        text: '',
        count: '0',
        dollor: false,
        icon: 'bx bxs-component text-primary',
        secondIcon: '',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    }
]


const Widget = props => {

  const typedUser = useSelector(state => state.Login.userTyped);

    const [ widgetState, setWidgetState ] = useState(false);
    
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(async () => {
      let url;
      if((window.location.hostname).includes("revo.host")){
        url = `https://${window.location.hostname}/api`
      }else {
        url = `http://${window.location.hostname}:3001/api`
      }
  
      setCurrentUrl(url);
    widget[0].count = (props.listunspentState).length;
    widget[1].count = (props.nodeData[9].stake).toFixed(8) + " RVO"
    //widget[2].count = "";
    
    fetch(`${url}/getwalletaddress`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
    }).then(data => data.text())
    .then(res => {
      fetch(`${props.nodeData[11].API_URL}address/${res}/`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(data => data.json())
        .then(res => {
          widget[2].count = (res.blocksMined);
          setWidgetState(widget);
        });
      });
    
},[props.nodeData])

    return (
        <React.Fragment>
            <Row>                
                    <Col md={12} xl={12} className="d-flex flex-wrap">
                    {widget.map((widget, key) => (
                        <Col xs={12}  sm={6} md={2} xl={2} key={key}>
                        <Card style={{minHeight: "100px"}}>
                            <CardBody>{/*
                                <div className="float-end">
                                    <div className="avatar-sm mx-auto mb-4">
                                        <span className="avatar-title rounded-circle bg-light font-size-24">
                                            <i className={widget.icon}></i>
                                        </span>
                                    </div>
                                </div>*/}
                                <div>
                                    <p style={{fontSize: '14px'}} className="text-muted text-uppercase p-title"><i className={widget.icon}></i>{" " + widget.title}</p>
                                </div>
                                    <h4 style={{position: "absolute", top: "0", height: "100%", display: "flex", alignItems: "center", fontSize: "18px" }} className="mb-1 mt-3">
                                        {/*widget.dollor === true ? '' : ''*/}
                                        <span className="counter-value" data-target="58425">
                                            {widget.count}
                                        </span></h4>
                                <p className="text-muted mt-3 mb-0">
                                    <span className={""}>

                                        {/*widget.upArrow === true ?
                                            <i className="mdi mdi-arrow-up-bold me-1"></i> : <i className="mdi mdi-arrow-down-bold me-1"></i>
                                        */}
                                        <i className={widget.secondIcon}></i>{" " + widget.text}
                                    </span> 
                            </p>
                            </CardBody>
                        </Card>
                        </Col>
                ))}
                    </Col>
            </Row>
        </React.Fragment>
    );
}

export default Widget;
