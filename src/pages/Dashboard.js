import React from "react";
import { Col, Row } from "react-bootstrap";
import { products } from "../data/dummyData";
import Product from "../components/Product";

const Dashboard = () => {
  return (
    <>
      <h1 className="py-3">Trending Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Dashboard;
