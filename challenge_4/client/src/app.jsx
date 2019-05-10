import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);

		//define state here
	}

	//all methods below


	render() {

		return (
			<div>
				<h1>Test React Render</h1>
				<h4>Are you reading me?</h4>
				<h1>HEY</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));