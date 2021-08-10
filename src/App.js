import { useState } from 'react'
import Header from './components/Header';
import Tasks  from './components/Tasks';
import AddTasks  from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text:'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text:'Meeting Web team',
        day: 'July 12th at 12:30pm',
        reminder: true,
    },
    {
        id: 3,
        text:'Food Shopping',
        day: 'Aug 1st at 09:30am',
        reminder: false,
    },
] )

// Add Task
const addTask= (task) => {
  console.log(task);
}



// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id  !== id))
}

// Toggle Reminder
const toggleReninder = (id) =>{
  setTasks(
    tasks.map((task) => 
      task.id === id ? {...task, reminder:
         !task.reminder} : task
  ))
}

  return (
    <div className='container'>
      <Header />
      <AddTasks onAdd={addTask}  />
      {tasks.length > 0 ? (
      <Tasks tasks={ tasks } onDelete={deleteTask} onToggle={toggleReninder} /> 
      ) : (
        'No Tasks to show'
      )}
    </div>    
  )
}


export default App
