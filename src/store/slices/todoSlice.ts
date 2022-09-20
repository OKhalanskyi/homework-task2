import {ITodo} from "../../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodosState{
    todos:ITodo[]
}

const initialState: TodosState = {
    todos:[{id:12,name:"qaz",createdAt:123,category:"wsx",content:"edc",dates:123,isArchive:true},
        {id:13,name:"qaz",createdAt:123,category:"wsx",content:"edc",dates:123,isArchive:true},
        {id:14,name:"qaz",createdAt:123,category:"wsx",content:"edc",dates:123,isArchive:true}]
}

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        createTodo(){},
        deleteTodo(){},
        editTodo(){},
        toggleArchiveStatusTodo(){},
    }
})

export const {createTodo, deleteTodo, editTodo, toggleArchiveStatusTodo} = todoSlice.actions

export default todoSlice.reducer
