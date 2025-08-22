import { useGetUserGlobal } from "@/Components/Components_Globales/hooks/useGetUserGlobal";
import { useState } from "react";
import { useStyleFormulario } from "./useStyleFormulario";
import { router } from "expo-router";

export const useFormulario = () => {
  const { BtnEnviarDenuncia, setCargandoDenuncia } = useStyleFormulario();
  const { GetDataUser, Datauser } = useGetUserGlobal();
  const [InputPlaca, setInputPlaca] = useState<any | null>(null);
  const [InputColor, setInputColor] = useState<any | null>();
  const [InputDescripcion, setInputDescripcion] = useState<any | null>();
  const [DropDownVehiculos, setDropDownVehiculos] = useState<string | null>();
  const [DropDownInfraccion, setDropDownInfraccion] = useState<string | null>();
  const [DataLocalizacion, setDataLocalizacion] = useState<
    Array<{
      latitude: number;
      longitude: number;
    }>
  >();
  const [ ErrorSend,setErrorSend] = useState<boolean>(false);

  const SubSend_Denuncia = () => {
    setCargandoDenuncia(true);
    fetch(`https://bk-digget-app.vercel.app/api/data_denuncias`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        cedula: Datauser?.cedula,
        placa_vehiculo: InputPlaca,
        tipo_vehiculo: DropDownVehiculos,
        tipo_infraccion: DropDownInfraccion,
        ubicacion: DataLocalizacion,
        descripcion: InputDescripcion,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        if (Data) {
          router.navigate({
            pathname: "/Mod/Modal_DatosEnviados",
            params: {
              descripcion:
                "El sistema ha registrado su denuncia y se encuentra en proceso de validación. Un equipo dará seguimiento al caso conforme a los protocolos establecidos.",
              titulo: "Denuncia enviada con éxitoo",
              Error: "false",
              tipo_s: "otra denuncia",
            },
          });
        } else if (!Data) {
          router.navigate({
            pathname: "/Mod/Modal_DatosEnviados",
            params: {
              descripcion:
                "El sistema no pudo registrar la denuncia debido a un problema técnico. Por favor, vuelve a intentarlo más tarde o contacta con soporte si el error persiste.",
              titulo: "No se pudo enviar la denuncia",
              Error: "true",
              tipo_s: "otra denuncia",
            },
          });
        }
      })
      .finally(() => {
        setCargandoDenuncia(false);
      });
  };

  const Send_Denuncia = () => {
    if (
      Datauser?.cedula &&
      InputPlaca &&
      DropDownVehiculos &&
      DropDownInfraccion &&
      DataLocalizacion &&
      InputDescripcion
    ) {
      setErrorSend(false);
      SubSend_Denuncia();
    }else{
      setErrorSend(true)
    }
  };

  return {
    setInputPlaca,
    InputPlaca,
    InputDescripcion,
    setInputDescripcion,
    DropDownInfraccion,
    DropDownVehiculos,
    setDropDownInfraccion,
    setDropDownVehiculos,
    setDataLocaliza: setDataLocalizacion,
    Send_Denuncia,
    BtnEnviarDenuncia,
    GetDataUser,
    ErrorSend
  };
};
