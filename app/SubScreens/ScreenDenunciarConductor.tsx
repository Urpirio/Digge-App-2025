import Section_Descripcion from "@/Components/Components_DenunciarConductor/Components/Section_Descripcion";
import Section_Formulario from "@/Components/Components_DenunciarConductor/Components/Section_Formulario";
import Section_Header from "@/Components/Components_DenunciarConductor/Components/Section_Header";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenDenunciarConductor() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <Section_Header />
      <ScrollView >
        <Section_Descripcion />
        <Section_Formulario />
      </ScrollView>
    </SafeAreaProvider>
  );
}
