import { useState } from "react";
import { router } from "expo-router";
import { useStyleCarRetenidos } from "./useStyleCarRetenidos";

export interface ObjectosCars_Retenidos {
  cedula: string | undefined;
  placa_vehiculo: string | undefined;
  lugar_retencion: string | undefined;
  motivo_retencion: string | undefined;
  dia_retencion: string | undefined;
  hora_retencion: string | undefined;
  direccion: string | undefined;
}

export const useGetCarRetenidos = () => {
  const { Cargando, setCargando, BtnBuscar } = useStyleCarRetenidos();
  const [InputCedula, setInputCedula] = useState<string | undefined>();
  const [InputPlaca, setInputPlaca] = useState<string | undefined>();
  const [InputLugar, setInputLugar] = useState<string | undefined>();
  const [InputMotivo, setInputMotivo] = useState<string | undefined>();
  const [InputDia_retencion, setInputDia_retencion] = useState<
    string | undefined
  >();
  const [InputHora_retencion, setInputHora_retencion] = useState<
    string | undefined
  >();
  const [AutoEncontrado, setAutoEncontrado] = useState<boolean>(false);
  const [Vehiculo_Retenido, setVehiculo_Retenido] = useState<boolean>(false);
  const [DataCar_retenido, setDataCar_retenido] =
    useState<ObjectosCars_Retenidos>();

  const GetCar_retenido = () => {
    setCargando(true);
    fetch(
      `https://bk-digget-app.vercel.app/api/data_card_retenidos/${InputCedula}/${InputPlaca}`
    )
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        if (Data?.status == 200) {
          setDataCar_retenido(Data?.data);
          setAutoEncontrado(true);
          setVehiculo_Retenido(false);
        } else if (Data?.status == 404) {
          setAutoEncontrado(false);
          setVehiculo_Retenido(true);
          router.navigate("/Mod/Modal_RetenidoNoEncontrado");
        }
      })
      .finally(() => {
        setCargando(false);
      });
  };

  return {
    InputCedula,
    setInputCedula,
    InputPlaca,
    setInputPlaca,
    InputLugar,
    setInputLugar,
    InputDia_retencion,
    setInputDia_retencion,
    InputHora_retencion,
    setInputHora_retencion,
    InputMotivo,
    setInputMotivo,
    AutoEncontrado,
    GetCar_retenido,
    DataCar_retenido,
    BtnBuscar,
    setCargando,
    Cargando,
    Vehiculo_Retenido,
  };
};
