import React from 'react';
import { ChildrenProps } from '@/type';

const Contents = ({children}:ChildrenProps) => {
  return (
    <main className='pt-[100px] px-[30px] mx-auto h-[100vh]'>{children}</main>
  )
}

export default Contents