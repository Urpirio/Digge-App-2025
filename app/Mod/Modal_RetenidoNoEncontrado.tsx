import { BlurView } from "expo-blur";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Modal_RetenidoNoEncontrado() {
  return (
    <SafeAreaProvider
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <BlurView
        tint={"dark"}
        intensity={100}
        style={{ height: "100%", width: "100%" }}
      >
        <TouchableOpacity
          style={{ height: "100%", width: "100%" }}
          onPress={() => {
            router.back();
          }}
        ></TouchableOpacity>
      </BlurView>
      <View style={{ paddingHorizontal: 20, position: "absolute" }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "white",
            borderColor: "#D1D0D0",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            No se ha encontrado ningún vehículo registrado con las informaciones
            suministradas.
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 10, textAlign: "center" }}>
            "El número de cédula del propietario o la placa del vehículo no se
            encuentran registrados en los centros de retención de la DIGESETT.
            Le invitamos a intentar nuevamente más tarde. En caso de que la
            situación persista, favor comunicarse con nuestro chatbot para
            recibir la asistencia correspondiente."
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => router.push("/SubScreens/ScreenChatBotSoporte")}
              style={{
                paddingHorizontal: 20,
                borderColor: "#C4C1C1",
                padding: 10,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D1D0D0",
              }}
            >
              <Text style={{ color: "#0F539C", fontWeight: "500" }}>
                Ir al Chatbot
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.back();
                router.back();
              }}
              style={{
                paddingHorizontal: 20,
                padding: 10,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0F539C",
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>
                Intentarlo más tarde
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
