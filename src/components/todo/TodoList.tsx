import React from 'react'
import TodoListItem from './TodoListItem'
import { TodoData } from '@/type'

export interface TodoListProps {
    todoList: TodoData[];
    onDelete: (id:string) => void;
}

const TodoList = ({todoList, onDelete}:TodoListProps) => {
  return (
    <ul className='grid gap-y-[30px]'>
        {
            todoList.map(({todo, id}) => (
                <TodoListItem id={id} todo={todo} onDelete={onDelete.bind(null, id)} key={id} />
            ))
        }
    </ul>
  )
}

export default TodoList