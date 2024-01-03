"use client";
import React, { KeyboardEvent, useState } from "react";
import FormInput from "../form/FormInput";
import FormButton from "../form/FormButton";
import { toast } from "react-toastify";
import TodoList from "../todo/TodoList";
import { TodoData } from "@/type";

const TodoClient = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<TodoData[]>([]);

  const pushTodoHandler = () => {
    if (inputValue === "") {
      alert('할 일을 입력해주세요.')
      return;
    }
    const todoListData: TodoData = {
      todo: inputValue,
      id: `todoList${todoList.length}`,
    };

    setTodoList([...todoList, todoListData]);
    setInputValue("");
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      pushTodoHandler();
    }
  };

  const todoDeleteHandler = (id: string) => {
    const updateTodoList = todoList.filter((el) => el.id !== id);
    updateTodoList.forEach((el, idx) => {
      el.id = `todoList${idx}`;
    });

    setTodoList(updateTodoList);
  };

  return (
    <section className="max-w-[600px] w-full mx-auto">
      <article className="flex w-full mb-[60px] gap-x-5 justify-center">
        <FormInput
          name="등록"
          inputValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          isHidden={true}
          placeHolder="등록할 일정을 입력하세요."
          divClassName="max-w-[500px] w-full flex-1"
          inputClassName="block w-full border border-slate-300 p-3 rounded-lg"
          onKeyDown={keyDownHandler}
        />
        <FormButton text="등록" className="" onClick={pushTodoHandler} />
      </article>
      <article>
        <TodoList onDelete={todoDeleteHandler} todoList={todoList} />
      </article>
    </section>
  );
};

export default TodoClient;
