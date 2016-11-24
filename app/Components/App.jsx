import React from 'react';
import AddTodo from '../Containers/AddTodo';
import VisibleTodoList from '../Containers/VisibleTodoList';
import Footer from './Footer';
import Test from './MyTestComp';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Test />
  </div>
);

export default App;
