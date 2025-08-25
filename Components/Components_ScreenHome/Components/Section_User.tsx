import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function Section_User(Tools: {
  foto_perfil: string | undefined;
  nombres: string | undefined;
  apellidos: string | undefined;
  cedula: string | undefined;
}) {
  const height = useSharedValue<string>("0%");
  const { foto_perfil, nombres, apellidos, cedula } = Tools;

  useFocusEffect(
    useCallback(() => {
      height.value = withTiming("18%", {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      });
    }, [])
  );

  return (
    <Animated.View
      style={{
        backgroundColor: "#0F539C",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        height,
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: "flex-end",
          gap: 20,
        }}
      >
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

        <TouchableOpacity
          onPress={() => router.navigate("/SubScreens/ScreenPerfil")}
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          <Image
            style={{ height: 60, width: 60, borderRadius: 80 }}
            source={{
              uri: foto_perfil
                ? foto_perfil
                : "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
            }}
          />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 24, color: "white" }}>{nombres}</Text>
            <Text style={{ color: "#ffffffa2" }}>Ciudadano</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
