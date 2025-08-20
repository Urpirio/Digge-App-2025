import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormulario } from "../Hooks/useFormulario";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Btn_FechaHora from "../SubComponents/Btn_FechaHora";
import { Style_SectionFormulario } from "../style/Style_SectionFormulario";
import { router } from "expo-router";
export default function Section_Formulario() {
  const {
    PickerFechaValue,
    PickerHoraValue,
    setEstado_MostrarPicker,
    setEstado_MostrarPickerHora,
    setPickerFechaValue,
    setPickerHoraValue,
    setPickerValue,
    Estado_MostrarPicker,
    Estado_MostrarPickerHora,
    PickerValue,
    AutoEncontrado,
    setAutoEncontrado,
  } = useFormulario();

  return (
    <View style={{ paddingHorizontal: 15, paddingBottom: 80, gap: 10 }}>
      <View style={Style_SectionFormulario.Container_Titulos}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>
          Información de la retención
        </Text>
        <MaterialCommunityIcons
          name="information-outline"
          size={24}
          color="black"
        />
      </View>

      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          Cédula del propetario{" "}
        </Text>
        <TextInput
          style={Style_SectionFormulario.Text_Input}
          placeholderTextColor={"gray"}
          placeholder="402-0000000-0"
        />
      </View>

      <View>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          Placa del vehículo{" "}
        </Text>
        <TextInput
          style={Style_SectionFormulario.Text_Input}
          placeholderTextColor={"gray"}
          placeholder="Ej: ABC-123"
        />
      </View>

      {AutoEncontrado ? (
        <View style={{ gap: 10 }}>
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Lugar de la retencion
            </Text>
            <TouchableOpacity
              style={Style_SectionFormulario.Btn_SelecionarUbicacion}
            >
              <FontAwesome6 name="location-dot" size={18} color="#0F539C" />
              <Text>Seleccionar ubicacion</Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Motivo de la retencion
            </Text>
            <View style={Style_SectionFormulario.Container_Pickers}>
              <Picker
                style={{ borderRadius: 50 }}
                onValueChange={setPickerValue}
                selectedValue={PickerValue}
              >
                <Picker.Item label="Accidente de tránsito" value="accidente" />
                <Picker.Item label="Infracción de tráfico" value="infraccion" />
                <Picker.Item label="Vehículo abandonado" value="abandonado" />
                <Picker.Item label="Problemas mecánicos" value="mecanicos" />
                <Picker.Item label="Otros" value="otros" />
              </Picker>
            </View>
          </View>

          <Btn_FechaHora
            setEstado_MostrarPicker={setEstado_MostrarPicker}
            setEstado_MostrarPickerHora={setEstado_MostrarPickerHora}
            setPickerFechaValue={setPickerFechaValue}
            setPickerHoraValue={setPickerHoraValue}
            Estado_MostrarPicker={Estado_MostrarPicker}
            Estado_MostrarPickerHora={Estado_MostrarPickerHora}
            PickerFechaValue={PickerFechaValue}
            PickerHoraValue={PickerHoraValue}
          />
        </View>
      ) : (
        <View />
      )}
      <View>
        {AutoEncontrado ? (
          <TouchableOpacity
            style={Style_SectionFormulario.Btn_Enviar}
            onPress={() => {
              router.navigate("/Mod/Modal_RetenidoNoEncontrado");
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
              Listo
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setAutoEncontrado(true);
              router.navigate("/Mod/Modal_RetenidoNoEncontrado");
            }}
            style={Style_SectionFormulario.Btn_Enviar}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
              Buscar vehículo
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
