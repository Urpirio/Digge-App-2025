import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Card_Denuncias() {
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
          backgroundColor: "#EAF4E9",
        }}
      >
        <AntDesign name="exclamationcircleo" size={24} color="#4BB04D" />
      </View>
      <View>
        <Text style={{ fontWeight: "500", fontSize: 16 }}>
          Denuncia procesada
        </Text>
        <Text style={{ fontSize: 12 }}>
          Denuncia #D020 procesada y validada
        </Text>
        <Text style={{ color: "#A4A4AE", fontSize: 12 }}>4h</Text>
      </View>
      <View>
        <Text style={{ fontSize: 14, color: "#4BB04D", fontWeight: "500" }}>
          +40 pts
        </Text>
      </View>
    </View>
  );
}
