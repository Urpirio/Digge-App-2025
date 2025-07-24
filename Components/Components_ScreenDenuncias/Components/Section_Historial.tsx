import { ScrollView, View } from "react-native";
import Card_BlueHistorial from "../SubComponents/Card_BlueHistorial";
import Card_Infraccion from "../SubComponents/Card_Infraccion";

export default function Section_Historial() {
  return (
    <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10}}>
        <Card_BlueHistorial/>
          <View style={{paddingBottom:100}}>
            <Card_Infraccion/>
          </View>
    </ScrollView>
  )
}
