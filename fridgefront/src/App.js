import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialiseFooditems, createFooditem, deleteFooditem, updateFooditem } from './reducers/fooditemReducer'
import { setLoggedInUser, logIn, logOut } from './reducers/currentUserReducer'
import { notify } from './reducers/notificationReducer'
import LoginForm from './components/LoginForm'
import { Container } from 'semantic-ui-react'
import NavBar from './components/NavBar'
import Notification from './components/Notification'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import FooditemList from './components/FooditemList'
import CreateFooditem from './components/CreateFooditem'
import SignUpForm from './components/SignUpForm'
import userService from './services/users'
import FooditemEditForm from './components/FooditemEditForm';

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
		this.props.notify('You\'ve logged out successfully!', 'success')
	}

	signup = async (event) => {
		event.preventDefault()
		const target = event.target
		if (target.password.value !== target.password2.value) {
			target.password.value = ''
			target.password2.value = ''
			this.props.notify('The passwords entered don\'t match, please try again')
			return
		}

		const newUser = {
			name: target.name.value,
			username: target.username.value,
			password: target.password.value
		}

		try {
			await userService.create(newUser)

			target.name.value = ''
			target.username.value = ''
			target.password.value = ''
			target.password2.value = ''

			this.props.notify('User registration was successful, you can now log in!', 'success')
		} catch (exception) {
			target.username.value = ''
			this.props.notify(`The username ${newUser.username} is already taken. Please pick another one`, 'error')
		}
	}

	createItem = async (event) => {
		event.preventDefault()
		const target = event.target
		const newItem = {
			name: target.name.value,
			amount: target.amount.value,
			unit: target.unit.value,
			bought: target.bought.value,
			opened: target.opened.value
		}

		try {
			await this.props.createFooditem(newItem)

			target.name.value = ''
			target.amount.value = ''
			target.unit.value = ''
			target.bought.value = ''
			target.opened.value = ''

			this.props.notify(`New food item ${newItem.name} created!`, 'success')
		} catch (exception) {
			this.props.notify('Please provide a name and a value in at least one measurement field', 'error')
		}
	}

	removeItem = (toDelete) => async () => {
		if (!window.confirm(`Are you sure you want to delete ${toDelete.name}`)) {
			return
		}

		try {
			await this.props.deleteFooditem(toDelete.id)

			this.props.notify(`${toDelete.name} deleted!`, 'success')
		} catch (exception) {
			this.props.notify(`Deletion of ${toDelete.name} not allowed`, 'error')
		}
	}

	updateFooditem = (toUpdate) => async (event) => {
		event.preventDefault()
		const target = event.target
		const newItem = {
			...toUpdate,
			amount: target.amount.value,
			unit: target.unit.value,
			bought: target.bought.value,
			opened: target.opened.value
		}

		try {
			await this.props.updateFooditem(newItem)

			target.amount.value = ''
			target.unit.value = ''
			target.bought.value = ''
			target.opened.value = ''

			this.props.notify(`Food item ${toUpdate.name} updated!`, 'success')
		} catch (exception) {
			this.props.notify(`Updating ${toUpdate.name} not allowed`, 'error')
		}
		
	}

	getFooditemByID = (id) => {
		return this.props.fooditems.find(f => f.id === id)
	}

	render() {
		return (
			<Container>
				<Router>
					<div>
						<NavBar user={this.props.user} logout={this.logout}/>
						<Notification />

						<Route path='/login' render={() =>
							this.props.user
								? <Redirect to='/fooditems' />
								: <LoginForm onSubmit={this.login}/>
						} />
						<Route exact path='/fooditems' render={() =>
							this.props.user
								? <FooditemList fooditems={this.props.fooditems} remove={this.removeItem}/>
								: <Redirect to='/login' />
						} />
						<Route path='/fooditems/create' render={() =>
							this.props.user
								? <CreateFooditem onSubmit={this.createItem} />
								: <Redirect to='/login' />
						} />
						<Route path='/signup' render={() => <SignUpForm onSubmit={this.signup} />} />
						<Route path='/fooditems/update/:id' render={({ match, history }) => {
							const fooditem = this.getFooditemByID(match.params.id)
							return this.props.user
								? <FooditemEditForm fooditem={fooditem} history={history} updateItem={this.updateFooditem(fooditem)} />
								: <Redirect to='/login' />
						} } />
					</div>
				</Router>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		fooditems: state.fooditems
	}
}

export default connect(
	mapStateToProps,
	{ initialiseFooditems, setLoggedInUser, logIn, notify, logOut, createFooditem, deleteFooditem, updateFooditem }
)(App)