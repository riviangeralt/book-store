import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import MultiStep from "../components/MultiStep";
import { BooksContext } from "../context/BookContext";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const { cart, setCart } = useContext(BooksContext);
  const [currentStep, setCurrentStep] = useState(1);
  const mySteps = [
    {
      label: "My Cart",
      component: (
        <Row>
          {cart.length > 0 ? (
            cart.map((item, index) => {
              return (
                <Col
                  lg={6}
                  key={index}
                  className={`${cart.length > 1 ? "mb-3" : ""}`}
                >
                  <div className="d-flex align-items-center ">
                    <Image
                      src={item.poster}
                      width={"100%"}
                      height={130}
                      alt={item.title}
                    />
                    <div className="mx-3">
                      <Card.Title
                        style={{
                          fontSize: "14px",
                        }}
                        className="m-0"
                      >
                        {item.title}
                      </Card.Title>
                      <Card.Text>
                        <span style={{ color: "#9D9D9D", fontSize: "10px" }}>
                          by {item.author}
                        </span>
                        <span
                          className="d-block"
                          style={{
                            color: "#000",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          Rs. {item.price}
                        </span>
                      </Card.Text>
                      <div
                        className="d-flex align-items-center justify-content-start"
                        style={{
                          gap: "0.5rem",
                        }}
                      >
                        <Button
                          variant="outline-primary"
                          onClick={() => {
                            if (item.quantity === 1) {
                              removeItemFromCart(item.id);
                            } else {
                              updateCart(item.id, "remove");
                            }
                          }}
                        >
                          -
                        </Button>
                        {item?.quantity}
                        <Button
                          variant="outline-primary"
                          onClick={() => {
                            updateCart(item.id, "add");
                          }}
                        >
                          +
                        </Button>
                        <Button
                          variant="outline-danger"
                          onClick={() => {
                            removeItemFromCart(item.id);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })
          ) : (
            <Col lg={12}>
              <h4 className="text-center">Your cart is empty</h4>
            </Col>
          )}
        </Row>
      ),
    },
    {
      label: "Customer Details",
      component: (
        <Row>
          <Col lg={6}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col lg={6}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col lg={6}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col lg={6}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col lg={12}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                as="textarea"
                rows={3}
              />
            </InputGroup>
          </Col>
          <Col lg={6}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>{" "}
          <Col lg={6}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
      ),
    },
    {
      label: "Order Summary",
      component: (
        <Row>
          {cart.length > 0 ? (
            <>
              {cart.map((item, index) => {
                return (
                  <Col
                    lg={6}
                    key={index}
                    className={`${cart.length > 1 ? "mb-3" : ""}`}
                  >
                    <div className="d-flex align-items-center ">
                      <Image
                        src={item.poster}
                        width={"100%"}
                        height={130}
                        alt={item.title}
                      />
                      <div className="mx-3">
                        <Card.Title
                          style={{
                            fontSize: "14px",
                          }}
                          className="m-0"
                        >
                          {item.title}
                        </Card.Title>
                        <Card.Text>
                          <span style={{ color: "#9D9D9D", fontSize: "10px" }}>
                            by {item.author}
                          </span>
                          <span
                            className="d-block"
                            style={{
                              color: "#000",
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            Rs. {item.price}
                          </span>
                        </Card.Text>
                        <div
                          className="d-flex align-items-center justify-content-start"
                          style={{
                            gap: "0.5rem",
                          }}
                        >
                          Total: Rs. {item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
              <Col lg={12}>
                <div className="d-flex align-items-center justify-content-center">
                  Your total is Rs.{" "}
                  {cart.reduce((a, b) => {
                    return a + b.price * b.quantity;
                  }, 0)}
                </div>
              </Col>
            </>
          ) : (
            <Col lg={12}>
              <h4 className="text-center">Your cart is empty</h4>
            </Col>
          )}
        </Row>
      ),
    },
  ];

  const updateCart = (id, tag) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity = tag === "add" ? item.quantity + 1 : item.quantity - 1;
      }
      return item;
    });
    setCart(newCart);
  };
  const removeItemFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <Container className="mt-3">
      <Row className="mb-3">
        <MultiStep
          currentStep={currentStep}
          steps={mySteps}
          setCurrentStep={setCurrentStep}
        />
      </Row>
    </Container>
  );
};

export default Cart;
