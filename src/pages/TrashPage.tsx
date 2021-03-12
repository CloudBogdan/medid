import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import Alert from "../components/Alert";
import Header from "../components/Header";
import { TodoItemsList } from "../components/Todo";
import { TrashIcon } from "../components/ui/Icons";
import Context from "../Context";
import Page from "./Page";

const TrashPage: React.FC = ()=> {

    const { todos, removeTodos } = useContext(Context);
    const [active_alert, setActiveAlert] = useState<boolean>(false);
    const deleted_todos = todos.filter(todo=> !!todo.deleted);
    
    return <>
        <Page>

            <Header
                title="Корзина" 
                subtitle={ deleted_todos.length !== 0 ? `Удаленно заметок: ${ deleted_todos.length }` : "У вас нет удалённых заметок" }
                back
                hide_nav
            />
            
            <TodoItemsList filter_by="deleted" todos={ todos } empty_message="Корзина пуста" />

        </Page>
        { deleted_todos.length !== 0 && <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { duration: .2, ease: "linear" } }
            className="bottom-float"
        >
            <div className="width-fill slot gap-1">
                <button onClick={ ()=> setActiveAlert(true) } className="color-danger width-fill">
                    <TrashIcon />
                    <span>Удалить всё</span>
                </button>
            </div>
        </motion.div> }
        <Alert
            active={ active_alert }
            setActive={ setActiveAlert }
            buttons={ [
                { text: "Да", color: "danger", handle() { removeTodos(deleted_todos.map(t=> t.id)) } },
                { text: "Нет", color: "success", handle() { setActiveAlert(false) } }
            ] }
        >
            <main className="alert-content">
                <h3 className="text-center pv-1">Вы уверенны, что хотите <u>безвозвратно</u> удалить все заметки?</h3>
            </main>
        </Alert>
    </>;
};

export default TrashPage;