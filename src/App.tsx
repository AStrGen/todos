import {createContext, useState} from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import _uniqueId from 'lodash/uniqueId';
import {Filter} from "./const";

export type TodoItem = {
    id: string;
    text: string;
    done: boolean;
}

type TodoApi = {
    setText: (id: string, text: string) => void
    changeDone: (id: string) => void
}

type TodoListApi = {
    add: (text: string) => void
    remove: (id: string) => void
    setFilter: (filter: Filter) => void
}

const defaultContextValue = {
    todoList: [] as Array<TodoItem>,
    filter: Filter.All,
    todoApi: {setText: () => {}, changeDone: () => {}} as TodoApi,
    todoListApi: {add: () => {}, remove: () => {}, setFilter: () => {}} as TodoListApi
}

export type TodoContext = typeof defaultContextValue;

export const Context = createContext<TodoContext>(defaultContextValue);

export function App() {
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    const [filter, setFilter] = useState(Filter.All);

    const contextValue: TodoContext = {
        todoList: todoList,
        filter: filter,
        todoApi: {
            setText: (id, text) => {setTodoList(todoList.map(item => item.id !== id ? item : {...item, text: text}))},
            changeDone: (id) => {setTodoList(todoList.map(item => item.id !== id ? item : {...item, done: !item.done}))}
        },
        todoListApi: {
            add: (text) => {setTodoList([...todoList, {id: _uniqueId(), text: text, done: false}])},
            remove: (id) => {setTodoList(todoList.filter(item => item.id !== id))},
            setFilter: (filter) => setFilter(filter)
        }
    }

    return (
    <Context.Provider value={contextValue}>
      <section className="todoapp">
          <Header />
          <Main />
          <Footer />
      </section>
    </Context.Provider>
  );
}

export default App;