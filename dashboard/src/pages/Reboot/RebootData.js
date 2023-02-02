import React from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import SweetAlert from "react-bootstrap-sweetalert"


const RebootDataWidget = props => {

    
useEffect(()=>{        
})


  
const [confirm_alert, setconfirm_alert] = useState(false)
const [confirm_alert2, setconfirm_alert2] = useState(false)
//const [success_msg, setsuccess_msg] = useState(false)
const [success_dlg, setsuccess_dlg] = useState(false)
const [dynamic_title, setdynamic_title] = useState("")
const [dynamic_description, setdynamic_description] = useState("")
const [error_dlg, seterror_dlg] = useState(false)




function handleButton (){
  let titleRes;
  let descriptionRes;
  fetch(`http://${window.location.hostname}:3001/reboot`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(data => data.text())
    .then(res => {
      if((res).includes("done")){
        titleRes = "Node Rebooting.."
        descriptionRes = "Please wait while your Node reboot. You will be redirected automatically."
        setconfirm_alert(false);
        setsuccess_dlg(true);
        setdynamic_title(titleRes);
        setdynamic_description(descriptionRes);
      }
    });       
  
}




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
                <Col md={12} xl={12} className="">
                  <Col xl={12} >
                  <Card>
                    <CardBody>
                      <div class="col-12">
                        <h4 class="card-title"><i className="bx bx-planet"></i>Reboot your Node</h4>
                        <p>Reboot your node</p> 
                          <div class="card">                                     
                            <div class="card-body"  style={{ display: "flex", alignItems: "center", width: "100%", textAlign: "center" }}>
                      <Col xl={3} lg={4} sm={6} style={{margin: "auto"}} className="mb-2">
                        <div className="p-3">
                          <Button
                            color="primary"
                            onClick={() => {
                              setconfirm_alert(true)
                            }}
                            id="sa-success"
                          >
                            Reboot Node
                          </Button>
                        </div>
                        {confirm_alert ? (
                          <SweetAlert
                            title="Are you sure?"
                            warning
                            showCancel
                            confirmButtonText="Yes, reboot it!"
                            confirmBtnBsStyle="success"
                            cancelBtnBsStyle="danger"
                            onConfirm={() => handleButton()}
                            onCancel={() => setconfirm_alert(false)}
                          >
                            Your Node will be rebooted.
                          </SweetAlert>
                        ) : null}
                            
                      </Col>
                            
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

export default RebootDataWidget;
