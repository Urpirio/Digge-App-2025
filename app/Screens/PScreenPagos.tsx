import Section_Header from "@/Components/Components_ScreenPagos/Components/Section_Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import Section_Dashboard from "@/Components/Components_ScreenPagos/Components/Section_Dashboard";
import Section_Historial from "@/Components/Components_ScreenPagos/Components/Section_Historial";

export default function ScreenPagos() {
  const [StateSelect,setStateSelect] = useState(false)
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
        <Section_Header StateSelect={StateSelect} setStateSelect={setStateSelect}/>
        {StateSelect ? <Section_Historial/> : <Section_Dashboard/>}
    </SafeAreaProvider>
  )
}
