import React from 'react';
import cn from 'classnames';

export const Button = ({children, className, onClickFn}) => {
   return (
      <button onClick={onClickFn} className={cn('common-button', className)}>
         {children}
      </button>
   );
}