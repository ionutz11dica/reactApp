import { filterProducts, filterProductsByBrands, filterProductsByColours, filterProductsBySizes } from "../utils"

   const initialState = {
    list: [],
    filteredList: [],
    nrProductsInCart: 0,
    open: false,
    query: '',
  }
  
  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case 'products/addToCart': {
        return {
          ...state,
          nrProductsInCart: state.nrProductsInCart + 1,
        }
      }
      case 'products/show': {
        return {
          ...state,
          open: true,
        }
      }
      case 'products/set': {
        return {
          ...state,
          list: action.payload,
        }
      }
      case 'products/search': {
        return {
          ...state,
          query: action.payload,
          list: filterProducts(state.list, action.payload),
        }
      }
      case 'products/filterBySize': {
        return {
          ...state,
          filteredList: action.payload.length > 0 ? 
            filterProductsBySizes(state.list, state.filteredList, action.payload) :
            state.list,
        }
      }

      case 'products/filterByColour': {
        return {
          ...state,
          filteredList: action.payload.length > 0 ? 
            filterProductsByColours(state.list, action.payload) :
            state.list,
        }
      }

      case 'products/filterByBrand': {
        return {
          ...state,
          filteredList: action.payload.length > 0 ? 
            filterProductsByBrands(state.list, action.payload) :
            state.list,
        }
      }

      default:
        return state
    }
  }
  