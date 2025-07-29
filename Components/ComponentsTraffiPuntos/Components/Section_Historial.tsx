import { View } from "react-native";
import Card_Renovacion from "../SubComponents/Card_Renovacion";

export default function Section_Historial() {
  return (
    <View style={{paddingHorizontal:10,gap:10}}>
        <Card_Renovacion/>
        <Card_Renovacion/>
        <Card_Renovacion/>
    </View>
  )
}
