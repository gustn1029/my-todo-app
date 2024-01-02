import React from 'react'
import FormButton from '../form/FormButton';
import { TodoData } from '@/type';

interface TodoItemProps extends TodoData {
    onDelete: (id:string) => void
}


const TodoListItem = ({todo, id, onDelete}:TodoItemProps) => {
  return (
    <li key={id} id={id} className='flex flex-col items-center gap-y-[20px] w-full bg-white p-[30px] rounded-xl shadow-lg'>
        <p>{todo}</p>
        <FormButton onClick={onDelete} text='삭제' className='h-[30px]' isDelete />
    </li>
  )
}

export default TodoListItem