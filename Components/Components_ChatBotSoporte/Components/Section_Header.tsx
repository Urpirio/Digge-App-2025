import { TouchableOpacity, View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import { router } from "expo-router";
import { Style_SectionHeader } from "../Style/Style_SectionHeader";

export default function Section_Header() {
  return (
    <View style={Style_SectionHeader.Container_Header}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Feather name="arrow-left" size={28} color="#f8f9faa7" />
      </TouchableOpacity>

      <View>
        <Text style={Style_SectionHeader.Text_HeaderTitulo}>Chat Atención</Text>
        <Text style={Style_SectionHeader.Text_HeaderSubTitulo}>
          Soporte DIGESSET
        </Text>
      </View>
      <TouchableOpacity style={{ paddingHorizontal: 10 }}>
        <Fontisto name="more-v-a" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
