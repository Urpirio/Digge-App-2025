import { useState } from "react";
import { useStyleRegistro } from "./useStyleRegitro";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useEnviarDatosR = () => {
  const {
    IconPass_A,
    IconPass_B,
    setIconPass_A,
    setIconPass_B,
    BtnPass_A,
    BtnPass_B,
    setSeguiente,
    Seguiente,
    BtnSeguiente_Registro,
    Cargando,
    setCargando,
    ErrorCedula,
    Validar_Cedula,
    InputEmail,
    InputPassA,
    InputPassB,
    Inputcedula,
    setInputEmail,
    setInputPassA,
    setInputPassB,
    setInputcedula,
    InputNumero1,
    InputNumero2,
    setInputNumero1,
    setInputNumero2,
    Email_Valido,
    Pass_NoIgual
  } = useStyleRegistro();

  const Data_InLocal = async (D: { cedula: string }) => {
    try {
      await AsyncStorage.setItem("cedula", D?.cedula);
    } catch (e) {}
  };

  const SubSend_Registrar = (Dt: {
    fotoPerfil: string;
    nombres: string;
    apellidos: string;
    estatus_licencia: string;
    direccion_vivienda: string;
  }) => {
    fetch("https://bk-digget-app.vercel.app/api/data_usuarios", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        foto_perfil: Dt.fotoPerfil,
        nombres: Dt?.nombres,
        apellidos: Dt?.apellidos,
        cedula: Inputcedula,
        correo: InputEmail,
        password: InputPassA,
        numero_telefonico: InputNumero1,
        numero_telefonico_s: InputNumero2,
        estatus_licencia: Dt?.estatus_licencia,
        direccion_vivienda: Dt?.direccion_vivienda,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        console.log(Data);
        router.navigate("/Screens/AScreenHome");
        Data_InLocal({ cedula: Data?.cedula });
      })
      .finally(() => {
        setCargando(false);
      });
  };

  const Send_Registrar = () => {
    setCargando(true);
    fetch(
      `https://bk-digget-app.vercel.app/api/data_validacion_cedula/${Inputcedula}`
    )
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        if (Data?.status == 200) {
          //   setErrorCedula(false);
          SubSend_Registrar({
            fotoPerfil: Data?.Data?.foto_perfil,
            nombres: Data?.Data?.nombres,
            apellidos: Data?.Data?.apellidos,
            estatus_licencia: Data?.Data?.estatus_licencia,
            direccion_vivienda: Data?.Data?.direccion_vivienda,
          });
        } else if (Data?.status == 404) {
          //   setErrorCedula(true);
          setCargando(false);
        }
      })
      .finally(() => {});
  };

  return {
    InputEmail,
    InputPassA,
    InputPassB,
    Inputcedula,
    setInputEmail,
    setInputPassA,
    setInputPassB,
    setInputcedula,
    InputNumero1,
    InputNumero2,
    setInputNumero1,
    setInputNumero2,
    IconPass_A,
    IconPass_B,
    setIconPass_A,
    setIconPass_B,
    BtnPass_A,
    BtnPass_B,
    Seguiente,
    setSeguiente,
    BtnSeguiente_Registro,
    ErrorCedula,
    Send_Registrar,
    Validar_Cedula,
    Email_Valido,
    Pass_NoIgual
  };
};
