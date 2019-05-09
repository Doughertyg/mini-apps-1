class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: "home"
		}
	}

	handleInput(e) {
		this.setState({

		})
	}

	checkoutClick() {
		this.setState({
			page: "signup"
		})
	}

	render() {

		return (
			<div id="myApp">
				{this.state.page === 'home' ? <Home click={this.checkoutClick.bind(this)}/> : null}
				{this.state.page === 'signup' ? <Signup /> : null}
			</div>
		)
	}	
}

var Home = (props) => {
	return (
		<div margin="auto">
			<h1>Grambos Goods</h1>
			<img src="https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr07/2/6/enhanced-buzz-16707-1399026440-8.jpg" />
			<h4>Banana Slicer From Amazon (only $29.99!)</h4>
			<button onClick={props.click}>Checkout</button>				
		</div>
	)
}

class Signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'randall stevens',
			email: 'larrypage@aol.com',
			password: ''
		}
	}

	handleInput(e, form) {
		this.setState({
			[form]: e.target.value
		})
	}

	render() {

		return(
			<div margin="auto">
				<h1>Signup to Continue</h1>
				<form>
					<div>
					<label>Name
					<input placeholder="Type name here..." onChange={(e) => {(this.handleInput.bind(this))(e, 'name')}} />
					</label>
					</div>
					<div>
						<label>Email
						<input placeholder="type email here..." onChange={(e) => {(this.handleInput.bind(this))(e, 'email')}} />
						</label>
					</div>
					<div>
						<label>password
						<input onChange={(e) => {(this.handleInput.bind(this))(e, 'email')}} type="password" />
						</label>
					</div>
					<input type="submit" value="next" />
				</form>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));