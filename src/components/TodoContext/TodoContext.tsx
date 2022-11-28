import {Filter} from "../../const";
import _uniqueId from "lodash/uniqueId";

export type TodoItem = {
    id: string;
    text: string;
    done: boolean;
}

interface TodoApi {
    setText: (id: string, text: string) => void
    changeDone: (id: string) => void
}

interface TodoListApi {
    add: (text: string) => void
    remove: (id: string) => void
    setFilter: (filter: Filter) => void
    setAllDone: () => void
    clearCompleted: () => void
}

export interface iTodoContext {
    todoList: TodoItem[],
    filter: Filter,
    todoApi: TodoApi,
    todoListApi: TodoListApi
}

export const defaultContextValue = {
    todoList: [],
    filter: Filter.All,
    todoApi: {setText: () => {}, changeDone: () => {}},
    todoListApi: {add: () => {}, remove: () => {}, setFilter: () => {}, setAllDone: () => {}, clearCompleted: () => {}}
}

type todoContextProps = {
    todoList: TodoItem[],
    filter: Filter,
    setTodoList: (todoList: TodoItem[]) => void,
    setFilter: (filter: Filter) => void
}

export class TodoContext implements iTodoContext {
    todoList;
    filter;
    todoApi;
    todoListApi;

    constructor({todoList, filter, setTodoList, setFilter}: todoContextProps) {
        this.todoList = todoList;
        this.filter = filter;

        this.todoApi = {
            setText: (id: string, text: string) => {
                setTodoList(
                    todoList.map(
                        item => item.id !== id
                            ? item
                            : {...item, text: text}
                    )
                )
            },
            changeDone: (id: string) => {
                setTodoList(
                    todoList.map(
                        item => item.id !== id
                            ? item
                            : {...item, done: !item.done}
                    )
                )
            }
        };

        this.todoListApi = {
            add: (text: string) => {
                setTodoList([...todoList, {id: _uniqueId(), text: text, done: false}])
            },
            remove: (id: string) => {
                setTodoList(todoList.filter(item => item.id !== id))
            },
            setFilter: (filter: Filter) => {
                setFilter(filter)
            },
            setAllDone: () => {
                setTodoList(todoList.map(item => ({...item, done: true})))
            },
            clearCompleted: () => {
                setTodoList(todoList.filter(item => !item.done));
            }
        };
    }
}


