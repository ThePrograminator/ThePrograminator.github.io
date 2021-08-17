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
            <h1
              style={{
                margin: "auto",
                textAlign: "center",
                maxWidth: "1000px",
              }}
            >
              Game Jam Randomizer
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            sm={2}
            style={{
              verticalAlign: "middle",
              padding: "5px",
              maxWidth: "fit-content",
            }}
          >
            <BsMoon />
          </Col>
          <Col
            sm={2}
            style={{
              verticalAlign: "middle",
              padding: "5px",
              maxWidth: "fit-content",
            }}
          >
            <label class="switch">
              <input type="checkbox" onClick={() => props.themeToggler()} />
              <span class="slider round"></span>
            </label>
          </Col>
          <Col
            sm={2}
            style={{
              verticalAlign: "middle",
              padding: "5px",
              maxWidth: "fit-content",
            }}
          >
            <BsSun />
          </Col>
        </Row>
        <Row
          lg={true}
          style={{ margin: "auto", textAlign: "center", maxWidth: "1000px" }}
        >
          <Col lg={true}>
            <p style={{ margin: "auto", textAlign: "center" }}>
              Ever been stuck trying to come up with a game? This site is here
              to help you!
            </p>
            <br />
            <p style={{ margin: "auto", textAlign: "center" }}>
              All you have to do is fill in the form below with the different
              criteria you have for your game/game jam. You decide, how many
              unique objects to include, what themes and genres to include etc.
              All the different criteria below are optional and you don't need
              to include them all. To not include a criteria make sure the value
              is zero.
            </p>
            <br />
            <p style={{ margin: "auto", textAlign: "center" }}>
              Game Tags, Sub Genres, and Genres may overlap, consider not using all three criteria at once.
            </p>
            <br />
            <p style={{ margin: "auto", textAlign: "center" }}>
              Disclaimer: I have not read or edited all the possible values, and
              therefore sorry if there is any thing offensive.
            </p>
          </Col>
        </Row>
      </Container>
    </OpacityAnimation>
  );
};

export default Header;
