import { Text, TextInput, View } from "react-native";
import { Style_FormPart1 } from "../Style/Style_FormPart1";

export default function Form_Part1() {
  return (
    <View style={{ gap: 10 }}>


      {/* Nombre Vehiculo Input */}
      <View style={{ gap: 5 }}>
        <View style={Style_FormPart1.Labels_Container}>
          <Text style={Style_FormPart1.Labels_Text}>Nombre del Vehículo</Text>
          <Text style={Style_FormPart1.Label_Ate}>*</Text>
        </View>
        <TextInput
          placeholder="Ej: Mi Toyota Corolla"
          style={Style_FormPart1.Text_Input}
        />
      </View>

      {/* Placa de Vehiculo */}
      <View style={{ gap: 5 }}>
        <View style={Style_FormPart1.Labels_Container}>
          <Text style={Style_FormPart1.Labels_Text}>Placa</Text>
          <Text style={Style_FormPart1.Label_Ate}>*</Text>
        </View>

        <TextInput
          placeholder="Ej: ABC-123"
          style={Style_FormPart1.Text_Input}
        />
      </View>


      {/* Modelo y Marca de Vehiculo -> Input */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "48%", gap: 5 }}>
          <View style={Style_FormPart1.Labels_Container}>
            <Text style={Style_FormPart1.Labels_Text}>Marca</Text>
            <Text style={Style_FormPart1.Label_Ate}>*</Text>
          </View>
          <TextInput
            placeholder="Ej: Toyota"
            style={Style_FormPart1.Text_Input}
          />
        </View>
        <View style={{ width: "48%", gap: 5 }}>
          <View style={Style_FormPart1.Labels_Container}>
            <Text style={Style_FormPart1.Labels_Text}>Modelo</Text>
            <Text style={Style_FormPart1.Label_Ate}>*</Text>
          </View>

          <TextInput
            placeholder="Ej: Corolla"
            style={Style_FormPart1.Text_Input}
          />
        </View>
      </View>

      {/*Año del Vehiculo  -> input  */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ width: "48%", gap: 5 }}>
          <View style={Style_FormPart1.Labels_Container}>
            <Text style={Style_FormPart1.Labels_Text}>Año</Text>
            <Text style={Style_FormPart1.Label_Ate}>*</Text>
          </View>
          <TextInput
            placeholder="Ej: 2020"
            style={Style_FormPart1.Text_Input}
          />
        </View>
        <View style={{ width: "48%", gap: 5 }}>
          <View style={Style_FormPart1.Labels_Container}>
            <Text style={Style_FormPart1.Labels_Text}>Color</Text>
            <Text style={Style_FormPart1.Label_Ate}>*</Text>
          </View>
          <TextInput
            placeholder="Ej: Blanco"
            style={Style_FormPart1.Text_Input}
          />
        </View>
      </View>

      {/* Input Kilometraje de vehiculo */}
      <View>
        <View style={{ width: "100%", gap: 5 }}>
          <View style={Style_FormPart1.Labels_Container}>
            <Text style={Style_FormPart1.Labels_Text}>Kilometraje</Text>
            <Text style={Style_FormPart1.Label_Ate}>*</Text>
          </View>
          <TextInput
            placeholder="Ej: 100,000km"
            style={Style_FormPart1.Text_Input}
          />
        </View>
      </View>
    </View>
  );
}
