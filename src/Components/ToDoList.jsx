import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ items, onComplete, onDelete, onEdit }) => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-6 w-full max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      {items.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
