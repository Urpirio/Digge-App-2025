import { View, Image, Text } from "react-native";
import { useStyleScreenPerfil } from "../Hook/useStyleScreenPerfil";

export default function Section_Perfil(Tools: {
  foto_perfil: string | undefined;
  nombres: string | undefined;
  apellidos: string | undefined;
  cedula: string | undefined;
  Estatus_Licencia: string | undefined;
}) {
  const { EstadoLicencia } = useStyleScreenPerfil();
  const { foto_perfil, nombres, apellidos, cedula,Estatus_Licencia } = Tools;
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 100,
          width: "100%",
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          height: 120,
          width: "100%",
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
        }}
      />
      <View
        style={{
          alignItems: "center",
          paddingVertical: 5,
          position: "absolute",
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            width: 150,
            height: 150,
          }}
        >
          <View
            style={{
              zIndex: 10,
              width: "100%",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          ></View>
          <Image
            style={{
              height: 150,
              width: 150,
              position: "absolute",
              objectFit: "cover",
              borderRadius: 100,
            }}
            source={{
              uri: foto_perfil ? foto_perfil : "https://i.pinimg.com/736x/68/3d/8f/683d8f58c98a715130b1251a9d59d1b9.jpg",
            }}
          />
          <EstadoLicencia Estado={Estatus_Licencia} />
        </View>

        <View style={{ gap: 1 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>{nombres}</Text>
          <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
            Conductor
          </Text>
        </View>
      </View>
    </View>
  );
}
