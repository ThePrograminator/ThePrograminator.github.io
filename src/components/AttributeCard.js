import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import posed from "react-pose";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 600 } },
});

const HoverText = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.25 },
});

const AttributeCard = (props) => {
  const [isVisible, setVisble] = useState(false);

  useEffect(() => {
    setVisble(true);
  }, []);

  return (
    <Box pose={isVisible ? "visible" : "hidden"}>
      <Card style={{ width: "18rem" }} className="justify-content-md-center">
        <HoverText>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              {props.randomElement}
            </Card.Title>
          </Card.Body>
        </HoverText>
      </Card>
    </Box>
  );
};

export default AttributeCard;
