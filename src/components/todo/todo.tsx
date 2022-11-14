import React, { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import DestroyButton from "../DestroyButton/DestroyButton";

type TodoItemProps = {
    item: {
        id: string;
        text: string;
        done: boolean;
    };
    setDoneCallback: () => void;
    setDestroyedCallback: () => void;
    setTextCallback: (text: string) => void;
}

function Todo({item, setDoneCallback, setDestroyedCallback, setTextCallback}: TodoItemProps) {
    const [editHidden, setEditHidden] = useState(true)

    const [inputText, changeInput] = useState(item.text);
    const showInput = () => {};
    const setText = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setTextCallback(event.currentTarget.value);
            setEditHidden(true);
            if (item.text === "") {
                setDestroyedCallback();
            }
        }
    }

    return (
        <li key={item.id}>
            {editHidden
                ?   <div className="view">
                        <Checkbox checked={item.done} onChange={setDoneCallback}/>
                        <label onDoubleClick={() => setEditHidden(false)}>{inputText}</label>
                        <DestroyButton onClick={setDestroyedCallback}/>
                    </div>
                :
                <input
                    autoFocus
                    onBlur={() => setEditHidden(true)}
                    id={item.id}
                    type="text"
                    className="edit"
                    value={inputText}
                    hidden={editHidden}
                    onChange={(e) => changeInput(e.target.value)}
                    onKeyDown={setText}
                />
            }
        </li>
    );
}

export default Todo;