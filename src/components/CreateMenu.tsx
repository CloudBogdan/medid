import React, { createRef, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Context from "../Context";
import { createClassName, formatDate } from "../general/general";
import { ITodo } from "./Todo";
import Checkbox from "./ui/Checkbox";
import { ArrowRightLineIcon } from "./ui/Icons";

interface ICreateMenu {
    active: boolean
    setActive(value: boolean): void
}

const CreateMenu: React.FC<ICreateMenu> = props=> {

    const
        [title, setTitle] = useState<ITodo["title"]>(""),
        [checked, setChecked] = useState<boolean>(false);
    const { createTodo } = useContext(Context);
    const ref = createRef<HTMLInputElement>();
    const history = useHistory();
    
    useEffect(()=> {

        if (props.active)
            ref.current?.focus();
        
    }, [props.active, checked]);
    useEffect(()=> {

        window.onpopstate = (e: PopStateEvent)=> {
            e.preventDefault();
            props.setActive(false);

            if (props.active)
                history.push("/");
            
        };
        
    }, [props.active]);
    
    function create(e: React.FormEvent): void {
        e.preventDefault();

        createTodo({
            id: Date.now(),
            title, checked,
            date: formatDate(new Date)
        });
        setTitle("");
        setChecked(false);
        props.setActive(false);

    }
 
    return (
        <div className={ createClassName({ active: props.active }, "create-menu-wrapper") }>
            <div className="empty-area" onClick={ ()=> props.setActive(false) } />

            <form className="create-menu display-flex flex-column gap-1" onSubmit={ create }>
                
                <div className="width-fill slot gap-1">
                    <div className="width-fill slot gap-1">
                        <Checkbox shadow checked={ checked } onChange={ ()=> setChecked(!checked) } />
                        <input ref={ ref } type="text" value={ title } onChange={ e=> setTitle(e.target.value) } />
                    </div>
                    <button type="submit" className="color-primary" disabled={ !!!title }><ArrowRightLineIcon /></button>
                </div>
                
            </form>

        </div>
    );
};

export default CreateMenu;