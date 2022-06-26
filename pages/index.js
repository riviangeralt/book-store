import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import BookCard from "../components/BookCard";
import { BooksContext } from "../context/BookContext";
const Home = (props) => {
  const [sort, setSort] = useState("");
  const { books, setCart, cart } = useContext(BooksContext);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const sortOptions = [
    {
      label: "Price: Low to High",
      value: "low",
    },
    {
      label: "Price: High to Low",
      value: "high",
    },
    {
      label: "Title: A to Z",
      value: "asc",
    },
    {
      label: "Title: Z to A",
      value: "desc",
    },
    {
      label: "Availability",
      value: "inStock",
    },
  ];
  const handleSort = (e) => {
    setSort(e.target.value);
    switch (e.target.value) {
      case "low":
        books.sort((a, b) => a.price - b.price);
        break;
      case "high":
        books.sort((a, b) => b.price - a.price);
        break;
      case "asc":
        books.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "desc":
        books.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "inStock":
        books.sort((item) => (item.inStock ? -1 : 1));
        break;
      default:
        books;
        break;
    }
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col
          lg={6}
          className="d-flex align-items-center"
          style={{ gap: "0.5rem" }}
        >
          <h4 className="m-0">Books</h4>
          <span style={{ color: "#9D9D9D", fontSize: " 12px" }}>
            ( {books.length} {books.length > 1 ? "books" : "book"} )
          </span>
        </Col>
        <Col lg={6} className="d-flex align-items-center justify-content-end">
          <Form.Select
            style={{ width: "200px" }}
            onChange={handleSort}
            value={sort}
          >
            {sortOptions.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Row>
      <Row className="mt-3 mb-3 g-4">
        {books?.length > 0 ? (
          books.map((item, index) => {
            return (
              <Col lg={3} key={index}>
                <BookCard
                  price={item.price}
                  title={item.title}
                  author={item.author}
                  poster={item.poster}
                  inStock={item.inStock}
                  description={item.description}
                  onClick={() => {
                    setCart([...cart, item]);
                  }}
                  selected={cart?.find((i) => i.id === item.id)}
                />
              </Col>
            );
          })
        ) : (
          <Col lg={12}>
            <h4 className="text-center">No Books Found</h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Home;
