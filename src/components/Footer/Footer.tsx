import "./Footer.css"
import {Context} from "../../App";
import {useContext} from "react";
import {Filter} from "../../const";
import {TodoContext} from "../TodoContext/TodoContext";
import ClearCompletedButton from "../ClearCompletedButton/ClearCompletedButton";

export default function Footer() {
    const context: TodoContext = useContext(Context);

    return (
        <footer className="footer">
            <div>
                <span>{context.todoList.filter(item => !item.done).length}</span>
                <span>{context.todoList.filter(item => !item.done).length === 1 ? " item " : " items "}</span>
                <span>left</span>
            </div>
            <ul className="filters">
                <li onClick={() => context.todoListApi.setFilter(Filter.All)}>All</li>
                <li onClick={() => context.todoListApi.setFilter(Filter.Active)}>Active</li>
                <li onClick={() => context.todoListApi.setFilter(Filter.Completed)}>Completed</li>
            </ul>
            <ClearCompletedButton onClick={context.todoListApi.clearCompleted}/>
        </footer>
    );
}