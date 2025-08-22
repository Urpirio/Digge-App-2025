import { BlurView } from "expo-blur";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useFocusEffect } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useCallback } from "react";

export default function Modal_DatosEnviados() {
  const DataLocal = useLocalSearchParams();

  const Btns = () => {
    switch (DataLocal?.Error) {
      case "true":
        return (
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#0F539C",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Volver a intentarlo</Text>
            </TouchableOpacity>
          </View>
        );
      case "false":
        return (
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: "48%",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#adb5bd6a",
                borderRadius: 10,
              }}
              onPress={() => router.back()}
            >
              <Text style={{ color: "#0F539C" }}>
                Enviar {DataLocal?.tipo_s}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.back();
                router.back();
                router.back();
              }}
              style={{
                width: "48%",
                padding: 5,
                backgroundColor: "#0F539C",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Volver al inicio</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };
  useFocusEffect(useCallback(() => {}, []));

  return (
    <SafeAreaProvider>
      <BlurView style={{ flex: 1 }} tint="dark" intensity={100}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ height: "100%", width: "100%" }}
        ></TouchableOpacity>
      </BlurView>
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
            gap: 10,
          }}
        >
          {DataLocal?.Error == "true" ? (
            <MaterialIcons name="error-outline" size={50} color="#d00000" />
          ) : (
            <AntDesign name="checkcircleo" size={50} color="#38b000" />
          )}
          <Text
            style={{
              textAlign: "center",
              color: DataLocal?.Error == "true" ? "#d00000" : "#38b000",
            }}
          >
            {DataLocal?.titulo}
          </Text>
          <Text style={{ textAlign: "center", color: "#7b7b7bff" }}>
            {DataLocal?.descripcion}
          </Text>
          <Btns />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
