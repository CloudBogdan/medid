import React from "react";
import { createClassName } from "../../general/general";
import { CheckmarkIcon } from "./Icons";

interface ICheckbox {
    checked: boolean
    disabled?: boolean
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void
    shadow?: boolean
};

const Checkbox: React.FC<ICheckbox> = props=> (
    <div className={ createClassName({ "shadow": props.shadow }, "checkbox")}>

        <label>
            <input disabled={ props.disabled } type="checkbox" checked={ props.checked } onChange={ props.onChange } />

            <div className="inner">
                <CheckmarkIcon />
            </div>
            
        </label>

    </div>  
);

export default Checkbox;