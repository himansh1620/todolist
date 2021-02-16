import React from 'react';
//importing components
import Todo from './Todo';

const List = ({Todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
    {/* mapping... */}
                {filteredTodos.map((item) => (
                    <Todo key={item.id} item={item} Text={item.Text} Todos={Todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    )
}

export default List;