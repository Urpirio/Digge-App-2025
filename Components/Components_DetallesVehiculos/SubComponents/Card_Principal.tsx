import { Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useDetallesVehiculos } from "../hooks/useDetallesVehiculos";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback } from "react";
import { Style_CardPrincipal } from "../Style/Style_CardPrincipal";

export default function Card_Principal() {
  const DataLocal = useLocalSearchParams();
  // const { DetallesCarro, ConseguirDetalles } = useDetallesVehiculos();

  // useFocusEffect(
  //   useCallback(() => {
  //     ConseguirDetalles({ Matricula: DataLocal?.Matricula });
  //   }, [])
  // );

  // if (!DetallesCarro) {
  //   return <View />;
  // }

  return (
    <View style={Style_CardPrincipal.Card}>
      <Text style={Style_CardPrincipal.Text_Matricula}>
        {DataLocal?.matricula}
      </Text>
      <Text style={{ fontSize: 16, color: "white" }}>
        {DataLocal?.modelo + " " + DataLocal?.marca + " " + DataLocal?.year}
      </Text>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={Style_CardPrincipal.container_icon}>
          <MaterialCommunityIcons
            name="file-document-outline"
            size={16}
            color="#22C55E"
          />
          <Text style={Style_CardPrincipal.Text_Marbete}>Marbete</Text>
        </View>
        <View style={Style_CardPrincipal.container_icon}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={16}
            color="#1B95F4"
          />
          <Text style={Style_CardPrincipal.Text_Seguro}>Seguro</Text>
        </View>
      </View>
    </View>
  );
}
