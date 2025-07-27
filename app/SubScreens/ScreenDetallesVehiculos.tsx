import Section_Cards from "@/Components/Components_DetallesVehiculos/Components/Section_Cards";
import Section_Header from "@/Components/Components_DetallesVehiculos/Components/Section_Header";
import Section_InformacionBasica from "@/Components/Components_DetallesVehiculos/Components/Section_InformacionBasica";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenDetallesVehiculos() {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
        <Section_Header/>
        <Section_Cards/>
        <Section_InformacionBasica/>
    </SafeAreaProvider>
  )
}
