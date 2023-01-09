import PropTypes from 'prop-types'
import React from "react"
import { Row, Col, Alert, Container, Card } from "reactstrap"
import MetaTags from 'react-meta-tags';

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { userForgetPassword } from "../../store/actions"

//import images
import logoDark from '../../assets/images/logo-dark.png';
import logoLight from '../../assets/images/logo-light.png';

const ForgetPasswordPage = props => {

  function handleValidSubmit(event, values) {
    props.userForgetPassword(values, props.history)
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Recover Password | Samply - React Admin & Dashboard Template</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="mdi mdi-home-variant h2"></i>
        </Link>
      </div>

      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="text-center mb-5">
                <Link to="/dashboard" className="auth-logo">
                  <img src={logoDark} alt="" height="28" className="auth-logo-dark" />
                  <img src={logoLight} alt="" height="28" className="auth-logo-light" />
                </Link>
                <p className="font-size-15 text-muted mt-3">Responsive <b>Bootstrap 5</b> Admin Dashboard</p>
              </div>
              <Card className="overflow-hidden">
                <Row className="g-0">
                  <Col lg={6}>
                    <div className="p-lg-5 p-4">

                      <div>
                        <h5>Reset Password</h5>
                        <p className="text-muted">Re-Password with Samply.</p>
                      </div>
                      <div className="mt-4 pt-3">
                        <div className="alert alert-success text-center mb-4" role="alert">
                          Enter your Email and instructions will be sent to you!
                                        </div>
                        {props.forgetError && props.forgetError ? (
                          <Alert color="danger" className="text-center mb-4" style={{ marginTop: "13px" }}>
                            {props.forgetError}
                          </Alert>
                        ) : null}
                        {props.forgetSuccessMsg ? (
                          <Alert color="success" className="text-center mb-4" style={{ marginTop: "13px" }}>
                            {props.forgetSuccessMsg}
                          </Alert>
                        ) : null}

                        <AvForm
                          className="form-horizontal"
                          onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                        >
                          <div className="mb-3">
                            <AvField
                              name="email"
                              label="Email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="mt-4 text-end">
                            <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                          </div>
                        </AvForm>
                      </div>

                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="p-lg-5 p-4 bg-auth h-100 d-none d-lg-block">
                      <div className="bg-overlay"></div>

                    </div>
                  </Col>
                </Row>
              </Card>
              <div className="mt-5 text-center">
                <p>Remember It ? <Link to="/login" className="fw-semibold text-decoration-underline"> Login  </Link> </p>
                <p>© {(new Date().getFullYear())} <b>Samply</b>. Crafted with <i className="mdi mdi-heart text-danger"></i> by Pichforest</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func
}

const mapStatetoProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword
  return { forgetError, forgetSuccessMsg }
}

export default withRouter(
  connect(mapStatetoProps, { userForgetPassword })(ForgetPasswordPage)
)
