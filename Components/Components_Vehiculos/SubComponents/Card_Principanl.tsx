import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ObjectosCars } from "../hooks/useGetVehiculos";
interface Tools {
  Data_Car: ObjectosCars | undefined;
}

export default function Card_Principanl({Data_Car}:Tools) {
  return (
    <View
      style={{
        padding: 15,
        alignItems: "flex-start",
        borderRadius: 20,
        gap: 20,
        backgroundColor: "#0F539C",
        boxShadow: "0px 0px 30px 0px #6565656c",
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 15,
          backgroundColor: "#ffffff3c",
        }}
      >
        <Text style={{ color: "white", fontWeight: "400" }}>Principal</Text>
      </View>
      <View>
        <Text style={{ fontSize: 26, fontWeight: "600", color: "white" }}>
          {Data_Car?.matricula}
        </Text>
        <Text style={{ color: "#ffffff9e", fontWeight: "500" }}>
          {Data_Car?.modelo}{" "}{Data_Car?.year}
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 5,
            paddingVertical: 3,
            borderRadius: 10,
            backgroundColor: "white",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="file-document-outline"
            size={16}
            color="#22C55E"
          />
          <Text style={{ color: "#22C55E", fontSize: 14 }}>Marbete</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 5,
            paddingVertical: 3,
            borderRadius: 10,
            backgroundColor: "white",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={16}
            color="#1B95F4"
          />
          <Text style={{ color: "#1B95F4", fontSize: 14 }}>Seguro</Text>
        </View>
      </View>
    </View>
  );
}
