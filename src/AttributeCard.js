import React from 'react';
import {Card, Button} from 'react-bootstrap'

const AttributeCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Text>
              {props.randomElement}
            </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default AttributeCard;
