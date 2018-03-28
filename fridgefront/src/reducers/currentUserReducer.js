import loginService from '../services/login'
import fooditemService from '../services/fooditems'
import fridgeService from '../services/fridges'
import userService from '../services/users'

const reducer = (state = null, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return action.data
		case 'LOG_OUT':
			return null
		case 'CHANGE_DEF_FRIDGE':
			const newState = state
			newState.user = action.data
			return newState
		default:
			return state
	}
}

export const logIn = (credentials) => {
	return async (dispatch) => {
		const response = await loginService.login(credentials)
		window.localStorage.setItem('loggedInUser', JSON.stringify(response))
		fooditemService.setToken(response.token)
		fridgeService.setToken(response.token)
		userService.setToken(response.token)
		dispatch({
			type: 'LOG_IN',
			data: response
		})
	}
}

export const logOut = () => {
	window.localStorage.removeItem('loggedInUser')
	fooditemService.setToken('')
	fridgeService.setToken('')
	userService.setToken('')
	return {
		type: 'LOG_OUT'
	}
}

export const setLoggedInUser = () => {
	let loggedIn = window.localStorage.getItem('loggedInUser')
	if (loggedIn) {
		loggedIn = JSON.parse(loggedIn)
		fooditemService.setToken(loggedIn.token)
		fridgeService.setToken(loggedIn.token)
		userService.setToken(loggedIn.token)
	}
	return {
		type: 'LOG_IN',
		data: loggedIn
	}
}

export const changeDefaultFridge = (updatedUser) => {
	return async (dispatch) => {
		const response = await userService.update(updatedUser)
		let loggedIn = window.localStorage.getItem('loggedInUser')
		if (loggedIn) {
			loggedIn = JSON.parse(loggedIn)
			loggedIn.user = response
			window.localStorage.setItem('loggedInUser', JSON.stringify(loggedIn))
		}
		dispatch({
			type: 'CHANGE_DEF_FRIDGE',
			data: response
		})
	}
}

export default reducer