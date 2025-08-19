import { Text, TouchableOpacity, View } from "react-native";
import Card_Principal from "../SubComponents/Card_Principal";
import { Style_SectionCards } from "../Style/Style_SectionCard";

export default function Section_Cards() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <Card_Principal />
      <View style={Style_SectionCards.ContainerBtns}>
        <TouchableOpacity style={Style_SectionCards.btn_Renovar}>
          <Text style={{ color: "white" }}>Renovar marbete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style_SectionCards.btn_CambiarSeguro}>
          <Text style={{ color: "white" }}>Cambiar seguro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
