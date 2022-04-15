import "./App.css";
import { Component } from "react";
import Main from "./components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
