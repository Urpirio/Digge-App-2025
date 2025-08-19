import { View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Style_Descripcion } from "../Style/Style_Descripcion";

export default function Section_Descripcion() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <View style={Style_Descripcion.Subcontainer}>
        <MaterialCommunityIcons name="information" size={30} color="#3498DB" />
        <Text style={Style_Descripcion.Text_Descripcion}>
          Reporta daños en vías, señales o infraestructura vial para que las
          autoridades puedan tomar acción y mantener las carreteras seguras para
          todos.
        </Text>
      </View>
    </View>
  );
}
