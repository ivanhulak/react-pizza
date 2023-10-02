import axios from "axios"

const SET_PIZZAS = 'SET_PIZZAS'
const SET_LOADED = 'SET_LOADED'

const initialState = {
   items: [],
   isLoaded: false
}

export const pizzasReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PIZZAS:
         return {
            ...state,
            items: action.payload,
            isLoaded: true
         }
      case SET_LOADED:
         return {
            ...state,
            isLoaded: action.payload
         }
      default:
         return state;
   }
}

// Action Creators
export const setPizzas = (items) => ({
   type: SET_PIZZAS,
   payload: items
})
export const setLoaded = (value) => ({
   type: SET_LOADED,
   payload: value
})

//Thunks
export const fetchPizzasThunk = (category, sortBy) => (dispatch) => {
   // sortBy = {name: 'rating', type: "popular", order: "desc"}
   dispatch(setLoaded(false))
   axios.get(`http://localhost:3004/pizzas?_sort=${sortBy.name}&_order=${sortBy.order}${category ? `&category=${category}` : ''}`)
      .then(({ data }) => {
         return dispatch(setPizzas(data))
      })
      .catch(err => console.log(err))
}

