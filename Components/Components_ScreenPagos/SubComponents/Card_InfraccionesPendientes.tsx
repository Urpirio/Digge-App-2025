import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useInfraccionesPendientes } from "../hooks/useInfraccionesPendientes";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Data_InfraccionesPendiente } from "../Data/Data_InfraccionesPendiente";
import { Objectos_Infracciones } from "../hooks/useGet_Infracciones";

export default function Card_InfraccionesPendientes(Tools: {
  Data: Array<Objectos_Infracciones> | undefined;
}) {

  const {Data} = Tools
  const Cards = Data?.map((D) => {
    const {
      StatusContainerPagar,
      setStatusContainerPagar,
      StatusInfracciones,
    } = useInfraccionesPendientes();

    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "white",
          borderColor: "#dee2e66f",
          boxShadow: "0px 0px 10px #dee2e6e4",
          gap: 10,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setStatusContainerPagar(!StatusContainerPagar)}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                IFR-2025-001
              </Text>
              <StatusInfracciones Status={D.prioridad_pago} />
            </View>
            <Text style={{ fontWeight: "600", color: "#0F539C" }}>{}</Text>
          </View>

          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ color: "#0F539C", fontWeight: "600" }}>
              {D.tipo_infraccion}
            </Text>
            <Text style={{ color: "#999999ff" }}>{D.descripcion} </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Ionicons size={16} name="car-outline" color={"#999999ff"} />
              <Text style={{ fontSize: 12, color: "#999999ff" }}>A122345</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Ionicons name="location-outline" size={16} color="#999999ff" />
              <Text style={{ fontSize: 12, color: "#999999ff" }}>
                No disponible
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <MaterialIcons name="access-time" size={16} color="#999999ff" />
              <Text style={{ fontSize: 12, color: "#989898ff" }}>{D.Hora}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 1,
            }}
          >
            <Text style={{ fontSize: 12, color: "#6b6b6bff" }}>
              {D.fecha_pago ? D.fecha_pago : "Pendiente"}
            </Text>
            <Text style={{ color: "#0F539C", fontWeight: "600" }}>
              Vence en 12 días
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderTopWidth: 1,
            borderColor: "#dee2e675",
            paddingHorizontal: 10,
            paddingTop: 10,
            display: StatusContainerPagar ? "flex" : "none",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#0F539C",
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              gap: 5,
              borderRadius: 10,
              width: "70%",
              justifyContent: "center",
            }}
          >
            <AntDesign name="creditcard" size={20} color="white" />
            <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
              Pagar ahora
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "#0F539C", fontWeight: "500" }}>
              Ver detalles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  return Cards;
}
