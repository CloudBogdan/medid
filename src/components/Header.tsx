import classes from "*.module.sass";
import React, { createRef, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../Context";
import { createClassName } from "../general/general";
import { IClass } from "../general/types";
import Alert from "./Alert";
import { ArrowLeftIcon, ArrowBottomIcon, SearchIcon, TrashIcon, CheckmarkIcon, InfoIcon, ClassIcon, ArrowRightIcon, ArrowRightLineIcon } from "./ui/Icons";
import OverlayTrigger from "./ui/OverlayTrigger";

interface IHeader {
    title: string
    subtitle?: string
    back?: boolean | string
    no_routing?: boolean
    hide_nav?: boolean
    backHandle?(): void
    search_filter?: string | undefined
    setSearchFilter?(value: string | undefined): void
}

const Header: React.FC<IHeader> = props=> {

    const history = useHistory();
    const input_ref = createRef<HTMLInputElement>();
    const [show_classes_alert, setShowClassesAlert] = useState<boolean>(false);
    const { todos, setSelectedTodos, classes, removeClass } = useContext(Context);

    useEffect(()=> {

        if (props.search_filter !== undefined)
            input_ref.current?.focus();

    }, [props.search_filter]);

    const DropMenu: React.FC = ()=> {
        
        return (
            <div className="list drop-down">

                <button
                    onClick={ ()=> setSelectedTodos([ todos.filter(t=> !t.deleted)[0].id ]) }
                    className="no-anim ghost color-primary"
                >
                    <CheckmarkIcon />
                    <span>Выделить элементы</span>
                </button>

                {/* <button
                    onClick={ ()=> setShowClassesAlert(true) }
                    className="no-anim ghost justify-between"
                >
                    <div className="slot gap-2">
                        <ClassIcon />
                        <span>Классы</span>
                    </div>
                    <span>{ classes.length }</span>
                </button> */}

                <button
                    onClick={ ()=> history.push("trash") }
                    className="no-anim ghost color-danger justify-between"
                >
                    <div className="slot gap-2">
                        <TrashIcon />
                        <span>Корзина</span>
                    </div>
                    <span>{ todos.filter(t=> !!t.deleted).length }</span>
                </button>

                {/* <button onClick={ ()=> history.push("settings") } className="no-anim ghost mt-1">
                    <CogIcon />
                    <span>Настройки</span>
                </button> */}
                <button onClick={ ()=> history.push("about") } className="no-anim ghost mt-2">
                    <InfoIcon />
                    <span>О приложении</span>
                </button>

            </div>
        );
    };
    const ClassesWindow: React.FC = ()=> {

        const
            [title, setTitle] = useState<IClass["title"]>(""),
            [color, setColor] = useState<IClass["color"]>("green");
        
        return (
            <Alert title="Классы" closable active={ show_classes_alert } setActive={ setShowClassesAlert } place="center">
            
                <main className="alert-content">
                    
                    <div className="list flex flex-column gap-1" style={ { maxHeight: 200, overflowY: "auto" } }>
                        { classes.map((cl, index)=>

                            <div key={ index } className="pv-1 list-item slot align-item-center justify-between">
                                <div className="slot gap-1">
                                    <div style={ cl.color[0]=="#" ? { background: cl.color } : {} } className={ createClassName({ ["color-" + cl.color]: cl.color[0]!="#" }, "bubble") } /> 
                                    <b>{ cl.title }</b>
                                </div>
                                { !cl.pin && <button className="ghost unattract size-small compact" onClick={ ()=> void removeClass(cl.id) }>
                                    <TrashIcon />
                                </button> }
                            </div>
                            
                        ) }
                    </div>

                    <div className="slot p-1 gap-2">
                        <OverlayTrigger
                            overlay={ (
                                <div className="drop-down p-1 flex flex-wrap" style={ { gap: 10, maxWidth: 30 * 4 + 10, borderRadius: "1em" } }>
                                    <button className="bubble unbutton color-green" style={ { minWidth: 30, height: 30 } }></button>
                                    <button className="bubble unbutton color-green" style={ { minWidth: 30, height: 30 } }></button>
                                    <button className="bubble unbutton color-green" style={ { minWidth: 30, height: 30 } }></button>
                                    <button className="bubble unbutton color-green" style={ { minWidth: 30, height: 30 } }></button>
                                    <button className="bubble unbutton color-green" style={ { minWidth: 30, height: 30 } }></button>
                                </div>
                            ) }
                            place="right-top"
                        >
                            <button className="bubble unbutton color-green" style={ { minWidth: 30, height: 30 } }></button>
                        </OverlayTrigger>
                        <input type="text" />
                        <button className="color-primary"><ArrowRightLineIcon /></button>
                    </div>

                </main>

            </Alert>
        );
    };

    return <>
        <header className="header">

            {
                props.search_filter === undefined ?
                    <div className="slot gap-2">

                        { props.back && <button onClick={ ()=> {
                            if (props.backHandle)
                                props.backHandle();
                            if (!props.no_routing)
                                history.push("/");
                        } } className="compact"><ArrowLeftIcon /></button> }

                        <div className="flex flex-column">
                            <h2 className="title">{ props.title }</h2>
                            <p className="text-muted">{ props.subtitle }</p>
                        </div>
                        
                    </div>
                :
                    <input
                        type="text"
                        ref={ input_ref }
                        placeholder="Название заметки..."
                        value={ props.search_filter || "" }
                        onChange={ e=> props.setSearchFilter!(e.target.value) }
                        onBlur={ ()=> props.setSearchFilter!(undefined) }
                    />
            }

            { (!props.hide_nav && props.search_filter === undefined) && <div className="nav slot gap-2">
                <button
                    className="compact ghost unattract"
                    onClick={ ()=> props.setSearchFilter!("") }
                >
                    <SearchIcon />
                </button>
                <OverlayTrigger
                    overlay={ <DropMenu /> }
                    place="left-bottom"
                >
                    <button className="compact ghost unattract">
                        <ArrowBottomIcon />
                    </button>
                </OverlayTrigger>
            </div> }

        </header>
        <ClassesWindow />
    </>;
};

export default Header;