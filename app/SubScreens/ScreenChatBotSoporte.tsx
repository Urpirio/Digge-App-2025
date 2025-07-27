import Section_Header from "@/Components/Components_ChatBotSoporte/Components/Section_Header";
import SectionContenedorChat from "@/Components/Components_ChatBotSoporte/Components/SectionContenedorChat";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ChatBotSoporte() {
  return (
   <SafeAreaProvider style={{backgroundColor:'white'}}>
    <Section_Header/>
    <SectionContenedorChat/>
    <StatusBar barStyle={'light-content'}/>
   </SafeAreaProvider>
  )
};
