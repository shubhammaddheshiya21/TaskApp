import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask }) {
    return (
        <div className='myDiv'>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
