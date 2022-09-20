import React from 'react';
import './App.css';
import TodoTable from "./components/TodoTable";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <TodoTable archiveTable={false}/>
      <TodoTable archiveTable={true}/>
        <TodoForm/>
    </div>
  );
}

export default App;
