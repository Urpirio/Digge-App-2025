import { Text, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function Card_Score() {
  return (
    <View
      style={{
        flexDirection: "row",
        borderWidth: 1,
        justifyContent: "space-between",
        borderRadius: 15,
        backgroundColor: "#d9d9d930",
        borderColor: "#03569fff",
        alignContent: "center",
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          borderRightWidth: 1,
          alignItems: "center",
          gap: 5,
          borderColor: "#e9ecef",
          flexGrow: 1,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
          4K
        </Text>
        <Text style={{color:'#d7d7d7ff'}}>Puntos</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          borderRightWidth: 1,
          alignItems: "center",
          gap: 5,
          borderColor: "#e9ecef",
          flexGrow: 1,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>
          0
        </Text>
        <Text style={{color:'#d7d7d7ff'}}>Infracciones</Text>
      </View>

      <View style={{ paddingHorizontal: 20, alignItems: "center", gap: 5, flexGrow: 1 }}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Fontisto name="star" size={24} color="#8BC8FE" />
          <Fontisto name="star" size={24} color="#8BC8FE" />
          <Fontisto name="star" size={24} color="#8BC8FE" />
        </View>
        <Text style={{color:'#d7d7d7ff'}}>Conductor</Text>
      </View>
    </View>
  );
}
