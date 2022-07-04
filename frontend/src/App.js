import React from 'react';
import Header from './components/Header';
import './App.css';
import TasksList from './components/TasksList';

function App() {
  return (
    <div>
      <Header />
      <TasksList />
    </div>
  );
}

export default App;
