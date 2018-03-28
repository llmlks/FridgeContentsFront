import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import fooditemReducer from './reducers/fooditemReducer'
import currentUserReducer from './reducers/currentUserReducer'
import notificationReducer from './reducers/notificationReducer'
import fridgeReducer from './reducers/fridgeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
	loggedin: currentUserReducer,
	fooditems: fooditemReducer,
	notification: notificationReducer,
	fridges: fridgeReducer
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store