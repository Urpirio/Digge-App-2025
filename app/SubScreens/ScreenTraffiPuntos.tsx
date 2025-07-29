import Section_Dashboard from "@/Components/ComponentsTraffiPuntos/Components/Section_Dashboard";
import Section_Header from "@/Components/ComponentsTraffiPuntos/Components/Section_Header";
import Section_Historial from "@/Components/ComponentsTraffiPuntos/Components/Section_Historial";
import Section_Principal from "@/Components/ComponentsTraffiPuntos/Components/Section_Principal";
import { useStyleTraffi } from "@/Components/ComponentsTraffiPuntos/Hooks/useStyleTraffi";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenTraffiPuntos() {
  const { Panel, setPanel } = useStyleTraffi();

  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <Section_Header />
      <ScrollView>
        <Section_Principal PanelStatus={Panel} setPanelStatu={setPanel} />
        {Panel ? <Section_Dashboard /> : <Section_Historial />}
      </ScrollView>
    </SafeAreaProvider>
  );
}
