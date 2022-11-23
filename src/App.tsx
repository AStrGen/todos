import TodoList from './pages/TodoList/TodoList';
import {useContext, createContext} from "react";

export const Context = createContext([])

export function App() {
  return (
    <Context.Provider value={[]}>
      <section className="todoapp">
        <TodoList />
      </section>
    </Context.Provider>
  );
}

export default App;