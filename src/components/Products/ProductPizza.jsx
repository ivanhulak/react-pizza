import { IconUAH } from "../../utils/IconUAH";
import { Button } from "../../utils/Button";
import { useState } from "react";
import cn from "classnames";

export const ProductPizza = ({ id, name, imageUrl, price, type, sizes, onAddPizza, addedPizzasCount }) => {
   const [activeType, setActiveType] = useState(type[0])
   const [activeSize, setActiveSize] = useState(sizes[0])
   const availableTypes = ['тонкое', 'традиционное']
   const availableSizes = [26, 30, 40]

   const onChangeType = (index) => {
      setActiveType(index)
   }
   const onSizeChange = (size) => {
      setActiveSize(size)
   }
   const addPizza = () => {
      onAddPizza({
         id,
         name,
         imageUrl,
         price,
         size: activeSize,
         type: availableTypes[activeType]
      })
   }

   return (
      <div className="products__product pizza-product">
         <div className="pizza-product__inner">
            <div className="pizza-product__image">
               <img src={imageUrl} alt="pizza" />
            </div>
            <div className="pizza-product__name">{name}</div>
            <div className="pizza-product__customize customize-pizza">
               <ul className="customize-pizza__specious">
                  {availableTypes.map((typeName, index) => (
                     <li
                        key={typeName}
                        className={cn({
                           'active': activeType === index,
                           'disabled': !type.includes(index)
                        })}
                        onClick={() => onChangeType(index)}
                     >
                        {typeName}
                     </li>
                  ))}
               </ul>
               <ul className="customize-pizza__size">
                  {availableSizes.map((size, index) => (
                     <li
                        key={size}
                        className={cn({
                           'active': activeSize === availableSizes[index],
                           'disabled': !sizes.includes(size)
                        })}
                        onClick={() => onSizeChange(size)}
                     >
                        {size} см.</li>
                  ))}
               </ul>
            </div>
            <div className="pizza-product__actions actions-pizza">
               <div className="actions-pizza__price">от {price}
                  <IconUAH color={'000000'} />
               </div>
               <Button className="actions-pizza__btn" onClickFn={addPizza}>
                  <div className="actions-pizza__btn-text">Добавить 
                     <div className={cn('actions-pizza__btn-count', {
                        'active': addedPizzasCount === undefined
                     })}>
                        <span>{addedPizzasCount}</span>
                     </div>
                  </div>
               </Button>
            </div>
         </div>
      </div >
   );
}