import { Picker } from "@react-native-picker/picker";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFormulario } from "../Hooks/useFormulario";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

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

  return (
    <View style={{ paddingHorizontal: 10, paddingBottom: 80 }}>
      <View style={{ gap: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>
          Datos del Vehículo
        </Text>
        <View style={{ gap: 5 }}>
          <Text>Placa del Vehículo *</Text>
          <TextInput
            placeholder="Ej: A123456"
            value={InputPlaca}
            onChangeText={setInputPlaca}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              height: 55,
              fontSize: 16,
              borderColor: "#D1D0D0",
              backgroundColor: "#efeded44",
            }}
          />
        </View>
        <View style={{ gap: 5 }}>
          <Text>Tipo de Vehículo</Text>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#D1D0D0",
              backgroundColor: "#efeded44",
            }}
          >
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
        <View style={{ gap: 5 }}>
          <Text>Color del Vehículo *</Text>
          <TextInput
            placeholder="Ej: Blanco, Azul, Rojo"
            value={InputColor}
            onChangeText={setInputColor}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              height: 55,
              fontSize: 16,
              borderColor: "#D1D0D0",
              backgroundColor: "#efeded44",
            }}
          />
        </View>
      </View>
      <View style={{ gap: 5 }}>
        <Text>Tipo de Infracción</Text>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#D1D0D0",
            backgroundColor: "#efeded44",
          }}
        >
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
      <View style={{ gap: 5 }}>
        <Text>Ubicación</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 20,
            paddingHorizontal: 15,
            gap: 5,
            borderRadius: 10,
            borderColor: "#D1D0D0",
            backgroundColor: "#efeded44",
          }}
        >
          <FontAwesome6 name="location-dot" size={18} color="#0F539C" />
          <Text>Ubicación actaul (GPS)</Text>
        </TouchableOpacity>
      </View>
      <View style={{ gap: 5 }}>
        <Text>Descripción del Incidente *</Text>
        <TextInput
          value={InputDescripcion}
          onChangeText={setInputDescripcion}
          placeholder="Describe detalladamente lo que observaste..."
          multiline={true}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            height: 55,
            fontSize: 16,
            borderColor: "#D1D0D0",
            backgroundColor: "#efeded44",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => router.navigate("/SubScreens/ScreenCamaraFotos")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 15,
            borderWidth: 1,
            width: "48%",
            borderRadius: 10,
            gap: 5,
            backgroundColor: "white",
            borderColor: "#7877773f",
            boxShadow: "0px 0px 10px 0px #78777710",
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
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 15,
            borderWidth: 1,
            width: "48%",
            borderRadius: 10,
            gap: 5,
            backgroundColor: "white",
            borderColor: "#7877773f",
            boxShadow: "0px 0px 10px 0px #78777711",
          }}
        >
          <FontAwesome name="video-camera" size={24} color="#0F539C" />
          <Text style={{ color: "#0F539C", fontWeight: "500" }}>
            Grabar video
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            padding: 15,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#0F539C",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <Ionicons name="warning-outline" size={20} color="white" />
          <Text style={{ fontSize: 16, color: "white", fontWeight: "500" }}>
            Enviar denuncia
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
