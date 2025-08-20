import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import { router } from "expo-router";
import { useEditarPerfil } from "@/Components/Components_ScreenPerfil/Hook/useEditarPerfil";
import { BlurView } from "expo-blur";

export default function ScreenEditarPerfil() {
  const {
    setInput_Direccion_Vivienda,
    setInput_Email,
    setInput_NumeroT_primario,
    setInput_NumeroT_secundario,
    Input_Direccion_Vivienda,
    Input_Email,
    Input_NumeroT_primario,
    Input_NumeroT_secundario,
    EstadoGuardar,
  } = useEditarPerfil();

  return (
    <SafeAreaProvider style={{ justifyContent: "flex-end" }}>
      <BlurView intensity={100} tint="dark">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={{ height: "100%", width: "100%" }}
        ></TouchableOpacity>
      </BlurView>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          backgroundColor: "white",
          width: "100%",
          borderWidth: 1,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderColor: "#dee2e6",
          paddingTop: 20,
          paddingHorizontal: 20,
          position: "absolute",
          gap: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "400",
            color: "#0F539C",
          }}
        >
          Editar Perfil
        </Text>
        <View style={{ gap: 10 }}>
          <TextInput
            value={Input_Email}
            onChangeText={setInput_Email}
            placeholder="Email"
            placeholderTextColor={"gray"}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              fontSize: 16,
              borderColor: "#dee2e6",
            }}
          />
          <TextInput
            value={Input_NumeroT_primario}
            onChangeText={setInput_NumeroT_primario}
            keyboardType="numeric"
            placeholder="Numero Telefonico"
            placeholderTextColor={"gray"}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              fontSize: 16,
              borderColor: "#dee2e6",
            }}
          />
          <TextInput
            value={Input_NumeroT_secundario}
            onChangeText={setInput_NumeroT_secundario}
            placeholder="Numero Secundario"
            placeholderTextColor={"gray"}
            keyboardType="numeric"
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              fontSize: 16,
              borderColor: "#dee2e6",
            }}
          />
          <TextInput
            value={Input_Direccion_Vivienda}
            onChangeText={setInput_Direccion_Vivienda}
            placeholder="Direccion de vivienda"
            placeholderTextColor={"gray"}
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              fontSize: 16,
              borderColor: "#dee2e6",
            }}
          />
        </View>
        <TouchableOpacity
          disabled={EstadoGuardar}
          style={{
            backgroundColor: EstadoGuardar ? "#0F539C" : "#e3e1e1ff",
            alignItems: "center",
            paddingVertical: 10,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Guardar cambios</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
