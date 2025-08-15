import { View, TouchableOpacity, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

export default function Section_Header() {
  return (
    <View
      style={{
        backgroundColor: "#0F539C",
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>
        Perfil
      </Text>
    </View>
  );
}
