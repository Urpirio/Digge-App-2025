import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGetUserGlobal } from "@/Components/Components_Globales/hooks/useGetUserGlobal";

export interface ObjectosCars {
  cedula: string | undefined;
  matricula: string | undefined;
  modelo: string | undefined;
  year: string | undefined;
  color: string | undefined;
  tipo_combustible: string | undefined;
  stado_marbete: string | undefined;
  Estado_principal: boolean | undefined | null;
}

export const useGetVehiculos = () => {
  const { Datauser, GetDataUser } = useGetUserGlobal();
  const [ContarCars, setContarCars] = useState<number | undefined>(0);
  const [DataCar_Principanl, setDataCar_Principal] = useState<ObjectosCars>();
  const [Data_userCar, setData_useCar] = useState<Array<ObjectosCars>>();

  const SubGet_userCars = (Tools: { cedula: string | null }) => {
    fetch(`https://bk-digget-app.vercel.app/api/data_cars/${Tools?.cedula}`)
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        setData_useCar(Data);
        setContarCars(Data?.length);
        const Dt_Principal = Data?.filter(
          (D: { Estado_principal: boolean }) => D.Estado_principal == true
        )[0];
        setDataCar_Principal(Dt_Principal);
      });
  };

  const Get_DataUserCars = async () => {
    try {
      await AsyncStorage.getItem("cedula").then((cedula) => {
        SubGet_userCars({ cedula: cedula });
      });
    } catch {}
  };

  return {
    Get_DataUserCars,
    Data_userCar,
    Datauser,
    GetDataUser,
    ContarCars,
    DataCar_Principanl,
  };
};
