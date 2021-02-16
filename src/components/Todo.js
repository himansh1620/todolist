import React from 'react';

const Todo = ({Text, item, Todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(Todos.filter((el) => el.id !== item.id))
    }
    const completeHandler = () => {
        setTodos(Todos.map((listItem) => {
            if (listItem.id === item.id){
                return {
                    ...listItem, completed: !listItem.completed
                }
            }
            return listItem;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${item.completed ? "completed" : ""}`}>{Text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;