import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";

type TodoItemProps = {
    item: {
        id: string;
        text: string;
        done: boolean;
    };
    setDoneCallback: () => void;
    setDestroyedCallback: () => void;
}

function Todo({item, setDoneCallback, setDestroyedCallback}: TodoItemProps) {
    const [editHidden, setEditHidden] = useState(true)

    const [inputText, changeInput] = useState(item.text);

    const setText = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            item.text = event.currentTarget.value;
            setEditHidden(true);
            if (item.text === "") {
                setDestroyedCallback();
            }
        }
    }

    return (
        <li key={item.id}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={item.done} onChange={setDoneCallback}  />
                <label onDoubleClick={() => setEditHidden(false)}>{inputText}</label>
                <button className="destroy" onClick={setDestroyedCallback} />
            </div>
            <input
                id={item.id}
                type="text"
                className="edit"
                value={inputText}
                hidden={editHidden}
                onChange={(e) => changeInput(e.target.value)}
                onKeyDown={setText}
            />
        </li>
    );
}

export default Todo;