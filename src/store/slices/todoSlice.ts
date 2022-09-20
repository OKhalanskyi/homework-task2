import {ITodo} from "../../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodosState{
    todos:ITodo[]
}


const initialState: TodosState = {
    todos:[{id:"12",name:"qaz",createdAt:123,category:"wsx",content:"edc",dates:["qwe"],isArchive:false},
        {id:"1",name:"qaz",createdAt:123,category:"wsx",content:"edc",dates:["qwe"],isArchive:true},
        {id:"45",name:"qaz",createdAt:123,category:"wsx",content:"edc",dates:["qwe"],isArchive:true}]
}

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        createTodo(state , action:PayloadAction<ITodo>){
            state.todos.push(action.payload)
        },
        deleteTodo(state, action:PayloadAction<string>){
            state.todos = state.todos.filter((todo)=>{
                return todo.id !== action.payload
            })
        },

        editTodo(state, action){
            const {id,content} = action.payload
            const editTodo = state.todos.find(todo=> todo.id===id)
            if(editTodo){
                editTodo.content= content
            }
        },

        toggleArchiveStatusTodo(state, action:PayloadAction<string>){
            const toggledTodo = state.todos.find(todo=> todo.id===action.payload)
            if(toggledTodo){
                toggledTodo.isArchive = !toggledTodo.isArchive
            }
        },
    }
})

export const {createTodo, deleteTodo,editTodo, toggleArchiveStatusTodo} = todoSlice.actions

export default todoSlice.reducer
