import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useContext } from "react";
import Context from "../Context";
import { createClassName } from "../general/general";

interface IContextMenuButton {
    icon: any
    color?: "danger" | "success" | "primary"
    hidden?: boolean
    handle(): void
};
export interface IContextMenu {
    title?: string
    is_open: boolean
    buttons: IContextMenuButton[]
};

export const ContextMenu: React.FC<IContextMenu> = props=> {

    const { setSelectedTodos } = useContext(Context);
    
    const className = createClassName({
        "active": props.is_open
    }, "context-menu bottom-float");
    
    const Button: React.FC<IContextMenuButton> = bprops=> !bprops.hidden ? (
        <button
            className={ createClassName({ ["color-" + bprops.color]: true }, "compact ghost") }
            onClick={ ()=> {
                bprops.handle();
                setSelectedTodos([]);
            } }
        >
            <bprops.icon />
        </button>
    ) : <></>;
    
    return (
        <div className={ className }>

            { props.title && <div className="text-muted">{ props.title }</div> }

            <nav className="buttons">
                { props.buttons.map((button, index)=>
                    <Button { ...button } key={ index } />
                ) }
            </nav>

        </div>
    );
};