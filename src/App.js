import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import AttributeCardList from "./containers/AttributeCardList.js";
import RandomizerForm from "./components/RandomizerForm.js";
import Header from "./components/Header.js";
import Forms from "./data/Forms.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

const ConsoleLog = (props) => {
  console.log("ConsoleLog", props.elements);
  return false;
};

class App extends React.Component {
  state = {
    randomizedLists: [],
    randomizedListsForms: [],
    theme: "light",
  };

  componentDidMount() {
    const localTheme = window.localStorage.getItem("theme");
    this.setThemeToggler(localTheme);
  }

  themeToggler = () => {
    window.localStorage.setItem(
      "theme",
      this.state.theme === "light" ? "dark" : "light"
    );
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  setThemeToggler = (theme) => {
    this.setState({ theme: theme });
  };

  handleSubmit = (values) => {
    //alert(JSON.stringify(values, null, 2));

    let currentRandomizedLists = [];
    let currentRandomizedListsForms = [];
    Forms.forEach((form) => {
      for (const key in form) {
        if (form.hasOwnProperty(key) && key === "id") {
          const element = form[key];
          const amount = values[element];
          if (amount > 0) {
            console.log("key", element);
            console.log("amount", amount);
            currentRandomizedLists.push(
              this.generateRandomizeList(form, amount)
            );
            currentRandomizedListsForms.push(form);
          }
        }
      }
    });
    this.setState(
      {
        randomizedLists: currentRandomizedLists,
        randomizedListsForms: currentRandomizedListsForms,
      },
      () => console.log("addToRandomizedList", this.state)
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
    return arry;
  };

  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <Container fluid={true}>
          <Row lg={true}>
            <Col>
              <Header themeToggler={this.themeToggler} />
            </Col>
          </Row>
          <Row lg={true}>
            <Container fluid={true}>
              <RandomizerForm handleSubmit={this.handleSubmit} />
            </Container>
          </Row>
          <hr />

          {this.state.randomizedLists.length > 0 ? (
            <Container fluid>
              <p style={{ textAlign: "center" }}>
                Click on a box to goto wikipedia page
              </p>
              <AttributeCardList
                randomizedLists={this.state.randomizedLists}
                randomizedListsForms={this.state.randomizedListsForms}
              />
            </Container>
          ) : null}
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
