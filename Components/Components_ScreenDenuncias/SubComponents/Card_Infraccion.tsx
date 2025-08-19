import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useInfraccion } from "../hooks/useInfraccion";
import { Data_Infraccion } from "../Data/Data_Infraccion";
import { Style_CardInfracciones } from "../Style/Style_CardInfracciones";

export default function Card_Infraccion() {
  const { Status } = useInfraccion();

  const Cards = Data_Infraccion.map((D) => {
    return (
      <View key={D.matricula} style={Style_CardInfracciones.Card}>
        <View style={Style_CardInfracciones.Container_infracciones}>
          <Text style={{ fontWeight: "600" }}>{D.num_infraccion}</Text>
          <Status Status={D.status} />
        </View>
        <View style={{ width: "100%" }}>
          <Text style={{ fontWeight: "500", color: "#0F539C" }}>
            {D.titulo}
          </Text>
          <Text style={Style_CardInfracciones.Text_Subtitulo}>
            {D.subtitulo}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={Style_CardInfracciones.subContainer_general}>
            <Ionicons size={16} name="car-outline" color={"#999999ff"} />
            <Text style={Style_CardInfracciones.Text_General}>
              {D.matricula}
            </Text>
          </View>
          <View style={Style_CardInfracciones.subContainer_general}>
            <Ionicons name="location-outline" size={16} color="#999999ff" />
            <Text style={Style_CardInfracciones.Text_General}>
              {D.ubicacion}
            </Text>
          </View>
          <View style={Style_CardInfracciones.subContainer_general}>
            <MaterialIcons name="access-time" size={16} color="#999999ff" />
            <Text style={Style_CardInfracciones.Text_General}>{D.hora}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity>
            <Text style={Style_CardInfracciones.Text_btnDetalles}>
              Ver detalles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  return Cards;
}
