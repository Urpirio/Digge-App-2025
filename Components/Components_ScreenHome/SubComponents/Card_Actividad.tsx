import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";


interface ContentCard {
  Numero: String;
  Incrementacion: String;
  Icon: any;
  Color: String;
  Titulo: String;
  borderColor: String;
  bgColor: String;
  TextColor: String;
  Link: any;
}

export default function Card_Actividad({
  Numero,
  Incrementacion,
  Icon,
  Color,
  Titulo,
  borderColor,
  bgColor,
  TextColor,
  Link
}: ContentCard) {
  return (
    <TouchableOpacity 
      onPress={()=>router.navigate(Link)}
      style={{
        borderWidth: 1,
        borderColor: `#dee2e653`,
        width: 155,
        padding: 10,
        borderRadius: 10,
        gap: 10,
        backgroundColor: `#${bgColor}`,
        marginRight: 10,
        boxShadow: "0px 0px 3px 0px #dee2e653",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <View
            style={{
              padding: 4,
              borderRadius: 5,
              backgroundColor: `#${Color}`,
            }}
          >
            {Icon}
          </View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{Numero}</Text>
        </View>
        <View
          style={{
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text style={{ color: `#${TextColor}`, fontSize: 12 }}>
            +{Incrementacion}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ color: `#${TextColor}` }}>{Titulo}</Text>
      </View>
    </TouchableOpacity >
  );
}
