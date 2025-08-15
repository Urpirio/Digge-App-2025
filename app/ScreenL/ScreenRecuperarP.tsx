import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

export default function ScreenRecuperarP() {
  const [InputRecuperar, setInputRecuperar] = useState<string | undefined>();

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
          paddingHorizontal: 20,
          alignItems: "center",
          gap: 20,
        }}
      >
        <View style={{ paddingTop: 40, paddingBottom: 60, width: "100%",alignItems:'flex-start' }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "100%",
              padding: 5,
              backgroundColor: "#0F539C",
            }}
          >
            <Feather name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <Image
          style={{ objectFit: "contain", height: 100, width: 100 }}
          source={require("../../Assets/Image/Logo.png")}
        />
        <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center" }}>
          Ingresa tu correo para recuperar tu contraseña
        </Text>
        <View
          style={{
            backgroundColor: "#e9e9e97e",
            borderRadius: 10,
            alignItems: "center",
            padding: 5,
            width:'100%'
          }}
        >
          <TextInput
            placeholder="Correo Electronico"
            placeholderTextColor={"#adb5bd"}
            style={{
              fontSize: 16,
              width: "100%",
              color: "gray",
            }}
            value={InputRecuperar}
            onChangeText={setInputRecuperar}
          />
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 12,
            backgroundColor: "#0F539C",
            borderRadius: 10,
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "300",
            }}
          >
            Confirmar correo
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
