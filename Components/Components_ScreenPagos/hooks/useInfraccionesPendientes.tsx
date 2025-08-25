import { useState } from "react";
import { View, Text } from "react-native";

export const useInfraccionesPendientes = () => {
  const [StatusContainerPagar, setStatusContainerPagar] = useState(false);

  const StatusInfracciones = (D: { Status: String  | undefined }) => {
    switch (D.Status) {
      case "Media":
        return (
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical:2,
              borderRadius: 8,
              backgroundColor: "#ff99002d",
            }}
          >
            <Text style={{ color: "#FF9900" }}>Media</Text>
          </View>
        );
      case "Regular":
        return (
          <View
            style={{
              paddingHorizontal: 10,
              borderRadius: 8,
              backgroundColor: "#15803c30",
              paddingVertical:2
            }}
          >
            <Text style={{ color: "#15803D" }}>Regular</Text>
          </View>
        );
      case "Alta":
        return (
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical:2,
              borderRadius: 8,
              backgroundColor: "#ee2b243b",
            }}
          >
            <Text style={{ color: "#EE2A24" }}>Alta</Text>
          </View>
        );
    }
  };

  return {
    StatusContainerPagar,
    setStatusContainerPagar,
    StatusInfracciones,
  };
};
