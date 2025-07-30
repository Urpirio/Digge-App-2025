import { TouchableOpacity, View, Text } from "react-native";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Buttons_Evidencias(D: { Status: number }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <TouchableOpacity
        onPress={() =>
          router.navigate({
            pathname: "/SubScreens/ScreenCamaraFotos",
            params: {
              Status: D.Status,
            },
          })
        }
        style={{
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "48%",
          padding: 10,
          gap: 5,
          borderRadius: 10,
          borderColor: "#D1D0D0",
          backgroundColor: "white",
        }}
      >
        <Entypo name="camera" size={24} color="#0F539C" />
        <Text style={{ color: "#0F539C", fontWeight: "500" }}>Tomar Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          router.navigate({
            pathname: "/SubScreens/ScreenCamaraVideo",
            params: {
              Status: D.Status,
            },
          })
        }
        style={{
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "48%",
          padding: 10,
          gap: 5,
          borderRadius: 10,
          borderColor: "#D1D0D0",
          backgroundColor: "white",
        }}
      >
        <FontAwesome name="video-camera" size={24} color="#0F539C" />
        <Text style={{ color: "#0F539C", fontWeight: "500" }}>
          Grabar video
        </Text>
      </TouchableOpacity>
    </View>
  );
}
