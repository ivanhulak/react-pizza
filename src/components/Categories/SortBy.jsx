import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'

const items = [
   {name: 'популярности', prop: {name: 'rating', type: 'popular', order: 'desc'}},
   {name: 'цене', prop: {name: 'price', type: 'price', order: 'asc'}},
   {name: 'алфавиту', prop: {name: 'name', type: 'alphabet', order: 'asc'}}
]

export const SortBy = ({onChangeSortBy, sortByType}) => {
   const [openModal, setOpenModal] = useState(false)
   const sortRef = useRef(null)
   const activeItem = items.find(item => item.prop.type === sortByType).name // activeItem = популярности

   const toggleSortByModal = () => {
      setOpenModal(!openModal)
   }
   const changeSortCriteria = (obj) => {
      setOpenModal(false)
      onChangeSortBy(obj)
   }

   const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
         setOpenModal(false)
      }
   }
   useEffect(() => {
      document.body.addEventListener('mousedown', handleClickOutside)
      return () => {
         document.body.removeEventListener("mousedown", handleClickOutside);
      };
   }, [])
   return (
      <div ref={sortRef} className="categories__sort-by sort-by">
         <svg className={`${openModal ? 'rotated' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
         </svg>
         <div onClick={toggleSortByModal} className="sort-by__choice">Сортировка по:
            <span className="sort-by__choice-result">{activeItem}</span>
         </div>
         <ul className={cn('sort-by__modal', {
            'opened': openModal
         })}>
            {items && items.map((obj, index) => (
               <li
                  key={index}
                  className={cn({'active': obj.prop.type === sortByType})}
                  onClick={() => changeSortCriteria(obj.prop)}
               >
                  {obj.name}
               </li>
            ))}
         </ul>
      </div>
   )
}
