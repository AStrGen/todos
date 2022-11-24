import {TodoItem} from './pages/TodoList/TodoList';
import {createContext} from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";

type TodoApi = {
    setText: (id: string) => void
    setDone: (id: string) => void
}

type TodoListApi = {
    add: (text: string) => void
    remove: (id: string) => void
    setFilter: () => void
}

export type TodoContext = {
    todoList: TodoItem[]
    todoApi: TodoApi
    todoListApi: TodoListApi
}

const defaultContextValue: TodoContext = {
    todoList: [],
    todoApi: {
        setText: (id) => {},
        setDone: (id) => {}
    },
    todoListApi: {
        add: (text) => {},
        remove: () => {},
        setFilter: () => {}
    }
}

export const Context = createContext<TodoContext>(defaultContextValue);

export function App() {

    return (
    <Context.Provider value={defaultContextValue}>
      <section className="todoapp">
          <Header />
          <Main />
          <Footer />
      </section>
    </Context.Provider>
  );
}

export default App;