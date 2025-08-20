import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

export default function Section_User() {

  const  height = useSharedValue<string>("0%");


  useFocusEffect(
    useCallback(() => {
      height.value = withTiming("18%", {  
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      });
    }, []));



  return (
    <Animated.View
      style={{
        backgroundColor: "#0F539C",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        height,
        justifyContent:"flex-start"
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
          onPress={() => router.navigate("/Screens/ScreenPerfil")}
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          <Image
            style={{ height: 60, width: 60, borderRadius: 80 }}
            source={{
              uri: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
            }}
          />
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 24, color: "white" }}>Hola, Juan!</Text>
            <Text style={{ color: "#ffffffa2" }}>Ciudadano</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
