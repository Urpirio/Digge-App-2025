import { Text, TouchableOpacity, View } from "react-native";
import { Style_FormPart3 } from "../Style/Style_FormPart3";

export default function Form_Part3() {
  return (
    <View style={Style_FormPart3.Container_btnAgregar}>
      <TouchableOpacity style={Style_FormPart3.BtnAgregar}>
        <Text style={Style_FormPart3.Text_Agregar}>+ Agregar Vehículo</Text>
      </TouchableOpacity>
    </View>
  );
}
