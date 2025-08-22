import { useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


export const useStyleFormulario = () => {
  const [Cargando, setCargando] = useState<boolean>(false);

  const BtnEnviarReporte = () => {
    switch (Cargando) {
      case true:
        return <ActivityIndicator size={"small"} color={"white"} />;
      case false:
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap:5,
            }}
          >
            <FontAwesome5 name="tools" size={18} color="white" />
            <Text style={{ fontWeight: "600", color: "white" }}>
              Enviar Reporte
            </Text>
          </View>
        );
    }
  };

  return {
    BtnEnviarReporte,
    setCargando,
  };
};
