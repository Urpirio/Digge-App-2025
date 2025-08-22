import { useState } from "react";
import { useGetUserGlobal } from "@/Components/Components_Globales/hooks/useGetUserGlobal";
import { useStyleFormulario } from "./useStyleFormulario";
import { router } from "expo-router";

export const useFormulario = () => {
  const { BtnEnviarReporte, setCargando } = useStyleFormulario();
  const { GetDataUser, Datauser } = useGetUserGlobal();
  const [DropDownValue, setDropDownValue] = useState<string>();
  const [InputCarriles, setInputCarriles] = useState<string>();
  const [TextTareaDescripcion, setTextTareaDescripcion] = useState<string>();
  const [Photos, setPhotos] = useState<any>();
  const [Videos, setVideos] = useState<any>();
  const [Dlocalizacion, setDlocalizacion] =
    useState<Array<{ latitude: string; longitude: string }>>();
  const [DataFotos, setDataFotos] = useState<any | null>([]);
  const [Localizacion, setLocalizacion] = useState<string | null>(
    "Ubicación actaul (GPS)"
  );
  const [ErrorSend, setErrorSend] = useState<boolean>(false);

  const SubSend_Reportes = () => {
    setCargando(true);
    fetch(`https://bk-digget-app.vercel.app/api/data_reportes`, {
      headers: { "Content-Type": "Application/json" },
      method: "POST",
      body: JSON.stringify({
        cedula: Datauser?.cedula,
        tipo_dn: DropDownValue,
        ubicacion: Dlocalizacion ? Dlocalizacion[0] : null,
        descripcion: TextTareaDescripcion,
        estado_reporte: "En proceso",
        Carriles_afectados: InputCarriles,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        if (Data) {
          router.navigate({
            pathname: "/Mod/Modal_DatosEnviados",
            params: {
              descripcion:
                "El sistema ha registrado su avería y se encuentra en proceso de gestión. Un equipo de soporte dará seguimiento al caso para resolverlo lo antes posible.",
              titulo: "Avería reportada con éxito",
              Error: "false",
              tipo_s: "otro reporte",
            },
          });
        } else if (!Data) {
          router.navigate({
            pathname: "/Mod/Modal_DatosEnviados",
            params: {
              descripcion:
                "El sistema no pudo registrar la avería debido a un problema técnico. Por favor, vuelve a intentarlo más tarde o contacta con soporte si el error persiste.",
              titulo: "No se pudo enviar el reporte",
              Error: "true",
              tipo_s: "otro reporte",
            },
          });
        }
      })
      .finally(() => {
        setCargando(false);
      });
  };

  const Send_Reporte = () => {
    if (
      Datauser?.cedula &&
      DropDownValue &&
      Dlocalizacion &&
      TextTareaDescripcion &&
      InputCarriles
    ) {
      setErrorSend(false);
      SubSend_Reportes();
    } else {
      setErrorSend(true);
    }
  };

  return {
    DropDownValue,
    setDropDownValue,
    InputCarriles,
    setInputCarriles,
    TextTareaDescripcion,
    setTextTareaDescripcion,
    Photos,
    setPhotos,
    Videos,
    setVideos,
    Localizacion,
    setLocalizacion,
    GetDataUser,
    Dlocalizacion,
    setDlocalizacion,
    DataFotos,
    setDataFotos,
    BtnEnviarReporte,
    Send_Reporte,
    ErrorSend,
  };
};
