import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Image, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { router } from "expo-router";
import { useStyleRegistro } from "@/Components/Components_Registro/hooks/useStyleRegitro";
import { useEnviarDatosR } from "@/Components/Components_Registro/hooks/useEnviarDatosR";

export default function ScreenRegistrar() {
  const {
    IconPass_A,
    IconPass_B,
    setIconPass_A,
    setIconPass_B,
    BtnPass_A,
    BtnPass_B,
  } = useStyleRegistro();

  const {
    InputEmail,
    InputPassA,
    InputPassB,
    Inputcedula,
    setInputEmail,
    setInputPassA,
    setInputPassB,
    setInputcedula,
  } = useEnviarDatosR();

  return (
    <SafeAreaProvider>
      <Image
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
        source={require("../../Assets/Backgrounds/Pagina de bienvenida.png")}
      />
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          paddingTop: 80,
          paddingHorizontal: 20,
          gap: 30,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{ objectFit: "contain", height: 100, width: 100 }}
            source={require("../../Assets/Image/Logo.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Crea tu cuenta
          </Text>
        </View>
        <View style={{ justifyContent: "center", gap: 10 }}>
          <TextInput
          value={InputEmail}
          onChangeText={setInputEmail}
            placeholder="Correo electrónico "
            placeholderTextColor={"#adb5bd"}
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              fontSize: 16,
              borderRadius: 10,
              borderColor: "#e9ecef",
              height: 50,
            }}
          />
          <TextInput
          value={Inputcedula}
          onChangeText={setInputcedula}
            placeholder="Cedula"
            placeholderTextColor={"#adb5bd"}
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              fontSize: 16,
              borderRadius: 10,
              borderColor: "#e9ecef",
              height: 50,
            }}
          />
          <View
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 10,
              borderColor: "#e9ecef",
              alignItems: "center",
              padding: 5,
            }}
          >
            <TextInput
              value={InputPassA}
              onChangeText={setInputPassA}
              showSoftInputOnFocus
              secureTextEntry={IconPass_A}
              placeholder="Contraseña"
              placeholderTextColor={"#adb5bd"}
              style={{ fontSize: 16, width: "90%" }}
            />
            <TouchableOpacity onPress={() => setIconPass_A(!IconPass_A)}>
              <BtnPass_A />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 10,
              borderColor: "#e9ecef",
              alignItems: "center",
              padding: 5,
            }}
          >
            <TextInput
              value={InputPassB}
              onChangeText={setInputPassB}
              showSoftInputOnFocus
              secureTextEntry={IconPass_B}
              placeholder="Contraseña"
              placeholderTextColor={"#adb5bd"}
              style={{ fontSize: 16, width: "90%" }}
            />
            <TouchableOpacity onPress={() => setIconPass_B(!IconPass_B)}>
              <BtnPass_B />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => router.navigate("/Screens/AScreenHome")}
            style={{
              padding: 12,
              backgroundColor: "#0F539C",
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
              Registrarte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle={'dark-content'}/>
    </SafeAreaProvider>
  );
}
