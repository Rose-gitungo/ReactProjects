import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p onClick={() => { toggleComplete(task.id) }}
                className={`${task.completed ? 'completed' : ""}`}>&nbsp;{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                &nbsp;  &nbsp;
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
                &nbsp; &nbsp;
            </div>
        </div>
    )
}
