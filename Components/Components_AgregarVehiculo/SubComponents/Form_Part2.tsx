import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Data_BtnTipoCombustible } from "../Data/Data_BtnTipoCombustible";
import { Data_BtnIconos } from "../Data/Data_BtnIconos";
import { Style_FormPart2 } from "../Style/Style_FormPart2";

export default function Form_Part2() {
  const [TipoCombustible, setTipoCombustible] = useState<string>();
  const [TipoIcono, setTipoIcono] = useState<string>();

  return (
    <View style={{ gap: 10 }}>
      <View style={Style_FormPart2.Labels_Container}>
        <Text style={Style_FormPart2.Labels}>Tipo de Combustible</Text>
        <Text style={Style_FormPart2.Label_Ate}>*</Text>
      </View>

      {/* Btn para cambiar el tipo de combustible del vehiculo */}
      <View style={Style_FormPart2.Container_TipoCombustible}>
        {Data_BtnTipoCombustible.map((D) => {
          return (
            // No lo cambie lo agregue al documento de estilos porque lo vi innecesario
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

      {/* Iconos refrentes al vehiculo */}

      <View style={{ gap: 10 }}>
        <View style={Style_FormPart2.Labels_Container}>
          <Text style={Style_FormPart2.Labels}>Icono del Vehículo</Text>
        </View>
        <View style={Style_FormPart2.Container_BtnIcon}>
          {Data_BtnIconos.map((D) => {
            return (
              <TouchableOpacity
                onPress={() => setTipoIcono(D.titulo)}
                style={{
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 50,
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: D.titulo == TipoIcono ? "#0F539C" : "#EAECEE",
                  backgroundColor:
                    D.titulo == TipoIcono ? "#0F539C" : "#EAECEE",
                }}
              >
                {D.Icon({ Color: D.titulo == TipoIcono ? "white" : "black" })}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
