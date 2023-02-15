import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "reactstrap"
import { useSelector } from "react-redux";

const Footer = () => {

  const [nodeVersion, setNodeVersion] = useState(false);
  const typedUser = useSelector(state => state.Login.userTyped);
  const isLogged = useSelector(state => state.Login.isLogged);


  useEffect(async () => {
    if (!isLogged) {
      return props.history.push('/login');
    }
    let url;
    if((window.location.hostname).includes("revo.host")){
      url = `https://${window.location.hostname}/api`
    }else {
      url = `http://${window.location.hostname}:3001/api`
    }

    fetch(`${url}/getver`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: typedUser.user, pass: typedUser.pass})
    }).then(data => data.text())
      .then(res => {
        let result = res.split("_")[1];
        setNodeVersion(result);
      });    
  }, [])

  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col md={6}>{new Date().getFullYear()} - {nodeVersion ? nodeVersion + " " : ""}Revo Node Manager. Web v.1.0</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
