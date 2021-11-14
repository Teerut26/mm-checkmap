
import { connect } from "react-redux";
import "./App.css";
import Warpper from "./components/Warpper";

var _ = require("lodash");

function App(props) {
  return (
    <div className="App">
     <Warpper />
    </div>
  );
}

export default connect((state) => {
  return state;
})(App);
