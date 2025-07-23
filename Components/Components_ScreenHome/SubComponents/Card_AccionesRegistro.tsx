import { Text, View } from "react-native";

interface Content {
  bgIconColor: String;
  Icon: any;
  Titulo: String;
  subTitulo: String;
  hora: String;
  Stat: String;
  ColorStat:String;
}

export default function Card_AccionesRegistro({
  bgIconColor,
  Icon,
  Titulo,
  subTitulo,
  hora,
  Stat,
  ColorStat,
}: Content) {
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
      <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            width: 45,
            borderRadius: 10,
            backgroundColor: `#${bgIconColor}`,
          }}
        >
          {Icon}
        </View>
        <View>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{Titulo}</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>{subTitulo}</Text>
          <Text style={{ color: "#c3c3c3ff" }}>4h</Text>
        </View>
      </View>
      <View style={{ height: "100%" }}>
        <Text style={{ fontSize: 12, fontWeight: "600", color: `#${ColorStat}` }}>
          {Stat}
        </Text>
      </View>
    </View>
  );
}
