import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import { ITodo } from "./components/Todo";
import Context from "./Context";
import { compareId, loadItem, saveItem } from "./general/general";
import { ContextMenu, IContextMenu } from "./components/ContextMenu";
import { AnimatePresence } from "framer-motion";
import CreateMenu from "./components/CreateMenu";
import { AddIcon } from "./components/ui/Icons";
import UpdatePage from "./pages/UpdatePage";
import TrashPage from "./pages/TrashPage";
import AboutPage from "./pages/AboutPage";
import { default_config, IConfig } from "./config";
import { IClass } from "./general/types";

const App: React.FC = ()=> {

    const 
        [todos, setTodos] = useState<ITodo[]>([]),
        [classes, setClasses] = useState<IClass[]>([
            { id: 1, title: "Работа", color: "green", pin: true },
            { id: 2, title: "Дом", color: "red", pin: true },
            { id: 3, title: "Другое", color: "yellow" },
        ]);
    const [selected_todos, setSelectedTodos] = useState<ITodo["id"][]>([]);
    const [config, setConfig] = useState<IConfig>(default_config);
    
    const 
        [context_menu, setContextMenu] = useState<IContextMenu>({
            is_open: false,
            buttons: []
        }),
        [is_creating, setIsCreating] = useState<boolean>(false);
    const
        location = useLocation(),
        pathnames: string[] = location.pathname.split("/");

    useEffect(load, []);
    useEffect(save, [todos, config]);
    
    // > Todos
    function createTodo(props: ITodo): void {
        setTodos([
            { ...props, title: props.title.trim() },
            ...todos
        ]);
    }
    function updateTodo(id: ITodo["id"], props: ITodo | any): void {
        setTodos(todos.map(todo=> {

            if (compareId(todo.id, id))
                todo = { ...todo, ...props, title: props.title?.trim() || todo.title };
            
            return todo;
        }));
    }
    function toggleTodo(id: ITodo["id"]): void {

        setTodos(todos.map(todo=> {

            if (compareId(todo.id, id))
                todo.checked = !todo.checked;
            
            return todo;
        }))

    }
    function deleteTodos(id: ITodo["id"][]): void {

        setTodos(todos.map(todo=> {

            if (!!id.find(i=> compareId(todo.id, i)))
                todo.deleted = true;
            
            return todo;
        }));

    }
    function removeTodos(id: ITodo["id"][]): void {

        setTodos(todos.filter(todo=> !!!id.find(i=> compareId(i, todo.id))));

    }

    // > Classes
    function removeClass(id: IClass["id"]): void {
        setClasses(classes.filter(cl=> !compareId(cl.id, id)));
    }

    // > Select mode
    function todoIsSelect(id: ITodo["id"]): ITodo["id"] | undefined {
        return selected_todos.find(todo=> compareId(todo, id));
    }
    const isSelectMode = ()=> selected_todos.length !== 0;
    function selectTodo(id: ITodo["id"]): void {

        if (!!!todoIsSelect(id))
            setSelectedTodos([
                id,
                ...selected_todos
            ]);
        else
            setSelectedTodos(selected_todos.filter(todo=> !compareId(todo, id)));

    }
    
    // > System
    function save(): void {
        saveItem("todos", todos);
        saveItem("config", config);
    }
    function load(): void {
        setTodos(loadItem("todos") || todos || []);
        setConfig(loadItem("config") || default_config || []);
    }
    
    return (
        <Context.Provider value={ {
            todos, setTodos, toggleTodo, selected_todos, setSelectedTodos, deleteTodos, createTodo, updateTodo, removeTodos,
            todoIsSelect, selectTodo, isSelectMode,
            setContextMenu,
            config, setConfig,
            classes, setClasses, removeClass
        } }>
            <div className="app">

                <button
                    style={ pathnames[1] === "" ? {} : {
                        transform: `translate(-50%, 180%)` 
                    } }
                    onClick={ ()=> setIsCreating(true) } className="add-button color-primary"
                >
                    <AddIcon />
                </button>

                <AnimatePresence presenceAffectsLayout>
                    <Switch location={ location } key={ location.pathname }>
                        
                        <Route path="/" exact component={ HomePage } />
                        <Route path="/update/:id" component={ UpdatePage } />
                        <Route path="/trash" component={ TrashPage } />
                        <Route path="/about" component={ AboutPage } />

                        <Route component={ ()=> <h1>Page not found</h1> } />
                    </Switch>
                </AnimatePresence>

                <ContextMenu { ...context_menu } is_open={ isSelectMode() } />
                <CreateMenu active={ is_creating } setActive={ setIsCreating } />

            </div>
        </Context.Provider>
    );
};

export default App;