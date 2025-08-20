import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";
import { router } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BlurView } from "expo-blur";

export default function Modal_Ruta() {
  return (
    <SafeAreaProvider style={{ justifyContent: "flex-end" }}>
      <BlurView
        style={{ height: "100%", width: "100%" }}
        intensity={100}
        tint="dark"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            height: "100%",
            width: "100%",
          }}
        ></TouchableOpacity>
      </BlurView>
      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          paddingBottom: 50,
          borderRadius: 30,
          paddingVertical: 20,
          paddingHorizontal: 15,
          height: "50%",
          borderColor: "#e9ecef",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ gap: 5 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                INTRANT SEDE principal
              </Text>
              <TouchableOpacity
                onPress={() => {
                  router.navigate("/Mod/Modal_InfoLugarRuta");
                }}
              >
                <MaterialCommunityIcons
                  name="information"
                  size={24}
                  color="#0F539C"
                />
              </TouchableOpacity>
            </View>
            <Text style={{ color: "#9c9d9dff" }}>
              No hay averías en su ruta
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 5,
              paddingHorizontal: 5,
              backgroundColor: "#e9ecefa4",
              borderColor: "#e9ecef",
            }}
          >
            <Ionicons size={25} name="car-outline" color={"gray"} />
            <Text style={{ fontSize: 12, color: "gray", fontWeight: "500" }}>
              10 min
            </Text>
          </View>
        </View>
        <ScrollView horizontal>
          <View style={{ paddingRight: 5, paddingVertical: 10 }}>
            <Image
              style={{ height: "100%", width: 250, borderRadius: 20 }}
              source={{
                uri: "https://presidencia.gob.do/sites/default/files/styles/large/public/news/2024-09/thumbnail_FACHADA%20LICENCIA%20%281%29%20%281%29.jpg?itok=qviyMuNO",
              }}
            />
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Image
              style={{ height: "100%", width: 250, borderRadius: 20 }}
              source={{
                uri: "https://presidencia.gob.do/sites/default/files/styles/large/public/news/2024-09/thumbnail_FACHADA%20LICENCIA%20%281%29%20%281%29.jpg?itok=qviyMuNO",
              }}
            />
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <Image
              style={{ height: "100%", width: 250, borderRadius: 20 }}
              source={{
                uri: "https://presidencia.gob.do/sites/default/files/styles/large/public/news/2024-09/thumbnail_FACHADA%20LICENCIA%20%281%29%20%281%29.jpg?itok=qviyMuNO",
              }}
            />
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              // borderWidth: 1,
              padding: 12,
              width: "48%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              backgroundColor: "#dee2e6",
            }}
          >
            <Text style={{ color: "#0F539C" }}>Programar ruta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // borderWidth: 1,
              padding: 12,
              width: "48%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              backgroundColor: "#0F539C",
            }}
          >
            <Text style={{ color: "white" }}>Iniciar ruta ahora</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
