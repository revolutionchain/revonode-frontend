import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
  CardTitle,
  CardSubtitle,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import { SketchPicker } from "react-color";
import ColorPicker from "@vtaits/react-color-picker";
// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@vtaits/react-color-picker/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Dropzone from "react-dropzone";
import classnames from "classnames";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

const animatedComponents = makeAnimated();

const Offsymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      {" "}
      No
    </div>
  );
};

const OnSymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2,
      }}
    >
      {" "}
      Yes
    </div>
  );
};

const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const optionGroup1 = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const optionGroup2 = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" },
    ],
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" },
    ],
  },
];

const FormAdvanaced = () => {
  const [sq1, setsq1] = useState(false);
  const [sq2, setsq2] = useState(false);
  const [sq3, setsq3] = useState(false);
  const [color, setcolor] = useState("red");
  const [colorRgb, setcolorRgb] = useState("red");
  const [colorCust, setcolorCust] = useState("red");
  const [colorHor, setcolorHor] = useState("#fffff");
  const [colorRGBA, setcolorRGBA] = useState("rgba(0, 194, 255, 0.78)");
  const [display_RGBA, setdisplay_RGBA] = useState(false);
  const [activeTab, setactiveTab] = useState(1);
  const [activeTabVartical, setoggleTabVertical] = useState(1);
  const [simple_color, setsimple_color] = useState(0);
  const [simple_color1, setsimple_color1] = useState(0);
  const [simple_color2, setsimple_color2] = useState(0);

  const [switch1, setswitch1] = useState(true);
  const [switch2, setswitch2] = useState(true);
  const [switch3, setswitch3] = useState(true);
  const [switch4, setswitch4] = useState(true);
  const [switch5, setswitch5] = useState(true);
  const [switch6, setswitch6] = useState(true);
  const [switch7, setswitch7] = useState(true);
  const [switch8, setswitch8] = useState(true);
  const [switch9, setswitch9] = useState(true);

  const [data_attr, setdata_attr] = useState(56);
  const [postfix, setpostfix] = useState(20);
  const [prefix, setprefix] = useState(20);
  const [empty_val, setempty_val] = useState(0);
  const [not_attr, setnot_attr] = useState(15);
  const [explicit_val, setexplicit_val] = useState(33);

  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);
  const [selectedMulti1, setselectedMulti1] = useState(null);
  const [selectedMulti2, setselectedMulti2] = useState(null);
  const [selectedMulti3, setselectedMulti3] = useState(null);
  const [selectedFiles, setselectedFiles] = useState([]);

  const [passedSteps, setPassedSteps] = useState([1]);
  const [passedStepsVertical, setPassedStepsVertical] = useState([1])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        var modifiedSteps = [...passedSteps, tab];
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 4) {
        var modifiedStepsVertical = [...passedStepsVertical, tab];
        setoggleTabVertical(tab);
        setPassedStepsVertical(modifiedStepsVertical);
      }
    }
  }
  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const onDrag = (c1) => {
    setcolor(c1);
  };
  const onDragRgb = (c1) => {
    setcolorRgb(c1);
  };
  const onDragCust = (c1) => {
    setcolorCust(c1);
  };
  const handleHor = (color) => {
    setcolorHor(color.hex);
  };

  function handleRGBA() {
    setdisplay_RGBA(!display_RGBA);
  }

  const onSwatchHover_RGBA = (color) => {
    const format =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")";
    setcolorRGBA(format);
  };

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  function handleMulti1(selectedMulti1) {
    setselectedMulti1(selectedMulti1);
  }

  function handleMulti2(selectedMulti2) {
    setselectedMulti2(selectedMulti2);
  }

  function handleMulti3(selectedMulti3) {
    setselectedMulti3(selectedMulti3);
  }

  const [validation, setValidation] = useState({
    fnm: null,
    lnm: null,
    unm: null,
    city: null,
    stateV: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const modifiedV = { ...validation };
    var fnm = document.getElementById("validationTooltip01").value;
    var lnm = document.getElementById("validationTooltip02").value;
    var unm = document.getElementById("validationTooltipUsername").value;
    var city = document.getElementById("validationTooltip03").value;
    var stateV = document.getElementById("validationTooltip04").value;

    if (fnm === "") {
      modifiedV['fnm'] = false;
    } else {
      modifiedV['fnm'] = true;
    }

    if (lnm === "") {
      modifiedV['lnm'] = false;
    } else {
      modifiedV['lnm'] = true;
    }

    if (unm === "") {
      modifiedV['unm'] = false;
    } else {
      modifiedV['unm'] = true;
    }

    if (city === "") {
      modifiedV['city'] = false;
    } else {
      modifiedV['city'] = true;
    }

    if (stateV === "") {
      modifiedV['stateV'] = false;
    } else {
      modifiedV['stateV'] = true;
    }
    setValidation(modifiedV);
  }

  //for change tooltip display propery
  const onChangeValidation = (fieldName, value) => {
    const modifiedV = { ...validation };
    if (value !== "") {
      modifiedV[fieldName] = true;
    } else {
      modifiedV[fieldName] = false;
    }
    setValidation(modifiedV);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Advanced | Samply - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Forms" breadcrumbItem="Form Advanced" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Select2</h4>
                  <p className="card-title-desc">
                    A mobile and touch friendly input spinner component for
                    Bootstrap
                  </p>

                  <form>
                    <Row>
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>Single Select</Label>
                          <Select
                            value={selectedGroup}
                            onChange={() => {
                              handleSelectGroup();
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Multiple Select</label>
                          <Select
                            value={selectedMulti}
                            isMulti={true}
                            onChange={() => {
                              handleMulti();
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div>

                        <div>
                          <Label>Search Disable</Label>
                          <Select
                            value={selectedMulti1}
                            isMulti={true}
                            onChange={() => {
                              handleMulti1();
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                            isDisabled={true}
                          />
                        </div>
                      </Col>

                      <Col lg="6">
                        <div className="mb-3 ajax-select mt-3 mt-lg-0 select2-container">
                          <Label>Ajax (remote data)</Label>
                          <Select
                            value={selectedMulti2}
                            isMulti={true}
                            onChange={() => {
                              handleMulti2();
                            }}
                            options={optionGroup1}
                            classNamePrefix="select2-selection"
                            isLoading={true}
                          />
                        </div>
                        <div className="mb-3 templating-select select2-container">
                          <label className="form-label">Templating</label>
                          <Select
                            value={selectedMulti3}
                            isMulti={true}
                            onChange={() => {
                              handleMulti3();
                            }}
                            options={optionGroup2}
                            classNamePrefix="select2-selection"
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                          />
                        </div>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">React Colorpicker</h4>
                  <p className="card-title-desc">
                    Fancy and customizable colorpicker plugin for Twitter
                    Bootstrap.
                  </p>

                  <Form action="#">
                    <div className="mb-3">
                      <Label>Simple input field</Label>
                      <Input
                        type="text"
                        className="colorpicker-default"
                        value={color}
                        onClick={() => {
                          setsimple_color(!simple_color);
                        }}
                        readOnly
                      />
                      {simple_color ? (
                        <ColorPicker
                          saturationHeight={100}
                          saturationWidth={100}
                          value={color}
                          onDrag={onDrag}
                        />
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <Label>With custom options - RGBA</Label>
                      <Input
                        type="text"
                        className="colorpicker-rgba form-control"
                        value={colorRGBA}
                        onClick={handleRGBA}
                        readOnly
                      />
                      {display_RGBA ? (
                        <SketchPicker
                          color="#fff"
                          value={colorRGBA}
                          width="160px"
                          onChangeComplete={onSwatchHover_RGBA}
                        />
                      ) : null}
                    </div>
                    <FormGroup className="m-b-0">
                      <Label>As a component</Label>
                      <div
                        className="input-group colorpicker-default"
                        title="Using format option"
                      >
                        <input
                          readOnly
                          value={colorRgb}
                          type="text"
                          className="form-control input-lg"
                        />

                        <span
                          className="input-group-text colorpicker-input-addon"
                          onClick={() => {
                            setsimple_color1(!simple_color1);
                          }}
                        >
                          <i
                            style={{
                              height: "16px",
                              width: "16px",
                              background: colorRgb,
                            }}
                          />
                        </span>
                      </div>

                      {simple_color1 ? (
                        <ColorPicker
                          saturationHeight={100}
                          saturationWidth={100}
                          value={colorRgb}
                          onDrag={onDragRgb}
                        />
                      ) : null}
                    </FormGroup>
                    <div className="mb-3">
                      <Label>Horizontal mode</Label>
                      <Input
                        type="text"
                        onClick={() => {
                          setsimple_color2(!simple_color2);
                        }}
                        value={colorHor}
                        readOnly
                      />
                      {simple_color2 ? (
                        <SketchPicker
                          color="#fff"
                          value={simple_color2}
                          width="160px"
                          onChangeComplete={handleHor}
                        />
                      ) : null}
                    </div>

                    <FormGroup className="mb-0">
                      <Label>Inline</Label>

                      <ColorPicker
                        saturationHeight={100}
                        saturationWidth={100}
                        value={colorCust}
                        onDrag={onDragCust}
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h4 className="card-title">Bootstrap TouchSpin</h4>
                  <p className="card-title-desc">
                    A mobile and touch friendly input spinner component for
                    Bootstrap
                  </p>
                  <Form>
                    <div className="mb-3">
                      <Label>Using data attributes</Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setdata_attr(data_attr - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={data_attr}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setdata_attr(data_attr + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-plus" />
                          </Button>
                        </div>
                      </InputGroup>
                    </div>
                    <div className="mb-3">
                      <Label>Example with postfix (large)</Label>
                      <InputGroup>
                        <span
                          className="input-group-btn input-group-prepend"
                          onClick={() => {
                            setpostfix(postfix - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          value={postfix}
                          placeholder="number"
                          readOnly
                        />
                        <span className="input-group-append">
                          <span className="input-group-text">%</span>
                        </span>
                        <span className="input-group-append">
                          <Button
                            type="button"
                            onClick={() => {
                              setpostfix(postfix + 1);
                            }}
                            color="primary"
                          >
                            <i className="mdi mdi-plus" />
                          </Button>
                        </span>
                      </InputGroup>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">With prefix </label>
                      <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                        <span className="input-group-btn input-group-prepend">
                          <Button
                            type="button"
                            onClick={() => {
                              setprefix(prefix - 1);
                            }}
                            color="primary"
                          >
                            <i className="mdi mdi-minus" />
                          </Button>
                        </span>
                        <span className="input-group-addon bootstrap-touchspin-prefix input-group-prepend">
                          <span className="input-group-text">$</span>
                        </span>

                        <input
                          type="number"
                          className="form-control"
                          value={prefix}
                          placeholder="number"
                          readOnly
                        />

                        <span className="input-group-btn input-group-append">
                          <Button
                            type="button"
                            onClick={() => {
                              setprefix(prefix + 1);
                            }}
                            color="primary"
                          >
                            <i className="mdi mdi-plus" />
                          </Button>
                        </span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <Label>Init with empty value:</Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setempty_val(empty_val - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={empty_val}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setempty_val(empty_val + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-plus" />
                          </Button>
                        </div>
                      </InputGroup>
                    </div>
                    <div className="mb-3">
                      <Label>
                        Value attribute is not set (applying settings.initval)
                      </Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setnot_attr(not_attr - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={not_attr}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setnot_attr(not_attr + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-plus" />
                          </Button>
                        </div>
                      </InputGroup>
                    </div>
                    <FormGroup className="mb-0">
                      <Label>
                        Value is set explicitly to 33 (skipping
                        settings.initval){" "}
                      </Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setexplicit_val(explicit_val - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-minus" />
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          value={explicit_val}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setexplicit_val(explicit_val + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            <i className="mdi mdi-plus" />
                          </Button>
                        </div>
                      </InputGroup>
                    </FormGroup>
                  </Form>{" "}
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">Datepicker</h4>
                  <p className="card-title-desc">
                    Examples of twitter bootstrap datepicker.
                  </p>

                  <Form>
                    <FormGroup className="mb-4">
                      <Label>Default Functionality</Label>
                      <InputGroup>
                        {/* <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          dateFormat="MM/yyyy"
                          showMonthYearPicker
                        /> */}
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d",
                          }}
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="form-group mb-4">
                      <Label>Auto Close</Label>
                      <InputGroup>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            dateFormat: "Y-m-d",
                          }}
                        />
                      </InputGroup>
                    </div>

                    <div className="form-group mb-4">
                      <label>Multiple Date</label>
                      <div className="input-group">
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "multiple",
                            dateFormat: "Y-m-d",
                          }}
                        />
                      </div>
                    </div>

                    <FormGroup className="mb-4">
                      <Label>Date Range</Label>
                      <InputGroup>
                        <Flatpickr
                          className="form-control d-block"
                          placeholder="dd M,yyyy"
                          options={{
                            mode: "range",
                            dateFormat: "Y-m-d",
                          }}
                        />
                      </InputGroup>
                    </FormGroup>

                    <div className="form-group mb-0">
                      <label>Inline Datepicker</label>
                      <Flatpickr
                        className="form-control d-block"
                        placeholder="dd M,yyyy"
                        options={{
                          inline: true,
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                      />
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h4 className="card-title">Css Switch</h4>
                  <p className="card-title-desc">
                    Here are a few types of switches.{" "}
                  </p>

                  <Row>
                    <Col lg="12">
                      <h5 className="font-size-14 mb-3">Example switch</h5>
                      <div>
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#626ed4"
                          onChange={() => {
                            setswitch1(!switch1);
                          }}
                          checked={switch1}
                        />
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#a2a2a2"
                          onChange={() => {
                            setswitch2(!switch2);
                          }}
                          checked={switch2}
                        />
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#02a499"
                          onChange={() => {
                            setswitch3(!switch3);
                          }}
                          checked={switch3}
                        />
                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#626ed4"
                          onChange={() => {
                            setswitch4(!switch4);
                          }}
                          checked={switch4}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#02a499"
                          onChange={() => {
                            setswitch5(!switch5);
                          }}
                          checked={switch5}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#38a4f8"
                          onChange={() => {
                            setswitch6(!switch6);
                          }}
                          checked={switch6}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#f8b425"
                          onChange={() => {
                            setswitch7(!switch7);
                          }}
                          checked={switch7}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#ec4561"
                          onChange={() => {
                            setswitch8(!switch8);
                          }}
                          checked={switch8}
                        />

                        <Switch
                          uncheckedIcon={<Offsymbol />}
                          checkedIcon={<OnSymbol />}
                          className="me-1 mb-sm-8 mb-2"
                          onColor="#2a3142"
                          onChange={() => {
                            setswitch9(!switch9);
                          }}
                          checked={switch9}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-3">Square switch</h5>
                        <div className="d-flex">
                          <div className="square-switch">
                            <input
                              type="checkbox"
                              id="square-switch1"
                              switch="none"
                              checked={sq1}
                              onChange={() => {
                                setsq1(!sq1);
                              }}
                            />
                            <label
                              htmlFor="square-switch1"
                              data-on-label="On"
                              data-off-label="Off"
                            />
                          </div>
                          <div className="square-switch">
                            <input
                              type="checkbox"
                              id="square-switch2"
                              switch="info"
                              checked={sq2}
                              onChange={() => {
                                setsq2(!sq2);
                              }}
                            />
                            <label
                              htmlFor="square-switch2"
                              data-on-label="Yes"
                              data-off-label="No"
                            />
                          </div>
                          <div className="square-switch">
                            <input
                              type="checkbox"
                              id="square-switch3"
                              switch="bool"
                              checked={sq3}
                              onChange={() => {
                                setsq3(!sq3);
                              }}
                            />
                            <label
                              htmlFor="square-switch3"
                              data-on-label="Yes"
                              data-off-label="No"
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">React Validation - Normal</h4>
                  <p className="card-title-desc">
                    Provide valuable, actionable feedback to your users with
                    HTML5 form validation–available in all our supported
                    browsers.
                  </p>
                  <AvForm className="needs-validation">
                    <Row>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom01">First name</Label>
                          <AvField
                            name="firstname"
                            placeholder="First name"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom02">Last name</Label>
                          <AvField
                            name="lastname"
                            placeholder="Last name"
                            type="text"
                            errorMessage="Enter Last name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom02"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom03">City</Label>
                          <AvField
                            name="city"
                            placeholder="City"
                            type="text"
                            errorMessage=" Please provide a valid city."
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom03"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom04">State</Label>
                          <AvField
                            name="state"
                            placeholder="State"
                            type="text"
                            errorMessage="Please provide a valid state."
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom04"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup className="mb-3">
                          <Label htmlFor="validationCustom05">Zip</Label>
                          <AvField
                            name="zip"
                            placeholder="Zip Code"
                            type="text"
                            errorMessage=" Please provide a valid zip."
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom05"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <FormGroup className="mb-3">
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="invalidCheck"
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="invalidCheck"
                            >
                              {" "}
                              Agree to terms and conditions
                            </Label>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button color="primary" type="submit">
                      Submit form
                    </Button>
                  </AvForm>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title">React Validation (Tooltips)</h4>
                  <p className="card-title-desc">
                    If your form layout allows it, you can swap the
                    <code>.{"{valid | invalid-}"}feedback</code> classes for
                    <code>.{"{valid | invalid-}"}-tooltip</code> classes to
                    display validation feedback in a styled tooltip.
                  </p>
                  <form
                    className="needs-validation"
                    method="post"
                    id="tooltipForm"
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <Row>
                      <Col md="4">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltip01">
                            First name
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip01"
                            placeholder="First name"
                            onChange={(event) => {
                              onChangeValidation("fnm", event.target.value);
                            }}
                            valid={validation["fnm"] === true}
                            invalid={
                              validation["fnm"] !== true &&
                              validation["fnm"] !== null
                            }
                          />

                          <div
                            className={
                              validation["fnm"] === true
                                ? "valid-tooltip"
                                : "invalid-tooltip"
                            }
                            name="validate"
                            id="validate1"
                          >
                            {validation["fnm"] === true
                              ? "Looks good!"
                              : "Please Enter Valid First Name"}
                          </div>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltip02">Last name</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip02"
                            placeholder="Last name"
                            onChange={(event) =>
                              onChangeValidation("lnm", event.target.value)
                            }
                            valid={validation["lnm"] === true}
                            invalid={
                              validation["lnm"] !== true &&
                              validation["lnm"] !== null
                            }
                          />
                          <div
                            className={
                              validation["lnm"] === true
                                ? "valid-tooltip"
                                : "invalid-tooltip"
                            }
                            name="validate"
                            id="validate2"
                          >
                            {validation["lnm"] === true
                              ? "Looks good!"
                              : "Please Enter Valid Last Name"}
                          </div>
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltipUsername">
                            Username
                          </Label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="validationTooltipUsernamePrepend"
                              >
                                @
                              </span>
                            </div>
                            <Input
                              type="text"
                              className="form-control"
                              id="validationTooltipUsername"
                              placeholder="Username"
                              onChange={(event) =>
                                onChangeValidation("unm", event.target.value)
                              }
                              valid={validation["unm"] === true}
                              invalid={
                                validation["unm"] !== true &&
                                validation["unm"] !== null
                              }
                            />
                            <div
                              className={
                                validation["unm"] === true
                                  ? "valid-tooltip"
                                  : "invalid-tooltip"
                              }
                              name="validate"
                              id="validate3"
                            >
                              {validation["unm"] === true
                                ? "Looks good!"
                                : "Please choose a unique and valid username."}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltip03">City</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip03"
                            placeholder="City"
                            onChange={(event) =>
                              onChangeValidation("city", event.target.value)
                            }
                            valid={validation["city"] === true}
                            invalid={
                              validation["city"] !== true &&
                              validation["city"] !== null
                            }
                          />
                          <div
                            className={
                              validation["city"] === true
                                ? "valid-tooltip"
                                : "invalid-tooltip"
                            }
                            name="validate"
                            id="validate4"
                          >
                            {validation["city"] === true
                              ? "Looks good!"
                              : "Please choose a unique and valid username.Please provide a valid city."}
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="mb-3 position-relative">
                          <Label htmlFor="validationTooltip04">State</Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="validationTooltip04"
                            placeholder="State"
                            onChange={(event) =>
                              onChangeValidation("stateV", event.target.value)
                            }
                            valid={validation["stateV"] === true}
                            invalid={
                              validation["stateV"] !== true &&
                              validation["stateV"] !== null
                            }
                          />
                          <div
                            className={
                              validation["stateV"] === true
                                ? "valid-tooltip"
                                : "invalid-tooltip"
                            }
                            name="validate"
                            id="validate5"
                          >
                            {validation["stateV"] === true
                              ? "Looks good!"
                              : "Please provide a valid state."}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Button color="primary" type="submit">
                      Submit form
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card>
                <CardBody>
                  <CardTitle>Forms Editors</CardTitle>
                  <CardSubtitle className="mb-3">
                    React react-draft-wysiwyg is a javascript plugin that makes
                    it easy to create simple, beautiful wysiwyg editors with the
                    help of wysihtml5 and Twitter Bootstrap.
                  </CardSubtitle>

                  <Form method="post">
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                    />
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>File Upload Form - Dropzone</CardTitle>
                  <CardSubtitle className="mb-3">
                    {" "}
                    DropzoneJS is an open source library that provides
                    drag’n’drop file uploads with image previews.
                  </CardSubtitle>
                  <Form>
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        handleAcceptedFiles(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone">
                          <div
                            className="dz-message needsclick mt-2"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <div className="mb-3">
                              <i className="display-4 text-muted bx bxs-cloud-upload" />
                            </div>
                            <h4>Drop files here or click to upload.</h4>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="dropzone-previews mt-3" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </Form>

                  <div className="text-center mt-4">
                    <button type="button" className="btn btn-primary">
                      Send Files
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Basic Wizard</h4>
                  <div className="wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1);
                            }}
                          >
                            <span className="number">1.</span> Seller Details
                            </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 2 })}
                        >
                          <NavLink
                            disabled={!(passedSteps || []).includes(2)}
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2);
                            }}
                          >
                            <span className="number ms-2">02</span> Company
                            Document
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 3 })}
                        >
                          <NavLink
                            disabled={!(passedSteps || []).includes(3)}
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              setactiveTab(3);
                            }}
                          >
                            <span className="number">03</span> Bank Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 4 })}
                        >
                          <NavLink
                            disabled={!(passedSteps || []).includes(4)}
                            className={classnames({ active: activeTab === 4 })}
                            onClick={() => {
                              setactiveTab(4);
                            }}
                          >
                            <span className="number">04</span> Confirm Detail
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix mt-4">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-firstname-input1">
                                    First name
                                  </Label>
                                  <Input type="text" className="form-control" />
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-lastname-input2">
                                    Last name
                                  </Label>
                                  <Input type="text" className="form-control" />
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-phoneno-input3">
                                    Phone
                                  </Label>
                                  <Input type="text" className="form-control" />
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-email-input4">
                                    Email
                                  </Label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    id="basicpill-email-input4"
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-address-input1">
                                    Address
                                  </Label>
                                  <textarea
                                    id="basicpill-address-input1"
                                    className="form-control"
                                    rows="2"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-pancard-input5">
                                      PAN Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-pancard-input5"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-vatno-input6">
                                      VAT/TIN No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-cstno-input7">
                                      CST No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-servicetax-input8">
                                      Service Tax No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-companyuin-input9">
                                      Company UIN
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-declaration-input10">
                                      Declaration
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={3}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-namecard-input11">
                                      Name on Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Credit Card Type</Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select Card Type
                                      </option>
                                      <option value="AE">
                                        American Express
                                      </option>
                                      <option value="VI">Visa</option>
                                      <option value="MC">MasterCard</option>
                                      <option value="DI">Discover</option>
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-cardno-input12">
                                      Credit Card Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-card-verification-input">
                                      Card Verification Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-card-verification-input"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-expiration-input13">
                                      Expiration Date
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-expiration-input13"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5>Confirm Detail</h5>
                                  <p className="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTab(activeTab - 1);
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={activeTab === 4 ? "next disabled" : "next"}
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTab(activeTab + 1);
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Vertical Wizard</h4>
                  <div className="vertical-wizard wizard clearfix vertical">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 1,
                          })}
                        >
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 1,
                            })}
                            onClick={() => {
                              toggleTabVertical(1);
                            }}
                          >
                            <span className="number">1.</span> Seller Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 2,
                          })}
                        >
                          <NavLink
                            disabled={!(passedStepsVertical || []).includes(2)}
                            className={classnames({
                              active: activeTabVartical === 2,
                            })}
                            onClick={() => {
                              toggleTabVertical(2);
                            }}
                          >
                            <span className="number">2.</span>{" "}
                            <span>Company Document</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 3,
                          })}
                        >
                          <NavLink
                            disabled={!(passedStepsVertical || []).includes(3)}
                            className={classnames({
                              active: activeTabVartical === 3,
                            })}
                            onClick={() => {
                              toggleTabVertical(3);
                            }}
                          >
                            <span className="number">3.</span> Bank Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 4,
                          })}
                        >
                          <NavLink
                            disabled={!(passedStepsVertical || []).includes(4)}
                            className={classnames({
                              active: activeTabVartical === 4,
                            })}
                            onClick={() => {
                              toggleTabVertical(4);
                            }}
                          >
                            <span className="number">4.</span> Confirm Detail
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent
                        activeTab={activeTabVartical}
                        className="body"
                      >
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-firstname-input1">
                                    First name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-lastname-input2">
                                    Last name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-lastname-input2"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-phoneno-input3">
                                    Phone
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-phoneno-input3"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-email-input4">
                                    Email
                                  </Label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-address-input1">
                                    Address
                                  </Label>
                                  <textarea className="form-control" rows="2" />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-pancard-input5">
                                      PAN Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-vatno-input6">
                                      VAT/TIN No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-vatno-input6"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-cstno-input7">
                                      CST No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-cstno-input7"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-servicetax-input8">
                                      Service Tax No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-servicetax-input8"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-companyuin-input9">
                                      Company UIN
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-declaration-input10">
                                      Declaration
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-Declaration-input10"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={3}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-namecard-input11">
                                      Name on Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-namecard-input11"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label>Credit Card Type</Label>
                                    <select className="form-select">
                                      <option>Select Card Type</option>
                                      <option>American Express</option>
                                      <option>Visa</option>
                                      <option>MasterCard</option>
                                      <option>Discover</option>
                                    </select>
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-cardno-input12">
                                      Credit Card Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-cardno-input12"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-card-verification-input">
                                      Card Verification Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-expiration-input13">
                                      Expiration Date
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5>Confirm Detail</h5>
                                  <p className="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTabVartical === 1
                              ? "previous disabled"
                              : "previous"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical - 1);
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={
                            activeTabVartical === 4 ? "next disabled" : "next"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical + 1);
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormAdvanaced;
