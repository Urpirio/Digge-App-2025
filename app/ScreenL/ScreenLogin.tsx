import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Link, router } from "expo-router";
import { useEnviarDatos } from "@/Components/Components_Login/hooks/useEnviarDatos";
import { useStyleLogin } from "@/Components/Components_Login/hooks/useStyleLogin";
import Feather from "@expo/vector-icons/Feather";
import * as LocalAuthentication from "expo-local-authentication";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Style_Login } from "@/Components/Components_Login/Style/Style_Login";

export default function ScreenLogin() {
  const {
    InputEmail,
    setInputEmail,
    InputPass,
    setInputPass,
    BtnIconPass,
    IconPass,
    setIconPass,
    BtnIniciarSesion,
    IniciarSesion,
  } = useEnviarDatos();

  const ValidarDatosBiometricos = async () => {
    LocalAuthentication.authenticateAsync().then((Tools) => {
      if (Tools.success) {
        router.navigate("/Screens/AScreenHome");
      }
    });
  };

  return (
    <SafeAreaProvider>
      <Image
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
        source={require("../../Assets/Backgrounds/Pagina de bienvenida.png")}
      />
      <View style={Style_Login.container_principal}>
        <View style={{ width: "100%", alignItems: "flex-start" }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={Style_Login.btnVolver}
          >
            <Feather name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={Style_Login.container_logo}>
          <Image
            style={{ objectFit: "contain", height: 100, width: 100 }}
            source={require("../../Assets/Image/Logo.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Inicia sesión en tu cuenta
          </Text>

          <TouchableOpacity style={Style_Login.btn_iniciarSession_CuentaUnica}>
            <Image source={require("../../Assets/icon/Social icon.png")} />
            <Text style={{ fontWeight: "500", color: "#6c757d" }}>
              Inicia con Cuenta Única
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Style_Login.barraSeparadora} />
        <View style={{ gap: 10 }}>
          <View style={Style_Login.container_inputs}>
            <TextInput
              value={InputEmail}
              onChangeText={setInputEmail}
              placeholder="Cedula"
              placeholderTextColor={"#adb5bd"}
              style={{
                fontSize: 16,
                width: "90%",
                color: "gray",
              }}
            />
          </View>
          <View style={Style_Login.container_inputs}>
            <TextInput
              value={InputPass}
              onChangeText={setInputPass}
              showSoftInputOnFocus
              secureTextEntry={IconPass}
              placeholder="Contraseña"
              placeholderTextColor={"#adb5bd"}
              style={{ fontSize: 16, width: "90%", color: "gray" }}
            />
            <TouchableOpacity onPress={() => setIconPass(!IconPass)}>
              <BtnIconPass />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style_Login.container_btnIniciarSesion}>
          <TouchableOpacity
            onPress={IniciarSesion}
            style={Style_Login.btn_IniciarSesion}
          >
            <BtnIniciarSesion />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => ValidarDatosBiometricos()}
            style={Style_Login.btn_IniciarSesionHuella}
          >
            <Ionicons name="finger-print-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Link
          style={Style_Login.LinkRecuperarCuenta}
          href={"/ScreenL/ScreenRecuperarP"}
        >
          Olvide mi Contraseña
        </Link>
      </View>
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaProvider>
  );
}
