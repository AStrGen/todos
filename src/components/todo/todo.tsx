import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";

type TodoItemProps = {
    id: string;
    text: string;
    done: boolean;
    setDoneCallback: () => void;
    setDestroyedCallback: () => void;
    setTextCallback: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Todo({id, text, done, setDoneCallback, setDestroyedCallback, setTextCallback}: TodoItemProps) {
    const [editClassName, setEditClassName] = useState("edit")
    const handleDoubleClick = () => {
        setEditClassName(editClassName.endsWith("active") ? "edit" : "edit active");
    }

    const [inputText, changeInput] = useState(text);

    const setText = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setEditClassName(editClassName.endsWith("active") ? "edit" : "edit active");
            setTextCallback(event);
        }
    }

    return (
        <li key={id}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={done} onChange={setDoneCallback}  />
                <label onDoubleClick={handleDoubleClick}>{text}</label>
                <button className="destroy" onClick={setDestroyedCallback} />
            </div>
            <input id={id} className={editClassName} type="text" value={inputText} onKeyDown={setText} onChange={(e) =>changeInput(e.target.value) }/>
        </li>
    );
}

export default Todo;