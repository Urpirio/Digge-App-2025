import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useGetPerfil = () => {
  const [Datauser, setDatauser] = useState<{
    foto_perfil: string | undefined;
    nombres: string | undefined;
    apellidos: string | undefined;
    cedula: string | undefined;
    correo: string | undefined;
    password: string | undefined;
    numero_telefonico: string | undefined;
    numero_telefonico_s: string | undefined;
    estatus_licencia: string | undefined;
    direccion_vivienda: string | undefined;
  }>();

  const SubGetDataUser = (Tools: { cedula: string | null }) => {
    const { cedula } = Tools;
    fetch(`https://bk-digget-app.vercel.app/api/data_user/${cedula}`)
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        setDatauser(Data);
        console.log(Data);
      });
  };

  const GetDataUser = async () => {
    try {
      await AsyncStorage.getItem("cedula").then((cedula) => {
        SubGetDataUser({ cedula: cedula });
      });
    } catch {}
  };
  return {
    GetDataUser,
    Datauser,
  };
};
