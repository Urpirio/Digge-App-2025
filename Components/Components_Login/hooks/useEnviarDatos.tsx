import { useState } from "react";

export const useEnviarDatos = () =>{
    const [InputEmail,setInputEmail] = useState<string>();
    const [InputPass,setInputPass] = useState<string>();

    return({
        InputEmail,
        InputPass,
        setInputEmail,
        setInputPass,

    })
};
 