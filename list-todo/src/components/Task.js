import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare,faEdit,faSquare,faTimes} from "@fortawesome/free-solid-svg-icons";

const Task = ({task, toggleCompleted, editTask, deleteTask}) => {
    const [editingTask, changeEditingTask] = useState(false);
    const [newTask, changeNewTask] = useState(task.tasks);

    const handleSubmit = (e) =>{
        e.preventDefault();
        editTask(task.id, newTask);
        changeEditingTask(false);
    }

    return ( 
        <li className="listTask__task">
            <FontAwesomeIcon
                icon={task.completed ? faCheckSquare : faSquare}
                className="listTask__icon listTask__icon-check"
                onClick={() => toggleCompleted(task.id)}
            />
            <div className="listTask__texto">
                {editingTask ? 
                    <form action="" className="form-edit-task" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-edit-task__input"
                            value={newTask}
                            onChange={(e) => changeNewTask(e.target.value)}
                        />
                        <button 
                            type="submit"
                            className="form-edit-task__btn"
                        >
                            Update
                        </button>
                    </form>
                : task.tasks
                }    

                {/* {task.tasks} */}
            </div>
            <div className="listTask__container-btn">
                <FontAwesomeIcon
                    icon={faEdit}
                    className="listTask__icon listTask__icon-action"
                    onClick={() => changeEditingTask(!editingTask)}
                />
                <FontAwesomeIcon
                    icon={faTimes}
                    className="listTask__icon listTask__icon-action"
                    onClick={() =>deleteTask(task.id)}
                />
            </div>
        </li>
     );
}
 
export default Task;