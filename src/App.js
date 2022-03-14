import { useState } from 'react';
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setshowAddTask] = useState(false);

// Delete Task
const deleteTask = (id) =>{
    setTask(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) =>{
    setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
}

//Add Task
const addTask = ( task ) =>{
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task }
    setTask([...tasks, newTask])
}


  return (
   <div className='main_container'>
    <Header title='Task Tracker' onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
    { showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : "No Task"}
   </div>
    );
}

export default App;
