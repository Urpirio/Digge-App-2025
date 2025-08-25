import { useGetUserGlobal } from "@/Components/Components_Globales/hooks/useGetUserGlobal";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Objectos_Infracciones {
  cedula: string | undefined;
  tipo_infraccion: string | undefined;
  descripcion: string | undefined;
  placa_vehiculo: string | undefined;
  ubicacion: {
    long: string | undefined;
    lg: string | undefined;
  };
  Hora: string | undefined;
  Estado_infraccion: string | undefined;
  costo_multa: number | undefined;
  prioridad_pago: string | undefined;
  fecha_pago: string | undefined;
}

export interface FiltrosPendientes {
  Cantidad: number;
  Saldo: number | undefined;
}

export interface FiltroPagadas {
  Cantidad: number;
  Saldo: number | undefined;
}

export const useGet_Infracciones = () => {
  const { Datauser, GetDataUser } = useGetUserGlobal();
  const [Data_Infracciones, setData_Infracciones] =
    useState<Array<Objectos_Infracciones>>();

  const [filtro_DataPendiente, setfiltro_DataPendiente] =
    useState<FiltrosPendientes>();
  const [filtro_DataPagadas, setfiltro_DataPagadas] = useState<FiltroPagadas>();

  const getDataUser = async () => {
    try {
      await AsyncStorage.getItem("cedula").then((cedula) => {
        Get_Infracciones({ cedula: cedula });
      });
    } catch {}
  };

//   const Filtrar_Infracciones = (Dt: { Data: Array<Objectos_Infracciones> }) => {
//     console.log(Dt.Data);
//     let Num_pendientes: any;
//     let Num_Pagada: any;
//     const FiltroPendientes = Dt?.Data.filter((D) => D.fecha_pago == null);
//     const FiltroPagadas = Dt?.Data.filter((D) => D.fecha_pago != null);



//     setfiltro_DataPagadas({
//       Cantidad: FiltroPagadas.length,
//       Saldo: FiltroPagadas[0].costo_multa,
//     });
//     setfiltro_DataPendiente({
//       Cantidad: FiltroPendientes.length,
//       Saldo: FiltroPendientes[0].costo_multa,
//     });

//     console.log(filtro_DataPendiente)
//   };

  const Get_Infracciones = (D: { cedula: string | null }) => {
    GetDataUser();
    fetch(`https://bk-digget-app.vercel.app/api/data_infracciones/${D?.cedula}`)
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        setData_Infracciones(Data);
        // Filtrar_Infracciones({ Data: Data });
      })
      .finally(() => {});
  };

  return {
    Datauser,
    GetDataUser,
    getDataUser,
    Data_Infracciones,
    // filtro_DataPagadas,
    // filtro_DataPendiente,
  };
};
