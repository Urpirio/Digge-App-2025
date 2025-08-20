import Section_Header from "@/Components/Components_Novedades/Components/Section_Header";
import Section_ListaActualidad from "@/Components/Components_Novedades/Components/Section_ListaActualidad";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function ScreenNovedades() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
        <Section_Header/>
        <Section_ListaActualidad/>
    </SafeAreaProvider>
  )
}
