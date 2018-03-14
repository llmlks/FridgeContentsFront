import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import fooditemReducer from './reducers/fooditemReducer'
import currentUserReducer from './reducers/currentUserReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
	user: currentUserReducer,
	fooditems: fooditemReducer,
	notification: notificationReducer
})

const store = createStore(
	reducer,
	applyMiddleware(thunk)
)

export default store