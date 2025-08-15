import Section_AccionesRapidas from "@/Components/Components_ScreenHome/Components/Section_AccionesRapidas";
import Section_ActividadReciente from "@/Components/Components_ScreenHome/Components/Section_ActividadReciente";
import Section_ResumenActividad from "@/Components/Components_ScreenHome/Components/Section_ResumenActividad";
import Section_User from "@/Components/Components_ScreenHome/Components/Section_User";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { BackHandler } from "react-native";

export default function ScreenHome() {
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
      });
    }, [])
  );
  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <Section_User />
      <ScrollView>
        <Section_ResumenActividad />
        <Section_AccionesRapidas />
        <Section_ActividadReciente />
      </ScrollView>
      <StatusBar barStyle={"light-content"} />
    </SafeAreaProvider>
  );
}
