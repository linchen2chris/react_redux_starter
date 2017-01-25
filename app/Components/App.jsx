import React from 'react';
import AddTodo from '../Containers/AddTodo';
import VisibleTodoList from '../Containers/VisibleTodoList';
import Footer from './Footer';
import Test from './MyTestComp';
import InputWrapper from './InputWrapper';
import MaskInput from './MaskInput';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Test />
    <br />
    <Test />
    <InputWrapper />
    <MaskInput mask="999 - 999" />
  </div>
);

export default App;
