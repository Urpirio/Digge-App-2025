import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Picker } from "@react-native-picker/picker";
import { useFormulario } from "../Hook/useFormulario";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import Buttons_Evidencias from "../SubComponents/Buttons_Evidencias";
import Contenedor_Evidencias from "../SubComponents/Contenedor_Evidencias";
import Buttons_EvidenciasMini from "../SubComponents/Buttons_EvidenciasMini";

export let setDataDeFotos: any;
export let DataDeFotos: any;
export let DataLocalizacion: any;
export let setDataLocalizacion: any;

export default function Section_Formulario() {
  const {
    DropDownValue,
    setDropDownValue,
    InputCarriles,
    setInputCarriles,
    TextTareaDescripcion,
    setTextTareaDescripcion,
  } = useFormulario();

  const [Dlocalizacion, setDlocalizacion] = useState<any | null>([]);
  setDataLocalizacion = setDlocalizacion;
  DataLocalizacion = Dlocalizacion;
  const [DataFotos, setDataFotos] = useState<any | null>([]);
  setDataDeFotos = setDataFotos;
  DataDeFotos = DataFotos;

  const DataLocal = useLocalSearchParams();

  return (
    <View style={{ paddingHorizontal: 10, paddingBottom: 50 }}>
      <View
        style={{
          gap: 10,
          borderWidth: 1,
          padding: 10,
          borderRadius: 15,
          borderColor: "#ced4da",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px 0px #ced4da35",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Información de la Avería
        </Text>

        <View style={{ gap: 10 }}>
          <View style={{ gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>Tipo de Daño</Text>
              <Text style={{ color: "red", fontWeight: "500" }}>*</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#D1D0D0",
                backgroundColor: "#efeded44",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Picker
                onValueChange={setDropDownValue}
                selectedValue={DropDownValue}
                style={{ color: "gray", borderRadius: 30 }}
              >
                <Picker.Item
                  style={{
                    color: DropDownValue === "Prueba 1" ? "#0F539C" : "gray",
                  }}
                  label="Prueba 1"
                  value={"Prueba 1"}
                />
                <Picker.Item
                  style={{
                    color: DropDownValue === "Prueba 2" ? "#0F539C" : "gray",
                  }}
                  label="Prueba 2"
                  value={"Prueba 2"}
                />
                <Picker.Item
                  style={{
                    color: DropDownValue === "Prueba 3" ? "#0F539C" : "gray",
                  }}
                  label="Prueba 3"
                  value={"Prueba 3"}
                />
                <Picker.Item
                  style={{
                    color: DropDownValue === "Prueba 4" ? "#0F539C" : "gray",
                  }}
                  label="Prueba 4"
                  value={"Prueba 4"}
                />
              </Picker>
            </View>
          </View>

          <View style={{ gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>Ubicación</Text>
              <Text style={{ color: "red", fontWeight: "500" }}>*</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.navigate("/Mod/Modal_MapReportesAverias")}
              style={{
                borderWidth: 1,
                borderColor: "#D1D0D0",
                backgroundColor: "#efeded44",
                flexDirection: "row",
                alignItems: "center",
                padding: 14,
                gap: 10,
                borderRadius: 10,
              }}
            >
              <FontAwesome6 name="location-dot" size={24} color="#0F539C" />
              <Text style={{ color: "gray" }}>
                {DataLocalizacion.length > 0
                  ? "Ubicacion seleccionada"
                  : "Selecciona la ubicacion (GPS)"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>Carriles Afectados</Text>
              <Text style={{ color: "red", fontWeight: "500" }}>*</Text>
            </View>
            <TextInput
              value={InputCarriles}
              onChangeText={setInputCarriles}
              placeholder="Numero afectados"
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#D1D0D0",
                backgroundColor: "#efeded44",
                height: 55,
                fontSize: 16,
              }}
            />
          </View>

          <View style={{ gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>Descripción Detallada</Text>
              <Text style={{ color: "red", fontWeight: "500" }}>*</Text>
            </View>

            <TextInput
              value={TextTareaDescripcion}
              onChangeText={setTextTareaDescripcion}
              multiline={true}
              placeholder="Describe el daño observado, dimensiones aproximadas, efectos en el tráfico.."
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#D1D0D0",
                backgroundColor: "#efeded44",
              }}
            />
          </View>
        </View>

        <View style={{ gap: 5, width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ fontWeight: "500" }}>Evidencia</Text>
              <Text style={{ color: "red", fontWeight: "500" }}>*</Text>
            </View>
            {DataFotos.length > 0 ? <Buttons_EvidenciasMini /> : <View />}
          </View>
          {DataFotos.length > 0 ? <View /> : <Buttons_Evidencias />}
          {DataFotos.length > 0 ? (
            <Contenedor_Evidencias Data={DataFotos} />
          ) : (
            <View />
          )}
        </View>

        <View style={{ paddingTop: 10 }}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              flexDirection: "row",
              gap: 10,
              borderRadius: 10,
              backgroundColor: "#0F539C",
            }}
          >
            <FontAwesome5 name="tools" size={18} color="white" />
            <Text style={{ fontWeight: "600", color: "white" }}>
              Enviar Reporte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
