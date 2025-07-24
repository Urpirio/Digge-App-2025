import Section_ContactosEmergencia from "@/Components/Components_ScreenEmergencia/Components/Section_ContactosEmergencia";
import Section_Emergencia from "@/Components/Components_ScreenEmergencia/Components/Section_Emergencia";
import Section_Header from "@/Components/Components_ScreenEmergencia/Components/Section_Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenEmergencia() {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
        <Section_Header/>
        <Section_Emergencia/>
        <Section_ContactosEmergencia/>
    </SafeAreaProvider>
  )
}
