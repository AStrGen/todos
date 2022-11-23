import "./Header.css"

type headerProps = {
    handleKeyCallback: ({key, currentTarget}: {key: string, currentTarget: HTMLInputElement}) => void
}

function Header({handleKeyCallback}: headerProps) {
    return (
        <header className='header'>
            <h1>todos</h1>
            <input type='text'
                   className='new-todo'
                   placeholder='What needs to be done?'
                   onKeyDown={handleKeyCallback}
            />
        </header>
    );
}

export default Header;