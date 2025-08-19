import { Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { Style_SectionHeader } from "../Style/Style_SectionHeader";

export default function Section_Header() {
  return (
    <View style={Style_SectionHeader.ContainerHeader}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={Style_SectionHeader.BtnVolver}
      >
        <Feather name="arrow-left" size={28} color="#f8f9faa7" />
        <Text style={{ color: "#f8f9faa7" }}>Volver</Text>
      </TouchableOpacity>
      <View>
        <Text style={Style_SectionHeader.Text_AgregarVehiculo}>
          Agregar vehículo
        </Text>
      </View>
    </View>
  );
}
