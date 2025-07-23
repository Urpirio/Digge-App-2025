import { router, Stack, Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { usePathname } from "expo-router";

export default function _layout() {

  const BgColor_Btn = "#0F539C";
  const Pathname = usePathname();



  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          marginBottom: 20,
          marginHorizontal: 5,
          position: "absolute",
          borderRadius: 50,
          backgroundColor: "#e9ecef",
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="AScreenHome"
        options={{
          header: () => {
            return <View />;
          },
          tabBarButton: () => {
            return (
              <TouchableOpacity
                onPress={()=>router.navigate('/Screens/AScreenHome')}
                style={{
                  backgroundColor: "",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: Pathname === '/Screens/AScreenHome' ? '100%' : '',
                    backgroundColor: Pathname === '/Screens/AScreenHome' ? BgColor_Btn : '',
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons size={25} name="home" color={Pathname === '/Screens/AScreenHome' ? "white" : "gray"} />
                </View>
              </TouchableOpacity>
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="BScreenVehiculos"
        options={{
          tabBarLabel: "",
          tabBarButton: () => {
            return (
              <TouchableOpacity
              onPress={()=>router.navigate('/Screens/BScreenVehiculos')}
                style={{
                  backgroundColor: "",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: Pathname === '/Screens/BScreenVehiculos' ? '100%' : '',
                    backgroundColor: Pathname === '/Screens/BScreenVehiculos' ? BgColor_Btn : '',
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons size={25} name="car-outline" color={Pathname === '/Screens/BScreenVehiculos' ? "white" :"gray"} />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="DScreenDenuncias"
        options={{
          tabBarLabel: "",
          tabBarButton: () => {
            return (
              <TouchableOpacity
              onPress={()=>router.navigate('/Screens/DScreenDenuncias')}
                style={{
                  backgroundColor: "",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: Pathname === '/Screens/DScreenDenuncias' ? '100%' : '',
                    backgroundColor: Pathname === '/Screens/DScreenDenuncias' ? BgColor_Btn : '',
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons size={25} name="warning-outline" color={Pathname === '/Screens/DScreenDenuncias' ? "white" : "gray"} />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="PScreenPagos"
        options={{
          tabBarButton: () => {
            return (
              <TouchableOpacity
              onPress={()=>router.navigate('/Screens/PScreenPagos')}
                style={{
                  backgroundColor: "",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: Pathname === '/Screens/PScreenPagos' ? '100%' : '',
                    backgroundColor: Pathname === '/Screens/PScreenPagos' ? BgColor_Btn : '',
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons size={25} name="card" color={Pathname === '/Screens/PScreenPagos' ? "white" : "gray"} />
                </View>
              </TouchableOpacity>
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="ScreenEmergencia"
        options={{
          tabBarButton: () => {
            return (
              <TouchableOpacity
              onPress={()=>router.navigate('/Screens/ScreenEmergencia')}
                style={{
                  backgroundColor: "",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: Pathname === '/Screens/ScreenEmergencia' ? '100%' : '',
                    backgroundColor: Pathname === '/Screens/ScreenEmergencia' ? BgColor_Btn : '',
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="information-outline"
                    size={25}
                    color={Pathname === '/Screens/ScreenEmergencia' ? "white" : "gray"}
                  />
                </View>
              </TouchableOpacity>
            );
          },
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
}
