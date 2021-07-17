import { Col, Row, Table } from "reactstrap";

export default function TablePage() {
  //const { dispatch, storeLayout } = props;
  return (
    <>
      <h1></h1>
      <div className="hero">
        <Row>
          {/* <Col xs="6">
            <h4>Default</h4>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col> */}
          {/* <Col xs="6">
            <h4>Hover</h4>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col> */}
          <Col xs="12">
            <h4></h4>
            <Table striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>System Size</th>
                  <th>Utility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Matrix-System 1A</td>
                  <td>2400 kW (dc)</td>
                  <td>ConEd</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Matrix-System 1B</td>
                  <td>5141 kW (dc)</td>
                  <td>ConEd</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Matrix - System 2A</td>
                  <td>2808 kW (dc)</td>
                  <td>ConEd</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          {/* <Col xs="6">
            <h4>Dark</h4>
            <Table dark hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col> */}
        </Row>
      </div>
    </>
  );
}
