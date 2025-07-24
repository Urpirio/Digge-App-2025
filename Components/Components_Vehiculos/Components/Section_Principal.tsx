import { View,Text } from "react-native";
import Card_Principanl from "../SubComponents/Card_Principanl";
import Card_MatriculasTusCarros from "../SubComponents/Card_MatriculasTusCarros";

export default function Section_Principal() {
  return (
    <View style={{paddingHorizontal:10,paddingVertical:10,gap:20}}>
        <View style={{}}>
          <Text style={{fontSize:24,fontWeight:'600'}}>Mis vehículos</Text>
          <Text style={{fontSize:16,color:'gray'}}>3 vehículos registrados</Text>
        </View>
        <View>
          <Card_Principanl/>
        </View>
    </View>
  )
}
