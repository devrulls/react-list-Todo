import React from 'react';
import Task from './Task';

const ListTasks = ({tasks, changeTasks, displayTaskCompleted}) => {
    const toggleCompleted = (id) =>{
        // console.log('we are editing the task with id', id );
        changeTasks(
            tasks.map((task) => {
                if (task.id === id){
                    return {...task, completed: !task.completed}
                }
                return task;
            })
        );
    }

    const editTask = (id, newTask ) =>{
        changeTasks(
            tasks.map((task) => {
                if (task.id === id){
                    return {...task, tasks: newTask}
                }
                return task;
            })
        );
    }

    const deleteTask = (id) => {
        changeTasks(
            tasks.filter((task) => {
                if (task.id !== id){
                    return task
                }
                return;
            })
        );
    }
    return (  
        <ul className="listTask">
            {tasks.length > 0 ? tasks.map((task) => {
                if(displayTaskCompleted){
                    return <Task 
                                key={task.id}
                                task={task}
                                toggleCompleted={toggleCompleted}
                                editTask={editTask}
                                deleteTask={deleteTask}
                            />
                } else if (!task.completed){
                    return <Task 
                                key={task.id}
                                task={task}
                                toggleCompleted={toggleCompleted}
                                editTask={editTask}
                                deleteTask={deleteTask}
                            />
                }
                return;
            })
            :<div className="listTask__message">No tasks added</div>
            }
        </ul>
    );
}
 
export default ListTasks;