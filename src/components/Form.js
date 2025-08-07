import Button from "./Button";
import Input from "./Input";

export default function Form(props){
    return (
        <>
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <Button onClick={props.onClick} text={props.text}></Button>
        </>
    )
}