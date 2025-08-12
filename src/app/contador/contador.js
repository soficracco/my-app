"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"

export default function contadorPage(){

    const [cuenta, setCuenta] = useState(0)

    useEffect(() =>{
        if (cuenta >= 20){
            setCuenta(0)
        } else if (cuenta <= -20){
            setCuenta(0)
        }
    })

    function incrementar(){
        setCuenta(cuenta+1)
    }

    function decrementar(){
        setCuenta(cuenta-1)
    }

    function cambioCheck(event){
        return(event.target.checked)
    }

    function guardarInput(event){
        setCuenta(event.target.value)
    }
    function cambiarValor(){
        let a = cambioCheck()
    }
    return(
        <>
            <Title text="Pagina contador"></Title>
            <Button texto="Cambiar valor" funcionalidad={cambiarValor}></Button>
            <Input type="checkbox" onChange={cambioCheck}></Input>
            <Input type="text" onChange={guardarInput}></Input>
        </>
    )
        
}