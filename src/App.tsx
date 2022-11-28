import {createContext, useState} from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import {Filter} from "./const";
import {defaultContextValue, TodoContext, TodoItem} from "./components/TodoContext/TodoContext";

export const Context = createContext<TodoContext>(defaultContextValue);

export function App() {
    const [todoList, setTodoList] = useState<TodoItem[]>([]);
    const [filter, setFilter] = useState(Filter.All);

    const contextValue = new TodoContext({todoList, filter, setTodoList, setFilter});

    return (
    <Context.Provider value={contextValue}>
      <section className="todoapp">
          <Header />
          <Main />
          {todoList.length > 0 && <Footer />}
      </section>
    </Context.Provider>
  );
}

export default App;