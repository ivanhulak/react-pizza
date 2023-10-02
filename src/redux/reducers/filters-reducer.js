const SET_SORT_BY = 'SET_SORT_BY'
const SET_CATEGORY = 'SET_CATEGORY'

const initialState = {
   sortBy: {
      name: 'rating', 
      type: 'popular', 
      order: 'desc'
   },
   categoryId: null
}

export const filtersReducer = (state = initialState, action) => {
   switch (action.type){
      case SET_SORT_BY:
         return {...state, sortBy: action.payload}
      case SET_CATEGORY:
         return {...state, categoryId: action.payload}
      default:
         return state;
   }
}

// Action Creators
export const setSortBy = (obj) => ({
   type: SET_SORT_BY,
   payload: obj
})
export const setCategory = (catIndex) => ({
   type: SET_CATEGORY,
   payload: catIndex
})

