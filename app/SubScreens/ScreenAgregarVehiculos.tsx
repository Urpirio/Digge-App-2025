import Section_Header from "@/Components/Components_AgregarVehiculo/Components/Section_Header";
import Section_InformacionVehiculo from "@/Components/Components_AgregarVehiculo/Components/Section_InformacionVehiculo";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenAgregarVehiculos() {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
      <Section_Header/>
      <Section_InformacionVehiculo/>
    </SafeAreaProvider>
  )
}
