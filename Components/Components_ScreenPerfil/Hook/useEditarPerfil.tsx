import { useState } from "react";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect } from "react";
import { useGetPerfil } from "./useGetPerfil";

export const useEditarPerfil = () => {
  const { GetDataUser, Datauser } = useGetPerfil();
  const [Input_Email, setInput_Email] = useState<string | undefined>("");

  const [Input_NumeroT_primario, setInput_NumeroT_primario] = useState<
    string | undefined
  >("");
  const [Input_NumeroT_secundario, setInput_NumeroT_secundario] = useState<
    string | undefined
  >("");
  const [Input_Direccion_Vivienda, setInput_Direccion_Vivienda] = useState<
    string | undefined
  >("");
  const [EstadoGuardar, setEstadoGuardar] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      GetDataUser();
    }, [])
  );

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
    Datauser,
  };
};
