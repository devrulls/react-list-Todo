import React, {useState, useEffect}from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FormTasks from './components/FormTasks';
import ListTasks from './components/ListTasks';
import './App.css';


const App = () =>{
  // we get the saved tasks from localstorage
  const taskSaved = localStorage.getItem('tasks') ? 
  JSON.parse(localStorage.getItem('tasks'))
  :
  []
  ;
  //We establish the status of the tasks
  const [tasks, changeTasks] = useState(taskSaved);
  // (
  //   [
  //     {
  //       id: uuidv4(),
  //       tasks: 'Lavar la ropa',
  //       completed: false
  //     },
  //     {
  //       id: uuidv4(),
  //       tasks: 'Cocinar',
  //       completed: true
  //     },
  //     {
  //       id: uuidv4(),
  //       tasks: 'Supermercado',
  //       completed: true
  //     }
  //   ]
  // );
  // console.log(tasks);
// Saving the state inside the localStorage
  useEffect(() =>{
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
  },[tasks]);

// We access localstorage and check if displayTaskCompleted is null
  let configShowCompleted = '';
  if (localStorage.getItem('displayTaskCompleted') === null){
    configShowCompleted = true;
  }else {
    configShowCompleted = localStorage.getItem('displayTaskCompleted') === 'true';
  }

// display task Completed
  const [displayTaskCompleted, changeDisplayTask] = useState(configShowCompleted);

  useEffect(() =>{
    localStorage.setItem('displayTaskCompleted', displayTaskCompleted.toString()); 
  },[displayTaskCompleted]);

  return (
    <div className='container'>
      <Header 
        displayTaskCompleted={displayTaskCompleted} 
        changeDisplayTask={changeDisplayTask}/>
      <FormTasks tasks={tasks} changeTasks={changeTasks}/>
      <ListTasks 
          tasks={tasks} 
          changeTasks={changeTasks}
          displayTaskCompleted={displayTaskCompleted}
          />
    </div>
  );
}

export default App;
