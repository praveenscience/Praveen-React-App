import { Component } from "react";
import Header from "./Bootstrap/Header";
import Container from "./Bootstrap/Container";
import Card from "./Bootstrap/Card";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header dark={true}>Dark Header</Header>
        <Header>Light Header</Header>
        <Header dark={true} className="AppHeader justify-content-center">
          Centrally Aligned Dark Header
        </Header>
        <Container>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 1</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 2</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 3</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 4</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 5</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 6</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 7</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 8</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 9</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 10</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 11</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Boxed 12</Card>
            </div>
          </div>
        </Container>
        <Container fluid={true}>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 1</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 2</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 3</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 4</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 5</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 6</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 7</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 8</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 9</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 10</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 11</Card>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card className="SmallDemo">Fluid 12</Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
