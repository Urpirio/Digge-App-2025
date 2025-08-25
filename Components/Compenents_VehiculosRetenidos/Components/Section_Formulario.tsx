import { Picker } from "@react-native-picker/picker";
import { useCallback, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormulario } from "../Hooks/useFormulario";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Btn_FechaHora from "../SubComponents/Btn_FechaHora";
import { Style_SectionFormulario } from "../style/Style_SectionFormulario";
import { router, useFocusEffect } from "expo-router";
import { useGetCarRetenidos } from "../Hooks/useGetCarRetenidos";
export default function Section_Formulario() {
  // const {
  //   PickerFechaValue,
  //   PickerHoraValue,
  //   setEstado_MostrarPicker,
  //   setEstado_MostrarPickerHora,
  //   setPickerFechaValue,
  //   setPickerHoraValue,
  //   setPickerValue,
  //   Estado_MostrarPicker,
  //   Estado_MostrarPickerHora,
  //   PickerValue,
  //   AutoEncontrado,
  //   setAutoEncontrado,
  // } = useFormulario();

  const {
    InputCedula,
    setInputCedula,
    InputPlaca,
    setInputPlaca,
    InputLugar,
    setInputLugar,
    InputDia_retencion,
    setInputDia_retencion,
    InputHora_retencion,
    setInputHora_retencion,
    InputMotivo,
    setInputMotivo,
    AutoEncontrado,
    GetCar_retenido,
    DataCar_retenido,
    BtnBuscar,
    Vehiculo_Retenido,
  } = useGetCarRetenidos();

  useFocusEffect(
    useCallback(() => {
      // GetCar_retenido();
    }, [])
  );

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
          editable={AutoEncontrado ? false : true}
          // value={DataCar_retenido.}
          value={InputCedula}
          onChangeText={setInputCedula}
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
          editable={AutoEncontrado ? false : true}
          value={InputPlaca}
          onChangeText={setInputPlaca}
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
              <Text>{DataCar_retenido?.lugar_retencion}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Motivo de la retencion
            </Text>
            <TextInput
              editable={false}
              style={Style_SectionFormulario.Text_Input}
              // value={InputMotivo}
              // onChangeText={setInputMotivo}
              value={DataCar_retenido?.motivo_retencion}
            />
            {/* <View style={Style_SectionFormulario.Container_Pickers}>
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
            </View> */}
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Día de la retención:
            </Text>
            <TextInput
              editable={false}
              style={Style_SectionFormulario.Text_Input}
              value={DataCar_retenido?.dia_retencion}
              // value={InputDia_retencion}
              // onChangeText={setInputDia_retencion}
            />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Hora de la retención:
            </Text>
            <TextInput
              editable={false}
              style={Style_SectionFormulario.Text_Input}
              value={DataCar_retenido?.hora_retencion}
              // value={InputHora_retencion}
              // onChangeText={setInputHora_retencion}
            />
          </View>

          {/* <Btn_FechaHora
            setEstado_MostrarPicker={setEstado_MostrarPicker}
            setEstado_MostrarPickerHora={setEstado_MostrarPickerHora}
            setPickerFechaValue={setPickerFechaValue}
            setPickerHoraValue={setPickerHoraValue}
            Estado_MostrarPicker={Estado_MostrarPicker}
            Estado_MostrarPickerHora={Estado_MostrarPickerHora}
            PickerFechaValue={PickerFechaValue}
            PickerHoraValue={PickerHoraValue}
          /> */}
        </View>
      ) : (
        <View />
      )}
      <View>
        {AutoEncontrado ? (
          <TouchableOpacity
            style={Style_SectionFormulario.Btn_Enviar}
            onPress={() => router.back()}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
              Listo
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ gap: 10 }}>
            <TouchableOpacity
              onPress={() => GetCar_retenido()}
              style={Style_SectionFormulario.Btn_Enviar}
            >
              <BtnBuscar />
            </TouchableOpacity>
            {Vehiculo_Retenido && (
              <Text style={{ color: "red", textAlign: "center" }}>
                No se encontraron vehículos retenidos que coincidan con los
                datos proporcionados.
              </Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
}
