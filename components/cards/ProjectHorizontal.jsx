import React from "react";

import {
  Col,
  Row,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Table,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import {
  Button,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

export default function ProjectsHorizontal() {
  return (
    <div>
      <div className="d-flex p-3 align-items-center text-grey-50 bg-white box-shadow">
        <div className="col-sm-3">
          <blockquote className="blockquote text-left p-0 m-0">
            <a href="#" title="Project Image">
              <img
                className="mr-3 img-thumbnail"
                src="/MAT.jpg"
                alt="Profile Image"
              />
            </a>
          </blockquote>
        </div>

        <div className="col-sm-9">
          <Card className="h-100 mb-0">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Matrix-System 1A
              </CardTitle>
              {/* <CardText></CardText> */}
              <Table hover size="md" borderless>
                {/* <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Username</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>System Location</td>
                    <td>586 Gulf Avenue, Staten Island, New York</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>System Size</td>
                    <td>3,246 kW</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Utility</td>
                    <td>ConEdison</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Subscription Status</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </Table>
              {/* <Button>Go somewhere</Button> */}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
