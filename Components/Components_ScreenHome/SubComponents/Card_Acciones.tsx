import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


interface Content{
  bgIconColor:String;
  Icon:any;
  Titulo: String;
  subTitulo:String;
}

export default function Card_Acciones({bgIconColor,Icon,Titulo,subTitulo}:Content) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderWidth: 1,
        justifyContent: "space-between",
        padding:10,
        alignItems:'center',
        backgroundColor:"#fcfcfcff",
        borderRadius:10,
        borderColor:'#dee2e651',
        marginBottom:10
      }}
    >
      <View style={{flexDirection:'row',gap:10,alignItems:'center'}}>
        <View style={{padding:15,borderRadius:10,backgroundColor:`#${bgIconColor}`}}>
          {Icon}
        </View>
        <View>
          <Text style={{fontSize:18}}>{Titulo}</Text>
          <Text style={{fontSize:14,color:'#4A739C'}}>{subTitulo}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#0D141C" />
    </TouchableOpacity>
  );
}
