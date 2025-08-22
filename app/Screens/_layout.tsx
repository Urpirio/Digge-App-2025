import { router, Stack, Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { usePathname } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function _layout() {
  const BgColor_Btn = "#0F539C";
  const Pathname = usePathname();


  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          marginBottom: 20,
          marginHorizontal: 10,
          position: "absolute",
          borderRadius: 50,
          backgroundColor: "#ffffffff",
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Protected guard={true}>
        <Tabs.Screen
          name="AScreenHome"
          options={{
            header: () => {
              return (
                <View style={{ height: 30, backgroundColor: "#0F539C" }} />
              );
            },
            tabBarButton: () => {
              return (
                <TouchableOpacity
                  onPress={() => router.navigate("/Screens/AScreenHome")}
                  style={{
                    backgroundColor: "",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft:5
                  }}
                >
                  <View
                    style={{
                      borderRadius: Pathname.includes("AScreenHome")
                        ? "100%"
                        : "",
                      backgroundColor: Pathname.includes("AScreenHome")
                        ? BgColor_Btn
                        : "",
                      height: 50,
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      size={25}
                      name="home"
                      color={
                        Pathname.includes("AScreenHome") ? "white" : "#2095f4b1"
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            },
            tabBarLabel: "",
            animation: "fade",
          }}
        />

        <Tabs.Screen
          name="BScreenVehiculos"
          options={{
            tabBarLabel: "",
            tabBarButton: () => {
              return (
                <TouchableOpacity
                  onPress={() => router.navigate("/Screens/BScreenVehiculos")}
                  style={{
                    backgroundColor: "",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: Pathname.includes("BScreenVehiculos")
                        ? "100%"
                        : "",
                      backgroundColor: Pathname.includes("BScreenVehiculos")
                        ? BgColor_Btn
                        : "",
                      height: 50,
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      size={25}
                      name="car-outline"
                      color={
                        Pathname.includes("BScreenVehiculos")
                          ? "white"
                          : "#2095f4b1"
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            },
            header: () => {
              return (
                <View style={{ height: 30, backgroundColor: "#0F539C" }} />
              );
            },
            animation: "fade",
          }}
        />

        <Tabs.Screen
          name="DScreenDenuncias"
          options={{
            header: () => {
              return (
                <View style={{ height: 30, backgroundColor: "#0F539C" }} />
              );
            },
            tabBarLabel: "",
            tabBarButton: () => {
              return (
                <TouchableOpacity
                  onPress={() => router.navigate("/Screens/DScreenDenuncias")}
                  style={{
                    backgroundColor: "",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: Pathname.includes("DScreenDenuncias")
                        ? "100%"
                        : "",
                      backgroundColor: Pathname.includes("DScreenDenuncias")
                        ? "#FF9900"
                        : "",
                      height: 50,
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      size={25}
                      name="warning-outline"
                      color={
                        Pathname.includes("DScreenDenuncias")
                          ? "white"
                          : "#FF9900"
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            },
            animation: "fade",
          }}
        />

        <Tabs.Screen
          name="PScreenPagos"
          options={{
            header: () => {
              return (
                <View style={{ height: 30, backgroundColor: "#0F539C" }} />
              );
            },
            tabBarButton: () => {
              return (
                <TouchableOpacity
                  onPress={() => router.navigate("/Screens/PScreenPagos")}
                  style={{
                    backgroundColor: "",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: Pathname.includes("PScreenPagos")
                        ? "100%"
                        : "",
                      backgroundColor: Pathname.includes("PScreenPagos")
                        ? BgColor_Btn
                        : "",
                      height: 50,
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      size={25}
                      name="card"
                      color={
                        Pathname.includes("PScreenPagos")
                          ? "white"
                          : "#2095f4b1"
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            },
            tabBarLabel: "",
            animation: "fade",
          }}
        />

        <Tabs.Screen
          name="ScreenEmergencia"
          options={{
            header: () => {
              return (
                <View style={{ height: 30, backgroundColor: "#0F539C" }} />
              );
            },
            tabBarButton: () => {
              return (
                <TouchableOpacity
                  onPress={() => router.navigate("/Screens/ScreenEmergencia")}
                  style={{
                    backgroundColor: "",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: Pathname.includes("ScreenEmergencia")
                        ? "100%"
                        : "",
                      backgroundColor: Pathname.includes("ScreenEmergencia")
                        ? "#EE2A24"
                        : "",
                      height: 50,
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="information-outline"
                      size={25}
                      color={
                        Pathname.includes("ScreenEmergencia")
                          ? "white"
                          : "#EE2A24"
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            },
            tabBarLabel: "",
            animation: "fade",
          }}
        />
        <Tabs.Screen
          name="ScreenPerfil"
          options={{
            header: () => {
              return (
                <View style={{ height: 30, backgroundColor: "#0F539C" }} />
              );
            },
            tabBarButton: () => {
              return (
                <TouchableOpacity
                  onPress={() => router.navigate({
                    pathname:"/Screens/ScreenPerfil",
                  })}
                  style={{
                    backgroundColor: "",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight:5
                  }}
                >
                  <View
                    style={{
                      borderRadius: Pathname.includes("ScreenPerfil")
                        ? "100%"
                        : "",
                      backgroundColor: Pathname.includes("ScreenPerfil")
                        ? "#0F539C"
                        : "",
                      height: 50,
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      name="user"
                      size={24}
                      color={
                        Pathname.includes("ScreenPerfil")
                          ? "white"
                          : "#2095f4b1"
                      }
                    />
                  </View>
                </TouchableOpacity>
              );
            },
            tabBarLabel: "",
            animation: "fade",
          }}
        />
      </Tabs.Protected>
    </Tabs>
  );
}
