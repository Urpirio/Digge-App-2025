import { View,Text,ScrollView } from "react-native";
import Card_ResumenInfracciones from "../SubComponents/Card_ResumenInfracciones";
import Card_InfraccionesPendientes from "../SubComponents/Card_InfraccionesPendientes";

export default function Section_Dashboard() {
  return (
    <ScrollView style={{paddingHorizontal:10,paddingVertical:10}}>
        <Card_ResumenInfracciones/>
        <View style={{gap:10,paddingTop:10,paddingBottom:100}}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Infracciones Pendientes</Text>
          <View>
            <Card_InfraccionesPendientes/>
          </View>
        </View>
    </ScrollView>
  )
}
