import Section_Header from "@/Components/Components_ScreenPagos/Components/Section_Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import Section_Dashboard from "@/Components/Components_ScreenPagos/Components/Section_Dashboard";
import Section_Historial from "@/Components/Components_ScreenPagos/Components/Section_Historial";
import { useFocusEffect } from "expo-router";
import { useGet_Infracciones } from "@/Components/Components_ScreenPagos/hooks/useGet_Infracciones";

export default function ScreenPagos() {
  const [StateSelect, setStateSelect] = useState(false);
  const {
    getDataUser,
    Datauser,
    Data_Infracciones,
    // filtro_DataPagadas,
    // filtro_DataPendiente,
  } = useGet_Infracciones();

  useFocusEffect(
    useCallback(() => {
      getDataUser();
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
      {StateSelect ? (
        <Section_Historial />
      ) : (
        <Section_Dashboard
          Data={Data_Infracciones}
          // Data_Pagadas={filtro_DataPagadas}
          // Data_Pendientes={filtro_DataPendiente}
        />
      )}
    </SafeAreaProvider>
  );
}
