import { Component } from "react";
import Header from "./Bootstrap/Header";

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
      </div>
    );
  }
}

export default App;
