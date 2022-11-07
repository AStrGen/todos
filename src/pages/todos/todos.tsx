import { Component, ReactElement, useState } from 'react';
import _uniqueId from 'lodash/uniqueId';
import Todo from '../../components/todo/todo';
import Main from '../main/main';
type TodoItem = {
    id: string;
    text: string;
    isDone: boolean;
}

function Todos() {
    const initData: TodoItem[] = [];
    const [todoItems, setTodoItems] = useState(initData);
    const handlePress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setTodoItems([...todoItems, {id: _uniqueId(), text: event.currentTarget.value, isDone: false}]);
            event.currentTarget.value = '';
        }
    }

    return (
        <header className='header'>
        <h1>todos</h1>
        <input type='text' 
            className='new-todo' 
            placeholder='What needs to be done?' 
            onKeyPress={handlePress}
        />
        {todoItems.length == 0 ? null :
        <Main>
            {todoItems.map((item) => <Todo id={item.id} text={item.text} isDone={item.isDone}/>)}
        </Main>
        }
    </header>
    );
}

export default Todos;