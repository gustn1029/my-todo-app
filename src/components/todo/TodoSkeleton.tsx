import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TodoSkeleton = () => {
  return (
    <div className='max-w-[600px] w-full mx-auto'>
      <div className='flex w-full mb-[60px] gap-x-5 justify-center'>
        <Skeleton count={2} />
      </div>
      <div className="w-full bg-white pt-[30px] px-[30px] pb-[10px] rounded-xl shadow-lg">
        <Skeleton count={3} height={25} className="mb-[20px]" />
      </div>
    </div>
  );
};

export default TodoSkeleton;
