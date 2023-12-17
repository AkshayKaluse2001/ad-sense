import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Backdrop from "../components/Backdrop";

const MediaAd = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
    setTimeout(() => {
      navigate("/create-ad");
      setShow(false);
    }, 600);
  };

  return (
    <Container fluid>
      {show && <Backdrop />}
      <Row style={{ height: "calc(100vh - 56px)" }}>
        <Col sm={12} className="my-3">
          <Card>
            <CardBody>
              <CardTitle> Create Text & Media</CardTitle>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Heading 01</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add a heading that would make users interested"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Heading 02</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add a heading that would make users interested"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Description 01</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Add primary text to help users understand more about your products, services or offers"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Landscape Marketing Image (1.9:1)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add the URL of the Image you want to use for the ad"
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Portrait Marketing Image (4:5)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add the URL of the Image you want to use for the ad"
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Square Marketing Image (1:1)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add the URL of the Image you want to use for the ad"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Video URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add the URL of the video you want to use for the ad"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add your Business Name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Label className="">Button Label</Form.Label>
                  <Form.Select className="mb-3">
                    <option value="" disabled>
                      Select a Label that best suits your Ad
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>

                <Col sm={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Website URL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add the URl of the landing page you want to redirect users to"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col
                  sm={12}
                  className="d-flex justify-content-end row-gap-3 column-gap-3"
                >
                  <Button
                    className="px-4 rounded-1 btn-outline-dark"
                    variant="light"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Back
                  </Button>
                  <Button className="px-4 rounded-1" onClick={showModal}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MediaAd;
