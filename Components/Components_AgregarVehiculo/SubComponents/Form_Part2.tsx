import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Data_BtnTipoCombustible } from "../Data/Data_BtnTipoCombustible";
import { Data_BtnIconos } from "../Data/Data_BtnIconos";

export default function Form_Part2() {
  const [TipoCombustible, setTipoCombustible] = useState<string>();
  const [TipoIcono, setTipoIcono] = useState<string>();

  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={{ fontWeight: "500" }}>Tipo de Combustible</Text>
        <Text style={{ color: "red", fontWeight: "600", fontSize: 18 }}>*</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Data_BtnTipoCombustible.map((D) => {
          return (
            <TouchableOpacity
              onPress={() => setTipoCombustible(D.titulo)}
              style={{
                borderWidth: 1,
                borderColor:
                  D.titulo == TipoCombustible ? "#2E86C1" : "#d1d0d08e",
                padding: 5,
                width: "30%",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  D.titulo == TipoCombustible ? "#D6EAF8" : "#d1d0d04b",
              }}
            >
              <Text
                style={{
                  color: D.titulo == TipoCombustible ? "#2E86C1" : "#747474ff",
                }}
              >
                {D.titulo}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{gap:10}}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={{ fontWeight: "500" }}>Icono del Vehículo</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {Data_BtnIconos.map((D) => {
            return (
              <TouchableOpacity
                onPress={()=>setTipoIcono(D.titulo)}
                style={{
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: D.titulo == TipoIcono ? '#0F539C' : '#EAECEE',
                  backgroundColor: D.titulo == TipoIcono ? '#0F539C' : '#EAECEE',
                }}
              >
               {D.Icon({Color:D.titulo == TipoIcono ? 'white' : 'black'})}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
