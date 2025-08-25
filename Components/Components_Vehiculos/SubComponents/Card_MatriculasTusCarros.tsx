import { Text, View, TouchableOpacity } from "react-native";
import { Data_CardMatriculasCarros } from "../Data/Data_CardMatriculasCarros";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { ObjectosCars } from "../hooks/useGetVehiculos";
import { color } from "@rneui/base";

export default function Card_MatriculasTusCarros(Tools: {
  Data_Cars: Array<ObjectosCars> | undefined;
}) {
  const { Data_Cars } = Tools;

  const Cards = Data_Cars?.map((D) => {
    if (D.Estado_principal != true) {
      return (
        <TouchableOpacity
          onLongPress={() =>
            router.navigate({
              pathname: "/Mod/Modal_CambiarPrincipalVehiculo",
              params: { matricula: D.matricula },
            })
          }
          onPress={() =>
            router.navigate({
              pathname: "/SubScreens/ScreenDetallesVehiculos",
              params: {
                matricula: D.matricula,
                modelo: D.modelo,
                year: D.year,
                marca: D.marca,
                combustible: D.tipo_combustible,
                kilometraje: null,
                color: D.color,
              },
            })
          }
          key={D.matricula}
          style={{
            borderWidth: 1,
            width: "48%",
            paddingHorizontal: 8,
            paddingVertical: 10,
            borderRadius: 10,
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "white",
            borderColor: "#e9ecefad",
            gap: 5,
            boxShadow: "0px 0px 30px 0px #dee2e64e",
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              borderRadius: 7,
              paddingVertical: 2,
              backgroundColor: "#eaedfeb5",
            }}
          >
            {/* <Text style={{ color: "#0F539C", fontSize: 12, fontWeight: "500" }}>
            {D.TipoAuto}
          </Text> */}
          </View>
          <View style={{ gap: 5 }}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "400" }}>
                {D.matricula}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "300" }}>
                {D.modelo}
              </Text>
            </View>
            <Text
              style={{ fontSize: 16, fontWeight: "300", color: "#a8a9aaff" }}
            >
              {D.year}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              gap: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <MaterialCommunityIcons
                name="file-document-outline"
                size={14}
                color="#FF9900"
              />
              <Text style={{ color: "#FF9900", fontWeight: "400" }}>
                Marbete
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={14}
                color="#EE2A24"
              />
              <Text style={{ color: "#EE2A24", fontWeight: "400" }}>
                Seguro
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  });
  return Cards;
}
