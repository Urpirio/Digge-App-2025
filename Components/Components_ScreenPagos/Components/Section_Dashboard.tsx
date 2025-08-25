import { View, Text, ScrollView } from "react-native";
import Card_ResumenInfracciones from "../SubComponents/Card_ResumenInfracciones";
import Card_InfraccionesPendientes from "../SubComponents/Card_InfraccionesPendientes";
import {
  FiltroPagadas,
  FiltrosPendientes,
  Objectos_Infracciones,
} from "../hooks/useGet_Infracciones";

export default function Section_Dashboard(Tools: {
  Data: Array<Objectos_Infracciones> | undefined;
  // Data_Pendientes: FiltrosPendientes | undefined;
  // Data_Pagadas: FiltroPagadas | undefined;
}) {
  const { Data } = Tools;

  return (
    <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <Card_ResumenInfracciones
        Data={Data}
        // Data_Pagadas={Data_Pagadas}
        // Data_Pendientes={Data_Pendientes}
      />
      <View style={{ gap: 10, paddingTop: 10, paddingBottom: 100 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Infracciones Pendientes
        </Text>
        <View>
          <Card_InfraccionesPendientes Data={Data} />
        </View>
      </View>
    </ScrollView>
  );
}
