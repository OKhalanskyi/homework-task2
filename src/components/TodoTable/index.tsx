import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {ITodo} from "../../models/ITodo";
import TodoTableRaw from "../TodoTableRaw";

interface TodoTableProps{
    notesTable:boolean
}

const TodoTable:React.FC<TodoTableProps> = ({notesTable}) => {
    const todos = useAppSelector(state => state.todos.todos)
    const activeTable = useAppSelector(state => state.tables.activeTable)
    return (
        <table className="">
            <thead>
            {
                notesTable?<tr>
                                <th>name</th>
                                <th>createdAt</th>
                                <th>category</th>
                                <th>content</th>
                                <th>dates</th>
                                <th><div>
                                    <button>delete</button>
                                    <button>archive</button>
                                </div></th>
                            </tr>:
                            <tr>
                                <th>category notes</th>
                                <th>active</th>
                                <th>archive</th>
                            </tr>
            }
            </thead>
            <tbody>

            {notesTable?todos.filter((todo:ITodo)=>{return activeTable?!todo.isArchive:todo.isArchive}).map((todo:ITodo)=> {
                            return(<TodoTableRaw todo={todo} key={todo.id}/>)
                        })
                        :
                        <><tr>
                            <th>Task</th>
                            <th>{todos.filter(todo=>!todo.isArchive&&todo.category=="Task").length}</th>
                            <th>{todos.filter(todo=>todo.isArchive&&todo.category=="Task").length}</th>
                        </tr>
                        <tr>
                            <th>Task</th>
                            <th>{todos.filter(todo=>!todo.isArchive&&todo.category=="Thought").length}</th>
                            <th>{todos.filter(todo=>todo.isArchive&&todo.category=="Thought").length}</th>
                        </tr>
                        <tr>
                            <th>Task</th>
                            <th>{todos.filter(todo=>!todo.isArchive&&todo.category=="Idea").length}</th>
                            <th>{todos.filter(todo=>todo.isArchive&&todo.category=="Idea").length}</th>
                        </tr></>
            }
            </tbody>
        </table>

    );
};

export default TodoTable;

