import Section_AccionesRapidas from "@/Components/Components_ScreenHome/Components/Section_AccionesRapidas";
import Section_ResumenActividad from "@/Components/Components_ScreenHome/Components/Section_ResumenActividad";
import Section_User from "@/Components/Components_ScreenHome/Components/Section_User";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { BackHandler } from "react-native";
import Section_Actualidad from "@/Components/Components_ScreenHome/Components/Section_Novedades";
import { useGetHome } from "@/Components/Components_ScreenHome/Hooks/useGetHome";

export default function ScreenHome() {
  const { GetDataUser, Datauser } = useGetHome();
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
      });

      GetDataUser();
    }, [Datauser])
  );
  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <Section_User
        nombres={Datauser?.nombres}
        foto_perfil={Datauser?.foto_perfil}
        cedula={Datauser?.cedula}
        apellidos={Datauser?.apellidos}
        
      />
      <ScrollView>
        <Section_AccionesRapidas />
        <Section_ResumenActividad />
        <Section_Actualidad />
      </ScrollView>
      <StatusBar barStyle={"light-content"} />
    </SafeAreaProvider>
  );
}
