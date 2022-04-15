import React from "react";
import Header from "../components/Header/Header2";
import Footer from "../components/Footer_new/Footer";
import "../Styles/Products.css";
import $ from "jquery";
import { useState } from "react";
import { Col, Row, Button, Accordion, Card, Form } from "react-bootstrap";
import Card1 from "../components/ProductCards/ProductCard";
import Card2 from "../components/ProductCards/ProductCard2";
import {
  FaFilter,
  IoIosArrowForward,
  HiOutlineDotsCircleHorizontal,
  HiOutlineDotsVertical,
} from "react-icons/all";

import { useProducts } from "../utils/db-products";
import { useParams } from "react-router-dom";

const AllProducts = () => {
  const [tileView, settileView] = useState(true);
  const tiechange = () => {
    if (tileView) {
      settileView(false);
    } else {
      settileView(true);
    }
  };

  const params = useParams();
  const { documents, isLoading } = useProducts(params.categoryName);

  return (
    <div>
      <Header />
      <div class="hero-top">
        <h1>{params.categoryName}</h1>
      </div>
      <div>
        <Button className="tilechangebut" onClick={tiechange}>
          {tileView ? (
            <HiOutlineDotsCircleHorizontal />
          ) : (
            <HiOutlineDotsVertical />
          )}
        </Button>
      </div>

      <Row className="main-row">
        <Col xl={3} lg={3} md={3} className="hifiyu">
          <div className="product-fliter">
            <h3>Filters</h3>
            <Button className="clear-filter-button"> Remove Filter </Button>
            <div className="company-fili">
              <Accordion className="yoyoAcordi">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="acorditext"
                      variant="link"
                      eventKey="0"
                    >
                      Company &nbsp;
                      <IoIosArrowForward className="arowdi" />
                    </Accordion.Toggle>
                    <hr />
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ul className="company-lis">
                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Apple" />
                          </Form.Group>
                        </li>

                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Samsung" />
                          </Form.Group>
                        </li>
                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Redmi" />
                          </Form.Group>
                        </li>
                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Blackberry" />
                          </Form.Group>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div className="pricing-fili">
              <Accordion defaultActiveKey="0" className="yoyoAcordi">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      className="acorditext"
                      variant="link"
                      eventKey="0"
                    >
                      Pricing &nbsp;
                      <IoIosArrowForward className="arowdi" />
                    </Accordion.Toggle>
                    <hr />
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ul className="company-lis">
                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="checkbox"
                              label="Under 10,000-/"
                            />
                          </Form.Group>
                        </li>

                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="checkbox"
                              label="20,000-30,000-/"
                            />
                          </Form.Group>
                        </li>
                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="checkbox"
                              label="30,000-40,000-/"
                            />
                          </Form.Group>
                        </li>
                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="checkbox"
                              label="40,000-50,000-/"
                            />
                          </Form.Group>
                        </li>

                        <li>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="checkbox"
                              label="Above 50,000-/"
                            />
                          </Form.Group>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <Button className="clear-filter-button"> Apply Filter </Button>
          </div>
        </Col>
        <div className="Yehidehai">
          <h4>
            <FaFilter />
          </h4>
        </div>
        <Col xl={9} lg={9} md={9} className="producihai">
          {tileView ? (
            <Row>
              {documents &&
                documents.map((doc) => {
                  return (
                    <Col xl={3} lg={4} md={6} sm={6} xs={12}>
                      <div className="cardib-hai">
                        <Card1 product={doc} />
                      </div>
                    </Col>
                  );
                })}
            </Row>
          ) : (
            <Row>
              {documents &&
                documents.map((doc) => {
                  return (
                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                      <div className="cardib-hai">
                        <Card2 product={doc} />
                      </div>
                    </Col>
                  );
                })}
            </Row>
          )}
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default AllProducts;
