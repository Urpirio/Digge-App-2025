import { TouchableOpacity, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function Section_ContainerBody(Tools: {
  cedula: string | undefined;
}) {
  const {cedula} = Tools;
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#dee2e6",
        }}
      >
        {/* btn Editar perfil */}
        <TouchableOpacity
          onPress={() =>
            router.navigate({
              pathname: "/Mod/Modal_EditarPerfil",
              params: {
                cedula: cedula,
              },
            })
          }
          style={{
            paddingVertical: 18,
            paddingHorizontal: 18,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Feather name="user" size={24} color="black" />
            <Text>Editar perfil</Text>
          </View>
          <Entypo name="chevron-thin-right" size={24} color="black" />
        </TouchableOpacity>

        {/* Btn Notificaciones */}
        <TouchableOpacity
          style={{
            paddingVertical: 18,
            paddingHorizontal: 18,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text>Notificaciones</Text>
          </View>
          <Entypo name="chevron-thin-right" size={24} color="black" />
        </TouchableOpacity>

        {/* Btn Seguridad y permisos */}
        <TouchableOpacity
          style={{
            paddingVertical: 18,
            paddingHorizontal: 18,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Feather name="shield" size={24} color="black" />
            <Text>Seguridad y permisos</Text>
          </View>
          <Entypo name="chevron-thin-right" size={24} color="black" />
        </TouchableOpacity>

        {/* Btn  Ayuda y soporte a usuario*/}
        <TouchableOpacity
          style={{
            paddingVertical: 18,
            paddingHorizontal: 18,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Feather name="alert-circle" size={24} color="black" />
            <Text>Ayuda y soporte a usuario</Text>
          </View>
          <Entypo name="chevron-thin-right" size={24} color="black" />
        </TouchableOpacity>

        {/* Btn Cerrar Sesion */}

        <TouchableOpacity
          onPress={() => router.navigate("/Mod/Modal_CerrarSession")}
          style={{
            paddingVertical: 18,
            paddingHorizontal: 18,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Feather name="log-out" size={24} color="#FF0101" />
            <Text style={{ color: "#FF0101" }}> Cerrar Sesión </Text>
          </View>
          <Entypo name="chevron-thin-right" size={24} color="#FF0101" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
