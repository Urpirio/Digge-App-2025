import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Style_SectionDescripcion } from "../Style/Style_SectionDescripcion";

export default function Section_Descripcion() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <View style={Style_SectionDescripcion.SubContainer_Descripcion}>
        <MaterialCommunityIcons name="information" size={30} color="#3498DB" />
        <Text style={Style_SectionDescripcion.Text_Descripcion}>
          Reporta el mal comportamiento de otros conductores para mejorar la
          seguridad vial. Tu denuncia será evaluada.
        </Text>
      </View>
    </View>
  );
}
