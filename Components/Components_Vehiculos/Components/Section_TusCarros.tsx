import { View } from "react-native";
import Card_MatriculasTusCarros from "../SubComponents/Card_MatriculasTusCarros";
import Card_AgregarCarros from "../SubComponents/Card_AgregarCarros";

export default function Section_TusCarros() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10, gap: 20 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Card_MatriculasTusCarros />
        {/* <Card_AgregarCarros/> */}
      </View>

    </View>
  );
}
