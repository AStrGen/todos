import {useContext} from 'react';
import Todo from '../../components/Todo/Todo';
import "./TodoList.css"
import {Context, TodoContext, TodoItem} from "../../App";
import {Filter} from "../../const";

function TodoList() {
    const context: TodoContext = useContext(Context);
    const todoList: Array<TodoItem> = [];
    switch (context.filter) {
        case Filter.All:
            todoList.push(...context.todoList);
            break;
        case Filter.Active:
            todoList.push(...context.todoList.filter(item => !item.done));
            break;
        case Filter.Completed:
            todoList.push(...context.todoList.filter(item => item.done));
            break;
    }

    return (
        <ul className="todo-list">
            {todoList.map((item) =>
                <Todo key={item.id} id={item.id} text={item.text} done={item.done} />
            )}
        </ul>
    );
}

export default TodoList;