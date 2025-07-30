import { View, TouchableOpacity, Text, BackHandler } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useVolverAtras } from "../Hook/useVolverAtras";
import { useEffect } from "react";

export default function Section_Header() {
  const { AlertVolver } = useVolverAtras();
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      AlertVolver();
      return false;
    });
  }, []);
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
          Reportar avería
        </Text>
      </View>
    </View>
  );
}
