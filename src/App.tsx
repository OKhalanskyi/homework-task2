import React from 'react';
import './App.css';
import TodoTable from "./components/TodoTable";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
      <TodoTable notesTable={true}/>
      <TodoTable notesTable={false}/>
        <TodoForm/>
    </div>
  );
}

export default App;
