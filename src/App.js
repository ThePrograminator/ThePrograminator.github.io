import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap'
import './AttributeCard.js'
import AttributeCard from './AttributeCard.js';

class App extends React.Component {
  state = {
    genreAmount: 1,
    randomized: false
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name);

    this.setState({
      genreAmount: value
    }, function () {
      console.log(this.state.genreAmount);
    });
  }

  createGenres = () => {
    let table = []
    let genres = ["FPS", "Strategy", "Walking Simulator"]

    for (let i = 0; i < this.state.genreAmount; i++) {

      table.push(<Col key={i}><AttributeCard randomElement={"Hello"}></AttributeCard></Col>)
    }
    return table
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Genres:</h1>
        </Row>
        <Row>
          <Col>
            <form>
              <label name="gAmount">Genre Amount:</label>
              <input type="number" id="gAmount" name="genreAmount" onChange={this.handleInputChange}/>
            </form>
          </Col>
        </Row>
        <Row>
          {this.createGenres()}
        </Row>
        <hr/>
        <Row>
          <Col>
            <Button onClick={() => this.setState({randomized: true})}>Randomize</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
