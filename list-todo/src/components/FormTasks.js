import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'



const FormTasks = ({tasks, changeTasks}) => {
    const[inputTask, changeInputTask] = useState('');
    const handleInput = (e) =>{
        changeInputTask(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        changeTasks(
            [
                ...tasks,
                {
                    id:uuidv4(),
                    tasks: inputTask,
                    completed: false                    

                }
            ]
        );
        changeInputTask("");
    };
    return ( 
        <form action='' className='form-tasks' onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='form-tasks__input' 
                placeholder='Write a task...' 
                value={inputTask}
                onChange={(e) => handleInput(e)}
            />
            <button 
                type='submit' 
                className='form-tasks__button' 
            >
                <FontAwesomeIcon 
                    icon={faPlusCircle} 
                    className='form-tasks__icon-btn' 
                />
            </button>
        </form>
     );
}
 
export default FormTasks;
