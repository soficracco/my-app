"use client"

export default function Input(){
    function escribi(){
        console.log("Me escribí")
    }

    return(
        <>
            <input type="text" onChange={escribi}></input>
        </>
    )
}