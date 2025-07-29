import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Card_Renovacion() {
  return (
    <View
      style={{
        borderWidth: 1,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        borderRadius: 10,
        borderColor: "#dee2e6",
      }}
    >
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          backgroundColor: "#ff990039",
        }}
      >
        <AntDesign name="exclamationcircleo" size={24} color="#FF9700" />
      </View>
      <View>
        <Text style={{ fontWeight: "500", fontSize: 16 }}>
          Renovación de marbete
        </Text>
        <Text style={{ fontSize: 12 }}>
          Renovación procesada y validada
        </Text>
        <Text style={{ color: "#A4A4AE", fontSize: 12 }}>4h</Text>
      </View>
      <View>
        <Text style={{ fontSize: 14, color: "#FF9700", fontWeight: "500" }}>
          -650 pts
        </Text>
      </View>
    </View>
  );
}
