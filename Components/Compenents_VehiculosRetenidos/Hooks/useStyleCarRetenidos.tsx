import { useState } from "react";
import { Text, ActivityIndicator } from "react-native";

export const useStyleCarRetenidos = () => {
  const [Cargando, setCargando] = useState<boolean>(false);

  const BtnBuscar = () => {
    switch (Cargando) {
      case true:
        return <ActivityIndicator size={"small"} color={"white"} />;
      case false:
        return (
          <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
            Buscar vehículo
          </Text>
        );
    }
  };

  return {
    BtnBuscar,
    setCargando,
    Cargando,
  };
};
