import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useInfraccion } from "../hooks/useInfraccion";
import { Data_Infraccion } from "../Data/Data_Infraccion";

export default function Card_Infraccion() {
  const { Status } = useInfraccion();

  const Cards = Data_Infraccion.map((D) => {
    return (
      <View
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "white",
          gap: 10,
          borderColor: "#9999992f",
          marginBottom:10
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "600" }}>{D.num_infraccion}</Text>
          <Status Status={D.status} />
        </View>
        <View style={{ width: "100%" }}>
          <Text style={{ fontWeight: "500", color: "#0F539C" }}>
            {D.titulo}
          </Text>
          <Text style={{ color: "#999999ff", fontSize: 16, fontWeight: "300" }}>
            {D.subtitulo}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Ionicons size={16} name="car-outline" color={"#999999ff"} />
            <Text style={{ fontSize: 14, color: "#999999ff" }}>
              {D.matricula}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Ionicons name="location-outline" size={16} color="#999999ff" />
            <Text style={{ fontSize: 14, color: "#999999ff" }}>
              {D.ubicacion}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <MaterialIcons name="access-time" size={16} color="#999999ff" />
            <Text style={{ fontSize: 14, color: "#999999ff" }}>{D.hora}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Text style={{ color: "#0F539C", fontSize: 14, fontWeight: "500" }}>
              Ver detalles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  return Cards;
}
