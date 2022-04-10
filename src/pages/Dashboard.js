import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../redux/actions/productsActions";
import Loader from "../components/Loader";

const Dashboard = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { loading, productList, error } = products;

  return (
    <>
      <h1 className="py-3">Trending Products</h1>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {productList.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Dashboard;
