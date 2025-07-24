import { ScrollView,View,Text } from "react-native";
import Card_InfraccionesPagas from "../SubComponents/Card_InfraccionesPagas";

export default function Section_Historial() {
  return (
    <ScrollView style={{paddingHorizontal:10,paddingVertical:10}}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Historial de infracciones pagas</Text>
        <View style={{paddingBottom:100,paddingTop:10}}>
          <Card_InfraccionesPagas/>
        </View>
    </ScrollView>
  )
}
