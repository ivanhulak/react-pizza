import { PizzaLoading } from "./PizzaLoading";
import { ProductPizza } from "./ProductPizza";

export const Products = ({pizzas, isLoaded, onAddPizza, cart_items}) => {
   return (
      <section className="products">
         <div className="container__inner">
            <div className="products__body">
               <h2 className="products__title">Все пиццы</h2>
               <div className="products__row">
                  {isLoaded 
                     ? pizzas.map(obj => (
                        <ProductPizza 
                           key={obj.id} 
                           {...obj} 
                           onAddPizza={onAddPizza}
                           addedPizzasCount={cart_items[obj.id] && cart_items[obj.id].items.length}/>
                     ))
                     : Array(10)
                        .fill()
                        .map((_, index) => <PizzaLoading key={index}/>)
                  }
               </div>
            </div>
         </div>
      </section>
   );
}