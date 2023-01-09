import React from 'react';
import MetaTags from 'react-meta-tags';
import { Card, CardBody, Col, Container, Label, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

function FormElement(props) {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Form Elements | Samply - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Forms" breadcrumbItem="Form Elements" />
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Textual Inputs</h4>
                                    <p className="card-title-desc">Here are examples of <code>.form-control</code> applied to
                                            each
                                            textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-text-input" className="form-label">Text</Label>
                                                <input className="form-control" type="text" defaultValue="Artisanal kale" id="example-text-input" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-search-input" className="form-label">Search</Label>
                                                <input className="form-control" type="search" defaultValue="How do I shoot web"
                                                    id="example-search-input" />
                                            </div>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-email-input" className="form-label">Email</Label>
                                                <input className="form-control" type="email" defaultValue="bootstrap@example.com"
                                                    placeholder="Enter Email" id="example-email-input" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-url-input" className="form-label">URL</Label>
                                                <input className="form-control" type="url" defaultValue="https://getbootstrap.com"
                                                    placeholder="Enter URL" id="example-url-input" />
                                            </div>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-tel-input" className="form-label">Telephone</Label>
                                                <input className="form-control" type="tel" defaultValue="1-(555)-555-5555"
                                                    placeholder="Enter Telephone" id="example-tel-input" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-password-input" className="form-label">Password</Label>
                                                <input className="form-control" type="password" defaultValue="hunter2" placeholder="Enter Password"
                                                    id="example-password-input" />
                                            </div>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-number-input" className="form-label">Number</Label>
                                                <input className="form-control" type="number" defaultValue="42" placeholder="Enter Number"
                                                    id="example-number-input" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-datetime-local-input" className="form-label">Date and
                                                        Time</Label>
                                                <input className="form-control" type="datetime-local" defaultValue="2021-03-19T13:45:00"
                                                    id="example-datetime-local-input" />
                                            </div>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-date-input" className="form-label">Date</Label>
                                                <input className="form-control" type="date" defaultValue="2021-03-19" id="example-date-input" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-month-input" className="form-label">Month</Label>
                                                <input className="form-control" type="month" defaultValue="2021-03" id="example-month-input" />
                                            </div>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-week-input" className="form-label">Week</Label>
                                                <input className="form-control" type="week" defaultValue="2021-W33" id="example-week-input" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-time-input" className="form-label">Time</Label>
                                                <input className="form-control" type="time" defaultValue="13:45:00" id="example-time-input" />
                                            </div>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label for="example-color-input" className="form-label">Color</Label>
                                                <input className="form-control form-control-color mw-100" type="color" defaultValue="#0576b9"
                                                    id="example-color-input" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label className="form-label">Select</Label>
                                                <select className="form-select">
                                                    <option>Select</option>
                                                    <option>Large select</option>
                                                    <option>Small select</option>
                                                </select>
                                            </div>
                                        </Col>
                                    </Row>


                                    <Row>
                                        <div className="col-md-12">
                                            <div className="">
                                                <Label for="exampleDataList" className="form-label">Datalists</Label>
                                                <input className="form-control" list="datalistOptions" id="exampleDataList"
                                                    placeholder="Type to search..." />
                                                <datalist id="datalistOptions">
                                                    <option defaultValue="San Francisco" />
                                                    <option value="New York" />
                                                    <option value="Seattle" />
                                                    <option value="Los Angeles" />
                                                    <option value="Chicago" />
                                                </datalist>
                                            </div>
                                        </div>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Floating Labels</h4>
                                    <p className="card-title-desc">Wrap a pair of <code>&lt;input className="form-control"&gt;</code> and
                                            <code>&lt;label&gt;</code>
                                            elements in
                                            <code>.form-floating</code> to enable floating labels
                                        </p>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInput"
                                                    placeholder="name@example.com" />
                                                <Label for="floatingInput">Email address</Label>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-floating mb-3">
                                                <input type="password" className="form-control" id="floatingPassword"
                                                    placeholder="Password" />
                                                <Label for="floatingPassword">Password</Label>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6}>
                                            <form className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInputValue"
                                                    placeholder="name@example.com" defaultValue="test@example.com" />
                                                <Label for="floatingInputValue">Input with value</Label>
                                            </form>
                                        </Col>
                                        <Col lg={6}>
                                            <form className="form-floating mb-3">
                                                <input type="email" className="form-control is-invalid" id="floatingInputInvalid"
                                                    placeholder="name@example.com" defaultValue="test@example.com" />
                                                <Label for="floatingInputInvalid">Invalid input</Label>
                                            </form>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="form-floating mb-3 mb-lg-0">
                                                <textarea className="form-control" placeholder="Leave a comment here"
                                                    id="floatingTextarea"></textarea>
                                                <Label for="floatingTextarea">Comments</Label>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-floating">
                                                <select className="form-select" id="floatingSelect"
                                                    aria-label="Floating label select example">
                                                    <option defaultValue>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <Label for="floatingSelect">Works with selects</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Horizontal Form</h4>
                                    <p className="card-title-desc">Be sure to add
                                            <code>.col-form-label</code> to your <code>&lt;label&gt;</code>s as well so they’re vertically
                                            centered with
                                            their
                                            associated form controls.
                                        </p>
                                    <div className="row mb-3">
                                        <Label for="inputEmail3" className="col-sm-2 col-4 col-form-label">Email</Label>
                                        <div className="col-sm-10 col-8">
                                            <input type="email" className="form-control" id="inputEmail3" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <Label for="inputPassword3" className="col-sm-2 col-4 col-form-label">Password</Label>
                                        <div className="col-sm-10 col-8">
                                            <input type="password" className="form-control" id="inputPassword3" />
                                        </div>
                                    </div>
                                    <fieldset className="row">
                                        <legend className="col-form-label col-sm-2 col-4 pt-0">Radios</legend>
                                        <div className="col-sm-10 col-8">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                                    defaultValue="option1" defaultChecked />
                                                <Label className="form-check-label" for="gridRadios1">
                                                    First radio
                                                    </Label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                                    defaultValue="option2" />
                                                <Label className="form-check-label" for="gridRadios2">
                                                    Second radio
                                                    </Label>
                                            </div>
                                            <div className="form-check disabled">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                                                    defaultValue="option3" disabled />
                                                <Label className="form-check-label" for="gridRadios3">
                                                    Third disabled radio
                                                    </Label>
                                            </div>
                                        </div>
                                    </fieldset>

                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Input Sizing</h4>
                                    <p className="card-title-desc">Set heights using classes like <code>.form-control-lg</code>
                                            and <code>.form-control-sm</code>.</p>
                                    <div>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Label className="form-label">Small Input</Label>
                                                    <input className="form-control form-control-sm" type="text"
                                                        placeholder=".form-control-sm" />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Label className="form-label">Default input</Label>
                                                    <input className="form-control" type="text" placeholder="Default input" />
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="">
                                                    <Label className="form-label">Large Input</Label>
                                                    <input className="form-control form-control-lg" type="text"
                                                        placeholder=".form-control-lg" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Range Inputs</h4>
                                    <p className="card-title-desc">Create custom <code>&lt;input type="range"&gt;</code>
                                            controls with <code>.form-range</code>.</p>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label className="form-label fw-bold">Basic Range</Label>
                                                <p className="mb-4">By default, range inputs.</p>
                                                <input type="range" className="form-range" id="customRange1" />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="mb-3">
                                                <Label className="form-label fw-bold">Steps</Label>
                                                <p className="mb-4">You can specify a <code>step</code> value.</p>
                                                <input type="range" className="form-range" min="0" max="5" id="customRange2" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <div className="col-lg-12">
                                            <div className="">
                                                <Label className="form-label fw-bold">Min and max</Label>
                                                <p className="mb-4">Range inputs have implicit values for min and
                                                        max—0 and 100, respectively.</p>
                                                <input type="range" className="form-range" min="0" max="10" id="customRange3" />
                                            </div>
                                        </div>

                                    </Row>

                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardBody>

                                    <Row>
                                        <h4 className="card-title">Checkboxes</h4>
                                        <p className="card-title-desc">Create Checkbox <code>&lt;input type="checkbox"&gt;</code>
                                                controls with <code>.form-check-input</code>.</p>
                                        <Row>
                                            <Col md={6}>
                                                <div className="mb-4">
                                                    <h5 className="font-size-14 mb-2">Basic</h5>
                                                    <div className="form-check mb-2">
                                                        <input className="form-check-input" type="checkbox" id="formCheck1" />
                                                        <Label className="form-check-label" for="formCheck1">
                                                            Form Checkbox
                                                            </Label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="formCheck2" defaultChecked />
                                                        <Label className="form-check-label" for="formCheck2">
                                                            Form Checkbox checked
                                                            </Label>
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <h5 className="font-size-14 mb-2">Right Side</h5>
                                                    <div>
                                                        <div className="form-check form-check-right mb-2">
                                                            <input className="form-check-input" type="checkbox" id="formCheckRight1" />
                                                            <Label className="form-check-label" for="formCheckRight1">
                                                                Form Checkbox Right
                                                                </Label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="form-check form-check-right">
                                                            <input className="form-check-input" type="checkbox" id="formCheckRight2"
                                                                defaultChecked />
                                                            <Label className="form-check-label" for="formCheckRight2">
                                                                Form Checkbox Right checked
                                                                </Label>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="mb-4 mb-md-0">
                                                    <h5 className="font-size-14 mb-2">Inline</h5>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                            defaultValue="option1" defaultChecked />
                                                        <Label className="form-check-label" for="inlineCheckbox1">1</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                            defaultValue="option2" />
                                                        <Label className="form-check-label" for="inlineCheckbox2">2</Label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                            defaultValue="option3" disabled />
                                                        <Label className="form-check-label" for="inlineCheckbox3">3 (disabled)</Label>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={6}>
                                                <div className="">
                                                    <h5 className="font-size-14">Available Colors</h5>
                                                    <p className="mb-3">Add class <code>.form-check-* </code> for a color
                                                            Checkboxes</p>

                                                    <div className="">
                                                        <div className="form-check form-check-primary mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheckcolor1"
                                                                defaultChecked />
                                                            <Label className="form-check-label" for="formCheckcolor1">
                                                                Checkbox Primary
                                                                </Label>
                                                        </div>

                                                        <div className="form-check form-check-success mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheckcolor2"
                                                                defaultChecked />
                                                            <Label className="form-check-label" for="formCheckcolor2">
                                                                Checkbox Success
                                                                </Label>
                                                        </div>

                                                        <div className="form-check form-check-info mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheckcolor3"
                                                                defaultChecked />
                                                            <Label className="form-check-label" for="formCheckcolor3">
                                                                Checkbox Info
                                                                </Label>
                                                        </div>

                                                        <div className="form-check form-check-warning mb-3">
                                                            <input className="form-check-input" type="checkbox" id="formCheckcolor4"
                                                                defaultChecked />
                                                            <Label className="form-check-label" for="formCheckcolor4">
                                                                Checkbox Warning
                                                                </Label>
                                                        </div>

                                                        <div className="form-check form-check-danger">
                                                            <input className="form-check-input" type="checkbox" id="formCheckcolor5"
                                                                defaultChecked />
                                                            <Label className="form-check-label" for="formCheckcolor5">
                                                                Checkbox Danger
                                                                </Label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Radios</h4>
                                    <p className="card-title-desc">Create Radios Custom <code>&lt;input type="radio"&gt;</code>
                                            controls with <code>.form-check-input</code>.</p>
                                    <Row>
                                        <Col md={6}>
                                            <div className="mb-4">
                                                <h5 className="font-size-14 mb-2">Basic</h5>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input" type="radio" name="formRadios" id="formRadios1"
                                                        defaultChecked />
                                                    <Label className="form-check-label" for="formRadios1">
                                                        Form Radio
                                                        </Label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="formRadios" id="formRadios2" />
                                                    <Label className="form-check-label" for="formRadios2">
                                                        Form Radio checked
                                                        </Label>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h5 className="font-size-14 mb-2">Right Side</h5>
                                                <div>
                                                    <div className="form-check form-check-right mb-2">
                                                        <input className="form-check-input" type="radio" name="formRadiosRight"
                                                            id="formRadiosRight1" defaultChecked />
                                                        <Label className="form-check-label" for="formRadiosRight1">
                                                            Form Radio Right
                                                            </Label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="form-check form-check-right">
                                                        <input className="form-check-input" type="radio" name="formRadiosRight"
                                                            id="formRadiosRight2" />
                                                        <Label className="form-check-label" for="formRadiosRight2">
                                                            Form Radio Right checked
                                                            </Label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4 mb-md-0">
                                                <h5 className="font-size-14 mb-2">Inline</h5>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                        id="inlineRadio1" defaultValue="option1" defaultChecked />
                                                    <Label className="form-check-label" for="inlineRadio1">1</Label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                        id="inlineRadio2" defaultValue="option2" />
                                                    <Label className="form-check-label" for="inlineRadio2">2</Label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                        id="inlineRadio3" defaultValue="option3" disabled />
                                                    <Label className="form-check-label" for="inlineRadio3">3 (disabled)</Label>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col md={6}>
                                            <div className="">
                                                <h5 className="font-size-14">Available Colors</h5>
                                                <p className="mb-3">Add class <code>.form-radio-* </code> for a
                                                        color Radios</p>


                                                <div>
                                                    <div className="form-check form-radio-primary mb-3">
                                                        <input className="form-check-input" type="radio" name="formRadioColor1"
                                                            id="formRadioColor1" defaultChecked />
                                                        <Label className="form-check-label" for="formRadioColor1">
                                                            Radio Primary
                                                            </Label>
                                                    </div>

                                                    <div className="form-check form-radio-success mb-3">
                                                        <input className="form-check-input" type="radio" name="formRadioColor2"
                                                            id="formRadioColor2" defaultChecked />
                                                        <Label className="form-check-label" for="formRadioColor2">
                                                            Radio Success
                                                            </Label>
                                                    </div>

                                                    <div className="form-check form-radio-info mb-3">
                                                        <input className="form-check-input" type="radio" name="formRadioColor3"
                                                            id="formRadioColor3" defaultChecked />
                                                        <Label className="form-check-label" for="formRadioColor3">
                                                            Radio Info
                                                            </Label>
                                                    </div>

                                                    <div className="form-check form-radio-warning mb-3">
                                                        <input className="form-check-input" type="radio" name="formRadioColor4"
                                                            id="formRadioColor4" defaultChecked />
                                                        <Label className="form-check-label" for="formRadioColor4">
                                                            Radio warning
                                                            </Label>
                                                    </div>

                                                    <div className="form-check form-radio-danger">
                                                        <input className="form-check-input" type="radio" name="formRadioColor5"
                                                            id="formRadioColor5" defaultChecked />
                                                        <Label className="form-check-label" for="formRadioColor5">
                                                            Radio Danger
                                                            </Label>
                                                    </div>


                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Switches</h4>
                                    <p className="card-title-desc">A switch has the markup of a custom checkbox but uses the
                                            <code>.form-switch</code> class to render a toggle switch. Switches also support the
                                            <code>disabled</code> attribute.</p>

                                    <Row>

                                        <div className="col-sm-6">
                                            <div>
                                                <h5 className="font-size-14 mb-3">Basic</h5>

                                                <div className="form-check form-switch mb-3">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                    <Label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox
                                                            input</Label>
                                                </div>
                                                <div className="form-check form-switch mb-3">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                                    <Label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox
                                                            input</Label>
                                                </div>
                                                <div className="form-check form-switch mb-3">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled"
                                                        disabled />
                                                    <Label className="form-check-label" for="flexSwitchCheckDisabled">Disabled switch
                                                            checkbox input</Label>
                                                </div>
                                                <div className="form-check form-switch mb-3 mb-md-0">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled"
                                                        defaultChecked disabled />
                                                    <Label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled
                                                            checked switch checkbox input</Label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="">
                                                <h5 className="font-size-14 mb-3">Sizes</h5>

                                                <div className="form-check form-switch mb-3" dir="ltr">
                                                    <input className="form-check-input" type="checkbox" id="SwitchCheckSizesm" defaultChecked />
                                                    <Label className="form-check-label" for="SwitchCheckSizesm">Small Size Switch</Label>
                                                </div>

                                                <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
                                                    <input className="form-check-input" type="checkbox" id="SwitchCheckSizemd" />
                                                    <Label className="form-check-label" for="SwitchCheckSizemd">Medium Size Switch</Label>
                                                </div>

                                                <div className="form-check form-switch form-switch-lg mb-lg-3" dir="ltr">
                                                    <input className="form-check-input" type="checkbox" id="SwitchCheckSizelg" defaultChecked />
                                                    <Label className="form-check-label" for="SwitchCheckSizelg">Large Size Switch</Label>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>

                    <Row>

                        <div className="col-lg-12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">File Browser</h4>
                                    <p className="card-title-desc">Create File Browser Custom <code>&lt;input type="file"&gt;</code>
                                            controls with <code>.form-control</code>.</p>

                                    <div className="mb-3">
                                        <h5 className="font-size-14 mb-2">Sizes</h5>
                                        <Row>
                                            <div className="col-sm-6">
                                                <div className="">
                                                    <Label for="formFileSm" className="form-label">Small file input example</Label>
                                                    <input className="form-control form-control-sm" id="formFileSm" type="file" />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="">
                                                    <Label for="formFile" className="form-label">Default file input example</Label>
                                                    <input className="form-control" type="file" id="formFile" />
                                                </div>
                                            </div>


                                        </Row>

                                        <Row>

                                            <div className="col-sm-6">
                                                <div className="mb-0 mb-md-3">
                                                    <Label for="formFileLg" className="form-label">Large file input example</Label>
                                                    <input className="form-control form-control-lg" id="formFileLg" type="file" />
                                                </div>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className="">

                                        <h5 className="font-size-14 mb-2">Custom</h5>
                                        <Row>
                                            <div className="col-sm-6">
                                                <div className="">
                                                    <div>
                                                        <Label className="form-label">With Label</Label>
                                                        <div className="input-group mb-3">
                                                            <Label className="input-group-text" for="inputGroupFile01">Upload</Label>
                                                            <input type="file" className="form-control" id="inputGroupFile01" />
                                                        </div>
                                                        <div className="input-group">
                                                            <input type="file" className="form-control" id="inputGroupFile02" />
                                                            <Label className="input-group-text" for="inputGroupFile02">Upload</Label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="">
                                                    <Label className="form-label">With Button</Label>
                                                    <div className="input-group mb-3">
                                                        <button className="btn btn-primary" type="button"
                                                            id="inputGroupFileAddon03">Button</button>
                                                        <input type="file" className="form-control" id="inputGroupFile03"
                                                            aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                                                    </div>

                                                    <div className="input-group">
                                                        <input type="file" className="form-control" id="inputGroupFile04"
                                                            aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                                        <button className="btn btn-primary" type="button"
                                                            id="inputGroupFileAddon04">Button</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>

                                </CardBody>
                            </Card>

                        </div>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FormElement;