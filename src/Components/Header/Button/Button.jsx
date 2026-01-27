import React from "react";
import { motion, scale } from "motion/react"
import style from "../style.module.css"

function Button(props) {
    return (
        <div className={`flex items-center ${style.btnTop}`}>
            <motion.a
            href="#" 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
            // whileHover={{scale: 1.15}}
            className="cursor-pointer font-libre hover:text-[#ff8610] text-3xl">
                {props.name}
            </motion.a>
        </div>
        
    )
}

export default Button;