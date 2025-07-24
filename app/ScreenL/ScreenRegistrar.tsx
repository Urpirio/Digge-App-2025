import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function ScreenRegistrar() {
  return (
    <SafeAreaProvider>
      <Image
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
        source={require("../../Assets/Backgrounds/Pagina de bienvenida.png")}
      />
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          paddingTop: 80,
          paddingHorizontal: 20,
          gap: 30,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{ objectFit: "contain", height: 100, width: 100 }}
            source={require("../../Assets/Image/Logo.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Crea tu cuenta
          </Text>
        </View>
        <View style={{ justifyContent: "center", gap: 10 }}>
          <TextInput
            placeholder="Correo electrónico "
            placeholderTextColor={"#adb5bd"}
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              fontSize: 16,
              borderRadius: 10,
              borderColor: "#e9ecef",
              height: 50,
            }}
          />
          <TextInput
            placeholder="Cedula"
            placeholderTextColor={"#adb5bd"}
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              fontSize: 16,
              borderRadius: 10,
              borderColor: "#e9ecef",
              height: 50,
            }}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor={"#adb5bd"}
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              fontSize: 16,
              borderRadius: 10,
              borderColor: "#e9ecef",
              height: 50,
            }}
          />
          <TextInput
            placeholder="Confirmar contrseña"
            placeholderTextColor={"#adb5bd"}
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              fontSize: 16,
              borderRadius: 10,
              borderColor: "#e9ecef",
              height: 50,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/Screens/AScreenHome")}
          style={{ padding: 12, backgroundColor: "#0F539C", borderRadius: 10 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Registrarte
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
