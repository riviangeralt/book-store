import Image from "next/image";
import React from "react";
import { Card, Button } from "react-bootstrap";

const BookCard = ({
  poster,
  title,
  author,
  price,
  inStock,
  description,
  onClick,
  selected,
}) => {
  return (
    <Card className="shadow-sm">
      <div
        style={{
          background: "#F5F5F5",
        }}
        className="d-flex align-items-center justify-content-center p-4 position-relative"
      >
        <Image src={poster} width={"100%"} height={130} alt={title} />
        {!inStock && (
          <div className="position-absolute bg-white px-4 py-2 shadow-lg text-uppercase">
            Out of stock
          </div>
        )}
      </div>
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "14px",
          }}
          className="m-0"
        >
          {title}
        </Card.Title>
        <Card.Text
          style={{
            marginTop: "-7px",
          }}
        >
          <span style={{ color: "#9D9D9D", fontSize: "10px" }}>
            by {author}
          </span>
          <span
            className="d-block"
            style={{
              color: "#000",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Rs. {price}
          </span>
        </Card.Text>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            gap: "0.5rem",
          }}
        >
          {selected ? (
            <Button
              variant="outline-secondary"
              size="sm"
              style={{ width: "100%" }}
              disabled
            >
              Added to cart
            </Button>
          ) : (
            <>
              {inStock && (
                <Button
                  variant="danger"
                  size="sm"
                  style={{ width: "50%" }}
                  onClick={onClick}
                >
                  Add to cart
                </Button>
              )}
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ width: inStock ? "50%" : "100%" }}
              >
                Wishlist
              </Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
