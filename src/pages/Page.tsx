import { motion, Variants } from "framer-motion";
import React from "react";
import { createClassName, default_ease } from "../general/general";

const Page: React.FC<{ className?: string }> = ({ children, className })=> {

    const variants: Variants = {
        initial: {
            y: 100,
            opacity: 0,
            zIndex: 5,
            position: "fixed"
        },
        animate: {
            y: 0,
            opacity: 1,
            zIndex: 0,
            position: "absolute"
        },
        exit: {
            y: -25,
            opacity: 1,
            zIndex: -5,
            position: "absolute"
        }
    }
    
    return (
        <motion.main
            variants={ variants }
            initial="initial"
            animate="animate"
            exit="exit"
            transition={ { duration: .4, ease: default_ease } }
            className={ createClassName([className], "page") }
        >{ children }</motion.main>
    );
};

export default Page;