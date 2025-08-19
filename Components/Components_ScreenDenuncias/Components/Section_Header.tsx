import { Image, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Style_SectionHeader } from "../Style/Style_SectionHeader";
// import { Link } from "expo-router";

interface Content {
  setStateSelect: any;
  StateSelect: boolean;
}

export default function Section_Header({
  setStateSelect,
  StateSelect,
}: Content) {
  return (
    <View>
      <View style={Style_SectionHeader.ConatinerTop_header}>
        <TouchableOpacity
          onPress={() => router.navigate("/Screens/ScreenPerfil")}
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          <Image
            style={{ height: 50, width: 50, borderRadius: 80 }}
            source={{
              uri: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
            }}
          />
          <Text style={Style_SectionHeader.Text_NombreUsuario}>Juan Marte</Text>
        </TouchableOpacity>
        <View style={Style_SectionHeader.Container_BtnNoti_Search}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.navigate("/SubScreens/ScreenNotificaciones")}
          >
            <Ionicons name="notifications-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Style_SectionHeader.ConatainerBottom_header}>
        <Text style={{ fontSize: 26, fontWeight: "500", color: "white" }}>
          Denuncias y reportes
        </Text>
        <View style={Style_SectionHeader.Container_btnDash_Historial}>
          <TouchableOpacity
            onPress={() => setStateSelect(false)}
            style={
              StateSelect
                ? Style_SectionHeader.BtnDash_Historial_IN
                : Style_SectionHeader.BtnDash_Historial_OUT
            }
          >
            <Ionicons
              name="wallet-outline"
              size={16}
              color={StateSelect ? "white" : "#0F539C"}
            />
            <Text
              style={{
                color: StateSelect ? "white" : "#0F539C",
                fontWeight: "500",
              }}
            >
              Dashboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStateSelect(true)}
            style={
              StateSelect
                ? Style_SectionHeader.BtnDash_Historial_IN
                : Style_SectionHeader.BtnDash_Historial_OUT
            }
          >
            <MaterialIcons
              name="access-time"
              size={16}
              color={StateSelect ? "#0F539C" : "white"}
            />
            <Text
              style={{
                color: StateSelect ? "#0F539C" : "white",
                fontWeight: "500",
              }}
            >
              Historial
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
