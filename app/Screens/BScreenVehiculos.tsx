import Section_header from "@/Components/Components_Vehiculos/Components/Section_header";
import Section_Principal from "@/Components/Components_Vehiculos/Components/Section_Principal";
import Section_TusCarros from "@/Components/Components_Vehiculos/Components/Section_TusCarros";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenVehiculos() {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
        <Section_header/>
        <Section_Principal/>
        <Section_TusCarros/>
    </SafeAreaProvider>
  )
}
