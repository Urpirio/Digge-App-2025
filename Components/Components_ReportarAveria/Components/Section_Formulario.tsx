import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Picker } from "@react-native-picker/picker";
import { useFormulario } from "../Hook/useFormulario";
import { router, useFocusEffect } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import Buttons_Evidencias from "../../Components_Globales/SubComponents/Buttons_Evidencias";
import Contenedor_Evidencias from "@/Components/Components_Globales/SubComponents/Contenedor_Evidencias";
import Buttons_EvidenciasMini from "../../Components_Globales/SubComponents/Buttons_EvidenciasMini";
import { Style_Formulario } from "../Style/Style_Formulario";

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
    GetDataUser,
    DataFotos,
    Dlocalizacion,
    setDlocalizacion,
    setDataFotos,
    BtnEnviarReporte,
    Send_Reporte,
    ErrorSend,
  } = useFormulario();

  useFocusEffect(
    useCallback(() => {
      GetDataUser();
    }, [])
  );

  setDataLocalizacion = setDlocalizacion;
  DataLocalizacion = Dlocalizacion;

  setDataDeFotos = setDataFotos;
  DataDeFotos = DataFotos;

  return (
    <View style={{ paddingHorizontal: 5, paddingBottom: 50 }}>
      <View style={Style_Formulario.SubConteiner_General}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Información de la Avería
        </Text>

        <View style={{ gap: 10 }}>
          {/* Picker -> Tipo de Dano */}
          <View style={{ gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>Tipo de Daño</Text>
              <Text style={{ color: "red", fontWeight: "500" }}>*</Text>
            </View>
            <View style={Style_Formulario.Container_picker}>
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

          {/* Ubicacion -> Navegacion -> Moficar para que muestre la calles cerca */}
          <View style={{ gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>Ubicación</Text>
              <Text style={{ color: "red", fontWeight: "500" }}>*</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                router.navigate("/ScreensMap/ScreenMap_ReportesAverias")
              }
              style={Style_Formulario.BtnUbicacion}
            >
              <FontAwesome6 name="location-dot" size={24} color="#0F539C" />
              <Text style={{ color: "gray" }}>
                {DataLocalizacion?.length > 0
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
              keyboardType="numeric"
              value={InputCarriles}
              onChangeText={setInputCarriles}
              placeholder="Numero afectados"
              style={Style_Formulario.Text_Input}
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

        {/* Contenedor de evidencias es decir fotos tiradas por el usario y que sera enviadas */}
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
            {DataFotos.length > 0 ? (
              <Buttons_EvidenciasMini Status={2} />
            ) : (
              <View />
            )}
          </View>
          {DataFotos.length > 0 ? <View /> : <Buttons_Evidencias Status={2} />}
          {DataFotos.length > 0 ? (
            <Contenedor_Evidencias Data={DataFotos} Status={2} />
          ) : (
            <View />
          )}
        </View>

        <View style={{ paddingTop: 10, gap: 10 }}>
          <TouchableOpacity
            onPress={Send_Reporte}
            style={Style_Formulario.BtnEnviarReporte}
          >
            <BtnEnviarReporte />
          </TouchableOpacity>
          {ErrorSend && (
            <Text style={{ color: "#d00000", textAlign: "center" }}>
              Error: no se pudieron enviar los datos. Verifica que toda la
              información del formulario sea correcta.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
