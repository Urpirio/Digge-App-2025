import Section_Header from "@/Components/Components_ScreenPagos/Components/Section_Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import Section_Dashboard from "@/Components/Components_ScreenPagos/Components/Section_Dashboard";
import Section_Historial from "@/Components/Components_ScreenPagos/Components/Section_Historial";
import { useGetUserGlobal } from "@/Components/Components_Globales/hooks/useGetUserGlobal";
import { useFocusEffect } from "expo-router";

export default function ScreenPagos() {
  const [StateSelect, setStateSelect] = useState(false);
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
        StateSelect={StateSelect}
        setStateSelect={setStateSelect}
      />
      {StateSelect ? <Section_Historial /> : <Section_Dashboard />}
    </SafeAreaProvider>
  );
}
