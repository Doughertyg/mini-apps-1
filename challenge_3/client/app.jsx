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

	//separate each component out

	render() {

		return (
			<div margin="auto">
				<h1>Signup to Continue</h1>
				<form>
					<label>Name
					<input placeholder="Type name here..." onChange={(e) => {(this.handleInput.bind(this))(e, 'name')}} />
					</label>
					<label>Email
					<input placeholder="type email here..." onChange={(e) => {(this.handleInput.bind(this))(e, 'email')}} />
					</label>
					<label>password
					<input type='password' onChange={(e) => {(this.handleInput.bind(this))(e, 'email')}} />
					</label>
					<input type="submit" value="next" />
				</form>
			</div>
		)
	}
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
							<label>Name
							<input placeholder="Type name here..." onChange={(e) => {(this.handleInput.bind(this))(e, 'name')}} />
							</label>
							<label>Email
							<input placeholder="type email here..." onChange={(e) => {(this.handleInput.bind(this))(e, 'email')}} />
							</label>
							<label>password
							<password onChange={(e) => {(this.handleInput.bind(this))(e, 'email')}} />
							</label>
							<input type="submit" value="next" />
						</form>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'));