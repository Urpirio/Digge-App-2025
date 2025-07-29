import { Text, TouchableOpacity, View } from "react-native";

export default function Section_Principal(D: { PanelStatus: boolean | null,setPanelStatu:any }) {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10, gap: 10 }}>
      <View
        style={{
          borderWidth: 1,
        
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          borderRadius: 10,
          backgroundColor: "white",
          borderColor: "#EAF4E9",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#43B24B" }}>
            304
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#43B24B" }}>
            Puntos disponibles
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#FF9700" }}>
            5.7k
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#FF9700" }}>
            Puntos acumulados
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          padding: 5,
          justifyContent: "space-between",
          borderRadius: 10,
          borderColor: "#EAF4E9",
        }}
      >
        <TouchableOpacity
          onPress={()=>D.setPanelStatu(!D.PanelStatus)}
          style={{
            // borderWidth: 1,
            width: "48%",
            padding: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: D.PanelStatus ? "#43B24B" : "white",
          }}
        >
          <Text style={{ color: D.PanelStatus ? "white" : "#43B24B" }}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>D.setPanelStatu(!D.PanelStatus)}
          style={{
            // borderWidth: 1,
            width: "48%",
            padding: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: D.PanelStatus ? "white" : "#FF9700",
          }}
        >
          <Text style={{ color: D.PanelStatus ? "#FF9700" : "white" }}>
            Historial
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
