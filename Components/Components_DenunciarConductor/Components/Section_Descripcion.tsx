import { View,Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Section_Descripcion() {
  return (
       <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          paddingVertical: 15,
          paddingHorizontal: 20,
          justifyContent: "space-between",
          borderRadius: 15,
          borderColor:'#ced4da56',
          boxShadow:'0px 0px 10px 0px #dbdbdb36',
          backgroundColor:'#EBF5FB'
        }}
      >
        <MaterialCommunityIcons name="information" size={30} color="#3498DB" />
        <Text style={{ paddingHorizontal:15,color:'#2874A6',fontSize:12 }}>
          Reporta el mal comportamiento de otros conductores para mejorar la seguridad vial. Tu denuncia será evaluada.
        </Text>
      </View>
    </View>
  )
}
