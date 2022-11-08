import { useState } from "react";

type TodoItemProps = {
    id: string;
    text: string;
    done: boolean;
    setDoneCallback: () => void;
    setDestroyedCallback: () => void;
}

function Todo({id, text, done, setDoneCallback, setDestroyedCallback}: TodoItemProps) {
//    const [checked, setChecked] = useState(false);
    const setDone = () => {
//        setChecked(!checked);
        setDoneCallback();
    }

    return (
        <li key={id}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={done} onChange={setDone} />
                <label>{text}</label>
                <button className="destroy" onClick={setDestroyedCallback} />
            </div>
        </li>
    );
}

export default Todo;