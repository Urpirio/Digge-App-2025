import { ScrollView, Text, View } from "react-native";
import Card_Actividad from "../SubComponents/Card_Actividad";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

export default function Section_ResumenActividad() {
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Resumen de tu actividad
      </Text>
      <ScrollView horizontal style={{ paddingVertical: 10 }}>
        <Card_Actividad
          Icon={<Fontisto name="star" size={24} color="#ffffffff" />}
          Color={"4CB050"}
          Incrementacion={"20"}
          Titulo={"Puntos disponibles"}
          Numero={"180"}
          bgColor={"E5EFE6"}
          borderColor={""}
          TextColor={"4CB050"}
          Link={"SubScreens/ScreenTraffiPuntos"}
        />

        <Card_Actividad
          Icon={
            <Ionicons name="document-text-outline" size={24} color="white" />
          }
          Color={"1B95F4"}
          Incrementacion={"20"}
          Titulo={"Denuncias realizadas"}
          Numero={"12"}
          bgColor={"DFEBF7"}
          borderColor={""}
          TextColor={"1B95F4"}
          Link={""}
        />

        <Card_Actividad
          Icon={<FontAwesome name="credit-card" size={24} color="white" />}
          Color={"F44238"}
          Incrementacion={"0"}
          Titulo={"Multas pendientes"}
          Numero={"0"}
          bgColor={"F6E4E4"}
          borderColor={""}
          TextColor={"F44238"}
          Link={""}
        />

        <Card_Actividad
          Icon={<Feather name="tool" size={24} color="white" />}
          Color={"607C8C"}
          Incrementacion={"0"}
          Titulo={"Averuas reportadas"}
          Numero={"0"}
          bgColor={"E5E9EC"}
          borderColor={""}
          TextColor={"607C8C"}
          Link={""}
        />
      </ScrollView>
    </View>
  );
}
