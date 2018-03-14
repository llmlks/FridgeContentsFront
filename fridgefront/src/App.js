import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialiseFooditems } from './reducers/fooditemReducer'
import { setLoggedInUser, logIn, logOut } from './reducers/currentUserReducer'
import { notify } from './reducers/notificationReducer'
import LoginForm from './components/LoginForm'
import { Container } from 'semantic-ui-react'
import NavBar from './components/NavBar'
import Notification from './components/Notification'

class App extends Component {

	async componentDidMount() {
		await this.props.initialiseFooditems()
		this.props.setLoggedInUser()
	}

	login = async (event) => {
		event.preventDefault()
		const target = event.target
		const credentials = {
			username: target.username.value,
			password: target.password.value
		}

		try {
			await this.props.logIn(credentials)

			target.password.value = ''
			target.username.value = ''

			this.props.notify(`Welcome ${this.props.user.name}!`, 'success')
		} catch (exception) {
			this.props.notify('Invalid username or password', 'error')
		}
	}

	logout = () => {
		this.props.logOut()
		this.props.notify('You\'ve logged out successfully!')
	}

	render() {
		return (
			<Container>
				<div>
					<NavBar user={this.props.user}/>
					<Notification />
					<LoginForm onSubmit={this.login}/>
				</div>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	{ initialiseFooditems, setLoggedInUser, logIn, notify, logOut }
)(App)