import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Minitable from "../components/Minitable";
import Piechart from "../components/Piechart";
import Table from "../components/Table";

const Dashboard = () => {
  const [showChart, setShowChart] = useState(true);

  const showTable = () => {
    setShowChart(!showChart);
  };

  return (
    <Container fluid style={{ height: "calc(100vh - 72px)" }}>
      <Row className="mt-3  row-gap-3">
        <Col sm={12} md={6}>
          <Card>
            <CardHeader className="d-flex justify-content-between">
              <div className="header">Ad Insights</div>
              <div className="icon">
                <i className="fa fa-question-circle-o text-secondary"></i>
              </div>
            </CardHeader>
            <CardBody>
              <Table />
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card style={{ height: 460 }}>
            <CardHeader className="d-flex justify-content-between">
              <div className="header">Ad Insights</div>
              <div className="right d-flex align-items-center">
                <Form.Select size="sm">
                  <option value="" disabled selected>
                    Clicks
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Form.Select>
                <i className="fa fa-question-circle-o text-secondary ms-2"></i>
              </div>
            </CardHeader>
            <CardBody className="d-flex flex-column justify-content-between">
              {showChart ? <Piechart /> : <Minitable />}
              <Row>
                <Col sm={12} className="d-flex justify-content-end">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onClick={showTable}
                    className="fs-4"
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
