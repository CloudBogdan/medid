import React, { useState } from "react";
import { createClassName } from "../../general/general";

interface IOverlayTrigger {
    trigger?: "click" | "hover"
    overlay: any
    place:
        "right" | "left" |
        "top" | "bottom" |
        "right-top" | "right-bottom" | 
        "left-top" | "left-bottom" 
}

const OverlayTrigger: React.FC<IOverlayTrigger> = props=> {

    const [active, setActive] = useState<boolean>(false);

    return (
        <div className="overlay-trigger">

            <span
                tabIndex={ 0 }
                className="trigger"
                onClick={ ()=> {
                    if (props.trigger === "click" || props.trigger === undefined)
                        setActive(!active);
                } }
                onFocus={ ()=> {
                    if (props.trigger === "hover")
                    setActive(true);
                } }
                onBlur={ ()=> {
                    setActive(false);
                } }
            >
                { props.children }
            </span>

            <div className={ createClassName({ ["place-" + props.place]: true, "active": active }, "overlay-wrapper") }>
                <div className="overlay">
                    { props.overlay }
                </div>
            </div>

        </div>
    );
};

export default OverlayTrigger;