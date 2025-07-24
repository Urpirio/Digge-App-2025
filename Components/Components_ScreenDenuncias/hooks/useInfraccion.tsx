import { useState } from "react";
import { View, Text } from "react-native";

export const useInfraccion = () => {
  const Status = (D: { Status: String }) => {
    switch (D.Status) {
      case "Procesando":
        return (
          <View
            style={{
              padding: 5,
              borderRadius: 10,
              backgroundColor: "#ff99004e",
            }}
          >
            <Text style={{ color: "#FF9900", fontWeight: "400" }}>
              Procesando
            </Text>
          </View>
        );
      case "No procesable":
        return (
          <View
            style={{
              padding: 5,
              borderRadius: 10,
              backgroundColor: "#ee2b2449",
            }}
          >
            <Text style={{ color: "#EE2A24", fontWeight: "400" }}>
              No procesable
            </Text>
          </View>
        );
      case "Procesado":
        return (
          <View
            style={{
              padding: 5,
              borderRadius: 10,
              backgroundColor: "#1568c034",
            }}
          >
            <Text style={{ color: "#1569C0", fontWeight: "400" }}>
              Procesado
            </Text>
          </View>
        );
    }
  };

  return {
    Status,
  };
};
