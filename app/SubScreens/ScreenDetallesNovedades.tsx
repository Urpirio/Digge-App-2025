import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

export default function ScreenDetallesNovedades() {
  return (
    <SafeAreaProvider
      style={{ backgroundColor: "#0F539C", justifyContent: "flex-end" }}
    >
      <View style={{ height: "100%" }}>
        <Image
          style={{ width: "100%", height: "25%", objectFit: "cover" }}
          source={require("@/Assets/Image/Img_Prueba_Novedades.png")}
        />
        <View style={{ position: "absolute",top:10, left: 10 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
          >
            <Feather name="arrow-left" size={28} color="white" />
            <Text style={{ color: "white" }}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          borderWidth: 1,
          position: "absolute",
          height: "80%",
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          gap: 10,
          borderColor: "#ccc",
        }}
      >
        <Text style={{fontSize:30}}>DIGEAPP sé parte del cambio víal</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Un grupo de jóvenes dominicanos, motivados por el Ministerio de la
          Juventud, ha lanzado una innovadora aplicación móvil que busca
          transformar la manera en que los jóvenes del país se conectan con
          oportunidades de educación, empleo y voluntariado. La app, diseñada
          con una interfaz intuitiva y moderna, permite a los usuarios acceder a
          programas, talleres y becas de manera rápida y segura, fomentando así
          el desarrollo personal y profesional de la juventud dominicana.
          Además, la plataforma incluye funciones interactivas como foros de
          discusión, desafíos comunitarios y espacios de networking que
          incentivan la colaboración entre jóvenes de distintas regiones del
          país. Con esta iniciativa, los creadores esperan fortalecer el talento
          local, impulsar la participación ciudadana y ofrecer herramientas
          tecnológicas que faciliten la construcción de un futuro más prometedor
          para todos.
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
