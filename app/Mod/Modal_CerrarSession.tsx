import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { router } from "expo-router";


export default function Modal_CerrarSession() {
  return (
    <SafeAreaProvider style={{ justifyContent: "flex-end" }}>
      <BlurView intensity={100} tint="dark">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={{ width: "100%", height: "100%" }}
        ></TouchableOpacity>
      </BlurView>
      <View
        style={{
          borderWidth: 1,
          width: "100%",
          backgroundColor: "white",
          borderRadius: 30,
          position: "absolute",
          borderColor: "#ced0d1ff",
          padding: 20,
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <View style={{ paddingHorizontal: 5 }}>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "300" }}
          >
            ¿Estás seguro de que deseas cerrar sesión?
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          <TouchableOpacity
            onPress={() => {
              router.back();
              router.back();
              router.back();
            }}
            style={{
              width: "100%",
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: "#EE2A24",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "400",
                fontSize: 16,
              }}
            >
              Si, cerrar sesion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={{
              width: "100%",
              paddingVertical: 10,
              borderRadius: 10,
              backgroundColor: "#adb5bd",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "400",
                fontSize: 16,
              }}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
