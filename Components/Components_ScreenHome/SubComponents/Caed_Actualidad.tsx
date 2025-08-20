import { View, Image, Text } from "react-native";
import { Data_Actualidad } from "../Data/Data_Actulidad";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Caed_Actualidad() {
  const Cards = Data_Actualidad.map((D) => {
    const { TituloDS } = D;
    return (
      <TouchableOpacity
      onPress={()=> router.navigate("/SubScreens/ScreenDetallesNovedades")}
        style={{
          width: 340,
          height: 150,
          margin: 10,
          minWidth: 48,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
          source={require("@/Assets/Image/Img_Prueba_Novedades.png")}
        />
        <Text
          style={{
            position: "absolute",
            fontWeight: "600",
            color: "white",
            fontSize: 25,
            textShadowColor: "black",
            textDecorationStyle: "double",
          }}
        >
          {TituloDS}
        </Text>
      </TouchableOpacity>
    );
  });

  return Cards;
}
