import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {ITodo} from "../../models/ITodo";
import TodoTableRaw from "../TodoTableRaw";

interface TodoTableProps{
    archiveTable:boolean
}

const TodoTable:React.FC<TodoTableProps> = ({archiveTable}) => {
    const todos = useAppSelector(state => state.todos.todos)
    return (

        <table className="">
            <thead>
                <tr>
                    <th>name</th>
                    <th>createdAt</th>
                    <th>category</th>
                    <th>content</th>
                    <th>dates</th>
                    <th><div>
                        <button>delete</button>
                        <button>archive</button>
                    </div></th>
                </tr>

            </thead>
            <tbody>
            {
                todos.filter((todo:ITodo)=>{return todo.isArchive===archiveTable}).map((todo:ITodo)=> {
                    return(
                        <TodoTableRaw todo={todo} key={todo.id}/>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default TodoTable;