import React, {FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {createTodo} from "../../store/slices/todoSlice";
import {v4 as uuid} from "uuid"
import {getDates, setCreatedDate} from "../../models/ITodo";
import {Category} from "../../models/ITodo";

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
        <form onSubmit={submitHandler}>
            {inputError&&<h1>incorrect</h1>}
            <input type="text" value={name} onChange={inputNameHandler}/>
            <input type="radio" value="Task" checked={isSelected("Task")} onChange={inputCategoryHandler}/>
            <input type="radio" value="Thought" checked={isSelected("Thought")} onChange={inputCategoryHandler}/>
            <input type="radio" value="Idea" checked={isSelected("Idea")} onChange={inputCategoryHandler}/>
            <input type="text" value={content} onChange={inputContentHandler}/>
            <button type={"submit"}>create</button>
        </form>
    );
    }


export default TodoForm;