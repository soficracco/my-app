"use client"

import clsx from "clsx";
import styles from "@/components/Button.module.css"

export default function Button(props){
    return(
        <>
            <button className={
                clsx(
                    {
                        [styles.button] : props.estilo,
                        [styles.incrementando] : props.color == "verde",
                        [styles.decrementando] : props.color == "rosa",
                

                    }    
                )       
                

                } onClick={props.funcionalidad}>{props.texto}</button>
        </>
    )
}