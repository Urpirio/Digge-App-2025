import { Text, View } from "react-native";
import Card_AccionesRegistro from "../SubComponents/Card_AccionesRegistro";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


export default function Section_ActividadReciente() {
  return (
    <View style={{ paddingBottom: 100, paddingTop: 10,paddingHorizontal:10 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Actividad reciente</Text>
        <View style={{paddingVertical:10,gap:10}}>
            
            <Card_AccionesRegistro 
            Icon={<MaterialCommunityIcons name="checkbox-outline" size={24} color="#FF980E"/>}
            Titulo={'Multa pendiente'} subTitulo={'Multa por RD$2,500 - Vence 23 Feb '} 
            bgIconColor={'FFF2DF'} hora={'4h'} Stat={'RD$2,500'} ColorStat={'FF980E'}
            />
            
            <Card_AccionesRegistro 
            Icon={<Feather name="info" size={24} color="#4BB04D"/>} 
            Titulo={'Denuncia procesada'} subTitulo={'Denuncia #D020 procesada y validada'} 
            bgIconColor={'EAF4E9'} hora={'4h'} Stat={'+40 pts'} ColorStat={'43B24B'}
            />

            <Card_AccionesRegistro 
            Icon={<MaterialIcons name="access-time" size={24} color="#1F96F5"/>}
            Titulo={'Renovación de marbete'} subTitulo={'Marbete vence en 12 días '} 
            bgIconColor={'E4F2FD'} hora={'4h'} Stat={'Proximo'} ColorStat={'8E98A0'}
            />
        </View>
    </View>
  )
}
