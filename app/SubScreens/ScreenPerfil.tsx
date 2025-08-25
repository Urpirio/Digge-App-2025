import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Section_Header from "@/Components/Components_ScreenPerfil/Components/Section_Header";
import Section_Perfil from "@/Components/Components_ScreenPerfil/Components/Section_Perfil";
import Section_ContainerStats from "@/Components/Components_ScreenPerfil/Components/Section_ContainerStats";
import Section_ContainerBody from "@/Components/Components_ScreenPerfil/Components/Section_ContainerBody";
import { useGetPerfil } from "@/Components/Components_ScreenPerfil/Hook/useGetPerfil";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function ScreenPerfil() {
  const { GetDataUser, Datauser } = useGetPerfil();

  useFocusEffect(
    useCallback(() => {
      GetDataUser();
    }, [])
  );
  return (
    <SafeAreaProvider style={{ backgroundColor: "#0F539C" }}>
      <ScrollView>
        <Section_Header />
        <Section_Perfil
          nombres={Datauser?.nombres}
          apellidos={Datauser?.apellidos}
          foto_perfil={Datauser?.foto_perfil}
          cedula={Datauser?.cedula}
          Estatus_Licencia={Datauser?.estatus_licencia}
        />
        <Section_ContainerStats />
        <Section_ContainerBody cedula={Datauser?.cedula} />
      </ScrollView>
    </SafeAreaProvider>
  );
}
