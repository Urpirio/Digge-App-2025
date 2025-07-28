import { View, Text, ScrollView } from "react-native";
import Form_Part1 from "../SubComponents/Form_Part1";
import Form_Part2 from "../SubComponents/Form_Part2";
import Form_Part3 from "../SubComponents/Form_Part3";

export default function Section_InformacionVehiculo() {
  return (
    <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10}}>
      <View style={{gap:10,paddingBottom:50 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Información del vehiculo{" "}
        </Text>
        <Form_Part1 />
        <Form_Part2 />
        <Form_Part3 />
      </View>
    </ScrollView>
  );
}
