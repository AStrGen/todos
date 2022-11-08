import { Component, ReactElement, useState } from 'react';
import _uniqueId from 'lodash/uniqueId';
import Todo from '../../components/todo/todo';
import Main from '../main/main';
import { isTemplateExpression } from 'typescript';
type TodoItem = {
    id: string;
    text: string;
    done: boolean;
}

function Todos() {
    const initData: TodoItem[] = [];
    const [todoItems, setTodoItems] = useState(initData);
    const handlePress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setTodoItems([...todoItems, {id: _uniqueId(), text: event.currentTarget.value, done: false}]);
            event.currentTarget.value = '';
        }
    }

    const setDestroyed = (id: string) => {
        setTodoItems(todoItems.filter(item => item.id != id));
    }
    const setDone = (item: TodoItem) => {
        item.done = !item.done;
        setTodoItems(todoItems);
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
            {todoItems.map((item) => <Todo key={_uniqueId()} id={item.id} text={item.text} done={item.done} setDoneCallback={() => setDone(item)} setDestroyedCallback={() => setDestroyed(item.id)} />)}
        </Main>
        }
    </header>
    );
}

export default Todos;