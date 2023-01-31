import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../utils/TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  /* Router */
  /* State */
  const todos = useTodoState();
  /* Functions */
  /* Hooks */
  /* Render */
  const todoItemRender = todos.map((item) => {
    const { id, text, done } = item;
    return <TodoItem key={id} id={id} text={text} done={done} />;
  });

  return <TodoListBlock>{todoItemRender}</TodoListBlock>;
};

export default TodoList;
