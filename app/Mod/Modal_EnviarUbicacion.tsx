import { SafeAreaProvider } from "react-native-safe-area-context";
import { TouchableOpacity, View, Text } from "react-native";
import { router } from "expo-router";
import { BlurView } from "expo-blur";

export default function Modal_EnviarUbicacion() {
  return (
    <SafeAreaProvider
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <BlurView
        tint="dark"
        intensity={100}
        style={{ height: "100%", width: "100%" }}
      >
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
        ></TouchableOpacity>
      </BlurView>
      <View style={{ position: "absolute", paddingHorizontal: 10 }}>
        <View
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#dee2e6",
            borderRadius: 30,
            width: "100%",
            padding: 20,
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                fontWeight: "600",
                color: "red",
              }}
            >
              Seguro que quiero activar el modo EMERGENCIA
            </Text>
            <Text
              style={{ textAlign: "center", fontWeight: "400", color: "gray" }}
            >
              Al activarlo, tu ubicación se envía automáticamente a las
              autoridades, quienes se movilizarán de inmediato para brindarte
              asistencia.
            </Text>
          </View>
          <View style={{ gap: 10 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "red",
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>Activar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "#adb5bd",
              }}
            >
              <Text style={{ color: "white", fontWeight: "500" }}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
