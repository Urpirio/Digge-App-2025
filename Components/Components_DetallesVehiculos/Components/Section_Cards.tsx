import { Text, TouchableOpacity, View } from "react-native";
import Card_Principal from "../SubComponents/Card_Principal";

export default function Section_Cards() {
  return (
    <View style={{paddingHorizontal:10,paddingVertical:10}}>
        <Card_Principal/>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
            <TouchableOpacity style={{padding:10,width:'48%',borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#22C55E'}}>
                <Text style={{color:'white'}}>Renovar marbete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:10,width:'48%',borderRadius:10,justifyContent:'center',alignItems:'center',backgroundColor:'#1B95F4'}}>
                <Text style={{color:'white'}}>Cambiar seguro</Text>
            </TouchableOpacity>
        </View>

      
    </View>
  );
}
