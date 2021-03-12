import { motion } from "framer-motion";
import React from "react";

export const FadeText: React.FC<React.HTMLAttributes<HTMLDivElement>> = props=> {
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { duration: .3, ease: "linear" } }
            layout
            { ...props as any }
        >
            { props.children }
        </motion.div>
    );
};