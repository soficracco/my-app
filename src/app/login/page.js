"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import clsx from "clsx";
export default function LoginPage(){

    const [logged, setLogged] = useState(true)
    const router = useRouter();


    function cambiarPagina(){
        let string ="/home" + "?hola=" + logged
        console.loga("hola")
        router.push("/home?hola=1")
        router.replace("/home") //hace lo mismo que push pero no te deja cambiar para atras
    
        if (
            logged != -1 && <h1>Usuario:{nombre} </h1>){
            router.push("/home")

        }
    }
    
    return(
        <>
        
        
        <Link href={"/contador"}>voy a contador</Link>
        <Button texto="voy a contador" funcionalidad={cambiarPagina}></Button>        
        </>
    )
    
 
}