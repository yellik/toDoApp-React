import React from 'react'


export const Item = ({item, index, handleClick, handleDelete}) => {
    const classNames = index % 2 !== 0 ? 'todo-item'  : 'todo-item-odd';
    return (
   <div className={classNames}>
        <li>
           
            {item.task}
            <button className='done-btn' onClick={(e) => handleClick(e, item.id)}>Done</button>
            <button className='remove-btn' onClick={()=> handleDelete(item.id)}>Remove Task</button>
            <button className='new-btn'></button>
            {index}
        </li>
        
    </div>
  );
}
