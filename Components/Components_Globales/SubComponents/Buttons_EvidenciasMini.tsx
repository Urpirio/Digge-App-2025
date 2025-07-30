import { TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

export default function Buttons_EvidenciasMini(D: { Status: number }) {
  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
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
          padding: 5,
          borderRadius: 10,
          borderColor: "#dee2e6",
        }}
      >
        <Entypo name="camera" size={24} color="#0F539C" />
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
          padding: 5,
          borderRadius: 10,
          borderColor: "#dee2e6",
        }}
      >
        <FontAwesome name="video-camera" size={24} color="#0F539C" />
      </TouchableOpacity>
    </View>
  );
}
