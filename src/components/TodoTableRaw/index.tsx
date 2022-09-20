import React from 'react';
import {ITodo} from "../../models/ITodo";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {editTodo, deleteTodo, toggleArchiveStatusTodo} from "../../store/slices/todoSlice";

interface TodoTableRawProps{
    todo:ITodo
}

const TodoTableRaw: React.FC<TodoTableRawProps> = ({todo}) => {
    const dispatch = useAppDispatch()
    return (
        <tr>
            <th>{todo.name}</th>
            <th>{todo.createdAt}</th>
            <th>{todo.category}</th>
            <th>{todo.content}</th>
            <th>{todo.dates}</th>
            <th><div>
                <button onClick={()=>dispatch(editTodo())}>edit</button>
                <button onClick={()=>dispatch(deleteTodo())}>delete</button>
                <button onClick={()=>dispatch(toggleArchiveStatusTodo())}>archive</button>
            </div></th>
        </tr>
    );
};

export default TodoTableRaw;