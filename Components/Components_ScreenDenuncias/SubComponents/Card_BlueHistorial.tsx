import { Text, View } from "react-native";

export default function Card_BlueHistorial() {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#0F539C",
        boxShadow: "0px 0px 5px 0px #dee2e6",
        marginBottom:10
      }}
    >
      <View
        style={{ padding: 20, borderRightWidth: 1, borderColor: "#ffffff8a" }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "600",
            color: "white",
          }}
        >
          212
        </Text>
        <Text style={{ textAlign: "center", color: "#ffffff72" }}>
          Denuncias realizadas
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "600",
            color: "white",
          }}
        >
          643
        </Text>
        <Text style={{ textAlign: "center", color: "#ffffff72" }}>
          Reportes realizados
        </Text>
      </View>
    </View>
  );
}
