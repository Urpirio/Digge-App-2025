import { Text, View } from "react-native";
import { Style_CardBlueHistorial } from "../Style/Style_CardBlueHistorial";

export default function Card_BlueHistorial() {
  return (
    <View style={Style_CardBlueHistorial.Card}>
      <View style={Style_CardBlueHistorial.SubContainerCard}>
        <Text style={Style_CardBlueHistorial.Text_Numero}>212</Text>
        <Text style={Style_CardBlueHistorial.Text_Card}>
          Denuncias realizadas
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={Style_CardBlueHistorial.Text_Numero}>643</Text>
        <Text style={Style_CardBlueHistorial.Text_Card}>
          Reportes realizados
        </Text>
      </View>
    </View>
  );
}
