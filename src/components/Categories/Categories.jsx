import React from 'react';
import cn from 'classnames';
import { SortBy } from './SortBy';

const categoryNames = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

export const Categories = React.memo(({ onClickItem, onChangeSortBy, activeCategory, sortByType }) => {

   const onCategorySelect = (index) => {
      onClickItem(index)
   }

   return (
      <section className="categories">
         <div className="container__inner">
            <div className="categories__body">
               <ul className="categories__list">
                  {categoryNames.map((category, index) => (
                     <li
                        key={categoryNames.indexOf(category)}
                        className={cn({
                           'active': activeCategory === index
                        })}
                        onClick={() => onCategorySelect(index)}
                     >
                        {category}</li>
                  ))}
               </ul>
               <SortBy onChangeSortBy={onChangeSortBy} sortByType={sortByType} />
            </div>
         </div>
      </section>
   );
})
