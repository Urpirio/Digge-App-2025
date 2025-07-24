import { Data_InfraccionesPagas } from "../Data/Data_InfraccionesPagas";
import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Card_InfraccionesPagas() {
  const Cards = Data_InfraccionesPagas.map((D) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "white",
          borderColor: "#dee2e66f",
          boxShadow: "0px 0px 10px #dee2e6e4",
          gap: 10,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 ,justifyContent:'space-between',width:'100%'}}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              {D.num_infraccion}
            </Text>
            <View
            style={{
              paddingHorizontal: 10,
              paddingVertical:2,
              borderRadius: 8,
              backgroundColor: "#15803c3e",
              flexDirection:'row',
              alignItems:'center',
              gap:5
            }}
          >
            <AntDesign name="checkcircle" size={16} color="#15803D" />
            <Text style={{ color: "#15803D" ,fontWeight:'400'}}>Pagada</Text>
          </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ color: "#0F539C", fontWeight: "600" }}>
            {D.titulo}
          </Text>
          <Text style={{color:"#999999ff"}}>{D.subtitulo} </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Ionicons size={16} name="car-outline" color={"#999999ff"} />
            <Text style={{ fontSize: 12, color: "#999999ff" }}>
              {D.matricula}
            </Text>
          </View>


          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Ionicons name="location-outline" size={16} color="#999999ff" />
            <Text style={{ fontSize: 12, color: "#999999ff" }}>
              {D.ubicacion}
            </Text>
          </View>


          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <MaterialIcons name="access-time" size={16} color="#999999ff" />
            <Text style={{ fontSize: 12, color: "#989898ff" }}>{D.hora}</Text>
          </View>


        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 12,color:"#6b6b6bff" }}>{D.fechaPago}</Text>
          <Text style={{ color: "#0F539C", fontWeight: "600" }}>
            Tarjeta de credito
          </Text>
        </View>


      </View>
    );
  });

  return Cards;
}
