import React, { useState }  from 'react';
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader, Tooltip, UncontrolledPopover } from 'reactstrap';

const TooltipsPopovers = () => {

  //tooptip
  const [ttop, setttop] = useState(false);
  const [tbottom, settbottom] = useState(false);
  const [tleft, settleft] = useState(false);
  const [tright, settright] = useState(false);
  const [popovertop, setpopovertop] = useState(false);
  const [popoverleft, setpopoverleft] = useState(false);
  const [popoverright, setpopoverright] = useState(false);
  const [popoverbottom, setpopoverbottom] = useState(false);
  const [popoverdismiss, setpopoverdismiss] = useState(false);

    return (
        <React.Fragment>
            <Col lg={12}>
                <Card id="tooltip-popover">
                    <CardBody>
                        <h4 className="card-title mb-4">
                            Tooltips & Popovers
                        </h4>

                        <div>
                            <div>
                                <h5 className="font-size-14">Tooltips</h5>
                                <p className="card-title-desc">
                                    Hover over the links below to see tooltips.
                                </p>

                                <div className="button-items">
                                    <Tooltip
                                        placement="top"
                                        isOpen={ttop}
                                        target="TooltipTop"
                                        toggle={() => {
                                            setttop(!ttop);
                                        }}
                                    >
                                        Hello world!
                                    </Tooltip>
                                    <Tooltip
                                        placement="right"
                                        isOpen={tright}
                                        target="TooltipRight"
                                        toggle={() => {
                                            settright(!tright);
                                        }}
                                    >
                                        Hello world!
                                    </Tooltip>
                                    <Tooltip
                                        placement="bottom"
                                        isOpen={tbottom}
                                        target="TooltipBottom"
                                        toggle={() => {
                                            settbottom(!tbottom);
                                        }}
                                    >
                                        Hello world!
                                    </Tooltip>
                                    <Tooltip
                                        placement="left"
                                        isOpen={tleft}
                                        target="TooltipLeft"
                                        toggle={() => {
                                            settleft(!tleft);
                                        }}
                                    >
                                        Hello world!
                                    </Tooltip>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        id="TooltipTop"
                                    >
                                        {" "}
                                        Tooltip on top
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        id="TooltipBottom"
                                    >
                                        {" "}
                                        Tooltip on Bottom
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        id="TooltipLeft"
                                    >
                                        {" "}
                                        Tooltip on Left
                                    </button>{" "}
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        id="TooltipRight"
                                    >
                                        {" "}
                                        Tooltip on Right
                                    </button>{" "}
                                </div>
                            </div>

                            <div className="mt-4 pt-2">
                                <h5 className="font-size-14">Popovers</h5>
                                <p className="card-title-desc">
                                    Add small overlay content, like those found in
                                    iOS, to any element for housing secondary
                                    information.
                                </p>

                                <div className="button-items">
                                    <Button
                                        id="Popovertop"
                                        color="secondary"
                                        onClick={() => {
                                            setpopovertop(!popovertop);
                                        }}
                                    >
                                        Popover on top
                                    </Button>
                                    <Popover
                                        placement="top"
                                        isOpen={popovertop}
                                        target="Popovertop"
                                        toggle={() => {
                                            setpopovertop(!popovertop);
                                        }}
                                    >
                                        <PopoverHeader>Popover Title</PopoverHeader>
                                        <PopoverBody>
                                            Sed posuere consectetur est at lobortis.
                                            Aenean eu leo quam. Pellentesque ornare
                                            sem lacinia quam venenatis vestibulum.
                                        </PopoverBody>
                                    </Popover>{" "}
                                    <Button
                                        id="Popoverright"
                                        onClick={() => {
                                            setpopoverright(!popoverright);
                                        }}
                                        color="secondary"
                                    >
                                        Popover on right
                                    </Button>
                                    <Popover
                                        placement="right"
                                        isOpen={popoverright}
                                        target="Popoverright"
                                        toggle={() => {
                                            setpopoverright(!popoverright);
                                        }}
                                    >
                                        <PopoverHeader>Popover Title</PopoverHeader>
                                        <PopoverBody>
                                            Sed posuere consectetur est at lobortis.
                                            Aenean eu leo quam. Pellentesque ornare
                                            sem lacinia quam venenatis vestibulum.
                                        </PopoverBody>
                                    </Popover>{" "}
                                    <Button
                                        id="Popoverbottom"
                                        onClick={() => {
                                            setpopoverbottom(!popoverbottom);
                                        }}
                                        color="secondary"
                                    >
                                        Popover on bottom
                                    </Button>
                                    <Popover
                                        placement="bottom"
                                        isOpen={popoverbottom}
                                        target="Popoverbottom"
                                        toggle={() => {
                                            setpopoverbottom(!popoverbottom);
                                        }}
                                    >
                                        <PopoverHeader>Popover Title</PopoverHeader>
                                        <PopoverBody>
                                            Sed posuere consectetur est at lobortis.
                                            Aenean eu leo quam. Pellentesque ornare
                                            sem lacinia quam venenatis vestibulum.
                                        </PopoverBody>
                                    </Popover>{" "}
                                    <Button
                                        id="Popoverleft"
                                        onClick={() => {
                                            setpopoverleft(!popoverleft);
                                        }}
                                        color="secondary"
                                    >
                                        Popover on left
                                    </Button>
                                    <Popover
                                        placement="left"
                                        isOpen={popoverleft}
                                        target="Popoverleft"
                                        toggle={() => {
                                            setpopoverleft(!popoverleft);
                                        }}
                                    >
                                        <PopoverHeader>Popover Title</PopoverHeader>
                                        <PopoverBody>
                                            Sed posuere consectetur est at lobortis.
                                            Aenean eu leo quam. Pellentesque ornare
                                            sem lacinia quam venenatis vestibulum.
                                        </PopoverBody>
                                    </Popover>{" "}
                                    <Button
                                        id="Popoverdismiss"
                                        className="btn btn-success"
                                        onClick={() => {
                                            setpopoverdismiss(!popoverdismiss);
                                        }}
                                    >
                                        Dismissible popover
                                    </Button>
                                    <UncontrolledPopover
                                        trigger="focus"
                                        target="Popoverdismiss"
                                        placement="right"
                                    >
                                        <PopoverHeader>
                                            Dismissible popover
                                        </PopoverHeader>
                                        <PopoverBody>
                                            Vivamus sagittis lacus vel augue laoreet
                                            rutrum faucibus
                                        </PopoverBody>
                                    </UncontrolledPopover>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default TooltipsPopovers;