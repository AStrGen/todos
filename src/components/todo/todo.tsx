type TodoItem = {
    id: string;
    text: string;
    isDone: boolean;
}

function Todo({id, text, isDone}: TodoItem) {
    return (
        <li id={id}>
            <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>{text}</label>
                <button className="destroy"/>
            </div>
            <input className="edit" value={text}/>
        </li>
    );
}

export default Todo;