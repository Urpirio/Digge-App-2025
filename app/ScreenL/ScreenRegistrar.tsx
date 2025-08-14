import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { router } from "expo-router";
import { useStyleRegistro } from "@/Components/Components_Registro/hooks/useStyleRegitro";
import { useEnviarDatosR } from "@/Components/Components_Registro/hooks/useEnviarDatosR";
import { KeyboardAvoidingView } from "react-native";
import Feather from "@expo/vector-icons/Feather";

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
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          position: "absolute",
          flex: 1,
          paddingHorizontal: 20,
          gap: 20,
        }}
      >
        <View style={{ paddingTop: 40, width: "100%",alignItems:'flex-start' }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "100%",
              padding: 5,
              backgroundColor: "#0F539C",
            }}
          >
            <Feather name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 15,
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{ objectFit: "contain", height: 100, width: 100 }}
            source={require("../../Assets/Image/Logo.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Crea tu cuenta usando
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              borderWidth: 1,
              flexDirection: "row",
              gap: 10,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
              borderColor: "#ced4da",
            }}
          >
            <Image source={require("../../Assets/icon/Social icon.png")} />
            <Text style={{ fontWeight: "500", color: "#6c757d" }}>
              Registrate con Cuenta Única
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.8,
            width: "100%",
            borderStyle: "dashed",
            borderColor: "#ced4da",
          }}
        />
        <View style={{ justifyContent: "center", gap: 10 }}>
          <View
            style={{
              backgroundColor: "#e9e9e97e",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <TextInput
              value={InputEmail}
              onChangeText={setInputEmail}
              placeholder="Correo electrónico "
              placeholderTextColor={"#adb5bd"}
              style={{
                fontSize: 16,
                width: "90%",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#e9e9e97e",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 10,
              padding: 5,
            }}
          >
            <TextInput
              value={Inputcedula}
              onChangeText={setInputcedula}
              placeholder="Cedula"
              placeholderTextColor={"#adb5bd"}
              style={{
                fontSize: 16,
                width: "90%",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#e9e9e97e",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 10,
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
              backgroundColor: "#e9e9e97e",
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 10,
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
      </KeyboardAvoidingView>
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaProvider>
  );
}
