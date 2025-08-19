import { Picker } from "@react-native-picker/picker";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useFormulario } from "../Hooks/useFormulario";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import Buttons_Evidencias from "@/Components/Components_Globales/SubComponents/Buttons_Evidencias";
import Buttons_EvidenciasMini from "@/Components/Components_Globales/SubComponents/Buttons_EvidenciasMini";
import Contenedor_Evidencias from "@/Components/Components_Globales/SubComponents/Contenedor_Evidencias";
import { Style_SectionFormulario } from "../Style/Style_SectionFormulario";

export let setDataDeFotos1: any;
export let DataDeFotos1: any;
export let DataLocalizacion: any;
export let setDataLocalizacion: any;

export default function Section_Formulario() {
  const {
    InputColor,
    InputDescripcion,
    InputPlaca,
    setInputColor,
    setInputPlaca,
    setInputDescripcion,
    setDropDownInfraccion,
    setDropDownVehiculos,
    DropDownInfraccion,
    DropDownVehiculos,
  } = useFormulario();

  const [Dlocalizacion, setDlocalizacion] = useState<any | null>([]);
  setDataLocalizacion = setDlocalizacion;
  DataLocalizacion = Dlocalizacion;
  const [DataFotos, setDataFotos] = useState<any | null>([]);
  setDataDeFotos1 = setDataFotos;
  DataDeFotos1 = DataFotos;

  return (
    <View style={{ paddingHorizontal: 10, paddingBottom: 80, gap: 10 }}>
      <View style={{ gap: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Datos del Vehículo
        </Text>
        <View style={{ gap: 5 }}>
          <Text>Placa del Vehículo *</Text>
          <TextInput
            placeholder="Ej: A123456"
            value={InputPlaca}
            onChangeText={setInputPlaca}
            style={Style_SectionFormulario.Text_Input}
          />
        </View>
      </View>

      {/* Tipo de vehiculo -> Picker */}
      <View style={{ gap: 5 }}>
        <Text>Tipo de Vehículo</Text>
        <View style={Style_SectionFormulario.Container_Pickers}>
          <Picker
            selectedValue={DropDownVehiculos}
            onValueChange={setDropDownVehiculos}
          >
            <Picker.Item
              style={{
                color: DropDownVehiculos === "Prueba 1" ? "#0F539C" : "gray",
              }}
              value={"Prueba 1"}
              label="Prueba 1"
            />
            <Picker.Item
              style={{
                color: DropDownVehiculos === "Prueba 2" ? "#0F539C" : "gray",
              }}
              value={"Prueba 2"}
              label="Prueba 2"
            />
            <Picker.Item
              style={{
                color: DropDownVehiculos === "Prueba 3" ? "#0F539C" : "gray",
              }}
              value={"Prueba 3"}
              label="Prueba 3"
            />
            <Picker.Item
              style={{
                color: DropDownVehiculos === "Prueba 4" ? "#0F539C" : "gray",
              }}
              value={"Prueba 4"}
              label="Prueba 4"
            />
          </Picker>
        </View>
      </View>

      {/* No lo veo necesario ya que eso podria ir en la descripcion del incidente */}
      {/* <View style={{ gap: 5 }}>
        <Text>Color del Vehículo *</Text>
        <TextInput
          placeholder="Ej: Blanco, Azul, Rojo"
          value={InputColor}
          onChangeText={setInputColor}
          style={Style_SectionFormulario.Text_Input}
        />
      </View> */}

      {/* Tipo de Infraccion -> Picke */}
      <View style={{ gap: 5 }}>
        <Text>Tipo de Infracción</Text>
        <View style={Style_SectionFormulario.Container_Pickers}>
          <Picker
            selectedValue={DropDownInfraccion}
            onValueChange={setDropDownInfraccion}
          >
            <Picker.Item
              value={"Prueba 1"}
              style={{
                color: DropDownInfraccion === "Prueba 1" ? "#0F539C" : "gray",
              }}
              label="Prueba 1"
            />
            <Picker.Item
              value={"Prueba 2"}
              style={{
                color: DropDownInfraccion === "Prueba 2" ? "#0F539C" : "gray",
              }}
              label="Prueba 2"
            />
            <Picker.Item
              value={"Prueba 3"}
              style={{
                color: DropDownInfraccion === "Prueba 3" ? "#0F539C" : "gray",
              }}
              label="Prueba 3"
            />
            <Picker.Item
              value={"Prueba 4"}
              style={{
                color: DropDownInfraccion === "Prueba 4" ? "#0F539C" : "gray",
              }}
              label="Prueba 4"
            />
          </Picker>
        </View>
      </View>

      {/* Nota: Agregar El nombre o calla seleccionada dentro del texto para que se mas comparativo y se puede entender mejor */}
      <View style={{ gap: 5 }}>
        <Text>Ubicación</Text>
        <TouchableOpacity
          onPress={() => router.navigate("/ScreensMap/ScreenMap_Denuncias")}
          style={Style_SectionFormulario.Btn_AgregarUbicacion}
        >
          <FontAwesome6 name="location-dot" size={18} color="#0F539C" />
          <Text style={{ color: "gray" }}>
            {DataLocalizacion.length > 0
              ? "Ubicacion seleccionada"
              : "Selecciona la ubicacion (GPS)"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ gap: 5 }}>
        <Text>Descripción del Incidente *</Text>
        <TextInput
          value={InputDescripcion}
          onChangeText={setInputDescripcion}
          placeholder="Describe detalladamente lo que observaste..."
          multiline={true}
          style={Style_SectionFormulario.Text_Input}
        />
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
          {DataFotos.length > 0 ? (
            <Buttons_EvidenciasMini Status={1} />
          ) : (
            <View />
          )}
        </View>
        {DataFotos.length > 0 ? <View /> : <Buttons_Evidencias Status={1} />}
        {DataFotos.length > 0 ? (
          <Contenedor_Evidencias Data={DataFotos} Status={1} />
        ) : (
          <View />
        )}
      </View>

      <View>
        <TouchableOpacity style={Style_SectionFormulario.Btn_EnviarDenuncia}>
          <Ionicons name="warning-outline" size={20} color="white" />
          <Text style={{ fontSize: 16, color: "white", fontWeight: "500" }}>
            Enviar denuncia
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
