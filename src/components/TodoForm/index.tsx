import React, {FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {createTodo} from "../../store/slices/todoSlice";
import {v4 as uuid} from "uuid"

const TodoForm = () => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState("")
    const [name,setName] = useState("")
    const [content, setContent] = useState("")

    const isSelected = (value:string) :boolean=> {
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
        dispatch(createTodo({id:uuid(),
            name:name,
            createdAt:2111,
            category:category,
            content:content,
            dates:[],
            isArchive:false}))}

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={name} onChange={inputNameHandler}/>
            <input type="radio" value={"Task"} checked={isSelected("Task")} onChange={inputCategoryHandler}/>
            <input type="radio" value={"Thought"} checked={isSelected("Thought")} onChange={inputCategoryHandler}/>
            <input type="radio" value={"Idea"} checked={isSelected("Idea")} onChange={inputCategoryHandler}/>
            <input type="text" value={content} onChange={inputContentHandler}/>
            <button type={"submit"}>create</button>
        </form>
    );
    }


export default TodoForm;