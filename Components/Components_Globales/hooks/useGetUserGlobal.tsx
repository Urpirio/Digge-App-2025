import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface ObjectUsuario {
  foto_perfil: string | undefined;
  nombres: string | undefined;
  apellidos: string | undefined;
  cedula: string | undefined;
  correo: string | undefined;
  password: string | undefined;
  numero_telefonico: string | undefined;
  numero_telefonico_s: string | undefined;
  estatus_licencia: string | undefined;
};

export const useGetUserGlobal = () => {
  const [Datauser, setDatauser] = useState<ObjectUsuario>();

  const SubGetDataUser = (Tools: { cedula: string | null }) => {
    fetch(`https://bk-digget-app.vercel.app/api/data_user/${Tools?.cedula}`)
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        setDatauser(Data);
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
