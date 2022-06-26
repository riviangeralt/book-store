import React, { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { BooksContext } from "../context/BookContext";

const MultiStep = ({ currentStep, steps, setCurrentStep }) => {
  const router = useRouter();
  const { setCart } = useContext(BooksContext);
  return (
    <>
      {steps.map((step, index) => {
        return (
          <Col lg={12} className="border p-4 mt-3" key={index}>
            <h5 className={`${currentStep === index + 1 ? "mb-3" : ""}`}>
              {" "}
              {step.label}
            </h5>
            {index === currentStep - 1 ? step.component : null}
            {index === currentStep - 1 && (
              <div className="d-flex justify-content-end mt-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    if (currentStep === steps.length) {
                      router.push("/orderplaced");
                      setTimeout(() => {
                        setCart([]);
                        localStorage.removeItem("cart");
                      }, 1000);
                    } else {
                      setCurrentStep(currentStep + 1);
                    }
                  }}
                >
                  {index + 1 === steps.length ? "Finish" : "Next"}
                </Button>
              </div>
            )}
          </Col>
        );
      })}
    </>
  );
};

export default MultiStep;
