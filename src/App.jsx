import React, { useState } from 'react';
import ToDoList from './Components/ToDoList';
import Header from './Components/Header';
import './App.css';

const App = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const generateId = () => Math.random().toString(36).slice(2, 9);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTask([...tasks, { id: generateId(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const completeTask = (id) => {
    setTask(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTask(tasks.filter(task => task.id !== id));
  };

  const editTask = (id) => {
    const updatedText = prompt("Edit your task:");
    if (updatedText) {
      setTask(tasks.map(task =>
        task.id === id ? { ...task, text: updatedText } : task
      ));
    }
  };

  return (
    <>
    <Header />
    <div className='flex flex-col items-center space-y-4 mt-4'>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a task"
        className='h-14 w-64 outline-3 outline-offset-2 outline-double rounded-lg outline-blue-500 text-center'
      />
      <button onClick={addTask} className='h-14 w-32 bg-indigo-500 hover:bg-fuchsia-500 rounded-lg'>
        Add
      </button>
    </div>
    <ToDoList
      items={tasks}
      onComplete={completeTask}
      onDelete={deleteTask}
      onEdit={editTask}
    />
  </>

  );
};

export default App;