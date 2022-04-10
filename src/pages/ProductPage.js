import React, { useEffect } from "react";
import { Row, Col, Button, Image, ListGroup, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import NoProductFound from "../components/NoProductFound";
import { getProduct } from "../redux/actions/productsActions";

const ProductPage = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.products.currentProduct);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  return (
    <>
      {currentProduct ? (
        <>
          <LinkContainer to="/">
            <Button className="my-3">Go Back</Button>
          </LinkContainer>

          <Row>
            <Col md={4}>
              <Image src={currentProduct.image} fluid></Image>
            </Col>

            <Col md={5} className="my-5">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{currentProduct.detailedName}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Rating
                    val={currentProduct.rating}
                    numOfReviews={currentProduct.numOfReviews}
                  />
                </ListGroup.Item>

                <ListGroup.Item>
                  Description:
                  <ul>
                    {currentProduct.description &&
                      currentProduct.description.map((desc) => <li>{desc}</li>)}
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>₹{currentProduct.price}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {currentProduct.countInStock > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={currentProduct.countInStock <= 0}
                    >
                      Add to Cart
                    </Button>
                  </Row>
                </ListGroup.Item>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <NoProductFound />
      )}
    </>
  );
};

export default ProductPage;
