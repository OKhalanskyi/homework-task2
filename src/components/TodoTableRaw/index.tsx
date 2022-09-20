import React, {FormEvent, useCallback, useEffect, useRef, useState} from 'react';
import {ITodo} from "../../models/ITodo";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {deleteTodo, toggleArchiveStatusTodo, createTodo, editTodo} from "../../store/slices/todoSlice";

interface TodoTableRawProps{
    todo:ITodo
}

const TodoTableRaw: React.FC<TodoTableRawProps> = ({todo}) => {
    const dispatch = useAppDispatch()
    const [canInputEdit, setCanInputEdit] = useState(false)
    const inputContent = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        if(inputContent.current!=null){
            inputContent.current.readOnly =!inputContent.current.readOnly
        }
    },[canInputEdit])

    return (
        <tr>
            <th>{todo.name}</th>
            <th>{todo.createdAt}</th>
            <th>{todo.category}</th>
            <th><input ref={inputContent} type="text" readOnly={canInputEdit} value={todo.content}
                       onChange={(e)=>{dispatch(editTodo({id:todo.id,content:e.target.value}))}}/></th>
            <th>{todo.dates}</th>
            <th><div>
                <button onClick={()=>{setCanInputEdit(!canInputEdit)}}>{canInputEdit?"save":"edit"}</button>
                <button onClick={()=>dispatch(deleteTodo(todo.id))}>delete</button>
                <button onClick={()=>dispatch(toggleArchiveStatusTodo(todo.id))}>archive</button>
            </div></th>
        </tr>
    );
};

export default TodoTableRaw;