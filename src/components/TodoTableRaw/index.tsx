import React, {FormEvent, useCallback, useEffect, useRef, useState} from 'react';
import {ITodo} from "../../models/ITodo";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {deleteTodo, toggleArchiveStatusTodo, createTodo, editTodo} from "../../store/slices/todoSlice";
import styles from './TodoTableRaw.module.scss'
import img_delete from "../../assets/img/delete.png";
import img_archive from "../../assets/img/download-file.png";
import img_task from "../../assets/img/settings.png"
import img_thought from '../../assets/img/thought.png'
import img_idea from '../../assets/img/lightbulb.png'

interface TodoTableRawProps{
    todo:ITodo
}
const TodoTableRaw: React.FC<TodoTableRawProps> = ({todo}) => {
    const dispatch = useAppDispatch()
    const [canInputEdit, setCanInputEdit] = useState(false)
    const inputContent = useRef<HTMLInputElement>(null)
    let img
    if(todo.category==="Task"){
        img = img_task
    }
    if(todo.category==="Thought"){
        img = img_thought
    }
    if(todo.category==="Idea"){
        img = img_idea
    }
    useEffect(()=>{
        if(inputContent.current!=null){
            inputContent.current.readOnly =!inputContent.current.readOnly
        }
    },[canInputEdit])
    const editBtnClick = () => {
        setCanInputEdit(true)
        if(inputContent.current!=null){
            inputContent.current.focus()
        }
    }
    return (
        <tr className={styles.tableRaw}>
            <th className={`${styles.item1} ${styles.item}`}>
                <span className={styles.spanImg}>
                    <img className={styles.imgCat} src={img} alt=""/>
                </span>
                <h4>{todo.name}</h4>
            </th>
            <th className={`${styles.item2} ${styles.item}`}>
                {todo.createdAt}
            </th>
            <th className={`${styles.item3} ${styles.item}`}>
                {todo.category}
            </th>
            <th className={`${styles.item4} ${styles.item}`}>
                <input className={styles.input} ref={inputContent} type="text"
                       readOnly={canInputEdit} value={todo.content}
                       onChange={(e)=>{dispatch(editTodo({id:todo.id,content:e.target.value}))}}/>
            </th>
            <th className={`${styles.item5} ${styles.item}`}>
                {todo.dates.join(" ")}
            </th>
            <th className={`${styles.item6} ${styles.item}`}>
                {canInputEdit?<button className={styles.edit} onClick={()=>{setCanInputEdit(false)}}>save</button>
                    :<button className={styles.edit} onClick={editBtnClick}>edit</button>}
                <span className={styles.images}
                      onClick={()=>dispatch(deleteTodo(todo.id))}>
                    <img className={styles.delete} src={img_delete} alt=""/>
                </span>
                <span className={styles.images}
                      onClick={()=>dispatch(toggleArchiveStatusTodo(todo.id))}>
                    <img className={styles.archive} src={img_archive} alt=""/>
                </span>
            </th>
        </tr>
    );
};

export default TodoTableRaw;