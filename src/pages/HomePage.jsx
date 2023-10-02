import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories } from '../components/Categories/Categories'
import { Products } from '../components/Products/Products'
import { addPizza } from '../redux/reducers/cart-reducer'
import { setCategory, setSortBy } from '../redux/reducers/filters-reducer'
import { fetchPizzasThunk } from '../redux/reducers/pizzas-reducer'

export const HomePage = () => {
   const dispatch = useDispatch()
   const { items, isLoaded, category, sortBy, cart_items } = useSelector(({ pizzasReducer, filtersReducer, cartReducer }) => {
      return {
         items: pizzasReducer.items,
         isLoaded: pizzasReducer.isLoaded,
         category: filtersReducer.categoryId,
         sortBy: filtersReducer.sortBy,
         cart_items: cartReducer.cart_items,
      }
   })
   React.useEffect(() => {
      dispatch(fetchPizzasThunk(category, sortBy))
   }, [category, sortBy])

   const onChangeCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
   }, [])

   const onChangeSortBy = React.useCallback((obj) => {
      dispatch(setSortBy(obj))
   }, [])

   const onAddPizza = (pizzaObj) => {
      dispatch(addPizza(pizzaObj))
   }

   return (
      <div>
         <Categories
            onClickItem={onChangeCategory}
            onChangeSortBy={onChangeSortBy}
            activeCategory={category}
            sortByType={sortBy.type} />
         <Products 
            pizzas={items} 
            isLoaded={isLoaded} 
            onAddPizza={onAddPizza} 
            cart_items={cart_items}/>
      </div>
   )
}