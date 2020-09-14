import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import posed from "react-pose";
import { BsMoon, BsSun } from "react-icons/bs";

const OpacityAnimation = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1000 } },
});

const Header = (props) => {
  const [isVisible, setVisble] = useState(false);

  useEffect(() => {
    setVisble(true);
  }, [isVisible]);

  return (
    <OpacityAnimation pose={isVisible ? "visible" : "hidden"}>
      <Container fluid={true}>
        <Row lg={true}>
          <Col lg={true}>
            <h1 style={{ margin: "auto", textAlign: "center" }}>
              Game Jam Randomizer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col sm={2} style={{ verticalAlign: "middle", padding: "5px", maxWidth: "fit-content" }}>
            <BsMoon />
          </Col>
          <Col sm={2} style={{ verticalAlign: "middle", padding: "5px", maxWidth: "fit-content"  }}>
            <label class="switch">
              <input type="checkbox" onClick={() => props.themeToggler()} />
              <span class="slider round"></span>
            </label>
          </Col>
          <Col sm={2} style={{ verticalAlign: "middle", padding: "5px", maxWidth: "fit-content"  }}>
            <BsSun />
          </Col>
        </Row>
      </Container>
    </OpacityAnimation>
  );
};

export default Header;

/*
<Form.Check
              type="switch"
              id="custom-switch"
              onClick={() => props.themeToggler()}
            />

*/
