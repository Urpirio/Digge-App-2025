import { View, Text } from "react-native";
import Card_Principanl from "../SubComponents/Card_Principanl";
import { ObjectosCars } from "../hooks/useGetVehiculos";
interface Tools {
  Data: ObjectosCars | undefined;
  NumeroCars: number | undefined;
}

export default function Section_Principal({ Data, NumeroCars }: Tools) {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10, gap: 20 }}>
      <View style={{}}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Mis vehículos</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          {NumeroCars != 0
            ? `${NumeroCars} vehículos registrados`
            : `${NumeroCars} vehículos registrado`}
        </Text>
      </View>
      <View>
        <Card_Principanl Data_Car={Data} />
      </View>
    </View>
  );
}
