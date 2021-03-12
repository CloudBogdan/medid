import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useHistory } from "react-router";
import Alert from "../components/Alert";
import Header from "../components/Header";
import { ITodo } from "../components/Todo";
import Checkbox from "../components/ui/Checkbox";
import { ClockIcon, StarIcon, TextIcon, TrashIcon } from "../components/ui/Icons";
import Context from "../Context";
import { compareId, createClassName } from "../general/general";
import Page from "./Page";

const UpdatePage: React.FC = props=> {

    const { todos, updateTodo, deleteTodos } = useContext(Context);
    const todo = todos.find(t=> compareId(t.id, (props as any).match.params.id));
    const
        [data, setData] = useState<ITodo | undefined>(undefined),
        [edited, setEdited] = useState<boolean>(false);
    const [active_alert, setActiveAlert] = useState<boolean>(false);
    const history = useHistory();
    const [height, setHeight] = useState<number | string>(200);
    
    useEffect(()=> {

        setData(todo);
        
    }, [todos]);
    useEffect(()=> {

        setEdited(!!data?.title && todos.find(t=> compareId(t.id, (props as any).match.params.id)) != data);
        
    }, [data, todos]);

    function save(): void {

        updateTodo(data?.id!, {
            ...data!
        });
        history.push("/");

    }

    const ActionButton: React.FC<{ icon: any, active: boolean, setActive(value: boolean): void }> = props=> {
        return (
            <button
                className={ createClassName({ "color-primary": props.active }, "slot compact size-small") }
                onClick={ ()=> props.setActive(!props.active) }
            ><props.icon /></button>
        );
    };

    return (
        <>
            <Page className="update-page">

                <Header
                    title={ `"${ todo?.title! }"` }
                    back
                    no_routing={ !edited ? active_alert : true }
                    backHandle={ edited ? ()=> setActiveAlert(true) : undefined }
                    hide_nav
                />

                { !!data?.id && <div className="ph-3 flex flex-column">

                    <div className="slot gap-1" style={ { marginBottom: 30 } }>
                        <ActionButton icon={ StarIcon } active={ data.favorite || false } setActive={ ()=> setData({ ...data, favorite: !data.favorite }) } />
                    </div>
                    <div className="slot as-slot gap-1">
                        <div className="button-shadow">
                            <Checkbox shadow checked={ data.checked || false } onChange={ ()=> setData({ ...data, checked: !data.checked }) } />
                        </div>
                        <input placeholder="Название заметки..." className="ghost" type="text" value={ data.title } onChange={ e=> setData({ ...data, title: e.target.value }) } />
                    </div>
                    <div className="as-slot flex gap-1">
                        <div className="button-shadow">
                            <TextIcon />
                        </div>
                        <textarea
                            placeholder="Описание заметки..."
                            value={ data.desc || "" }
                            onChange={ e=> {
                                setData({ ...data, desc: e.target.value })
                                setHeight(e.target.scrollHeight > 200 ? e.target.scrollHeight : 200);
                            } }
                            className="input ghost content-editable"
                            style={ { height: height } }
                        />
                    </div>
                    <div className="slot as-slot gap-1">
                        <div className="button-shadow">
                            <ClockIcon />
                        </div>
                        <span className="text-muted">Данная функция пока не работает</span>
                        {/* <div className="flex flex-column">
                            <input type="date" />
                            <input type="time" />
                        </div> */}
                    </div>
                    <span className="text-muted mt-4">
                        Дата создания: { data.date }
                    </span>

                    <div className="empty-area" />

                </div> }

            </Page>
            { !!data?.id && <>
                <motion.div
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    exit={ { opacity: 0 } }
                    transition={ { duration: .2, ease: "linear" } }
                    className="bottom-float"
                >
                    <div className="width-fill slot gap-1">
                        <button onClick={ ()=> { deleteTodos([ data.id ]); history.push("/") } } className="compact color-danger ghost">
                            <TrashIcon />
                        </button>
                        <button onClick={ save } disabled={ !edited } className="width-fill color-primary">Сохранить</button>
                    </div>
                </motion.div>
                <Alert buttons={ [
                    { text: "Да", color: "primary", handle() { save(); setActiveAlert(false) } },
                    { text: "Нет", color: "danger", handle() { history.push("/"); setActiveAlert(false) } }
                ] } active={ active_alert } setActive={ setActiveAlert }>
                    <main className="alert-content">
                        <h3 className="text-center pv-1">Сохранить изменения?</h3>
                    </main>
                </Alert>
            </> }
        </>
    );
};

export default UpdatePage;