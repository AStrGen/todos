import "./Header.css"
import {Context} from "../../App";
import {useContext} from "react";
import {KeyBoard} from "../../const";
import {TodoContext} from "../TodoContext/TodoContext";
import CheckAllButton from "../CheckAllButton/CheckAllButton";

function Header() {
    const context: TodoContext = useContext(Context);

    const handleKey = ({key, currentTarget}: {key: string, currentTarget: HTMLInputElement}) => {
        if (key === KeyBoard.Enter) {
            if (currentTarget.value !== "") {
                context.todoListApi.add(currentTarget.value);
                currentTarget.value = "";
            }
        }
    }

    return (
        <header className='header'>
            <h1>todos</h1>
            <div>
                {context.todoList.length > 0 &&
                <CheckAllButton onClick={context.todoListApi.setAllDone}/>}
                <input type='text'
                       className='new-todo'
                       placeholder='What needs to be done?'
                       onKeyDown={handleKey}
                />
            </div>
        </header>
    );
}

export default Header;