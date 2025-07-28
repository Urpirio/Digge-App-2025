import { Text, TouchableOpacity, View } from "react-native";

export default function Form_Part3() {
  return (
    <View style={{paddingVertical:10}}>
    
      <TouchableOpacity
        style={{
          //   borderWidth: 1,
          paddingVertical: 15,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          backgroundColor: "#0F539C",
        }}
      >
        <Text style={{ color: "white", fontWeight: "500" }}>
          + Agregar Vehículo
        </Text>
      </TouchableOpacity>
    </View>
  );
}
