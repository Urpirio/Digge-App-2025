import { View, Text, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { Style_CardCrearDenuncias } from "../Style/Style_CardCrearDenuncias";

export default function Card_CrearDenuncia() {
  return (
    <View style={Style_CardCrearDenuncias.Card}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Nueva denuncia o reporte
        </Text>
        <Text style={{ fontWeight: "300" }}>3 denuncias realizadas</Text>
      </View>
      <TouchableOpacity style={Style_CardCrearDenuncias.BtnPlus}>
        <Octicons name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
