import React, { useState } from 'react';
import {
    Card,
    CardBody,
    Col,
    Row,
    Dropdown,
    Button,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledButtonDropdown,
    ButtonDropdown,
} from 'reactstrap';

function Dropdowns(props) {
    const [drp_primary1, setDrp_primary1] = useState(false);
    const [drp_secondary1, setDrp_secondary1] = useState(false);
    const [drp_success1, setDrp_success1] = useState(false);
    const [drp_info1, setDrp_info1] = useState(false);
    const [drp_warning1, setDrp_warning1] = useState(false);
    const [drp_danger1, setDrp_danger1] = useState(false);
    const [drp_secondary, setDrp_secondary] = useState(false);
    const [drp_secondary_lg, setDrp_secondary_lg] = useState(false);
    const [drp_secondary_sm, setDrp_secondary_sm] = useState(false);
    const [drp_secondary_sm1, setDrp_secondary_sm1] = useState(false);
    const [dropup1, setDropup1] = useState(false);
    const [drp_up11, setDrp_up11] = useState(false);
    const [drop_align, setDrop_align] = useState(false);
    const [info_dropup1, setInfo_dropup1] = useState(false);
    const [infodrp_up11, setInfodrp_up11] = useState(false);
    const [drop_right, setDropRight] = useState(false);
    const [info_dropup111, setInfo_dropup111] = useState(false);
    const [infodrp_up1111, setInfodrp_up1111] = useState(false);
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="dropdowns">
                    <CardBody>
                        <h4 className="card-title mb-4">Dropdowns</h4>

                        <Row>
                            <Col lg={6}>
                                <div className="">
                                    <h5 className="font-size-14">Basic</h5>
                                    <p className="card-title-desc">
                                        Any single{" "}
                                        <code className="highlighter-rouge">
                                            .btn
                                        </code>{" "}
                                        can be turned into a dropdown toggle with
                                        some markup changes. Here’s how you can put
                                        them to work with either{" "}
                                        <code className="highlighter-rouge">
                                            &lt;button&gt;
                                        </code>
                                        elements:
                                    </p>

                                    <Row>
                                        <Col sm={6}>
                                            <UncontrolledDropdown>
                                                <DropdownToggle
                                                    className="btn btn-secondary"
                                                    type="button"
                                                >
                                                    Dropdown Button{" "}
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>
                                                        Another action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Something else here
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Col>

                                        <Col sm={6}>
                                            <UncontrolledDropdown className="mt-4 mt-sm-0">
                                                <DropdownToggle
                                                    tag="a"
                                                    className="btn btn-secondary"
                                                >
                                                    Dropdown link{" "}
                                                    <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    <DropdownItem>Action</DropdownItem>
                                                    <DropdownItem>
                                                        Another action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Something else here
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mt-4 mt-lg-0">
                                    <h5 className="font-size-14">Variant</h5>
                                    <p className="card-title-desc">
                                        The best part is you can do this with any
                                        button variant, too:
                                    </p>

                                    <div className="d-flex gap-2 flex-wrap">
                                        <UncontrolledButtonDropdown className="btn-group">
                                            <DropdownToggle
                                                color="primary"
                                                type="button"
                                            >
                                                Primary{" "}
                                                <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem>
                                                    Separated link
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                        <UncontrolledButtonDropdown className="btn-group">
                                            <DropdownToggle
                                                color="secondary"
                                                type="button"
                                            >
                                                Secondary{" "}
                                                <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem>
                                                    Separated link
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle
                                                color="success"
                                                type="button"
                                            >
                                                Success{" "}
                                                <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem>
                                                    Separated link
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle
                                                color="info"
                                                type="button"
                                            >
                                                Info{" "}
                                                <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem>
                                                    Separated link
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle
                                                color="warning"
                                                type="button"
                                            >
                                                Warning{" "}
                                                <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem>
                                                    Separated link
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle
                                                color="danger"
                                                type="button"
                                            >
                                                Danger{" "}
                                                <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem>
                                                    Separated link
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">Split Button</h5>
                                    <p className="card-title-desc">
                                        The best part is you can do this with any
                                        button variant, too:
                                    </p>

                                    <div className="d-flex gap-2 flex-wrap">
                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_primary1}
                                                toggle={() =>
                                                    setDrp_primary1(!drp_primary1)
                                                }
                                            >
                                                <Button id="caret" color="primary">
                                                    Primary
                                                </Button>
                                                <DropdownToggle
                                                    caret
                                                    color="primary"
                                                    className="dropdown-toggle-split"
                                                >
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>
                                                        Header
                                                    </DropdownItem>
                                                    <DropdownItem disabled>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>{" "}
                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_secondary1}
                                                toggle={() =>
                                                    setDrp_secondary1(!drp_secondary1)
                                                }
                                            >
                                                <Button id="caret" color="secondary">
                                                    Secondary
                                                </Button>
                                                <DropdownToggle
                                                    caret
                                                    color="secondary"
                                                    className="dropdown-toggle-split"
                                                >
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>
                                                        Header
                                                    </DropdownItem>
                                                    <DropdownItem disabled>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>{" "}
                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_success1}
                                                toggle={() =>
                                                    setDrp_success1(!drp_success1)
                                                }
                                            >
                                                <Button id="caret" color="success">
                                                    Success
                                                </Button>
                                                <DropdownToggle
                                                    caret
                                                    color="success"
                                                    className="dropdown-toggle-split"
                                                >
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>
                                                        Header
                                                    </DropdownItem>
                                                    <DropdownItem disabled>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>{" "}
                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_info1}
                                                toggle={() => setDrp_info1(!drp_info1)}
                                            >
                                                <Button id="caret" color="info">
                                                    Info
                                                </Button>
                                                <DropdownToggle
                                                    caret
                                                    color="info"
                                                    className="dropdown-toggle-split"
                                                >
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>
                                                        Header
                                                    </DropdownItem>
                                                    <DropdownItem disabled>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>{" "}
                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_warning1}
                                                toggle={() =>
                                                    setDrp_warning1(!drp_warning1)
                                                }
                                            >
                                                <Button id="caret" color="warning">
                                                    Warning
                                                </Button>
                                                <DropdownToggle
                                                    caret
                                                    color="warning"
                                                    className="dropdown-toggle-split"
                                                >
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>
                                                        Header
                                                    </DropdownItem>
                                                    <DropdownItem disabled>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>{" "}
                                        <div className="btn-group">
                                            <ButtonDropdown
                                                isOpen={drp_danger1}
                                                toggle={() =>
                                                    setDrp_danger1(!drp_danger1)
                                                }
                                            >
                                                <Button id="caret" color="danger">
                                                    Danger
                                                </Button>
                                                <DropdownToggle
                                                    caret
                                                    color="danger"
                                                    className="dropdown-toggle-split"
                                                >
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>
                                                        Header
                                                    </DropdownItem>
                                                    <DropdownItem disabled>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>{" "}
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">Sizing</h5>
                                    <p className="card-title-desc">
                                        Button dropdowns work with buttons of all
                                        sizes, including default and split dropdown
                                        buttons.
                                    </p>

                                    <div className="">
                                        <ButtonDropdown
                                            isOpen={drp_secondary}
                                            toggle={() =>
                                                setDrp_secondary(!drp_secondary)
                                            }
                                            className="me-1 mt-2"
                                        >
                                            <DropdownToggle
                                                caret
                                                color="primary"
                                                className="btn btn-primary btn-lg"
                                            >
                                                Large Button{" "}
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem disabled>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{" "}
                                        <ButtonDropdown
                                            isOpen={drp_secondary_lg}
                                            toggle={() =>
                                                setDrp_secondary_lg(!drp_secondary_lg)
                                            }
                                            className="me-1 mt-2"
                                        >
                                            <Button className="btn btn-secondary btn-lg">
                                                Large button
                                            </Button>
                                            <DropdownToggle
                                                caret
                                                color="secondary"
                                                className="btn btn-secondary btn-lg dropdown-toggle-split"
                                            >
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem disabled>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{" "}
                                        <ButtonDropdown
                                            isOpen={drp_secondary_sm}
                                            toggle={() =>
                                                setDrp_secondary_sm(!drp_secondary_sm)
                                            }
                                            className="me-1 mt-2"
                                        >
                                            <DropdownToggle
                                                caret
                                                color="info"
                                                className="btn btn-info btn-sm"
                                            >
                                                Small button{" "}
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem disabled>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>{" "}
                                        <ButtonDropdown
                                            isOpen={drp_secondary_sm1}
                                            toggle={() =>
                                                setDrp_secondary_sm1(!drp_secondary_sm1)
                                            }
                                            className="me-1 mt-2"
                                        >
                                            <Button className="btn btn-secondary btn-sm">
                                                {" "}
                                                Small button
                                            </Button>
                                            <DropdownToggle
                                                caret
                                                color="secondary"
                                                className="btn btn-secondary btn-sm dropdown-toggle-split"
                                            >
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem disabled>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Dropup Variation
                                    </h5>
                                    <p className="card-title-desc">
                                        Trigger dropdown menus above elements by
                                        adding{" "}
                                        <code className="highlighter-rouge">
                                            .dropup
                                        </code>{" "}
                                        to the parent element.
                                    </p>

                                    <div className="d-flex gap-2 flex-wrap">
                                        <Dropdown
                                            isOpen={dropup1}
                                            direction="up"
                                            toggle={() => setDropup1(!dropup1)}
                                        >
                                            <DropdownToggle className="btn btn-secondary dropdown-toggle">
                                                Dropup{" "}
                                                <i className="mdi mdi-chevron-up" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>{" "}
                                        <ButtonDropdown
                                            direction="right"
                                            isOpen={drp_up11}
                                            toggle={() => setDrp_up11(!drp_up11)}
                                        >
                                            <DropdownToggle caret color="secondary">
                                                Menu is right-aligned{" "}
                                                <i className="mdi mdi-chevron-down" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>
                                                    Header
                                                </DropdownItem>
                                                <DropdownItem disabled>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                            </DropdownMenu>{" "}
                                        </ButtonDropdown>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Menu Alignment
                                    </h5>
                                    <p className="card-title-desc">
                                        Add{" "}
                                        <code className="highlighter-rouge">
                                            .dropdown-menu-end
                                        </code>
                                        to a{" "}
                                        <code className="highlighter-rouge">
                                            .dropdown-menu
                                        </code>{" "}
                                        to right align the dropdown menu.
                                    </p>

                                    <div className="">
                                        <UncontrolledButtonDropdown className="btn-group me-1 mt-2">
                                            <DropdownToggle
                                                color="primary"
                                                className="btn-lg dropdown-toggle"
                                                type="button"
                                            >
                                                Large button{" "}
                                                <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem>
                                                    Separated link
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>{" "}
                                        <div className="btn-group me-1 mt-2">
                                            <ButtonDropdown
                                                isOpen={drop_align}
                                                toggle={() =>
                                                    setDrop_align(!drop_align)
                                                }
                                            >
                                                <Button className="btn btn-secondary btn-lg">
                                                    {" "}
                                                    Large button
                                                </Button>
                                                <DropdownToggle
                                                    caret
                                                    color="secondary"
                                                    className="btn btn-secondary btn-lg dropdown-toggle-split"
                                                >
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem disabled>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>{" "}
                                        <UncontrolledButtonDropdown className="btn-group me-1 mt-2">
                                            <DropdownToggle
                                                color="info"
                                                className="btn btn-info btn-sm"
                                                type="button"
                                            >
                                                Small button{" "}
                                                <i className="mdi mdi-chevron-down"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                                <div className="dropdown-divider"></div>
                                                <DropdownItem>
                                                    Separated link
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>{" "}
                                        <div className="btn-group me-1 mt-2">
                                            <ButtonDropdown
                                                isOpen={info_dropup1}
                                                toggle={() =>
                                                    setInfo_dropup1(!info_dropup1)
                                                }
                                            >
                                                <Button className="btn btn-secondary btn-sm">
                                                    {" "}
                                                    small button
                                                </Button>
                                                <DropdownToggle
                                                    caret
                                                    color="secondary"
                                                    className="btn btn-secondary btn-sm"
                                                >
                                                    <i className="mdi mdi-chevron-down" />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem disabled>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>
                                                        Another Action
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>{" "}
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Dropright Variation
                                    </h5>
                                    <p className="card-title-desc">
                                        Trigger dropdown menus at the right of the
                                        elements by adding <code>.dropend</code> to
                                        the parent element.
                                    </p>

                                    <div className="d-flex gap-2 flex-wrap">
                                        <Dropdown
                                            isOpen={drop_right}
                                            direction="right"
                                            className="btn-group dropend"
                                            toggle={() => setDropRight(!drop_right)}
                                        >
                                            <DropdownToggle
                                                className="btn btn-info"
                                                caret
                                            >
                                                Dropright{" "}
                                                <i className="mdi mdi-chevron-right" />
                                            </DropdownToggle>
                                            <DropdownMenu data-popper-placement="right-start">
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        <ButtonDropdown
                                            direction="right"
                                            isOpen={infodrp_up11}
                                            className="btn-group dropend"
                                            toggle={() =>
                                                setInfodrp_up11(!infodrp_up11)
                                            }
                                        >
                                            <Button id="caret" color="info">
                                                Split Dropend
                                            </Button>
                                            <DropdownToggle
                                                caret
                                                color="info"
                                                className="dropdown-toggle-split"
                                            >
                                                <i className="mdi mdi-chevron-right" />
                                            </DropdownToggle>
                                            <DropdownMenu data-popper-placement="right-start">
                                                <DropdownItem>Action</DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Dropleft Variation
                                    </h5>
                                    <p className="card-title-desc">
                                        Trigger dropdown menus at the left of the
                                        elements by adding <code>.dropend</code> to
                                        the parent element.
                                    </p>

                                    <div className="d-flex gap-2 flex-wrap">
                                        <Dropdown
                                            isOpen={info_dropup111}
                                            direction="left"
                                            className="btn-group dropstart"
                                            toggle={() =>
                                                setInfo_dropup111(!info_dropup111)
                                            }
                                        >
                                            <DropdownToggle className="btn btn-info">
                                                <i className="mdi mdi-chevron-left" />{" "}
                                                Dropleft
                                            </DropdownToggle>
                                            <DropdownMenu data-popper-placement="left-start">
                                                <DropdownItem header>
                                                    Header
                                                </DropdownItem>
                                                <DropdownItem disabled>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        <ButtonDropdown
                                            isOpen={infodrp_up1111}
                                            direction="left"
                                            className="btn-group dropstart"
                                            toggle={() =>
                                                setInfodrp_up1111(!infodrp_up1111)
                                            }
                                        >
                                            <DropdownToggle
                                                caret
                                                color="info"
                                                className="dropdown-toggle-split"
                                            >
                                                <i className="mdi mdi-chevron-left" />
                                            </DropdownToggle>
                                            <Button id="caret" color="info">
                                                Split Dropstart
                                            </Button>
                                            <DropdownMenu data-popper-placement="left-start">
                                                <DropdownItem header>
                                                    Header
                                                </DropdownItem>
                                                <DropdownItem disabled>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Another Action
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default Dropdowns;