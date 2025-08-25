import { View, TouchableOpacity, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

export default function Section_Header() {
  return (
    <View
      style={{
        backgroundColor: "#0F539C",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <View style={{width: "30%",paddingLeft:10}}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            
          }}
        >
          <Feather name="arrow-left" size={28} color="#f8f9faa7" />
          <Text style={{ color: "#f8f9faa7" }}>Volver</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>
        Perfil
      </Text>
      <View style={{ width: "30%" }}></View>
    </View>
  );
}
