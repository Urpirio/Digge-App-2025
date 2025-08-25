import { Text, View } from "react-native";
import { AccionRegistro } from "../Data/Data_GeneralCard";
import { Data_GeneralCard } from "../Data/Data_GeneralCard";

export default function Card_AccionesRegistro(Tools: {
  Data: Array<AccionRegistro> ;
}) {
  const { Data } = Tools;
  const Cars = Data_GeneralCard.map((D) => {
    return (
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          paddingHorizontal: 8,
          paddingVertical: 5,
          borderRadius: 15,
          justifyContent: "space-between",
          gap: 5,
          alignItems: "center",
          backgroundColor: "#fcfcfcff",
          borderColor: "#EBEBEB",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 45,
              width: 45,
              borderRadius: 10,
              backgroundColor: `#${D?.bgIconColor}`,
            }}
          >
            {D?.Icon}
          </View>
          <View>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>{D?.Titulo}</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>{D?.subTitulo}</Text>
            <Text style={{ color: "#c3c3c3ff" }}>4h</Text>
          </View>
        </View>
        <View style={{ height: "100%" }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: `#${D?.ColorStat}`,
            }}
          >
            {D?.Stat}
          </Text>
        </View>
      </View>
    );
  });
  return Cars;
}
