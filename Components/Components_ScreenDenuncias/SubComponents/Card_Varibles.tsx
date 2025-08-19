import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Style_CardVariable } from "../Style/Style_CardVaribles";

interface Content {
  bgIconColor: String;
  Icon: any;
  Titulo: String;
  subTitulo: String;
  Link: any;
}

export default function Card_Varibles({
  bgIconColor,
  Icon,
  Titulo,
  subTitulo,
  Link,
}: Content) {
  return (
    <TouchableOpacity
      onPress={() => router.navigate(Link)}
      style={Style_CardVariable.Card}
    >
      <View style={Style_CardVariable.SubContainerCard}>
        <View
          style={{
            padding: 15,
            borderRadius: 10,
            backgroundColor: `#${bgIconColor}`,
          }}
        >
          {Icon}
        </View>
        <View>
          <Text style={{ fontSize: 18 }}>{Titulo}</Text>
          <Text style={{ fontSize: 14, color: "#4A739C" }}>{subTitulo}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#0D141C" />
    </TouchableOpacity>
  );
}
