import { View, Image, Text } from "react-native";
import { useStyleScreenPerfil } from "../Hook/useStyleScreenPerfil";

export default function Section_Perfil() {
  const {EstadoLicencia} = useStyleScreenPerfil()
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
              uri: "https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg",
            }}
          />
          <EstadoLicencia Estado="Licencia de estudiante"/>
        </View>

        <View style={{ gap: 1 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>Juan Manuel</Text>
          <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
            Conductor
          </Text>
        </View>
      </View>
    </View>
  );
}
