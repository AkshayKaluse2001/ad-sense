import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, MEDIA_AD, TEXT_AD } from "../constants/routes";

const ads = [
  {
    id: 1,
    url: "https://assets-global.website-files.com/614b3e8cafbd9789234c277e/63ce7ae68175848c1d66a285_Facebook%20Instant%20Article.jpg",
    description: "Text Ad",
  },
  {
    id: 2,
    url: "https://assets-global.website-files.com/614b3e8cafbd9789234c277e/63ce7ae68175848c1d66a285_Facebook%20Instant%20Article.jpg",
    description: "Media Ad",
  },
];

const CreateAd = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  const onChangeHandler = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  const onClickHandler = () => {
    if (selectedId === 1) {
      navigate(TEXT_AD);
    } else {
      navigate(MEDIA_AD);
    }
  };

  return (
    <Container fluid>
      <Row style={{ height: "calc(100vh - 56px)" }}>
        <Col className="my-3">
          <Card style={{ height: "100%" }}>
            <CardBody className="d-flex flex-column justify-content-between">
              <CardTitle>Create Ads</CardTitle>
              <Row className="flex-wrap row-gap-3 column-gap-4 justify-content-center">
                {ads.map((ad) => {
                  return (
                    <Card
                      key={ad.id}
                      className="d-flex flex-column justify-content-between"
                      id={ad.id}
                      style={{
                        height: "350px",
                        width: "280px",
                      }}
                    >
                      <Form.Check
                        type="checkbox"
                        checked={selectedId === ad.id}
                        onChange={() => onChangeHandler(ad.id)}
                      />
                      <Image src={ad.url} />
                      <Row style={{ height: "60px" }} className="bg-light ">
                        <Col
                          sm={12}
                          className="text-secondary d-flex flex-column align-items-center"
                        >
                          <p className="mb-0 ">Create</p>
                          <strong className="text-dark">
                            {ad.description}
                          </strong>
                        </Col>
                      </Row>
                    </Card>
                  );
                })}
              </Row>

              <Row className="my-2">
                <Col className="d-flex justify-content-end">
                  <Button
                    className="rounded-1 px-4"
                    disabled={selectedId === null}
                    onClick={onClickHandler}
                  >
                    Next
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

export default CreateAd;
