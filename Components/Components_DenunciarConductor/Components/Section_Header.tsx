import { View, TouchableOpacity, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useVolverAtras } from "@/Components/Components_Globales/hooks/useVolverAtras";
import { useCallback } from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "expo-router";

export default function Section_Header() {
  const { AlertVolver } = useVolverAtras();
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
      });
    }, [])
  );
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: "#0F539C",
      }}
    >
      <TouchableOpacity
        onPress={() => AlertVolver()}
        style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
      >
        <Feather name="arrow-left" size={28} color="#f8f9faa7" />
        <Text style={{ color: "#f8f9faa7" }}>Volver</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "300", color: "white" }}>
          Nueva denuncia
        </Text>
      </View>
    </View>
  );
}
