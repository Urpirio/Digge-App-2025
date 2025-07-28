import { View } from "react-native";
import Card_CrearDenuncia from "../SubComponents/Card_CrearDenuncia";
import Card_Varibles from "../SubComponents/Card_Varibles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function Section_Dashboard() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10, gap: 10 }}>
      <Card_CrearDenuncia />

      <Card_Varibles
        Icon={<Ionicons size={25} name="car-outline" color={"white"} />}
        Titulo={"Denunciar Conductor"}
        subTitulo={"Reporta un conductor"}
        bgIconColor={"FF9700"}
        Link=""
      />

      <Card_Varibles
        Icon={<Feather name="tool" size={24} color="white" />}
        Titulo={"Reportar Avería"}
        subTitulo={"Daños en vías"}
        bgIconColor={"4A739C"}
        Link="SubScreens/ScreenReportarAveria"
      />
    </View>
  );
}
