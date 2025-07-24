import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card_Score from "../SubComponents/Card_Score";

export default function Section_User() {
  return (
    <View style={{ paddingBottom: 20 ,backgroundColor: "#0F539C", borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,}}>
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: "flex-end",
          gap: 20,
        }}
      >
        <View
          style={{ flexDirection: "row", justifyContent: "flex-end", gap: 10 }}
        >
          <TouchableOpacity>
            <Ionicons name="search-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            style={{ height: 60, width: 60, borderRadius: 80 }}
            source={{
              uri: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
            }}
          />
          <View>
            <Text style={{ fontSize: 24, color: "white" }}>Hola, Juan!</Text>
            <Text style={{ color: "#ffffffa2" }}>Ciudadano</Text>
          </View>
        </View>

        <Card_Score />
      </View>
    </View>
  );
}
