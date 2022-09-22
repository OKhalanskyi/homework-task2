import React from 'react';
import styles from './App.module.scss';
import TodoTable from "../TodoTable";
import TodoForm from "../TodoForm";
import Header from "../Header";

function App() {
  return (
    <div className={styles.app}>
        <div className={styles.table}>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.tables}>
                <div className={styles.container}>
                    <TodoTable notesTable={true}/>
                    <TodoTable notesTable={false}/>
                </div>
            </div>

        </div>
        <div className={styles.form}>
            <TodoForm/>
        </div>
    </div>
  );
}

export default App;
