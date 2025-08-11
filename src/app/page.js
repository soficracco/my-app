"use client"
import Button from "@/components/Button"
import Input from "@/components/Input"
import Form from "@/components/Form"

export default function Home() {

  function imprimirChau(){
    console.log("CHAU")
  }
  return (
    <>
      <h1>Esta es nuestra página web</h1>
      <hr></hr>
      <Form></Form>
      <Button funcionalidad={imprimirChau} texto={"botón"}></Button>
    </>
  );
}
