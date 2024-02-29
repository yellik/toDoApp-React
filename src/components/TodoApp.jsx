
import React, {useState} from 'react';

import { Item } from '../components.jsx/Item';
/**
 * Part 1: Generate list (See Lists and keys lecture)
 * - Create a function component here, may call it 'TodoApp'
 * - generats a list <ul> from the array below, with the array-method .map()
 * - Place the code for listItems <li>, into a new child (function) component, may call it 'Todo'
 * - Add a key to every listItem <li>
 

 * Part 2: Add an event to the listItems (See Conditional Rendering lecture)
 * - Begin by adding a done-button in every item
 * - Create a new function 'handleClick' in 'TodoApp' component
 * - The function will add a class .done, to the parent of the target element (e.target.parentNode)
 * - Pass down the method as a prop, to the child component 'Todo'
 * - Make sure every listItem has the onClick eventhandler, that calls the method 'handleClick'
 * 
 * Part 3 (hard): Conditional rendering (google how to use conditions with .map() )
 * - Make sure every other listItem has the className="odd"
 * 
 * Part 4 (Extra hard. Probably need lots of googling. Not required to do this on your own ): Delete-button for every item
 * - Begin by refactoring the todos array to a state, using setState([...])
 * - Add a delete-button for every item
 * - Create a new function 'deleteTodo(id)' in 'TodoApp' component, that takes the todo.id as argument
 * - The function will remove the deleted item from the state todos[], by using the array-method .filter().
 * - Pass down the method as a prop, to the child component 'Todo'
 * - Make sure that the delete-button on every item, has the onClick eventhandler, that calls the method 'deleteTodo'
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.jsx
 */




const ToDoApp = () => {
    const [todos, setTodos] = useState([
        {id: 1, task: 'Syssla 1'},
        {id: 2, task: 'Syssla 2'},
        {id: 3, task: 'Syssla 3'},
        {id: 4, task: 'Syssla 4'},
        {id: 5, task: 'Syssla 5'}
    ]);
    
   

    const handleClick= (e) => {
    e.target.parentNode.classList.add('done');
    console.log(`the item class name is ${e.target.parentNode.classList}`);
    }

    
    const handleDelete = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
        console.log(`Item with id ${id} should be removed`);
        
    }

    let toDoList = todos.map((todo, index) => {
        
            return <Item
               
                className= 'todo-list'
                key={todo.id}
                index={index} 
                item={todo} 
                handleClick={handleClick} 
                handleDelete={handleDelete}

        />
    }
    )
    
    console.log(todos[3]);
    return (
        <div className='todo-container'>
            {toDoList}
        </div>
       
    )
    

}

export default ToDoApp