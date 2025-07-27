import { View, Text } from "react-native";
import Card_informacionBasica from "../SubComponents/Card_informacionBasica";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback } from "react";
import { useDetallesVehiculos } from "../hooks/useDetallesVehiculos";

export default function Section_InformacionBasica() {


  const DataLocal = useLocalSearchParams();
  const {ConseguirDetalles,DetallesCarro} = useDetallesVehiculos();

  useFocusEffect(useCallback(()=>{
    ConseguirDetalles({Matricula:DataLocal?.Matricula})
  },[]));
  

  if(!DetallesCarro){
    return <View/>
  };

  return (
    <View style={{ paddingHorizontal: 10,gap:10 }}>
      <Text style={{ fontSize: 20,fontWeight:'600' }}>Informacion basica</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "48%", gap: 10 }}>
          <Card_informacionBasica
            Icono={<Ionicons size={20} name="car-outline" color={"#0F539C"} />}
            Subtitulo={DetallesCarro[0]?.Marca}
            Titulo="Marca"
          />
          <Card_informacionBasica
            Icono={<AntDesign name="calendar" size={20} color="#0F539C" />}
            Subtitulo={DetallesCarro[0]?.Ano}
            Titulo="Año"
          />
          <Card_informacionBasica
            Icono={
              <Ionicons name="location-outline" size={20} color="#0F539C" />
            }
            Subtitulo={DetallesCarro[0]?.Kilometraje}
            Titulo="Kilometraje"
          />
        </View>

        <View style={{ width: "48%", gap: 10 }}>
          <Card_informacionBasica
            Icono={
              <MaterialCommunityIcons name="steering" size={20} color="#0F539C" />
            }
            Subtitulo={DetallesCarro[0]?.Modelo}
            Titulo="Modelo"
          />
          <Card_informacionBasica
            Icono={<Octicons name="paintbrush" size={16} color="#0F539C" />}
            Subtitulo={DetallesCarro[0]?.Color}
            Titulo="Color"
          />
          <Card_informacionBasica
            Icono={
              <MaterialCommunityIcons
                name="lightning-bolt-circle"
                size={20}
                color="#0F539C"
              />
            }
            Subtitulo={DetallesCarro[0]?.Combustible}
            Titulo="Combustible"
          />
        </View>
      </View>
    </View>
  );
}
