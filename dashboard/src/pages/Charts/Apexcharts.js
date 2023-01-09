import React from "react"
import MetaTags from 'react-meta-tags';

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"

import CandlestickChart from '../AllCharts/apex/candlestickchart';
import TimelineChart from '../AllCharts/apex/timelinechart';
import TimelinedistributedChart from '../AllCharts/apex/timelinedistributedchart';

import LineColumnArea from "../AllCharts/apex/LineColumnArea"
import RadialChart from "../AllCharts/apex/RadialChart"
import PieChart from "../AllCharts/apex/PieChart"
import DonutChart from "../AllCharts/apex/dountchart"

import BubbleChart from '../AllCharts/apex/bubblechart';
import ScatterChart from '../AllCharts/apex/scatterchart';
import HeatmapChart from '../AllCharts/apex/heatmapchart';
import TreemapChart from '../AllCharts/apex/treemapchart';
import RadialAngleChart from '../AllCharts/apex/radialanglechart';
import RadarChart from '../AllCharts/apex/radarchart';
import RadarMultipleChart from '../AllCharts/apex/radarmultiplechart';
import PolarareaChart from '../AllCharts/apex/polarareachart';
import PolarareaMonochromeChart from '../AllCharts/apex/polarareamonochromechart';

import MixBarChart from '../AllCharts/rechart/MixBarChart';
import VerticalComposedChart from '../AllCharts/rechart/VerticalComposedChart';
import ThreeDimScatterChart from '../AllCharts/rechart/ThreeDimScatterChart';
import SpecifiedDomainRadarChart from '../AllCharts/rechart/SpecifiedDomainRadarChart';
import SimpleRadialBarChart from '../AllCharts/rechart/SimpleRadialBarChart';
import CustomActiveShapePieChart from '../AllCharts/rechart/CustomActiveShapePieChart';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Apexchart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Charts | Samply - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Charts" breadcrumbItem="Charts" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Apex Chart</CardTitle>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="font-size-14 mb-4">Line with Data Labels</CardTitle>
                          <LineApexChart />
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="font-size-14 mb-4">Dashed Line</CardTitle>
                          <DashedLine />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="font-size-14 mb-4">Spline Area</CardTitle>
                          <SplineArea />
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="font-size-14 mb-4">Column Chart</CardTitle>
                          <Apaexlinecolumn />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">
                            Column with Data Labels{' '}
                          </CardTitle>
                          <ColumnWithDataLabels />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Bar Chart</CardTitle>
                          <BarChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">
                            Line, Column & Area Chart{' '}
                          </CardTitle>
                          <LineColumnArea />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Candlestick Chart</CardTitle>
                          <CandlestickChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Basic Timeline Chart</CardTitle>
                          <TimelineChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Timeline Distributed</CardTitle>
                          <TimelinedistributedChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Bubble Chart</CardTitle>
                          <BubbleChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Scatter Chart</CardTitle>
                          <ScatterChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Heatmap Chart</CardTitle>
                          <HeatmapChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Treemap Chart</CardTitle>
                          <TreemapChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Pie Chart</CardTitle>
                          <PieChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Donut Chart</CardTitle>
                          <DonutChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Radial Chart</CardTitle>
                          <RadialChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Timeline Distributed Radial Chart</CardTitle>
                          <RadialAngleChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Radar Chart</CardTitle>
                          <RadarChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Radar multiple Chart</CardTitle>
                          <RadarMultipleChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Polar Area Chart</CardTitle>
                          <PolarareaChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">Polar Area Monochrome Chart</CardTitle>
                          <PolarareaMonochromeChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card>

                <CardBody>
                  <CardTitle className="mb-4">Re Charts</CardTitle>
                  <Row>
                    <Col xl={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">SimpleLine Chart</CardTitle>
                          <MixBarChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xl={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">SimpleArea Chart</CardTitle>
                          <VerticalComposedChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">ThreeDimScatter Chart</CardTitle>
                          <ThreeDimScatterChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xl={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">SpecifiedDomain Radar Chart</CardTitle>
                          <SpecifiedDomainRadarChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">SimpleRadialBar Chart</CardTitle>
                          <SimpleRadialBarChart />
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xl={6}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">CustomActiveShapePie Chart</CardTitle>
                          <CustomActiveShapePieChart />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Apexchart
