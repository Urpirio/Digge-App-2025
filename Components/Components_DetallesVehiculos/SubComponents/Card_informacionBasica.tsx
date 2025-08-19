import { View, Text } from "react-native";
import { Style_Card_InformacionBasica } from "../Style/Style_Card_InformacionBasica";

export default function Card_informacionBasica(Tools: {
  Titulo: string;
  Subtitulo: any;
  Icono: any;
}) {
  const { Titulo, Subtitulo, Icono } = Tools;
  return (
    <View style={Style_Card_InformacionBasica.Card}>
      <View style={Style_Card_InformacionBasica.SubContainerCard}>
        {Icono}
        <Text style={Style_Card_InformacionBasica.Text_Titulo}>{Titulo}</Text>
      </View>
      <Text>{Subtitulo}</Text>
    </View>
  );
}
