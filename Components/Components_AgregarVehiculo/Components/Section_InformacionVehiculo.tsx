import { View, Text, ScrollView } from "react-native";
import Form_Part1 from "../SubComponents/Form_Part1";
import Form_Part2 from "../SubComponents/Form_Part2";
import Form_Part3 from "../SubComponents/Form_Part3";
import { Style_SectionInfoVehiculo } from "../Style/Style_SectionInfoVehiculo";

export default function Section_InformacionVehiculo() {
  return (
    <ScrollView style={Style_SectionInfoVehiculo.Contenedor_ScrollView}>
      <View style={Style_SectionInfoVehiculo.Contanerdor_Formulario}>
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
