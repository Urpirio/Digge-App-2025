import { TouchableOpacity, View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import { router } from "expo-router";

export default function Section_Header() {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 10,
        gap: 10,
        backgroundColor: "#0F539C",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Feather name="arrow-left" size={28} color="#f8f9faa7" />
      </TouchableOpacity>

      <View>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
          Chat Atención
        </Text>
        <Text style={{ fontWeight: "400", color: "#f8f9fa77" }}>
          Soporte DIGESSET
        </Text>
      </View>
        <TouchableOpacity style={{ paddingHorizontal: 10 }}>
          <Fontisto name="more-v-a" size={24} color="white" />
        </TouchableOpacity>
    </View>
  );
}
