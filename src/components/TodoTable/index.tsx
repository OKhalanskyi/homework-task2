import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {ITodo} from "../../models/ITodo";
import TodoTableRaw from "../TodoTableRaw";



const TodoTable:React.FC = () => {
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
                {todos.map((elem)=>(
                    <TodoTableRaw key={elem.id} todo={elem}/>
                ))}
            </tbody>
        </table>
    );
};

export default TodoTable;