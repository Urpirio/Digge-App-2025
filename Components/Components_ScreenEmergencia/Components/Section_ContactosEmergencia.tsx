import { View, Text } from "react-native";
import Card_Emergencias from "../SubComponents/Card_Emergencias";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Section_ContactosEmergencia() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20 }}>Contactos de emergencia</Text>
      <View style={{ paddingVertical: 10 }}>
        <Card_Emergencias
          Titulo={"911"}
          subTitulo={"Policía Nacional"}
          Icon={
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={24}
              color="white"
            />
          }
          bgIconColor={"EE2A24"}
        />
        <Card_Emergencias
          Titulo={"Cruz roja"}
          subTitulo={"Emergencias medicas"}
          Icon={<FontAwesome name="plus" size={28} color="white" />}
          bgIconColor={"EE2A24"}
        />
        <Card_Emergencias
          Titulo={"Bomberos"}
          subTitulo={"Emergencias de fuego"}
          Icon={<MaterialIcons name="fire-truck" size={24} color="white" />}
          bgIconColor={"FF9900"}
        />
        <Card_Emergencias
          Titulo={"DIGESSET"}
          subTitulo={"Autoridades de transito"}
          Icon={
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={24}
              color="white"
            />
          }
          bgIconColor={"2096F4"}
        />
      </View>
    </View>
  );
}
