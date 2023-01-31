import React from 'react';
import { useTodoDispatch, useTodoState } from '../utils/TodoContext';

const Sample = () => {
  /* Router */
  /* State */
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  /* Functions */
  /* Hooks */
  /* Render */
  return <div>Sample</div>;
};

export default Sample;
