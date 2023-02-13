import React from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import SweetAlert from "react-bootstrap-sweetalert"


const BackupDataWidget = props => {


  const [currentUrl, setCurrentUrl] = useState("");
  const typedUser = useSelector(state => state.Login.userTyped);

  useEffect(async () => {
    let url;
    if((window.location.hostname).includes("revo.host")){
      url = `https://${window.location.hostname}/api`
    }else {
      url = `http://${window.location.hostname}:3001/api`
    }

    setCurrentUrl(url);
  },[])



  
  const [confirm_alert, setconfirm_alert] = useState(false)
  //const [success_msg, setsuccess_msg] = useState(false)
  const [success_dlg, setsuccess_dlg] = useState(false)
  const [dynamic_title, setdynamic_title] = useState("")
  const [dynamic_description, setdynamic_description] = useState("")
  const [error_dlg, seterror_dlg] = useState(false)

function handleButton (){
  let titleRes;
  let descriptionRes;
  fetch(`${currentUrl}/backupwallet`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
  }).then(data => data.text())
    .then(res => {
      if((res).includes("ok")){
        window.open(`${currentUrl}/backup.dat`, '_blank')  
        titleRes = "Downloading.."
        descriptionRes = "Wallet Backup download in progress."
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
                  <h4 class="card-title"><i className="bx bx-save"></i>Backup your Node</h4>
                  <p>Backup your node</p>
                  <div className='card'>
                    <div className='card-body' style={{ display: "flex", alignItems: "center", width: "100%", textAlign: "center" }}>

                      <Col xl={3} lg={4} sm={6} style={{margin: "auto"}} className="mb-2">
                        <div className="p-3">
                          <Button
                            color="primary"
                            onClick={() => {
                              setconfirm_alert(true)
                            }}
                            id="sa-success"
                          >
                            Download Wallet Backup
                          </Button>
                        </div>
                        {confirm_alert ? (
                          <SweetAlert
                            title="Are you sure?"
                            warning
                            showCancel
                            confirmButtonText="Yes, download it!"
                            confirmBtnBsStyle="success"
                            cancelBtnBsStyle="danger"
                            onConfirm={() => handleButton()}
                            onCancel={() => setconfirm_alert(false)}
                          >
                            Your Wallet Backup will be created and downloaded.
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

export default BackupDataWidget;
