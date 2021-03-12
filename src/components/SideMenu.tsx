import React, { useContext } from "react";
import Context from "../Context";
import { createClassName } from "../general/general";
import { CrossIcon, TrashIcon } from "./ui/Icons";

interface ISideMenu {
    active: boolean
    setActive(value: boolean): void
}

const SideMenu: React.FC<ISideMenu> = props=> {

    const { todos } = useContext(Context);
    
    return (
        <div className={ createClassName({ "active": props.active }, "side-menu-wrapper") }>
            <div className="empty" onClick={ ()=> props.setActive(false) } />
            <aside className="side-menu">
                <header className="p-2 slot justify-between">
                    <span></span>
                    <button className="compact" onClick={ ()=> props.setActive(false) }>
                        <CrossIcon />
                    </button>
                </header>
                <main className="ph-2 display-flex flex-column gap-1">
                    <button style={ { height: "max-content", transform: "scale(1)" } } className="p-2 ghost width-fill slot justify-between">
                        <div className="slot gap-1">
                            <TrashIcon />
                            <span>Корзина</span>
                        </div>
                        <span>{ todos.filter(todo=> todo.deleted).length }</span>
                    </button>
                </main>
            </aside>
        </div>
    );
};

export default SideMenu;