import { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';
import Todo from '../../components/todo/todo';
import Main from '../main/main';
import cloneArray from '../../utils';

type TodoItem = {
    id: string;
    text: string;
    done: boolean;
}

function TodoList() {
    const initData: TodoItem[] = [];
    const [todoItems, setTodoItems] = useState(initData);
    const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (event.currentTarget.className == "new-todo") {
                setTodoItems([...todoItems, {id: _uniqueId(), text: event.currentTarget.value, done: false}]);
                event.currentTarget.value = '';
            } else {
                let item = todoItems.find(item => item.id == event.currentTarget.id);
                if (item) {
                    item.text = event.currentTarget.value;
                }
                setTodoItems(cloneArray(todoItems));
            }
        }
    }

    const setDestroyed = (id: string) => {
        setTodoItems(todoItems.filter(item => item.id != id));
    }

    function setDone(item: TodoItem) {
        item.done = !item.done;
        setTodoItems(cloneArray(todoItems));
    }

    return (
        <header className='header'>
        <h1>todos</h1>
        <input type='text' 
            className='new-todo' 
            placeholder='What needs to be done?' 
            onKeyDown={handleKey}
        />
        {todoItems.length == 0 ? null :
        <Main>
            {todoItems.map((item) =>
                <Todo
                    id={item.id}
                    text={item.text}
                    done={item.done}
                    setDoneCallback={() => setDone(item)}
                    setDestroyedCallback={() => setDestroyed(item.id)}
                    setTextCallback={handleKey}
                />)}
        </Main>
        }
    </header>
    );
}

export default TodoList;