import { View, TouchableOpacity, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useVolverAtras } from "@/Components/Components_Globales/hooks/useVolverAtras";
import { useCallback } from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "expo-router";
import { Style_SectionHeader } from "../Style/Style_SectionHeader";

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
    <View style={Style_SectionHeader.ContainerHeader}>
      <TouchableOpacity
        onPress={() => AlertVolver()}
        style={Style_SectionHeader.Btn_Volver}
      >
        <Feather name="arrow-left" size={28} color="#f8f9faa7" />
        <Text style={{ color: "#f8f9faa7" }}>Volver</Text>
      </TouchableOpacity>
      <View>
        <Text style={Style_SectionHeader.Text_Denuncia}>Nueva denuncia</Text>
      </View>
    </View>
  );
}
