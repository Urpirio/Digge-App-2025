import { Text, View } from "react-native";
import Card_Acciones from "../SubComponents/Card_Acciones";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function Section_AccionesRapidas() {
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Acciones Rapidas</Text>
      <View style={{ flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center" }}>
        <Card_Acciones
          Icon={<MaterialIcons name="wb-twilight" size={24} color="white" />}
          Titulo={"Emergencias"}
          bgIconColor={"EE2A24"}
          subTitulo={"Asistencia inmediata"}
          Link={"/Screens/ScreenEmergencia"}
        />

        <Card_Acciones
          Icon={
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={24}
              color="white"
            />
          }
          Titulo={"Nueva Denuncia"}
          bgIconColor={"FF9700"}
          subTitulo={"Reporta un incidente"}
          Link={"/SubScreens/ScreenDenunciarConductor"}
        />
         <Card_Acciones
          Icon={<Fontisto name="map" size={24} color="white" />}
          Titulo={"Digge-Map"}
          bgIconColor={"008000"}
          subTitulo={"mapa de navegacion"}
          Link={"ScreensMap/ScreenMap_Navegacion"}
        />
        <Card_Acciones
          Icon={
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={24}
              color="white"
            />
          }
          Titulo={"Chat Atención"}
          bgIconColor={"0FB9CB"}
          subTitulo={"Soporte DIGESSET"}
          Link={"/SubScreens/ScreenChatBotSoporte"}
        />
       
      </View>
    </View>
  );
}
