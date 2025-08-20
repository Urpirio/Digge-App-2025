import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dispatch, SetStateAction } from "react";
import { Style_SectionFormulario } from "../style/Style_SectionFormulario";

interface Tools {
  setEstado_MostrarPicker: Dispatch<SetStateAction<boolean>>;
  setEstado_MostrarPickerHora: Dispatch<SetStateAction<boolean>>;
  setPickerFechaValue: Dispatch<SetStateAction<string | undefined>>;
  setPickerHoraValue: Dispatch<SetStateAction<string | undefined>>;
  Estado_MostrarPicker: boolean;
  Estado_MostrarPickerHora: boolean;
  PickerFechaValue: string | undefined;
  PickerHoraValue: string | undefined;
}

export default function Btn_FechaHora({
  setEstado_MostrarPicker,
  setEstado_MostrarPickerHora,
  setPickerFechaValue,
  setPickerHoraValue,
  Estado_MostrarPicker,
  Estado_MostrarPickerHora,
  PickerFechaValue,
  PickerHoraValue,
}: Tools) {
  return (
    <View>
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          Día de la retención:
        </Text>
        <TouchableOpacity
          style={Style_SectionFormulario.BtnFechaHora}
          onPress={() => {
            setEstado_MostrarPicker(true);
          }}
        >
          {PickerFechaValue ? (
            <Text style={{ color: "#0F539C" }}>{PickerFechaValue}</Text>
          ) : (
            <Text>Seleccionar fecha</Text>
          )}
        </TouchableOpacity>
        {Estado_MostrarPicker && (
          <DateTimePicker
            testID="DD/MM/AAAA"
            value={new Date()}
            onChange={(e) => {
              const date = new Date(e.nativeEvent.timestamp);
              if (e.type === "set") {
                setEstado_MostrarPicker(false);
                setPickerFechaValue(date.toLocaleDateString());
              } else {
                setEstado_MostrarPicker(false);
              }
            }}
          />
        )}
      </View>
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          Hora de la retención:
        </Text>
        <TouchableOpacity
          style={Style_SectionFormulario.BtnFechaHora}
          onPress={() => {
            setEstado_MostrarPickerHora(true);
          }}
        >
          {PickerHoraValue ? (
            <Text style={{ color: "#0F539C" }}>{PickerHoraValue}</Text>
          ) : (
            <Text>Seleccionar hora</Text>
          )}
        </TouchableOpacity>
        {Estado_MostrarPickerHora && (
          <DateTimePicker
            testID="HH:MM"
            value={new Date()}
            mode="time"
            onChange={(e) => {
              if (e.type === "set") {
                const time = new Date(e.nativeEvent.timestamp);
                console.log(time.toTimeString());
                setPickerHoraValue(time.toLocaleTimeString().split(" ")[0]);
                setEstado_MostrarPickerHora(false);
              } else {
                setEstado_MostrarPickerHora(false);
              }
            }}
          />
        )}
      </View>
    </View>
  );
}
