
import React from 'react';
import { Calendar, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { format } from 'date-fns';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

const priorityColors = {
  high: 'bg-red-500',
  medium: 'bg-orange-500',
  low: 'bg-blue-500',
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className={`font-medium ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.title}
          </span>
          <Badge className={`${priorityColors[todo.priority]} text-white`}>
            {todo.priority}
          </Badge>
        </div>
        {todo.dueDate && (
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
            <Calendar size={14} />
            <span>{format(new Date(todo.dueDate), 'MMM d, yyyy')}</span>
          </div>
        )}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default TodoItem;
