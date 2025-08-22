import { useState } from "react";
import { useStyleLogin } from "./useStyleLogin";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ObjectUsuario } from "@/Components/Components_Globales/hooks/useGetUserGlobal";

export const useEnviarDatos = () => {
  const { BtnIconPass, IconPass, setIconPass, setCargando, BtnIniciarSesion } =
    useStyleLogin();

  const [InputEmail, setInputEmail] = useState<string>("40216789412");
  const [InputPass, setInputPass] = useState<string>("pass987654");
  const [Data_User, setData_User] = useState<ObjectUsuario>();

  const Data_InLocal = async (D: { cedula: string }) => {
    try {
      await AsyncStorage.setItem("cedula", D?.cedula);
    } catch (e) {}
  };

  const IniciarSesion = () => {
    setCargando(true);
    fetch(
      `https://bk-digget-app.vercel.app/api/data_usuarios/${InputEmail}/${InputPass}`
    )
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        console.log(Data);
        setData_User(Data);
        setTimeout(() => {
          router.navigate({
            pathname: "/Screens/AScreenHome",
          });
        }, 500);
        Data_InLocal({ cedula: Data?.cedula });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  };

  return {
    InputEmail,
    InputPass,
    setInputEmail,
    setInputPass,
    IniciarSesion,
    BtnIconPass,
    IconPass,
    setIconPass,
    BtnIniciarSesion,
  };
};
