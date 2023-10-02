const ADD_PIZZA = 'ADD_PIZZA'
const CLEAR_PIZZAS = 'CLEAR_PIZZAS'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const INCREMENT_CART_ITEM = 'INCREMENT_CART_ITEM'
const DECREMENT_CART_ITEM = 'DECREMENT_CART_ITEM'

const initialState = {
   cart_items: {},
   totalCount: 0,
   totalPrice: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, arr_item) => sum + arr_item.price, 0)

const recountValues = (arr, value) => {
   return Object.values(arr).map(obj => obj[value]).reduce((sum, item) => sum + item, 0)
}

export const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PIZZA: {
         const currentItems = !state.cart_items[action.payload.id]
            ? [action.payload]
            : [...state.cart_items[action.payload.id].items, action.payload]

         const newItems = {
            ...state.cart_items,
            [action.payload.id]: {
               items: currentItems,
               totalPrice: getTotalPrice(currentItems),
               count: currentItems.length
            }
         }
         const items = Object.values(newItems).map(obj => obj.items)
         const allPizzas = [].concat.apply([], items)
         return {
            ...state,
            cart_items: newItems,
            totalPrice: getTotalPrice(allPizzas),
            totalCount: allPizzas.length
         }
      }
      case CLEAR_PIZZAS:
         return {
            cart_items: {},
            totalCount: 0,
            totalPrice: 0
         }
      case REMOVE_CART_ITEM:{
         const newItemsObj = {
            ...state.cart_items,
         }
         const currentTotalPrice = newItemsObj[action.payload].totalPrice
         const currentTotalCount = newItemsObj[action.payload].count
         delete newItemsObj[action.payload]
         return {
            ...state,
            cart_items: newItemsObj,
            totalPrice: state.totalPrice - currentTotalPrice,
            totalCount: state.totalCount - currentTotalCount
         }
      }    
      case INCREMENT_CART_ITEM:{
         const cloneFirstElem = state.cart_items[action.payload].items[0]
         const addedItems = [...state.cart_items[action.payload].items, cloneFirstElem]
         const newItems = {
            ...state.cart_items,
            [action.payload]: {
               ...state.cart_items[action.payload],
               items: addedItems,
               totalPrice: getTotalPrice(addedItems),
               count: addedItems.length
            }
         }
         return {
            ...state,
            cart_items: newItems,
            totalPrice: recountValues(newItems, 'totalPrice'),
            totalCount: recountValues(newItems, 'count')
         };
      }
      // cartReducer: {
      //    cart_items: {
      //      '4': {
      //        items: [
      //          {
      //            id: 4,
      //            name: 'Вегитарианская пицца',
      //            imageUrl: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/en-GB/07153596-da67-413f-b5fc-e1f7ee11ca3a_292x292.webp',
      //            price: 260,
      //            size: 26,
      //            type: 'тонкое'
      //          },
      //        ],
      //        totalPrice: 520,
      //        count: 2
      //      },
      //    totalCount: 4,
      //    totalPrice: 900
      //  }
      case DECREMENT_CART_ITEM:{
         const oldItems = state.cart_items[action.payload].items
         const currentItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems
         const newItems = {
            ...state.cart_items,
            [action.payload]: {
               ...state.cart_items[action.payload],
               items: currentItems,
               totalPrice: getTotalPrice(currentItems),
               count: currentItems.length
            }
         }
         return {
            ...state,
            cart_items: newItems,
            totalPrice: recountValues(newItems, 'totalPrice'),
            totalCount: recountValues(newItems, 'count')
         };
      }
      default:
         return state;
   }
}

// Action Creators
export const addPizza = (pizzaObj) => {
   return {
      type: ADD_PIZZA,
      payload: pizzaObj
   }
}
export const clearPizzas = () => {
   return {
      type: CLEAR_PIZZAS
   }
}
export const removeCartItem = (itemId) => {
   return {
      type: REMOVE_CART_ITEM,
      payload: itemId
   }
}
export const incrementCartItem = (itemId) => {
   return {
      type: INCREMENT_CART_ITEM,
      payload: itemId
   }
}
export const decrementCartItem = (itemId) => {
   return {
      type: DECREMENT_CART_ITEM,
      payload: itemId
   }
}