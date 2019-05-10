import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props); //define state here
  } //all methods below


  render() {
    return React.createElement("div", null, React.createElement("h1", null, "Test React Render"), React.createElement("h4", null, "Are you reading me?"), React.createElement("h6", null, "Is This ReCompiling?"));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('App'));