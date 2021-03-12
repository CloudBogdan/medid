import React from "react";
import { createClassName } from "../general/general";
import { ArrowLeftLineIcon } from "./ui/Icons";

interface IItem {
    
}

const Item: React.FC<IItem & React.HTMLAttributes<HTMLDivElement>> = props=> {

    const className = createClassName(["item"], props.className);
    
    return (
        <div className={ className } { ...(props as any) }>
            { props.children }

            <ArrowLeftLineIcon />

        </div>
    );
};

export default Item;