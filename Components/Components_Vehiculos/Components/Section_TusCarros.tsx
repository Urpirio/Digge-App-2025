import { View } from "react-native";
import Card_MatriculasTusCarros from "../SubComponents/Card_MatriculasTusCarros";
import Card_AgregarCarros from "../SubComponents/Card_AgregarCarros";
import { ObjectosCars } from "../hooks/useGetVehiculos";
interface Tools {
  Data_cars: Array<ObjectosCars> | undefined;
}

export default function Section_TusCarros({ Data_cars }: Tools) {
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
        <Card_MatriculasTusCarros Data_Cars={Data_cars} />
      </View>
    </View>
  );
}
