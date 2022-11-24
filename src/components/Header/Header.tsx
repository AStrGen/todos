import "./Header.css"
import {Context, TodoContext} from "../../App";
import {useContext} from "react";

function Header() {
    const context: TodoContext = useContext(Context);

    const handleKey = ({key, currentTarget}: {key: string, currentTarget: HTMLInputElement}) => {
        if (key === 'Enter') {
            if (currentTarget.value === "") {
                context.todoListApi.add(currentTarget.value);
            }
        }
    }

    return (
        <header className='header'>
            <h1>todos</h1>
            <input type='text'
                   className='new-todo'
                   placeholder='What needs to be done?'
                   onKeyDown={handleKey}
            />
        </header>
    );
}

export default Header;