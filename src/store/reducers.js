import { combineReducers } from 'redux'
import productsReducer from '../features/products/reducer'
import commonReducer from '../features/common/reducer'


const rootReducer = combineReducers({
  products: productsReducer,
  common: commonReducer,
})

export default rootReducer
