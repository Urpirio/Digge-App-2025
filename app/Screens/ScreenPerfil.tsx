import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Section_Header from "@/Components/Components_ScreenPerfil/Components/Section_Header";
import Section_Perfil from "@/Components/Components_ScreenPerfil/Components/Section_Perfil";
import Section_ContainerStats from "@/Components/Components_ScreenPerfil/Components/Section_ContainerStats";
import Section_ContainerBody from "@/Components/Components_ScreenPerfil/Components/Section_ContainerBody";


export default function ScreenPerfil() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#0F539C" }}>
      <ScrollView>
        <Section_Header />
        <Section_Perfil />
        <Section_ContainerStats />
        <Section_ContainerBody />
      </ScrollView>
    </SafeAreaProvider>
  );
}
