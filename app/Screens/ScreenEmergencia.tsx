import { useGetUserGlobal } from "@/Components/Components_Globales/hooks/useGetUserGlobal";
import Section_ContactosEmergencia from "@/Components/Components_ScreenEmergencia/Components/Section_ContactosEmergencia";
import Section_Emergencia from "@/Components/Components_ScreenEmergencia/Components/Section_Emergencia";
import Section_Header from "@/Components/Components_ScreenEmergencia/Components/Section_Header";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenEmergencia() {
  const { Datauser, GetDataUser } = useGetUserGlobal();

  useFocusEffect(
    useCallback(() => {
      GetDataUser();
    }, [])
  );

  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <Section_Header
        nombres={Datauser?.nombres}
        apellidos={Datauser?.apellidos}
        foto_perfil={Datauser?.foto_perfil}
      />
      <Section_Emergencia />
      <Section_ContactosEmergencia />
    </SafeAreaProvider>
  );
}
