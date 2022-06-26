import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Hurray from "../assets/hurray.png";

const OrderPlaced = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center flex-column my-5"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div>
        <Image src={Hurray} width={200} height={200} alt="Hurray" />
        <h1
          style={{
            marginTop: "-45%",
          }}
        >
          Order Placed
        </h1>
      </div>
      <p style={{ fontSize: "20px" }} className="mt-5 text-center">
        hurray!!! your order is confirmed
        <br />
        the order id is #123456 save the order id for
        <br />
        further communication..
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email Us</th>
            <th>Contact Us</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>email@example.com</td>
            <td>+91-1234567890</td>
            <td>
              42, 14th Main, 15th Cross, Sector 4 ,opp to BDA
              <br />
              complex, near Kumarakom restaurant, HSR Layout,
              <br />
              Bangalore 560034
            </td>
          </tr>
        </tbody>
      </Table>
      <Button variant="primary" className="mt-5">
        <Link href="/">
          <a>Continue Shopping</a>
        </Link>
      </Button>
    </Container>
  );
};

export default OrderPlaced;
