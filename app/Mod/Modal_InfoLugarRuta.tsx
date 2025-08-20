import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { router } from "expo-router";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { BlurView } from "expo-blur";

export default function Modal_InfoLugarRuta() {
  return (
    <SafeAreaProvider
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <BlurView
        style={{ height: "100%", width: "100%" }}
        intensity={100}
        tint="dark"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        ></TouchableOpacity>
      </BlurView>

      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          gap: 5,
          borderRadius: 15,
          position: "absolute",
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "400" }}>
            INTRANT SEDE principal
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
              paddingHorizontal: 5,
              backgroundColor: "#e9ecefa4",
              borderColor: "#e9ecef",
            }}
          >
            <Ionicons size={14} name="car-outline" color={"gray"} />
            <Text style={{ fontSize: 12, color: "gray", fontWeight: "500" }}>
              10 min
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Text style={{ fontSize: 14, color: "#a0a1a2ff" }}>
            No hay averías en su ruta{" "}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Fontisto name="world-o" size={10} color="#0F539C" />
            <Text style={{ fontSize: 10, color: "#0F539C" }}>
              https://intrant.gob.do/
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 14, color: "#474747ff", fontWeight: "300" }}>
          Planificar, regular, controlar, inspeccionar y supervisar las
          terminales públicas y privadas de pasajeros, de carga y sus módulos.
          Impulsar y fiscalizar, en coordinación con el Ministerio de Obras
          Públicas y Comunicaciones, la implementación de políticas y medidas
          estratégicas para el desarrollo de un tránsito seguro.
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
