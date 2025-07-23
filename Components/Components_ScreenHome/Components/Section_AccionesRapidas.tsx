import { Text, View } from "react-native";
import Card_Acciones from "../SubComponents/Card_Acciones";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Section_AccionesRapidas() {
  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Acciones Rapidas</Text>
        <View style={{paddingTop:10 }}>


          <Card_Acciones 
          Icon={<MaterialIcons name="wb-twilight" size={24} color="white" />}  
          Titulo={'Emergencias'} 
          bgIconColor={'EE2A24'} subTitulo={'Asistencia inmediata'}/>

          <Card_Acciones 
          Icon={<MaterialCommunityIcons name="alert-box-outline" size={24} color="white" />}  
          Titulo={'Nueva Denuncia'} 
          bgIconColor={'FF9700'} subTitulo={'Reporta un incidente'}/>

          <Card_Acciones 
          Icon={ <Ionicons size={25} name="car-outline" color={"white"} />}  
          Titulo={'Agregar Vehículo'} 
          bgIconColor={'4A739C'} subTitulo={'Gestionar Vehículos'}/>

          <Card_Acciones 
          Icon={<MaterialCommunityIcons name="chat-processing-outline" size={24} color="white" />}  
          Titulo={'Chat Atención'} 
          bgIconColor={'0FB9CB'} subTitulo={'Soporte DIGESSET'}/>

        </View>
    </View>
  )
}
