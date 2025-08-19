import { View, TouchableOpacity, Text, BackHandler } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useVolverAtras } from "../../Components_Globales/hooks/useVolverAtras";
import { useEffect } from "react";
import { Style_Header } from "../Style/Style_Header";

export default function Section_Header() {
  const { AlertVolver } = useVolverAtras();
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);
  return (
    <View style={Style_Header.ContainerHeader}>
      <TouchableOpacity
        onPress={() => AlertVolver()}
        style={Style_Header.BtnVolver}
      >
        <Feather name="arrow-left" size={28} color="#f8f9faa7" />
        <Text style={{ color: "#f8f9faa7" }}>Volver</Text>
      </TouchableOpacity>
      <View>
        <Text style={Style_Header.Text_resporte}>Reportar avería</Text>
      </View>
    </View>
  );
}
