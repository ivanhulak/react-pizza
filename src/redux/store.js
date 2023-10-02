import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk'
import {filtersReducer} from './reducers/filters-reducer'
import {pizzasReducer} from './reducers/pizzas-reducer'
import { cartReducer } from './reducers/cart-reducer';

const rootReducer = combineReducers({
   filtersReducer,
   pizzasReducer,
   cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   rootReducer, 
   composeEnhancers(applyMiddleware(thunk))
)

export default store;