import { Image, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

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
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#0F539C",
          paddingBottom: 10,
          paddingHorizontal: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            style={{ height: 50, width: 50, borderRadius: 80 }}
            source={{
              uri: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
            Juan Marte
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "flex-end", gap: 10 }}
        >
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

      <View
        style={{
          backgroundColor: "#0F539C",
          paddingBottom: 10,
          paddingHorizontal: 10,
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "500", color: "white" }}>
          Denuncias y reportes
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setStateSelect(false)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "48%",
              padding: 10,
              borderRadius: 10,
              gap: 5,
              justifyContent: "center",
              backgroundColor: StateSelect ? "#0F539C" : "white",
            }}
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
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "48%",
              padding: 10,
              borderRadius: 10,
              gap: 5,
              justifyContent: "center",
              backgroundColor: StateSelect ? "white" : "#0F539C",
            }}
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
