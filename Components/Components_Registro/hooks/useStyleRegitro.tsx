import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";

export const useStyleRegistro = () => {
  const [IconPass_A, setIconPass_A] = useState<boolean>(true);
  const [IconPass_B, setIconPass_B] = useState<boolean>(true);
  const [Seguiente, setSeguiente] = useState<boolean>(false);
  const [Cargando, setCargando] = useState<boolean>(false);
  const [ErrorCedula, setErrorCedula] = useState<boolean>(false);
  const [InputEmail, setInputEmail] = useState<string | undefined>();
  const [Inputcedula, setInputcedula] = useState<string | undefined>();
  const [InputPassA, setInputPassA] = useState<string | undefined>();
  const [InputPassB, setInputPassB] = useState<string | undefined>();
  const [InputNumero1, setInputNumero1] = useState<string | undefined>();
  const [InputNumero2, setInputNumero2] = useState<string | undefined>();
  const [Email_Valido, setEmail_Valido] = useState<boolean>(false);
  const [Pass_NoIgual, setPass_NoIgual] = useState<boolean>(false);

  const Validar_Cedula = (D: { Inputcedula: string | undefined }) => {
    console.log(D.Inputcedula);
    fetch(
      `https://bk-digget-app.vercel.app/api/data_validacion_cedula/${D?.Inputcedula}`
    )
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        if (Data?.status == 200) {
          setSeguiente(true)
          setErrorCedula(false);
        } else if (Data?.status == 404) {
          setErrorCedula(true);
        }
      });
  };

  const BtnPass_A = () => {
    switch (IconPass_A) {
      case true:
        return <Feather name="eye-off" size={24} color="#adb5bd" />;
      case false:
        return <Feather name="eye" size={24} color="#adb5bd" />;
    }
  };

  const BtnPass_B = () => {
    switch (IconPass_B) {
      case true:
        return <Feather name="eye-off" size={24} color="#adb5bd" />;
      case false:
        return <Feather name="eye" size={24} color="#adb5bd" />;
    }
  };

  const Btn_Registrar = () => {
    switch (Cargando) {
      case true:
        return <ActivityIndicator size={"small"} color={"white"} />;
      case false:
        return (
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Registrarse
          </Text>
        );
    }
  };

  const BtnSeguiente_Registro = (Tools: {
    SendRegistro: Function;
    Inputcedula: string | undefined;
  }) => {
    const { SendRegistro } = Tools;
    switch (Seguiente) {
      case true:
        return (
          <View style={{ gap: 10, alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                SendRegistro();
              }}
              style={{
                padding: 12,
                backgroundColor: "#0F539C",
                borderRadius: 10,
                width: "100%",
              }}
            >
              <Btn_Registrar />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSeguiente(false)}
              style={{
                padding: 12,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 18 }}
              >
                Volver atras
              </Text>
            </TouchableOpacity>
          </View>
        );
      case false:
        return (
          <TouchableOpacity
            onPress={() => {
              
              // Eso es un amala paractica pero por la velocidad es lo mejor hasta el momento
              if (InputEmail?.includes("@")) {
                setEmail_Valido(false);
                if (InputPassA == InputPassB) {
                  setPass_NoIgual(false);
                  Validar_Cedula({ Inputcedula: Tools?.Inputcedula })
                } else {
                  setPass_NoIgual(true);
                }
              } else {
                setEmail_Valido(true);
              }
            }}
            style={{
              padding: 12,
              backgroundColor: "#0F539C",
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
              Seguiente
            </Text>
          </TouchableOpacity>
        );
    }
  };

  return {
    IconPass_A,
    IconPass_B,
    setIconPass_A,
    setIconPass_B,
    BtnPass_A,
    BtnPass_B,
    Seguiente,
    setSeguiente,
    BtnSeguiente_Registro,
    Cargando,
    setCargando,
    Validar_Cedula,
    ErrorCedula,
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
    Pass_NoIgual,
  };
};
