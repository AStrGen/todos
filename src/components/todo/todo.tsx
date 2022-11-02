type TodoItem = {
    id: number;
    text: string;
}

function Todo({id, text}: TodoItem) {
    return (
        <li key={id}>
            <label>{text}</label>
        </li>
    );
}

export default Todo;