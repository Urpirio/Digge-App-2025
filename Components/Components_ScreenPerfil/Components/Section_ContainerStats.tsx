import { View, Text } from "react-native";

export default function Section_ContainerStats() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          borderWidth: 1,
          padding: 10,
          borderRadius: 15,
          borderColor: "#ced4da",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRightWidth: 1,
            paddingHorizontal: 10,
            borderColor: "#ced4da",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>15</Text>
          <Text style={{ fontWeight: "300" }}>Denuncias</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRightWidth: 1,
            paddingHorizontal: 10,
            borderColor: "#ced4da",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>0</Text>
          <Text style={{ fontWeight: "300" }}>infracciones</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>0</Text>
          <Text style={{ fontWeight: "300" }}>Conductor</Text>
        </View>
      </View>
    </View>
  );
}
