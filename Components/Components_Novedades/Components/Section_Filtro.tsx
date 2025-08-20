import { TouchableOpacity, View, Text } from "react-native";

export default function Section_Filtro() {
  return (
    <View>
      <TouchableOpacity>
        <Text style={{ color: "#0F539C", fontSize: 16, fontWeight: "500" }}>
          Filtrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
