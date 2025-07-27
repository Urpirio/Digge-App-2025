import { Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useDetallesVehiculos } from "../hooks/useDetallesVehiculos";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback } from "react";

export default function Card_Principal() {

  const DataLocal = useLocalSearchParams();
  const {DetallesCarro,ConseguirDetalles} = useDetallesVehiculos();

  useFocusEffect(useCallback(()=>{
    ConseguirDetalles({Matricula:DataLocal?.Matricula});
  },[]))

  if(!DetallesCarro){
    return <View/>
  };

  return (
    <View
      style={{
        padding: 15,
        borderRadius: 15,
        gap: 10,
        backgroundColor: "#0F539C",
      }}
    >
      <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>
        {DetallesCarro[0]?.Matricula}
      </Text>
      <Text style={{ fontSize: 16, color: "white" }}>{DetallesCarro[0]?.Marca + ' '+ DetallesCarro[0]?.Modelo + ' ' + DetallesCarro[0]?.Ano}</Text>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            padding: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "white",
            gap:5
          }}
        >
          <MaterialCommunityIcons
            name="file-document-outline"
            size={16}
            color="#22C55E"
          />
          <Text style={{ fontSize: 12, color: "#22C55E" }}>Marbete</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "white",
            gap:5
          }}
        >
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={16}
            color="#1B95F4"
          />
          <Text style={{ fontSize: 12, color: "#1B95F4" }}>Seguro</Text>
        </View>
      </View>
    </View>
  );
}
