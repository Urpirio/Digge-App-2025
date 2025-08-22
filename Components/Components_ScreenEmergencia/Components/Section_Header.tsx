import { Image, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function Section_Header(Tools: {
  foto_perfil: string | undefined;
  nombres: string | undefined;
  apellidos: string | undefined;
}) {
  const { foto_perfil, nombres, apellidos } = Tools;

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#0F539C",
        paddingBottom: 10,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => router.navigate("/Screens/ScreenPerfil")}
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Image
          style={{ height: 50, width: 50, borderRadius: 80 }}
          source={{
            uri: foto_perfil
              ? foto_perfil
              : "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
          {nombres}
        </Text>
      </TouchableOpacity>
      <View
        style={{ flexDirection: "row", justifyContent: "flex-end", gap: 10 }}
      >
        <TouchableOpacity>
          <Ionicons name="search-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.navigate("/SubScreens/ScreenNotificaciones")}
        >
          <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
