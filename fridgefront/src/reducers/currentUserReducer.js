import loginService from '../services/login'
import fooditemService from '../services/fooditems'

const reducer = (state = null, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return action.data
		case 'LOG_OUT':
			return null
		default:
			return state
	}
}

export const logIn = (credentials) => {
	return async (dispatch) => {
		const response = await loginService.login(credentials)
		window.localStorage.setItem('loggedInUser', JSON.stringify(response))
		fooditemService.setToken(response.token)
		dispatch({
			type: 'LOG_IN',
			data: response
		})
	}
}

export const logOut = () => {
	window.localStorage.removeItem('loggedInUser')
	fooditemService.setToken('')
	return {
		type: 'LOG_OUT'
	}
}

export const setLoggedInUser = () => {
	let loggedIn = window.localStorage.getItem('loggedInUser')
	if (loggedIn) {
		loggedIn = JSON.parse(loggedIn)
		fooditemService.setToken(loggedIn.token)
	}
	return {
		type: 'LOG_IN',
		data: loggedIn
	}
}

export default reducer