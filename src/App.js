import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, CardColumns } from "react-bootstrap";
import "./components/AttributeCard.js";
import AttributeCard from "./components/AttributeCard.js";
import RandomizerForm from "./components/RandomizerForm.js";
import Genres from "./data/Genres.json";
import posed from "react-pose";

class App extends React.Component {
  state = {
    genreAmount: 0,
    randomizedGenres: [],
  };

  componentDidMount() {
    console.log(Genres);
  }

  handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));

    this.setState(
      {
        genreAmount:
          values.genreAmount > Genres.length
            ? Genres.length
            : values.genreAmount,
      },
      () => this.generateGenres()
    );
  };

  generateGenres = () => {
    let arry = [];
    let GenresLeft = Genres;
    for (let i = 0; i < this.state.genreAmount; i++) {
      const rand = Math.floor(Math.random() * GenresLeft.length);
      console.log(rand);
      arry.push(GenresLeft[rand]);
      console.log(GenresLeft[rand]);

      GenresLeft.splice(rand, 1);
    }
    this.setState(
      {
        randomizedGenres: arry,
      },
      () => console.log(this.state)
    );
  };

  createGenres = () => {
    const listGenres = this.state.randomizedGenres.map((genre, index) => (
      <Col key={index} lg={true}>
        <AttributeCard randomElement={genre}></AttributeCard>
      </Col>
    ));

    return listGenres;
  };

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <h1>Game Jam Randomizer:</h1>
        </Row>
        <Row>
          <Col>
            <RandomizerForm handleSubmit={this.handleSubmit} />
          </Col>
        </Row>
        <hr />
        <Row>
            <CardColumns>{this.createGenres()}</CardColumns>
        </Row>
      </Container>
    );
  }
}

export default App;
