import React from 'react';

function TodoItem({ task, onDelete }) {
    return (
        <li>
            {task}
            <button className="delete-button" onClick={onDelete}>
                &#10006;
            </button>
        </li>
    );
}

export default TodoItem;

