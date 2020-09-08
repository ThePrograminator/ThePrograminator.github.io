import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, CardColumns } from "react-bootstrap";
import "./components/AttributeCard.js";
import AttributeCardList from "./containers/AttributeCardList.js";
import RandomizerForm from "./components/RandomizerForm.js";
import Header from "./components/Header.js";
import Genres from "./data/Genres.json";
import Forms from "./data/Forms.json";

const ConsoleLog = (props) => {
  console.log("ConsoleLog", props.elements);
  return false;
};

class App extends React.Component {
  state = {
    randomizedLists: [],
    randomizedListsForms: [],
  };

  componentDidMount() {
    console.log(Genres);
  }

  handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));

    this.setState(
      {
        randomizedLists: [],
        randomizedListsForms: [],
      },
      () =>
        Forms.forEach((form) => {
          for (const key in form) {
            if (form.hasOwnProperty(key) && key === "id") {
              const element = form[key];
              const amount = values[element];
              if (amount > 0) {
                console.log("key", element);
                console.log("amount", amount);
                this.generateRandomizeList(form, amount);
              }
            }
          }
        })
    );
  };

  generateRandomizeList = (form, amount) => {
    let arry = [];
    let dataLeft = [...form.data];
    if (amount > dataLeft.length) amount = dataLeft.length;
    for (let i = 0; i < amount; i++) {
      const rand = Math.floor(Math.random() * dataLeft.length);
      console.log(rand);
      arry.push(dataLeft[rand]);
      console.log(dataLeft[rand]);

      dataLeft.splice(rand, 1);
    }
    this.addToRandomizedList(arry, form);
  };

  addToRandomizedList = (randomizedList, form) => {
    let currentRandomizedLists = this.state.randomizedLists;
    let currentRandomizedListsForms = this.state.randomizedListsForms;
    currentRandomizedLists.push(randomizedList);
    currentRandomizedListsForms.push(form);
    this.setState(
      {
        randomizedLists: currentRandomizedLists,
        currentRandomizedListsForms: currentRandomizedListsForms,
      },
      () => console.log("addToRandomizedList", this.state)
    );
  };

  render() {
    return (
      <Container fluid={true}>
        <Row lg={true}>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row lg={true}>
          <Col>
            <RandomizerForm handleSubmit={this.handleSubmit} />
          </Col>
        </Row>
        <hr />
        {this.state.randomizedLists.length > 0 ? (
          <Container fluid>
            <AttributeCardList
              randomizedLists={this.state.randomizedLists}
              randomizedListsForms={this.state.randomizedListsForms}
            />
          </Container>
        ) : null}
      </Container>
    );
  }
}

export default App;
