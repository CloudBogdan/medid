import React from "react";
import { createClassName } from "../general/general";
import { CrossIcon } from "./ui/Icons";

interface IAlert {
    active?: boolean
    setActive?(value: boolean): void
    buttons?: {
        text: string
        color?: "success" | "danger" | "primary"
        icon?: any
        handle?(): void
    }[]
    place?: "bottom" | "center"
    closable?: boolean
    title?: string
}

const Alert: React.FC<IAlert> = props=> {
    return (
        <div className={ createClassName({ "active": props.active, ["place-" + (props.place || "bottom")]: true }, "alert-wrapper") }>

            <div className="alert">

                { (props.closable || !!props.title) && <header className="alert-header">
                    <b>{ props.title }</b>
                    <button onClick={ ()=> props.setActive!(false) } className="compact size-small unattract ghost">
                        <CrossIcon />
                    </button>
                </header> }

                { props.children }

                <nav className="alert-buttons slot gap-1">
                    { props.buttons?.map((button, index)=>
                        <button
                            onClick={ ()=> {
                                if (button.handle)
                                    button.handle();
                                props.setActive!(false);
                            } }
                            className={ createClassName({ ["color-" + button.color]: true }, "ghost") }
                            key={ index }
                        >
                            { button.icon && <button.icon /> }{ button.text }
                        </button>
                    ) }
                </nav>
                
            </div>

        </div>
    );
};

export default Alert;