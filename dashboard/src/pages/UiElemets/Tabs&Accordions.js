import React, { useState } from 'react';
import {
    Card,
    Col,
    Row,
    CardText,
    CardBody,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Collapse,
} from "reactstrap";
import classnames from "classnames";

const TabsAccordions = () => {
    //tab and accordian
    const [activeTab, setActiveTab] = useState("1");
    const [activeTab1, setActiveTab1] = useState("5");
    const [customActiveTab, setCustomActiveTab] = useState("1");
    const [col1, setCol1] = useState(true);
    const [col2, setCol2] = useState(false);
    const [col3, setCol3] = useState(false);

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const toggle1 = (tab) => {
        if (activeTab1 !== tab) setActiveTab1(tab);
    };
    const toggleCustom = (tab) => {
        if (customActiveTab !== tab) setCustomActiveTab(tab);
    };

    const t_col1 = () => setCol1(!col1);
    const t_col2 = () => setCol2(!col2);
    const t_col3 = () => setCol3(!col3);
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="tabs-accordions">
                    <CardBody>
                        <h4 className="card-title mb-4">
                            Tabs & Accordions
                        </h4>

                        <Row>
                            <div className="col-xl-6">
                                <div>
                                    <h5 className="font-size-14">Basic Tabs</h5>
                                    <p className="card-title-desc">
                                        Example of Default Nav Tabs
                                    </p>

                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "1",
                                                })}
                                                onClick={() => {
                                                    toggle("1");
                                                }}
                                            >
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "2",
                                                })}
                                                onClick={() => {
                                                    toggle("2");
                                                }}
                                            >
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "3",
                                                })}
                                                onClick={() => {
                                                    toggle("3");
                                                }}
                                            >
                                                Messages
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "4",
                                                })}
                                                onClick={() => {
                                                    toggle("4");
                                                }}
                                            >
                                                Settings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent
                                        activeTab={activeTab}
                                        className="p-3 border border-top-0 rounded-bottom text-muted"
                                    >
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Raw denim you probably haven't heard
                                                        of them jean shorts Austin. Nesciunt
                                                        tofu stumptown aliqua, retro synth
                                                        master cleanse. Mustache cliche
                                                        tempor, williamsburg carles vegan
                                                        helvetica. Reprehenderit butcher
                                                        retro keffiyeh dreamcatcher synth.
                                                        Cosby sweater eu banh iphone. Seitan
                                                        aliquip butcher voluptate nisi qui.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Food truck fixie locavore, accusamus
                                                        mcsweeney's marfa nulla
                                                        single-origin coffee squid.
                                                        Exercitation +1 labore velit, blog
                                                        sartorial PBR leggings next level
                                                        wes anderson artisan four loko
                                                        farm-to-table craft beer twee. Qui
                                                        photo booth letterpress, aesthetic
                                                        magna delectus.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Etsy mixtape wayfarers, ethical wes
                                                        anderson tofu before they sold out
                                                        mcsweeney's organic lomo retro fanny
                                                        pack lo-fi farm-to-table readymade.
                                                        Messenger bag gentrify pitchfork
                                                        tattooed craft beer, iphone
                                                        skateboard locavore carles etsy mi
                                                        whatever gluten yr.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Trust fund seitan letterpress,
                                                        keytar raw denim keffiyeh etsy art
                                                        party before they sold out master
                                                        cleanse gluten-free squid scenester
                                                        freegan cosby sweater. Fanny pack
                                                        portland seitan DIY, art party
                                                        locavore wolf cliche high life echo
                                                        park Austin. Cred vinyl keffiyeh DIY
                                                        salvia farm-to-table VHS.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="mt-4 mt-xl-0">
                                    <h5 className="font-size-14">
                                        Basic Nav Pills
                                    </h5>
                                    <p className="card-title-desc">
                                        Example of Default Nav Pills
                                    </p>

                                    <Nav pills>
                                        <NavItem className="waves-effect waves-light">
                                            <NavLink
                                                className={classnames({
                                                    active: activeTab1 === "5",
                                                })}
                                                onClick={() => {
                                                    toggle1("5");
                                                }}
                                                data-bs-toggle="tab"
                                                href="#home-1"
                                                role="tab"
                                            >
                                                <span className="d-block d-sm-none">
                                                    <i className="fas fa-home"></i>
                                                </span>
                                                <span className="d-none d-sm-block">
                                                    Home
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="waves-effect waves-light">
                                            <NavLink
                                                className={classnames({
                                                    active: activeTab1 === "6",
                                                })}
                                                onClick={() => {
                                                    toggle1("6");
                                                }}
                                                data-bs-toggle="tab"
                                                href="#profile-1"
                                                role="tab"
                                            >
                                                <span className="d-block d-sm-none">
                                                    <i className="far fa-user"></i>
                                                </span>
                                                <span className="d-none d-sm-block">
                                                    Profile
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="waves-effect waves-light">
                                            <NavLink
                                                className={classnames({
                                                    active: activeTab1 === "7",
                                                })}
                                                onClick={() => {
                                                    toggle1("7");
                                                }}
                                                data-bs-toggle="tab"
                                                href="#messages-1"
                                                role="tab"
                                            >
                                                <span className="d-block d-sm-none">
                                                    <i className="far fa-envelope"></i>
                                                </span>
                                                <span className="d-none d-sm-block">
                                                    Messages
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="waves-effect waves-light">
                                            <NavLink
                                                className={classnames({
                                                    active: activeTab1 === "8",
                                                })}
                                                onClick={() => {
                                                    toggle1("8");
                                                }}
                                                data-bs-toggle="tab"
                                                href="#settings-1"
                                                role="tab"
                                            >
                                                <span className="d-block d-sm-none">
                                                    <i className="fas fa-cog"></i>
                                                </span>
                                                <span className="d-none d-sm-block">
                                                    Settings
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent
                                        className="p-3 text-muted"
                                        activeTab={activeTab1}
                                    >
                                        <TabPane tabId="5">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of
                                                them jean shorts Austin. Nesciunt tofu
                                                stumptown aliqua, retro synth master
                                                cleanse. Mustache cliche tempor,
                                                williamsburg carles vegan helvetica.
                                                Reprehenderit qui irure terry richardson
                                                ex squid. Aliquip placeat salvia cillum
                                                iphone. Seitan aliquip quis cardigan
                                                american apparel
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="6">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus
                                                mcsweeney's marfa nulla single-origin
                                                coffee squid. Exercitation +1 labore
                                                velit, blog sartorial PBR leggings next
                                                level wes anderson artisan four loko
                                                farm-to-table craft beer twee. Qui photo
                                                booth letterpress, vinyl cillum PBR.
                                                Homo nostrud organic labore
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="7">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes
                                                anderson tofu before they sold out
                                                mcsweeney's organic lomo retro fanny
                                                pack lo-fi farm-to-table readymade.
                                                Messenger bag gentrify pitchfork
                                                tattooed craft beer, iphone skateboard
                                                locavore carles etsy Leggings gentrify
                                                squid 8-bit cred pitchfork
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="8">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar
                                                raw denim keffiyeh etsy art party before
                                                they sold out master cleanse gluten-free
                                                squid scenester freegan cosby sweater.
                                                Fanny pack portland seitan DIY, vinyl
                                                keffiyeh DIY salvia PBR, banh mi before
                                                they sold out farm-to-table.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </Row>

                        <Row className="mt-3">
                            <div className="col-xl-6">
                                <div className="mt-4">
                                    <h5 className="font-size-14">
                                        Custom Nav Tabs
                                    </h5>
                                    <p className="card-title-desc">
                                        Example of Custom Nav Tabs
                                    </p>

                                    <Nav
                                        tabs
                                        className="nav-tabs-custom nav-justified"
                                    >
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: customActiveTab === "1",
                                                })}
                                                onClick={() => {
                                                    toggleCustom("1");
                                                }}
                                            >
                                                <span className="d-block d-sm-none">
                                                    <i className="fas fa-home"></i>
                                                </span>
                                                <span className="d-none d-sm-block">
                                                    Home
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: customActiveTab === "2",
                                                })}
                                                onClick={() => {
                                                    toggleCustom("2");
                                                }}
                                            >
                                                <span className="d-block d-sm-none">
                                                    <i className="far fa-user"></i>
                                                </span>
                                                <span className="d-none d-sm-block">
                                                    Profile
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: customActiveTab === "3",
                                                })}
                                                onClick={() => {
                                                    toggleCustom("3");
                                                }}
                                            >
                                                <span className="d-block d-sm-none">
                                                    <i className="far fa-envelope"></i>
                                                </span>
                                                <span className="d-none d-sm-block">
                                                    Messages
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: customActiveTab === "4",
                                                })}
                                                onClick={() => {
                                                    toggleCustom("4");
                                                }}
                                            >
                                                <span className="d-block d-sm-none">
                                                    <i className="fas fa-cog"></i>
                                                </span>
                                                <span className="d-none d-sm-block">
                                                    Settings
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent
                                        className="p-3 text-muted"
                                        activeTab={customActiveTab}
                                    >
                                        <TabPane tabId="1">
                                            <p className="mb-0">
                                                Raw denim you probably haven't heard of
                                                them jean shorts Austin. Nesciunt tofu
                                                stumptown aliqua, retro synth master
                                                cleanse. Mustache cliche tempor,
                                                williamsburg carles vegan helvetica.
                                                Reprehenderit qui irure terry richardson
                                                ex squid. Aliquip placeat salvia cillum
                                                iphone. Seitan aliquip quis butcher
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <p className="mb-0">
                                                Food truck fixie locavore, accusamus
                                                mcsweeney's marfa nulla single-origin
                                                coffee squid. Exercitation +1 labore
                                                velit, blog farm-to-table craft beer
                                                twee. Qui photo booth letterpress,
                                                commodo enim craft beer mlkshk aliquip
                                                jean shorts ullamco ad vinyl cillum PBR.
                                                Homo nostrud organic
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <p className="mb-0">
                                                Etsy mixtape wayfarers, ethical wes
                                                anderson tofu before they sold out
                                                mcsweeney's organic lomo retro fanny
                                                pack lo-fi tattooed craft beer, iphone
                                                skateboard locavore carles etsy salvia
                                                banksy hoodie helvetica. DIY synth PBR
                                                banksy irony. Leggings gentrify squid
                                                8-bit cred pitchfork
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <p className="mb-0">
                                                Trust fund seitan letterpress, keytar
                                                raw denim keffiyeh etsy art party before
                                                they sold out master cleanse gluten-free
                                                squid art party locavore wolf cliche
                                                high life echo park Austin. Cred vinyl
                                                keffiyeh DIY salvia PBR, banh mi before
                                                they sold out farm-to-table VHS viral
                                                locavore cosby.
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="mt-4">
                                    <h5 className="font-size-14">Accordions</h5>
                                    <p className="card-title-desc">
                                        Extend the default collapse behavior to
                                        create an accordion.
                                    </p>

                                    <div className="accordion" id="accordion">
                                        <div className="accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingOne"
                                            >
                                                <button
                                                    className="accordion-button fw-medium"
                                                    type="button"
                                                    onClick={t_col1}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Collapsible Group Item #1
                                                </button>
                                            </h2>

                                            <Collapse
                                                isOpen={col1}
                                                className="accordion-collapse"
                                            >
                                                <div className="accordion-body">
                                                    Anim pariatur cliche reprehenderit,
                                                    enim eiusmod high life accusamus terry
                                                    richardson ad squid. 3 wolf moon
                                                    officia aute, non cupidatat skateboard
                                                    dolor brunch. Food truck quinoa
                                                    nesciunt laborum eiusmod. Brunch 3
                                                    wolf moon tempor, nulla assumenda
                                                    shoreditch et.
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div className="accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingTwo"
                                            >
                                                <button
                                                    className="accordion-button fw-medium collapsed"
                                                    type="button"
                                                    onClick={t_col2}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Collapsible Group Item #2
                                                </button>
                                            </h2>

                                            <Collapse
                                                isOpen={col2}
                                                className="accordion-collapse"
                                            >
                                                <div className="accordion-body">
                                                    sunt aliqua put a bird on it squid
                                                    single-origin coffee nulla assumenda
                                                    shoreditch et. Nihil anim keffiyeh
                                                    helvetica, craft beer labore wes
                                                    anderson cred nesciunt Leggings
                                                    occaecat craft beer farm-to-table, raw
                                                    denim accusamus labore sustainable
                                                    VHS.
                                                </div>
                                            </Collapse>
                                        </div>
                                        <div className="accordion-item">
                                            <h2
                                                className="accordion-header"
                                                id="headingThree"
                                            >
                                                <button
                                                    className="accordion-button fw-medium collapsed"
                                                    type="button"
                                                    onClick={t_col3}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Collapsible Group Item #3
                                                </button>
                                            </h2>
                                            <Collapse
                                                isOpen={col3}
                                                className="accordion-collapse"
                                            >
                                                <div className="accordion-body">
                                                    Anim pariatur cliche reprehenderit,
                                                    enim eiusmod high life accusamus terry
                                                    richardson ad squid. 3 wolf moon
                                                    officia aute, non cupidatat skateboard
                                                    dolor brunch. Food truck quinoa
                                                    nesciunt laborum eiusmod. Brunch 3
                                                    wolf moon tempor, nulla assumenda
                                                    shoreditch et.
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default TabsAccordions;