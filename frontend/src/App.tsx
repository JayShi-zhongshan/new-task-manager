import React from 'react';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default App;
