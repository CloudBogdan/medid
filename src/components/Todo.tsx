import { AnimatePresence, AnimateSharedLayout, motion, Variants } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Context from "../Context";
import { compareId, createClassName, default_ease, sliceText } from "../general/general";
import Item from "./Item";
import Checkbox from "./ui/Checkbox";
import { ArrowLeftLineIcon, CheckmarkIcon, ClockIcon, PenIcon, SendIcon, StarIcon, TrashIcon, UntrashIcon } from "./ui/Icons";
import { FadeText } from "./ui/Layouts";
import Highlighter from "react-highlight-words";

export interface ITodo {
    id: number | string

    title: string
    date: Date | string

    checked?: boolean
    mark?: number
    favorite?: boolean
    deleted?: boolean
    
    desc?: string
    alarm?: Date | string
};
interface ITodosList {
    todos: ITodo[]
    filter_by?: "all" | "favorite" | "checked" | "unchecked" | "deleted"
    search_by?: string | undefined
    empty_message?: any
}

export const TodoItem: React.FC<ITodo & { hightlight?: string, show_as_deleted?: boolean }> = props=> {

    const { toggleTodo, todoIsSelect, selectTodo, isSelectMode, selected_todos, setSelectedTodos, setContextMenu, deleteTodos, removeTodos, updateTodo } = useContext(Context);
    const className = createClassName({
        "checked": props.checked,
        "select": !!todoIsSelect(props.id)
    }, "todo");
    const history = useHistory();

    function select(e: React.MouseEvent): boolean {
        e.preventDefault();

        selectTodo(props.id);

        return false;
    }
    
    useEffect(()=> {

        window.addEventListener("popstate", e=> {
            e.preventDefault();
            setSelectedTodos([]);

            if (isSelectMode())
                history.push("/");

        });

    }, [isSelectMode()]);
    useEffect(()=> {

        setContextMenu({
            title: `Выделенно лементов: ${ selected_todos.length }`,
            is_open: isSelectMode(),
            buttons: [
                {
                    icon: ArrowLeftLineIcon,
                    color: "success",
                    handle() {
                        setSelectedTodos([])
                    }
                },
                {
                    icon: PenIcon,
                    hidden: selected_todos.length !== 1 || !!props.deleted,
                    handle() {
                        history.push(`/update/${ props.id }`);
                    }
                },
                {
                    icon: CheckmarkIcon,
                    color: "primary",
                    hidden: !!props.deleted,
                    handle() {
                        selected_todos.map(todo=> void toggleTodo(todo));
                    }
                },
                {
                    icon: SendIcon,
                    hidden: !props.show_as_deleted,
                    color: "primary",
                    handle() {
                        updateTodo(props.id, { deleted: !!!props.deleted })
                    }
                },
                {
                    icon: TrashIcon,
                    color: "danger",
                    handle() {
                        if (!!!props.deleted)
                            deleteTodos(selected_todos);
                        else
                            removeTodos(selected_todos);
                    }
                },
            ]
        });

    }, [selected_todos]);

    return (
        <Item
            className={ className }
            onContextMenu={ !isSelectMode() ? select : ()=>{} }
            onClick={ isSelectMode() ? select : ()=>{} }
        >
            
            <div className="flex items-center gap-2">

                <span style={ { opacity: !props.show_as_deleted ? 1 : .5 } }>
                    <Checkbox disabled={ !!props.show_as_deleted } checked={ props.checked || false } onChange={ ()=> toggleTodo(props.id) } />
                </span>

                <main onClick={ ()=> (!isSelectMode() && !props.show_as_deleted) && history.push(`/update/${ props.id }`) } className="todo-content flex flex-column">

                    <div className="slot gap-2">
                        <Highlighter
                            autoEscape={ false }
                            searchWords={ props.hightlight ? props.hightlight.split(" ") : [""] }
                            highlightClassName="hightlight"
                            className="todo-title"
                            textToHighlight={ sliceText(props.title, Math.round(window.innerWidth / 10 - 15)) }
                        />
                        { (props.favorite || !!props.alarm) && <h3 className="slot gap-2 text-muted">
                            <span>&middot;</span>
                            { props.favorite && <StarIcon /> }
                            { !!props.alarm && <ClockIcon /> }
                        </h3> }
                    </div>
                    <p className="text-muted" dangerouslySetInnerHTML={ { __html: sliceText(props.desc || "", 90) || "" } } />
                    
                </main>

            </div>

            { props.show_as_deleted &&
                <button onClick={ ()=> updateTodo(props.id, { deleted: !!!props.deleted }) } className="recover-button color-primary compact ghost">
                    <SendIcon />
                </button>
            }

        </Item>
    );
};

export const TodoItemsList: React.FC<ITodosList> = props=> {

    const { setSelectedTodos } = useContext(Context);
    
    const item: Variants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: .4, ease: default_ease }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: .2, ease: default_ease }
        }
    };
    const variants: Variants = {
        initial: {
            opacity: 1
        },
        animate: {
            opacity: 1,
            transition: {
                delayChildren: .1,
                staggerChildren: .06,
            }
        },
        exit: {
            opacity: 0
        }
    };
    
    function sort(todo: ITodo, todo2: ITodo): number {

        let direction = 1;
        
        if (todo.checked || todo2.checked)
            direction = +!!todo.checked - +!!todo2.checked;
        else {
            if (todo.favorite || todo2.favorite)
                direction = +!!todo2.favorite - +!!todo.favorite;
            else
                direction = +todo2.id - +todo.id;
        }

        return direction;

    }
    function filter(todo: ITodo): boolean {

        let result = true;
        
        switch (props.filter_by) {
            case "all":
                result = !!todo && !!!todo.deleted;
                break;
            case "checked":
                result = !!todo.checked && !!!todo.deleted;
                break;
            case "unchecked":
                result = !todo.checked && !!!todo.deleted;
                break;
            case "favorite":
                result = !!todo.favorite && !!!todo.deleted;
                break;
            case "deleted":
                result = !!todo.deleted;
                break;
            default:
                result = !!todo && !!!todo.deleted;
                break;
        };

        return result && (props.search_by ? todo.title.trim().toLowerCase().indexOf(props.search_by.trim().toLowerCase()) >= 0 : true);

    }

    const todos_result = props.todos.filter(filter).sort(sort);

    return (
        <AnimateSharedLayout>
            { todos_result.length !== 0 ?
                <motion.div
                    variants={ variants }
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    layout
                    className="todos-list"
                >

                    <AnimatePresence>
                        { todos_result.map(todo=>
                            <motion.div
                                variants={ item }
                                layout
                                style={
                                    (todo.checked &&
                                    compareId(todo.id, props.todos.filter(t=> t.checked)[0].id) &&
                                    props.todos.filter(t=> !t.checked).length !== 0) ?
                                        { marginTop: 30 } : {}
                                }
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                key={ todo.id }
                            >
                                <TodoItem show_as_deleted={ props.filter_by === "deleted" } hightlight={ props.search_by } { ...todo } />
                            </motion.div>
                        ) }
                    </AnimatePresence>

                    <div className="empty-area" onClick={ ()=> setSelectedTodos([]) } />

                </motion.div>
            :
                (props.search_by === undefined ? 
                    <FadeText className="text-muted button-shadow" style={ {
                        width: "100%",
                        height: 250
                    } }><h2 style={ { fontWeight: "normal" } }>{ props.empty_message || "Нет заметок" }</h2></FadeText>
                :
                    <FadeText className="text-muted button-shadow" style={ {
                        width: "100%",
                        height: 250
                    } }><h2 style={ { fontWeight: "normal" } }>Поиск не выдал результатов</h2></FadeText>
                )
            }
        </AnimateSharedLayout>
    );
}; 