import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {ITodo} from "../../models/ITodo";
import TodoTableRaw from "../TodoTableRaw";
import styles from './TodoTable.module.scss'
import img_delete from '../../assets/img/delete.png'
import img_archive from '../../assets/img/download-file.png'
import img_task from "../../assets/img/settings.png"
import img_thought from '../../assets/img/thought.png'
import img_idea from '../../assets/img/lightbulb.png'

interface TodoTableProps{
    notesTable:boolean
}

const TodoTable:React.FC<TodoTableProps> = ({notesTable}) => {
    const todos = useAppSelector(state => state.todos.todos)
    const activeTable = useAppSelector(state => state.tables.activeTable)
    return (
        <table className={styles.table}>
            <thead>
            {
                notesTable?<tr className={styles.tableHeader}>
                                <th className={`${styles.item1} ${styles.item}`}>name</th>
                                <th className={`${styles.item2} ${styles.item}`}>createdAt</th>
                                <th className={`${styles.item3} ${styles.item}`}>category</th>
                                <th className={`${styles.item4} ${styles.item}`}>content</th>
                                <th className={`${styles.item5} ${styles.item}`}>dates</th>
                                <th className={`${styles.item6} ${styles.item}`}>
                                    <span className={styles.images}><img className={styles.delete} src={img_delete} alt=""/></span>
                                    <span className={styles.images}><img className={styles.archive} src={img_archive} alt=""/></span>
                                </th>
                            </tr>:
                            <tr className={styles.tableHeader}>
                                <th className={`${styles.item7} ${styles.item}`}>category notes</th>
                                <th className={`${styles.item8} ${styles.item}`}>active</th>
                                <th className={`${styles.item9} ${styles.item}`}>archive</th>
                            </tr>
            }
            </thead>
            <tbody>

            {notesTable?todos.filter((todo:ITodo)=>{return activeTable?!todo.isArchive:todo.isArchive}).length!==0?
                        todos.filter((todo:ITodo)=>{return activeTable?!todo.isArchive:todo.isArchive})
                            .map((todo:ITodo)=> {
                                return(<TodoTableRaw todo={todo} key={todo.id}/>)
                            }):<tr className={styles.emptyList}><th>Empty list :(</th></tr>
                        :
                        <><tr className={styles.tableRaw}>
                            <th className={`${styles.firstElem} ${styles.tableItem}`}>
                                <span><img src={img_task} alt=""/></span>
                                <h3>Task</h3>
                            </th>
                            <th className={styles.tableItem}>
                                {todos.filter(todo=>!todo.isArchive&&todo.category=="Task").length}
                            </th>
                            <th className={styles.tableItem}>
                                {todos.filter(todo=>todo.isArchive&&todo.category=="Task").length}
                            </th>
                        </tr>
                        <tr className={styles.tableRaw}>
                            <th className={`${styles.firstElem} ${styles.tableItem}`}>
                                <span><img src={img_thought} alt=""/></span>
                                <h3>Thought</h3>
                            </th>
                            <th className={styles.tableItem}>
                                {todos.filter(todo=>!todo.isArchive&&todo.category=="Thought").length}
                            </th>
                            <th className={styles.tableItem}>
                                {todos.filter(todo=>todo.isArchive&&todo.category=="Thought").length}
                            </th>
                        </tr>
                        <tr className={styles.tableRaw}>
                            <th className={`${styles.firstElem} ${styles.tableItem}`}>
                                <span><img src={img_idea} alt=""/></span>
                                <h3>Idea</h3>
                            </th>
                            <th className={styles.tableItem}>
                                {todos.filter(todo=>!todo.isArchive&&todo.category=="Idea").length}
                            </th>
                            <th className={styles.tableItem}>
                                {todos.filter(todo=>todo.isArchive&&todo.category=="Idea").length}
                            </th>
                        </tr></>
            }
            </tbody>
        </table>

    );
};

export default TodoTable;

