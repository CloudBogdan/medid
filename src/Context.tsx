import { createContext } from "react";
import { IContextMenu } from "./components/ContextMenu";
import { ITodo } from "./components/Todo";
import { IConfig } from "./config";
import { IClass } from "./general/types";

interface IContext {
    todos: ITodo[]
    setTodos(value: ITodo[]): void
    toggleTodo(id: ITodo["id"]): void
    selected_todos: ITodo["id"][]
    setSelectedTodos(value: ITodo["id"][]): void
    deleteTodos(id: ITodo["id"][]): void
    createTodo(props: ITodo): void
    updateTodo(id: ITodo["id"], props: ITodo | any): void
    removeTodos(id: ITodo["id"][]): void
    
    todoIsSelect(id: ITodo["id"]): ITodo["id"] | undefined
    selectTodo(id: ITodo["id"]): void
    isSelectMode(): boolean

    setContextMenu(value: IContextMenu): void

    config: IConfig
    setConfig(value: IConfig): void

    classes: IClass[]
    setClasses(value: IClass[]): void
    removeClass(id: IClass["id"]): void
};

export default createContext<IContext>({
    todos: [],
    setTodos(value: ITodo[]) {},
    toggleTodo(id: ITodo["id"]) {},
    selected_todos: [],
    setSelectedTodos(value: ITodo["id"][]) {},
    deleteTodos(id: ITodo["id"][]) {},
    createTodo(props: ITodo) {},
    updateTodo(id: ITodo["id"], props: ITodo | any) {},
    removeTodos(id: ITodo["id"][]) {},
    
    todoIsSelect(id: ITodo["id"]) { return undefined },
    selectTodo(id: ITodo["id"]) {},
    isSelectMode: ()=> false,

    setContextMenu(value: IContextMenu) {},

    config: {} as any,
    setConfig(value: IConfig) {},

    classes: [],
    setClasses(value: IClass[]) {},
    removeClass(id: IClass["id"]) {}
});