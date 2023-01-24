import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import classnames from "classnames";

const Profile = (props) => {
  const [activeTab, setactiveTab] = useState("1");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  const plans = [
    {
      planName: "Starter",
      desc: "Suitable for 1 team member",
      price: 19,
      features: [
        "Free Live Support",
        "Unlimited User",
        "No Time Tracking",
        "Free Setup",
      ],
    },
    {
      planName: "Professional",
      desc: "Suitable for 3 team member",
      price: 29,
      features: [
        "Free Live Support",
        "Unlimited User",
        "No Time Tracking",
        "Free Setup",
      ],
    },
    {
      planName: "Enterprise",
      desc: "Suitable for 19 team member",
      price: 39,
      features: [
        "Free Live Support",
        "Unlimited User",
        "No Time Tracking",
        "Free Setup",
      ],
    },
    {
      planName: "Unlimited",
      desc: "Suitable for unlimited team member",
      price: 49,
      features: [
        "Free Live Support",
        "Unlimited User",
        "No Time Tracking",
        "Free Setup",
      ],
    },
  ];
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Pricing | Revo Node Manager</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="Pricing" />
          <Row className="justify-content-center">
            <Col lg={5}>
              <div className="text-center my-3">
                <h4 className="mb-3">Choose your Pricing plan</h4>
                <p className="text-muted mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo veritatis
                </p>

                <Nav pills className="pricing-nav-tabs mt-4">
                  <NavItem>
                    <NavLink
                      className={classnames(
                        {
                          active: activeTab === "1",
                        },
                        "fw-semibold"
                      )}
                      onClick={() => {
                        toggleTab("1");
                      }}
                    >
                      Monthly
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames(
                        {
                          active: activeTab === "2",
                        },
                        "fw-semibold"
                      )}
                      onClick={() => {
                        toggleTab("2");
                      }}
                    >
                      Yearly
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Col>
          </Row>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="row g-0">
                {plans.map((plan, key) => (
                  <Col key={key} xl={3} md={6}>
                    <Card className="plan-box rounded-start rounded-0">
                      <CardBody className="p-4">
                        <div className="d-flex">
                          <div className="me-3">
                            <i className="mdi mdi-square-edit-outline h1 text-primary"></i>
                          </div>
                          <div className="flex-1">
                            <h5 className="mb-1">{plan["planName"]}</h5>
                            <p className="text-muted">{plan["desc"]}</p>
                          </div>
                        </div>
                        <div className="py-4 border-bottom">
                          <h3>
                            <sup>
                              <small>$</small>
                            </sup>{" "}
                            {plan["price"]}/{" "}
                            <span className="font-size-13 text-muted">
                              Per month
                            </span>
                          </h3>
                        </div>

                        <ul className="list-unstyled plan-features mt-4">
                          {plan["features"].map((f, idx) => (
                            <li key={idx}>
                              <i className="mdi mdi-circle-medium text-primary me-2"></i>{" "}
                              {f}
                            </li>
                          ))}
                        </ul>

                        <div className="text-center plan-btn mt-4 mb-2">
                          <Link
                            to="#"
                            className="btn btn-primary waves-effect waves-light"
                          >
                            Sign up Now
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="row g-0">
                <div className="row g-0">
                  {plans.map((plan, key) => (
                    <Col key={key} xl={3} md={6}>
                      <Card className="plan-box rounded-start rounded-0">
                        <CardBody className="p-4">
                          <div className="d-flex">
                            <div className="me-3">
                              <i className="mdi mdi-square-edit-outline h1 text-primary"></i>
                            </div>
                            <div className="flex-1">
                              <h5 className="mb-1">{plan["planName"]}</h5>
                              <p className="text-muted">{plan["desc"]}</p>
                            </div>
                          </div>
                          <div className="py-4 border-bottom">
                            <h3>
                              <sup>
                                <small>$</small>
                              </sup>{" "}
                              {plan["price"]}/{" "}
                              <span className="font-size-13 text-muted">
                                Per Year
                              </span>
                            </h3>
                          </div>

                          <ul className="list-unstyled plan-features mt-4">
                            {plan["features"].map((f, idx) => (
                              <li key={idx}>
                                <i className="mdi mdi-circle-medium text-primary me-2"></i>{" "}
                                {f}
                              </li>
                            ))}
                          </ul>

                          <div className="text-center plan-btn mt-4 mb-2">
                            <Link
                              to="#"
                              className="btn btn-primary waves-effect waves-light"
                            >
                              Sign up Now
                            </Link>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </div>
              </div>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Profile;
