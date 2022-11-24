import React, {useContext, useState} from "react";
import Checkbox from "../Checkbox/Checkbox";
import DestroyButton from "../DestroyButton/DestroyButton";
import "./Todo.css"
import {Context, TodoContext} from "../../App";

type TodoItemProps = {
    id: string;
    text: string;
    done: boolean;
}

function Todo({id, text, done}: TodoItemProps) {
    const context: TodoContext = useContext(Context);
    const [editHidden, setEditHidden] = useState(true)
    const [inputText, changeInput] = useState(text);

    const setText = ({key, currentTarget}: {key: string, currentTarget: HTMLInputElement}) => {
        if (key === 'Enter') {
            if (currentTarget.value === "") {
                context.todoListApi.remove(id);
            } else {
                context.todoApi.setText(currentTarget.id, currentTarget.value);
                setEditHidden(true);
            }
        }
    }

    return (
        <li>
            {editHidden
                ?   <div className="view">
                        <Checkbox checked={done} onChange={() => context.todoApi.changeDone(id)}/>
                        <label onDoubleClick={() => setEditHidden(false)}>{inputText}</label>
                        <DestroyButton onClick={() => context.todoListApi.remove(id)}/>
                    </div>
                :
                <input
                    autoFocus
                    onBlur={() => setEditHidden(true)}
                    id={id}
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