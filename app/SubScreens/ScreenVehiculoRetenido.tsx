import Section_Formulario from "@/Components/Compenents_VehiculosRetenidos/Components/Section_Formulario";
import Section_Header from "@/Components/Compenents_VehiculosRetenidos/Components/Section_Header";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenVehiculoRetenido() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "white" }}>
        <Section_Header />
        <ScrollView>
          <Section_Formulario/>
        </ScrollView>
    </SafeAreaProvider>
  )
}
