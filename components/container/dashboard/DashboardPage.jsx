//import React, { memo } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Table,
  Media,
  Row,
  Col,
  Button,
  Badge,
} from "reactstrap";
import BarChart from "../charts/barChart";
//import ProjectCard from "../card/projects";
import TableContainer from "@/components/table/TableContainer";
import ProjectsHorizontal from "@/components/cards/ProjectHorizontal";

export default function DashboardPage() {
  return (
    <>
      <h1> Solar Admin Dashboard</h1>
      <p>
        {/* Welcome, this is your <code>pages/dashboard.jsx</code>, please continue. */}
      </p>
      <div className="d-flex p-3 my-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
        <img
          className="mr-3"
          src="/MS.png"
          alt="Brand"
          width="48"
          height="48"
        />
        <div className="lh-100">
          <h6 className="mb-0 text-white lh-100">Community Solar CDG</h6>
          <small>MaxSolar</small>
        </div>
        <div className="ml-auto">
          <blockquote className="blockquote text-right p-0 m-0">
            <p className="m-0">Welcome to the CDG Admin Dashboard</p>
            {/* <footer className="blockquote-footer text-white">
                Web Administrator, <cite title="Source Title">Web Bot</cite>
              </footer> */}
          </blockquote>
        </div>
      </div>
      <Row>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Portfolio Summary
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col
                  xs="4"
                  className="d-inline align-items-center text-success"
                >
                  <i className="fas fa-users fa-3x"></i>{" "}
                  <span>
                    25 <CardText>Subscribers</CardText>
                  </span>
                </Col>
                <Col xs="4" className="d-inline align-items-center text-info">
                  <i className="fas fa-solar-panel fa-3x"></i>{" "}
                  <span>
                    10 <CardText>Projects</CardText>
                  </span>
                </Col>
                <Col
                  xs="4"
                  className="d-inline align-items-center text-primary"
                >
                  <i className="fas fas fa-coins fa-3x"></i>{" "}
                  <span>
                    $ 75K <CardText>Revenue</CardText>
                  </span>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter> */}
              <Button color="danger" size="md" block>
                <i className="fas fa-chart-bar"></i> statistic
              </Button>
              {/* </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                System Production - 2021 (YTD)
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col xs="" className="d-inline align-items-center">
                  <BarChart />
                  {/* <CardText
                      tag="a"
                      href="#"
                      className="color-icons icon-rounded-circle"
                    >
                      <i className="fab fa-facebook"></i> 1290
                    </CardText>
                  </Col>
                  <Col xs="4" className="d-inline align-items-center">
                    <CardText
                      tag="a"
                      href="#"
                      className="color-icons icon-rounded-circle"
                    >
                      <i className="fab fa-twitter"></i> 2324
                    </CardText>
                  </Col>
                  <Col xs="4" className="d-inline align-items-center">
                    <CardText
                      tag="a"
                      href="#"
                      className="color-icons icon-rounded-circle"
                    >
                      <i className="fab fa-instagram"></i> 12341
                    </CardText>
                  </Col>
                  <Col xs="4" className="d-inline align-items-center">
                    <CardText
                      tag="a"
                      href="#"
                      className="color-icons icon-rounded-circle"
                    >
                      <i className="fab fa-linkedin"></i> 1331
                    </CardText>
                  </Col>
                  <Col xs="4" className="d-inline align-items-center">
                    <CardText
                      tag="a"
                      href="#"
                      className="color-icons icon-rounded-circle"
                    >
                      <i className="fab fa-pinterest"></i> 4124
                    </CardText>
                  </Col>
                  <Col xs="4" className="d-inline align-items-center">
                    <CardText
                      tag="a"
                      href="#"
                      className="color-icons icon-rounded-circle"
                    >
                      <i className="fab fa-github"></i> 13411
                    </CardText> */}
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter>
                  <Row>
                    <a href="#" className="float-right">Add new</a>
                  </Row>
                </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Project Portfolio
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col xs="" className="d-inline align-items-center">
                  <TableContainer />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        {/* <Col md="6" lg="4" className="mb-4">
            <Card className="h-100 mb-2">
              <CardBody>
                <CardTitle tag="h4" className="headline-mm">
                  Subscriptions
                </CardTitle>
                <Row className="block">
                  <Col lg="6" className="mb-2">
                    <Button size="sm" outline color="primary">
                      <Badge color="primary">21</Badge>&nbsp;Premium
                    </Button>
                    <span class="small ml-2 text-primary">
                      <i className="fas fa-arrow-up"></i> 2
                    </span>
                  </Col>
                  <Col lg="6" className="mb-2">
                    <Button size="sm" outline color="success">
                      <Badge color="success">90</Badge>&nbsp;Enterprise
                    </Button>
                    <span class="small ml-2 text-success">
                      <i className="fas fa-arrow-up"></i> 43
                    </span>
                  </Col>
                  <Col lg="6" className="mb-2">
                    <Button size="sm" outline color="secondary">
                      <Badge color="secondary">45</Badge>&nbsp;Free
                    </Button>
                    <span class="small ml-2 text-secondary">
                      <i className="fas fa-arrow-up"></i> 11
                    </span>
                  </Col>
                  <Col lg="6" className="mb-2">
                    <Button size="sm" outline color="danger">
                      <Badge color="danger">559</Badge>&nbsp;Basic
                    </Button>
                    <span class="small ml-2 text-danger">
                      <i className="fas fa-arrow-up"></i> 32
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col> */}
        {/* <Col md="6" lg="4" className="mb-4">
            <Card className="h-100 mb-2">
              <CardBody>
                <CardTitle tag="h4" className="headline-mm">
                  Files Overview
                </CardTitle>
                <Row className="clearfix">
                  <Col sm="4">
                    <CardText tag="span" className="small">
                      Projects
                    </CardText>
                    <div>
                      <i class="fas fa-briefcase fa-1x text-primary"></i>&nbsp;
                      <span className="font-weight-bold text-muted">2341</span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <CardText tag="span" className="small">
                      Downloads
                    </CardText>
                    <div>
                      <i class="fas fa-cloud-download-alt fa-1x text-success"></i>
                      &nbsp;
                      <span className="font-weight-bold text-muted">4144</span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <CardText tag="span" className="small">
                      Documents
                    </CardText>
                    <div>
                      <i class="fas fa-list fa-1x text-warning"></i>&nbsp;
                      <span className="font-weight-bold text-muted">3410</span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <CardText tag="span" className="small">
                      News
                    </CardText>
                    <div>
                      <i class="fas fa-newspaper fa-1x text-danger"></i>&nbsp;
                      <span className="font-weight-bold text-muted">5372</span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <CardText tag="span" className="small">
                      Uploads
                    </CardText>
                    <div>
                      <i class="fas fa-upload fa-1x text-info"></i>&nbsp;
                      <span className="font-weight-bold text-muted">4144</span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <CardText tag="span" className="small">
                      Orders
                    </CardText>
                    <div>
                      <i class="fas fa-shopping-cart fa-1x text-primary"></i>
                      &nbsp;
                      <span className="font-weight-bold text-muted">3410</span>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col> */}

        <Col md="12" lg="12" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Recent Additions
              </CardTitle>

              {/* <CardText></CardText> */}
              <ProjectsHorizontal />
              {/* <Button>Go somewhere</Button> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
