import { useState } from "react";
import { useFocusEffect } from "expo-router";
import { useCallback,useEffect } from "react";

export const useEditarPerfil = () =>{
      const [Input_Email, setInput_Email] = useState<string>();
      const [Input_NumeroT_primario, setInput_NumeroT_primario] = useState<
        string | undefined
      >();
      const [Input_NumeroT_secundario, setInput_NumeroT_secundario] = useState<
        string | undefined
      >();
      const [Input_Direccion_Vivienda, setInput_Direccion_Vivienda] = useState<
        string | undefined
      >();
      const [EstadoGuardar, setEstadoGuardar] = useState<boolean>(false);
      const [bgStatus,setbgStatus] = useState<number>(0);
    
      useFocusEffect(useCallback(()=>{
        setTimeout(()=>{
            setbgStatus(800)
        },400)
      },[]))
    
      useEffect(() => {
        if (
          Input_Email ||
          Input_Direccion_Vivienda ||
          Input_NumeroT_primario ||
          Input_NumeroT_secundario
        ) {
          setEstadoGuardar(true);
        } else if (
          !Input_Email ||
          !Input_Direccion_Vivienda ||
          !Input_NumeroT_primario ||
          !Input_NumeroT_secundario
        ) {
          setEstadoGuardar(false);
        }
      }, [
        Input_Direccion_Vivienda,
        Input_Email,
        Input_NumeroT_primario,
        Input_NumeroT_secundario,
      ]);





    return {
        Input_Email,
        Input_Direccion_Vivienda,
        Input_NumeroT_primario,
        Input_NumeroT_secundario,
        setInput_Direccion_Vivienda,
        setInput_Email,
        setInput_NumeroT_primario,
        setInput_NumeroT_secundario,
        EstadoGuardar,
        bgStatus,
        setbgStatus,
    }
}