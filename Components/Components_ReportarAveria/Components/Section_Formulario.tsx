import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import { Picker } from "@react-native-picker/picker";
import { useFormulario } from "../Hook/useFormulario";
import { router } from "expo-router";

export default function Section_Formulario() {
  const {
    DropDownValue,
    setDropDownValue,
    InputCarriles,
    setInputCarriles,
    TextTareaDescripcion,
    setTextTareaDescripcion,
    setLocalizacion,
    Localizacion,
    LocationUser,
  } = useFormulario();

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
              <Text style={{ color: "red",fontWeight:'500'  }}>*</Text>
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
              <Text style={{ color: "red" ,fontWeight:'500' }}>*</Text>
            </View>
            <TouchableOpacity
              onPress={() => LocationUser()}
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
              <Text style={{ color: "gray" }}>{Localizacion}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ gap: 5 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>Carriles Afectados</Text>
              <Text style={{ color: "red",fontWeight:'500'  }}>*</Text>
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
              <Text style={{ color: "red",fontWeight:'500'  }}>*</Text>
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
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text>Evidencia</Text>
            <Text style={{ color: "red",fontWeight:'500' }}>*</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => router.navigate("/SubScreens/ScreenCamaraFotos")}
              style={{
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "48%",
                padding: 10,
                gap: 5,
                borderRadius: 10,
                borderColor: "#D1D0D0",
                backgroundColor: "white",
              }}
            >
              <Entypo name="camera" size={24} color="#0F539C" />
              <Text style={{ color: "#0F539C", fontWeight: "500" }}>
                Tomar Foto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.navigate("/SubScreens/ScreenCamaraVideo")}
              style={{
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "48%",
                padding: 10,
                gap: 5,
                borderRadius: 10,
                borderColor: "#D1D0D0",
                backgroundColor: "white",
              }}
            >
              <FontAwesome name="video-camera" size={24} color="#0F539C" />
              <Text style={{ color: "#0F539C", fontWeight: "500" }}>
                Grabar video
              </Text>
            </TouchableOpacity>
          </View>
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
