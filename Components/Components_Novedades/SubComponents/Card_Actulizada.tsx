import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Card_Actulizada() {
  return (
    <TouchableOpacity
      onPress={() => router.navigate("/SubScreens/ScreenDetallesNovedades")}
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 150,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            objectFit: "cover",
          }}
          source={require("@/Assets/Image/Img_Prueba_Novedades.png")}
        />
        <View
          style={{
            position: "absolute",
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              backgroundColor: "#00000036",
              backdropFilter: "blur(50px)",
              padding: 5,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#cccccc5b",
            }}
          >
            18/10/2025
          </Text>
        </View>
      </View>
      <View style={{ paddingVertical: 10, gap: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "500", color: "#0F539C" }}>
          DIGEAPP sé parte del cambio víal
        </Text>

        <Text style={{ fontSize: 14, color: "gray" }}>
          Una app creada por jovenes dominicanos impulsados por el ministerio de
          la juventud Una app creada por jovenes dominicanos impulsados por el
          ministerio de la juventud
        </Text>
      </View>
    </TouchableOpacity>
  );
}
