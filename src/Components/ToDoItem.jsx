import React from 'react';

const ToDoItem = ({ item, onComplete, onDelete, onEdit }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-lg mx-auto p-3 bg-white rounded-lg shadow-md border border-gray-300">
      <span className={`text-lg ${item.completed ? 'line-through text-gray-500' : 'text-black'}`}>
        {item.text}
      </span>
      <div className="flex space-x-2">
        <button 
          onClick={() => onComplete(item.id)} 
          className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
        >
          {item.completed ? 'Incomplete' : 'Complete'}
        </button>
        <button 
          onClick={() => onEdit(item.id)} 
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded-md"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(item.id)} 
          className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;