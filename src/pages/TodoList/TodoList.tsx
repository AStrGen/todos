import {useContext, useState} from 'react';
import Todo from '../../components/Todo/Todo';
import "./TodoList.css"
import {Context, TodoContext} from "../../App";

export type TodoItem = {
    id: string;
    text: string;
    done: boolean;
}

function TodoList() {
    const context: TodoContext = useContext(Context);

    return (
        <ul className="todo-list">
            {context.todoList.map((item) =>
                <Todo id={item.id} text={item.text} done={item.done} />
            )}
        </ul>
    );
}

export default TodoList;