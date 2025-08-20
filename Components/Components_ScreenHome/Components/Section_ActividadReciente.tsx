import { Text, View } from "react-native";
import Card_AccionesRegistro from "../SubComponents/Card_AccionesRegistro";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


export default function Section_ActividadReciente() {
  return (
    <View style={{ paddingBottom: 100, paddingTop: 10,paddingHorizontal:10 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Actividad reciente</Text>
        
    </View>
  )
}
