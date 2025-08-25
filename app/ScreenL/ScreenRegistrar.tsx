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
import Section_Form1 from "@/Components/Components_Registro/Components/Section_Form1";
import Section_Form2 from "@/Components/Components_Registro/Components/Section_Form2";

export default function ScreenRegistrar() {
  const {
    InputEmail,
    InputPassA,
    InputPassB,
    Inputcedula,
    setInputEmail,
    setInputPassA,
    setInputPassB,
    setInputcedula,
    IconPass_A,
    IconPass_B,
    setIconPass_A,
    setIconPass_B,
    BtnPass_A,
    BtnPass_B,
    Seguiente,
    setSeguiente,
    setInputNumero1,
    setInputNumero2,
    InputNumero1,
    InputNumero2,
    BtnSeguiente_Registro,
    ErrorCedula,
    Email_Valido,
    Pass_NoIgual,
    Send_Registrar,
  } = useEnviarDatosR();

  return (
    <SafeAreaProvider>
      <Image
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
        source={require("../../Assets/Backgrounds/Pagina de bienvenida.png")}
      />
      <KeyboardAvoidingView
        behavior="height"
        style={{
          position: "absolute",
          flex: 1,
          paddingHorizontal: 20,
          gap: 20,
        }}
      >
        <View
          style={{ paddingTop: 40, width: "100%", alignItems: "flex-start" }}
        >
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
            onPress={() => {
              router.navigate({
                pathname: "/Mod/Modal_DatosEnviados",
                params: {
                  descripcion:
                    "La función solicitada no se encuentra disponible en este momento. Estamos trabajando para habilitarla lo antes posible.",
                  titulo: "Función actualmente no disponible",
                  Error: "true",
                  tipo_s: "otro reporte",
                },
              });
            }}
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
        {Seguiente ? (
          <Section_Form2
            InputNumero1={InputNumero1}
            InputNumero2={InputNumero2}
            setInputNumero1={setInputNumero1}
            setInputNumero2={setInputNumero2}
          />
        ) : (
          <Section_Form1
            Pass_NoIgual={Pass_NoIgual}
            Email_Valido={Email_Valido}
            ErrorCedula={ErrorCedula}
            IconPass_A={IconPass_A}
            IconPass_B={IconPass_B}
            InputEmail={InputEmail}
            InputPassA={InputPassA}
            InputPassB={InputPassB}
            Inputcedula={Inputcedula}
            setInputEmail={setInputEmail}
            setIconPass_A={setIconPass_A}
            setIconPass_B={setIconPass_B}
            setInputPassA={setInputPassA}
            setInputPassB={setInputPassB}
            setInputcedula={setInputcedula}
            BtnPass_A={BtnPass_A}
            BtnPass_B={BtnPass_B}
          />
        )}
        <BtnSeguiente_Registro
          Inputcedula={Inputcedula}
          SendRegistro={() => {
            if (Seguiente) {
              Send_Registrar();
            }
          }}
        />
      </KeyboardAvoidingView>
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaProvider>
  );
}
