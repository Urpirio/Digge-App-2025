import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function Card_ResumenInfracciones() {
  return (
    <View
      style={{
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        gap: 10,
        backgroundColor:'#0F539C',
        boxShadow: "0px 0px 5px 0px #dee2e6",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center",gap:5 }}>
        <View style={{borderWidth:1,padding:5,borderRadius:20,borderColor:"white"}}>
          <Feather name="dollar-sign" size={14} color="white" />
        </View>
        <Text style={{color:'white',fontWeight:'500',fontSize:18}}>Resumen de Infracciones</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ borderRightWidth: 1, width: "50%", padding: 5,borderColor:'#f8f9fa77' }}>
          <Text style={{ textAlign: "center",color:'#f8f9fa87' }}>Pendientes</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "500",
              color: "white",
            }}
          >
            RD$5,000
          </Text>
          <Text style={{ textAlign: "center",color:'#f8f9fa82' }}>3 Infracciones</Text>
        </View>
        <View style={{ width: "50%", padding: 5 }}>
          <Text style={{ textAlign: "center",color:'#f8f9fa7b' }}>Pagadas</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "500",
              color: "white",
            }}
          >
            RD$3,800
          </Text>
          <Text style={{ textAlign: "center",color:'#f8f9fa79' }}>2 Infracciones</Text>
        </View>
      </View>
    </View>
  );
}
