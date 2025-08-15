import { useState } from "react";
import { Switch } from "react-native";
import { Text } from "react-native";

export const useStyleScreenPerfil = () => {
  const EstadoLicencia = (Tools: { Estado: string }) => {
    const { Estado } = Tools;
    switch (Estado) {
      case " Licencia activa":
        return (
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 20,
              backgroundColor: "#4BB04D",
              color: "white",
              fontWeight: "300",
              fontSize: 12,
            }}
          >
            Licencia activa
          </Text>
        );
      case "Licencia inactiva":
        return (
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 20,
              backgroundColor: "#FF9700",
              color: "white",
              fontWeight: "300",
              fontSize: 12,
            }}
          >
            Licencia inactiva
          </Text>
        );
      case "Licencia de estudiante":
        return (
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 20,
              backgroundColor: "#0FB9CB",
              color: "white",
              fontWeight: "300",
              fontSize: 12,
            }}
          >
            Licencia de estudiante
          </Text>
        );
      case "Sin licencia":
        return (
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 20,
              backgroundColor: "#EE2A24",
              color: "white",
              fontWeight: "300",
              fontSize: 12,
            }}
          >
            Sin licencia
          </Text>
        );
    }
  };

  return {
    EstadoLicencia
  };
};
