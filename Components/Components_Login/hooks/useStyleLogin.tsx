import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { ActivityIndicator } from "react-native";

export const useStyleLogin = () => {
  const [IconPass, setIconPass] = useState<boolean>(true);
  const [cargando, setCargando] = useState<boolean>(false);

  const BtnIconPass = () => {
    switch (IconPass) {
      case true:
        return <Feather name="eye-off" size={24} color="#adb5bd" />;

      case false:
        return <Feather name="eye" size={24} color="#adb5bd" />;
    }
  };

  const BtnIniciarSesion = () => {
    switch (cargando) {
      case true:
        return <ActivityIndicator size={"small"} color={"white"} />;
      case false:
        return (
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Iniciar sesion
          </Text>
        );
    }
  };

  return {
    BtnIconPass,
    IconPass,
    setIconPass,
    setCargando,
    cargando,
    BtnIniciarSesion,
  };
};
