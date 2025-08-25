import { useGetUserGlobal } from "@/Components/Components_Globales/hooks/useGetUserGlobal";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const useGetUpdatePrincipalCar = () => {
  const { Datauser, GetDataUser } = useGetUserGlobal();
  const [cargando, setCargando] = useState<boolean>(false);
  const Get_DataUserCars = async (Dt: { matricula: any }) => {
    try {
      await AsyncStorage.getItem("cedula").then((cedula) => {
        SubGetUpdatePrincipalCar({ cedula: cedula, matricula: Dt.matricula });
      });
    } catch {}
  };

  const SubGetUpdatePrincipalCar = (DT: {
    matricula: string;
    cedula: string | null;
  }) => {
    setCargando(true);
    fetch(
      `https://bk-digget-app.vercel.app/api/data_cars/${Datauser?.cedula}/${DT?.matricula}`,
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
      }
    )
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        
      })
      .finally(() => {
        setCargando(false);
      });
    // };
    // PUT();
  };

  return {
    Get_DataUserCars,
    cargando,
  };
};
