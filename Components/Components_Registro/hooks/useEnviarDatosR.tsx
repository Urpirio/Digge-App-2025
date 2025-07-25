import { useState } from "react";

export const useEnviarDatosR = () =>{
    const [InputEmail,setInputEmail] = useState<string>();
    const [Inputcedula,setInputcedula] = useState<string>();
    const [InputPassA,setInputPassA] = useState<string>();
    const [InputPassB,setInputPassB] = useState<string>();


    return{
        InputEmail,
        InputPassA,
        InputPassB,
        Inputcedula,
        setInputEmail,
        setInputPassA,
        setInputPassB,
        setInputcedula,
    }
}