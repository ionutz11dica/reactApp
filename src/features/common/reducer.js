import {mockBrands, mockSizes, mockColors} from '../mock';

const initialState = {
    sidebar: {
        sizes: mockSizes,
        brands: mockBrands,
        colours: mockColors,
        sizesChecked: [],
        brandsChecked: [],
        coloursChecked: [],
    },
    open: false,
  }
  
  export default function commonReducer(state = initialState, action) {
    switch (action.type) {
      case 'sidebar/size/filter': {
        return {
          ...state,
          sidebar: [...state.list, action.payload],
        }
      }

      case 'common/sideBar/sizesChecked': {
        return {
          ...state,
          sidebar: {
            ...state.sidebar,
            sizesChecked: action.payload.checked ? 
            [...state.sidebar.sizesChecked, action.payload.name] :
            [...state.sidebar.sizesChecked.filter(item => {return item !== action.payload.name})],
            sizes: {
              ...state.sidebar.sizes,
              [action.payload.name]: action.payload.checked,
            },
          },
        }
      }

      case 'common/sideBar/brandsChecked': {
        return {
          ...state,
          sidebar: {
            ...state.sidebar,
            brandsChecked: action.payload.checked ? 
            [...state.sidebar.brandsChecked, action.payload.name] :
            [...state.sidebar.brandsChecked.filter(item => {return item !== action.payload.name})],
            brands: {
              ...state.sidebar.brands,
              [action.payload.name]: action.payload.checked,
            },
          },
        }
      }

      case 'common/sideBar/coloursChecked': {
        return {
          ...state,
          sidebar: {
            ...state.sidebar,
            coloursChecked: action.payload.checked ? 
            [...state.sidebar.coloursChecked, action.payload.name] :
            [...state.sidebar.coloursChecked.filter(item => {return item !== action.payload.name})],
            colours: {
              ...state.sidebar.colours,
              [action.payload.name]: action.payload.checked,
            },
          },
        }
      }

      default:
        return state
    }
  }
  