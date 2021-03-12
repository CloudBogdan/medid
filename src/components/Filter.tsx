import { motion, useAnimation } from "framer-motion";
import React, { useContext, useEffect } from "react";
import Context from "../Context";
import { createClassName } from "../general/general";

interface IFilter {
    filters: {
        role: string
        title: string
    }[]
    active_filter: string
    setActiveFilter(value: string): void
}

const Filter: React.FC<IFilter> = props=> {

    const { todos } = useContext(Context);
    const controls = useAnimation();

    useEffect(()=> {

        controls.start({
            x: [0, -15, 15, -10, 10, 0]
        });

    }, [todos]);

    return (
        <div className="filter-wrapper">
            <div className="filter slot gap-4 ph-6 mb-4">
                
                { props.filters.map((filter, index)=>
                    <motion.button
                        key={ index }
                        style={ { whiteSpace: "nowrap" } }
                        onClick={ ()=> props.setActiveFilter(filter.role) }
                        className={ createClassName({ "color-primary": props.active_filter === filter.role }, "as-link") }
                        animate={ (filter.role === "all" && props.active_filter !== "all") ? controls : false }
                        transition={ (filter.role === "all" && props.active_filter !== "all") ? { duration: .4, ease: "easeInOut" } : {} }
                    >
                        { filter.title }
                    </motion.button>
                ) }

                <div />

            </div>
        </div>
    );
};

export default Filter;