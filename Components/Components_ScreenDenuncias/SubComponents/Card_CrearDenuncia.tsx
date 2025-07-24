import { View, Text, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

export default function Card_CrearDenuncia() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 15,
        backgroundColor: "white",
        borderColor: "#e6e6e6ff",
        alignItems: "center",
        boxShadow: "0px 0px 5px 0px #dee2e6",
      }}
    >
      <View>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Nueva denuncia o reporte
        </Text>
        <Text style={{ fontWeight: "300" }}>3 denuncias realizadas</Text>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 20,
          height: 40,
          width: 40,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0F539C",
        }}
      >
        <Octicons name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
