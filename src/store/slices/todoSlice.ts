import {ITodo} from "../../models/ITodo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDates} from "../../models/ITodo";

interface TodosState{
    todos:ITodo[]
}

const initialState: TodosState = {
    todos:[{id:"1",name:"make todo-list",createdAt:"21/09/2022",category:"Task",content:"start at 24/09/2022",dates:getDates("start at 24/09/2022"),isArchive:false},
        {id:"2",name:"start doing sport",createdAt:"21/09/2022",category:"Thought",content:"go to gym 23/09/2022",dates:getDates("start at 23/09/2022"),isArchive:false},
        {id:"3",name:"study node.js",createdAt:"21/09/2022",category:"Idea",content:"read docs at 25/09/2022",dates:getDates("start at 25/09/2022"),isArchive:false},
        {id:"4",name:"travel to Sweden",createdAt:"21/09/2022",category:"Thought",content:"book tickets for 12/12/2022 to 02/01/2023",dates:getDates("book tickets for 12/12/2022 to 02/01/2023"),isArchive:false},
        {id:"5",name:"watch NBA",createdAt:"21/09/2022",category:"Idea",content:"start at 30/10/2022",dates:getDates("start at 30/10/2022"),isArchive:false},
        {id:"6",name:"trade a crypto",createdAt:"21/09/2022",category:"Idea",content:"start at 24/09/2018",dates:getDates("24/09/2018"),isArchive:false}]
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
                editTodo.content = content
                editTodo.dates = getDates(editTodo.content)
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
