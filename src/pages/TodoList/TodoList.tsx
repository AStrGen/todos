import {useContext, useState} from 'react';
import _uniqueId from 'lodash/uniqueId';
import Todo from '../../components/Todo/Todo';
import Main from '../Main/Main';
import cloneArray from '../../utils';
import "./TodoList.css"
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import {Context} from "../../App";

type TodoItem = {
    id: string;
    text: string;
    done: boolean;
}

function TodoList() {
    const initData: TodoItem[] = useContext(Context);

    const [todoItems, setTodoItems] = useState(initData);
    const handleKey = ({key, currentTarget}: {key: string, currentTarget: HTMLInputElement}) => {
        if (key === 'Enter') {
            if (currentTarget.value === "") return;
            setTodoItems([...todoItems, {id: _uniqueId(), text: currentTarget.value, done: false}]);
            currentTarget.value = '';
        }
    }

    const setDestroyed = (id: string) => {
        setTodoItems(todoItems.filter(item => item.id != id));
    }

    function setDone(item: TodoItem) {
        item.done = !item.done;
        setTodoItems(cloneArray(todoItems));
    }

    function setText(item: TodoItem, text: string){
        item.text = text;
        setTodoItems(cloneArray(todoItems));
    }

    return (
        <>
            <Header handleKeyCallback={handleKey} />
            {todoItems.length > 0 &&
            <>
                <Main> {todoItems.map((item) =>
                    <Todo
                        key={item.id}
                        item={item}
                        setDoneCallback={() => setDone(item)}
                        setDestroyedCallback={() => setDestroyed(item.id)}
                        setTextCallback={(text: string) => setText(item, text)}
                    />)}
                </Main>
                <Footer />
            </>
            }

        </>
    );
}

export default TodoList;