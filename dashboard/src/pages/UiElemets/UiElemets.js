import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  NavLink,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//import Components
import Buttons from "./Buttons";
import Badges from "./Badges";
import Dropdowns from "./Dropdowns";
import Images from "./Images";
import Cards from "./Cards";
import TabsAccordions from "./Tabs&Accordions";
import Modals from "./Modals";
import Pagination from "./Pagination";
import Progress from "./Progress";
import TooltipsPopovers from "./Tooltips&Popovers";
import Spinners from "./Spinners";
import Grid from "./Grid";
import Video from "./Video";
import Collapses from "./Collapse";
import Placeholder from "./Placeholder";

const UiElements = () => {
  const [position, setPosition] = useState();
  const [open, setOpen] = useState(false);

  const toggleTopDrawer = () => {
    setPosition('top');
    setOpen(!open);
  };
  const toggleBottomDrawer = () => {
    setPosition('bottom');
    setOpen(!open);
  };
  const toggleLeftDrawer = () => {
    setPosition('left');
    setOpen(!open);
  };
  const toggleRightDrawer = () => {
    setPosition('right');
    setOpen(!open);
  };
  const onDrawerClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Ui Elements | Revo Node Manager</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Ui Elements" breadcrumbItem="Ui Elements" />
          <Row>
            <Col lg={12}>
              <div className="d-xl-flex">
                <div className="w-100">
                  <div>
                    <Row>
                      <Buttons />
                    </Row>

                    <Row>
                      <Badges />
                    </Row>

                    <Row>
                      <Dropdowns />
                    </Row>

                    <Row>
                      <Images />
                    </Row>

                    <Row>
                      <Cards />
                    </Row>

                    <Row>
                      <Collapses />
                    </Row>

                    <Row>
                      <TabsAccordions />
                    </Row>

                    <Row>
                      <Col lg={12}>
                        <Card id="drawer">
                          <CardBody>
                            <CardTitle className="h4">Drawer</CardTitle>
                            <p className="card-title-desc">
                              Navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.
                            </p>
                            <Button
                              color="primary"
                              className=""
                              onClick={toggleTopDrawer} disabled={open}
                            >
                              Top
                            </Button>{" "}
                            <Button
                              color="primary"
                              className=""
                              onClick={toggleBottomDrawer} disabled={open}
                            >
                              Bottom
                            </Button>{" "}
                            <Button
                              color="primary"
                              className=""
                              onClick={toggleLeftDrawer} disabled={open}
                            >
                              Left
                            </Button>{" "}
                            <Button
                              color="primary"
                              className=""
                              onClick={toggleRightDrawer} disabled={open}
                            >
                              Right
                            </Button>{" "}
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Modals />
                    </Row>

                    <Row>
                      <Pagination />
                    </Row>

                    <Row>
                      <Placeholder />
                    </Row>

                    <Row>
                      <Progress />
                    </Row>

                    <Row>
                      <TooltipsPopovers />
                    </Row>

                    <Row>
                      <Spinners />
                    </Row>

                    <Row>
                      <Grid />
                    </Row>

                    <Row>
                      <Video />
                    </Row>

                  </div>
                </div>

                <div className="d-none d-lg-block">
                  <div className="ui-elements-demo-bar card">
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item">
                        <NavLink href="#buttons">Buttons</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#badges">Badges</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#dropdowns">Dropdowns</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#images">Images</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#cards">Cards</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#collapse">Collapse</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#tabs-accordions">
                          Tabs & Accordions
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#drawer">
                          Drawer
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#modals">Modals</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#pagination">Pagination</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#placeholder">Placeholder</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#progress">Progress</NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink href="#tooltip-popover">
                          Tooltips & Popovers
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#spinner">Spinners</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#grid">Grid</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink href="#video">Video</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ReactDrawer
        open={open}
        position={position}
        onClose={onDrawerClose}
      >
        <ul className="drawer-main-menu list-unstyled">
          <li className="drawer-menu">
            <Link className="" to="/">
              <i className="bx bx-home-circle"></i><span>Dashboards</span>
            </Link>
          </li>
          <li className="drawer-menu"><Link className="" to="#">
            <i className="bx bx-calendar"></i><span>Calendar</span></Link>
          </li>
          <li className="drawer-menu"><Link className="" to="#">
            <i className="bx bx-chat"></i><span>Chat</span></Link>
          </li>
          <li className="drawer-menu">
            <Link className="" to="#">
              <i className="bx bx-file"></i><span>Email</span>
            </Link>
          </li>
        </ul>
      </ReactDrawer>
    </React.Fragment>
  );
};

export default UiElements;
