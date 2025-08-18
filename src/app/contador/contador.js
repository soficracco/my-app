"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"
import { useEffect, useState } from "react"
export default function contadorPage(){

    const [cuenta, setCuenta] = useState(0)
    const [checked, setChecked] =useState(false)

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
    }

    function guardarInput(event){
        setCuenta(event.target.value)
    }

   
    return(
        <>
            <Title text="Pagina contador"></Title>
            <Button texto="Cambiar valor" funcionalidad={manejarBoton}></Button>
            <Input type="checkbox" onChange={cambioCheck}></Input>
            <Input type="text" onChange={guardarInput}></Input>
        </>
    )
        
}