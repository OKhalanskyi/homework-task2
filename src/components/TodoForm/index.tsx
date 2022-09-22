import React, {FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {createTodo} from "../../store/slices/todoSlice";
import {v4 as uuid} from "uuid"
import {getDates, setCreatedDate} from "../../models/ITodo";
import {Category} from "../../models/ITodo";
import styles from './TodoForm.module.scss'

const TodoForm = () => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState<Category>("Task")
    const [name,setName] = useState("")
    const [content, setContent] = useState("")
    const [inputError, setInputError] = useState(false)

    const isSelected = (value:Category) :boolean=> {
        return category===value
    }

    const inputNameHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
      setName(e.currentTarget.value)
    }
    const inputContentHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value)
    }
    const inputCategoryHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
      setCategory(e.currentTarget.value)
    }
    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(name.length>0){
            dispatch(createTodo({id:uuid(),
                name:name,
                createdAt:setCreatedDate(),
                category:category,
                content:content,
                dates:getDates(content),
                isArchive:false}))
            setInputError(false)
            }
            else {
                setInputError(true)
        }

        }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <h1>Create notes</h1>
            {inputError&&<h2>input the name </h2>}
            <input className={styles.inputName} type="text" value={name} onChange={inputNameHandler}/>
            <div className={styles.inputToolbar}>
                <input id="i1" type="radio" value="Task" checked={isSelected("Task")} onChange={inputCategoryHandler}/>
                <label htmlFor="i1">Task</label>
                <input id="i2" type="radio" value="Thought" checked={isSelected("Thought")} onChange={inputCategoryHandler}/>
                <label htmlFor="i2">Thought</label>
                <input id="i3" type="radio" value="Idea" checked={isSelected("Idea")} onChange={inputCategoryHandler}/>
                <label htmlFor="i3">Idea</label>
            </div>
            <input className={styles.inputContent} type="text" value={content} onChange={inputContentHandler}/>
            <button className={styles.btnCreate} type={"submit"}>create</button>
        </form>
    );
    }


export default TodoForm;