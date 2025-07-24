import { Text, View, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

export default function Card_AgregarCarros() {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        width: "48%",
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderColor: "#dcdcdcff",
        gap: 5,
        boxShadow: "0px 0px 30px 0px #dee2e64e",
        borderStyle:'dashed'
      }}
    >
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EDF4FC",
        }}
      >
        <Octicons name="plus" size={24} color="#1569C0" />
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Agregar vehículo</Text>
        <Text style={{ fontSize: 12, fontWeight: "300" }}>
          Registra un nuevo vehiculo
        </Text>
      </View>
    </TouchableOpacity>
  );
}
