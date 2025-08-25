import { Text, TouchableOpacity, View } from "react-native";
import Card_Principal from "../SubComponents/Card_Principal";
import { Style_SectionCards } from "../Style/Style_SectionCard";
import { router } from "expo-router";

export default function Section_Cards() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <Card_Principal />
      <View style={Style_SectionCards.ContainerBtns}>
        <TouchableOpacity
          onPress={() => {
            router.navigate({
              pathname: "/Mod/Modal_DatosEnviados",
              params: {
                descripcion:
                  "La función solicitada no se encuentra disponible en este momento. Estamos trabajando para habilitarla lo antes posible.",
                titulo: "Función actualmente no disponible",
                Error: "true",
                tipo_s: "otro reporte",
              },
            });
          }}
          style={Style_SectionCards.btn_Renovar}
        >
          <Text style={{ color: "white" }}>Renovar marbete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.navigate({
              pathname: "/Mod/Modal_DatosEnviados",
              params: {
                descripcion:
                  "La función solicitada no se encuentra disponible en este momento. Estamos trabajando para habilitarla lo antes posible.",
                titulo: "Función actualmente no disponible",
                Error: "true",
                tipo_s: "otro reporte",
              },
            });
          }}
          style={Style_SectionCards.btn_CambiarSeguro}
        >
          <Text style={{ color: "white" }}>Cambiar seguro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
