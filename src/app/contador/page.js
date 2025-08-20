"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"
import { useEffect, useState } from "react"

import clsx from "clsx";


export default function contadorPage(){

    const [cuenta, setCuenta] = useState(0)
    const [checked, setChecked] =useState(false)
    const [color, setColor] = useState("rosa");

    useEffect(() =>{
        if (cuenta >= 20){
            setCuenta(0)
        } else if (cuenta <= -20){
            setCuenta(0)
        }
    })
    


  
    function manejarBoton(){
        
        if (checked){
            setCuenta (cuenta + 1);

        }else {
            setCuenta(cuenta - 1 );
        }
    }
    function cambioCheck(event){
        setChecked(event.target.checked)
        setColor(event.target.checked ? "verde" : "rosa")

        if (event.target.checked){
            setColor("verde")
        } else {
            setColor("rosa")
        }
    }
    


    function guardarInput(event){
        setCuenta(event.target.value)
    }

   
    return(
        <>

        {cuenta == 0 && <h3>El contador vale 0 </h3>} 
        {   cuenta >= 0 ? <h3>el contador es positivo</h3>
            : <h3>el contador es negativo</h3>
            
        }
            <Title text="Pagina contador"></Title>
            <Button texto="Sube y Baja " funcionalidad={manejarBoton} color={color}></Button>
            <Input type="checkbox" onChange={cambioCheck}></Input>
            
            <h3>Contador:{cuenta} </h3>
        </>             
    )
        
}                                           