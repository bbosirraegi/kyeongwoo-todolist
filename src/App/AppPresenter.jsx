import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoCreate, TodoHead, TodoList, TodoTemplate } from '../components';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

const AppPresenter = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
};

export default AppPresenter;
