import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Objectos_Infracciones } from "../hooks/useGet_Infracciones";
import { useEffect, useState } from "react";
import { FiltroPagadas, FiltrosPendientes } from "../hooks/useGet_Infracciones";

export default function Card_ResumenInfracciones(Tools: {
  Data: Array<Objectos_Infracciones> | undefined;
  // Data_Pendientes: FiltrosPendientes | undefined;
  // Data_Pagadas: FiltroPagadas | undefined;
}) {
  const { Data } = Tools;
  const [Saldo_Pendiente, setSaldo_Pendiente] = useState<any>(0);
  const [Saldo_Pago, setSaldo_Pago] = useState<any>(0);
  const [Refresh, setRefresh] = useState();

  useEffect(() => {
    // setTimeout(() => {
    setSaldo_Pendiente(0);
    setSaldo_Pago(0);
    Data?.forEach((D) => {
      if (D.fecha_pago == null) {
        setSaldo_Pendiente(Saldo_Pendiente + D.costo_multa);
      } else {
        setSaldo_Pago(Saldo_Pago + D.costo_multa);
      }
    });
    // },2000);
  },[]);

  return (
    <View
      style={{
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        gap: 10,
        backgroundColor: "#0F539C",
        boxShadow: "0px 0px 5px 0px #dee2e6",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <View
          style={{
            borderWidth: 1,
            padding: 5,
            borderRadius: 20,
            borderColor: "white",
          }}
        >
          <Feather name="dollar-sign" size={14} color="white" />
        </View>
        <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
          Resumen de Infracciones
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            borderRightWidth: 1,
            width: "50%",
            padding: 5,
            borderColor: "#f8f9fa77",
          }}
        >
          <Text style={{ textAlign: "center", color: "#f8f9fa87" }}>
            Pendientes
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "500",
              color: "white",
            }}
          >
            RD${Saldo_Pendiente}
          </Text>
          <Text style={{ textAlign: "center", color: "#f8f9fa82" }}>
            {/* {Data_Pendientes?.Cantidad} Infracciones */}
          </Text>
        </View>
        <View style={{ width: "50%", padding: 5 }}>
          <Text style={{ textAlign: "center", color: "#f8f9fa7b" }}>
            Pagadas
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              fontWeight: "500",
              color: "white",
            }}
          >
            RD${Saldo_Pago}
          </Text>
          <Text style={{ textAlign: "center", color: "#f8f9fa79" }}>
            {/* {Data_Pagadas?.Cantidad} Infracciones */}
          </Text>
        </View>
      </View>
    </View>
  );
}
