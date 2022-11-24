import "./Footer.css"
import {Context, TodoContext} from "../../App";
import {useContext} from "react";
import {Filter} from "../../const";

export default function Footer() {
    const context: TodoContext = useContext(Context);

    return (
        <footer className="footer">
            <ul className="filters">
                <li onClick={() => context.todoListApi.setFilter(Filter.All)}>All</li>
                <li onClick={() => context.todoListApi.setFilter(Filter.Active)}>Active</li>
                <li onClick={() => context.todoListApi.setFilter(Filter.Completed)}>Completed</li>
            </ul>
        </footer>
    );
}