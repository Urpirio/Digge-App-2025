import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { BlurView } from "expo-blur";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Style_ModalReportar } from "@/Components/Compenents_ModalReportar/style/Style_ModalReportar";
import { useReportes } from "@/Components/Compenents_ModalReportar/Hooks/useReporte";
import { useBtnStar } from "@/Components/Compenents_ModalReportar/Hooks/useBtnStar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
import Section_BtnStart from "@/Components/Compenents_ModalReportar/components/Section_BtnStart";

export default function Modal_ReportarAgente() {
  const {
    StatusConducto,
    setLevelStar,
    setStatus_S,
    Status_S,
    Status_EnvioEva,
    setStatus_EnvioEva,
  } = useReportes();
  const { start_opinion } = useBtnStar();

  return (
    <SafeAreaProvider style={{ justifyContent: "flex-end" }}>
      <BlurView tint="dark" style={{ height: "80%", width: "100%" }}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ height: "100%", width: "100%" }}
        ></TouchableOpacity>
      </BlurView>
      <View
        style={{ height: "20%", width: "100%", backgroundColor: "white" }}
      />
      <KeyboardAvoidingView behavior="padding" style={{ position: "absolute" }}>
        <ScrollView
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View style={Style_ModalReportar.Container_General}>
            <Text style={Style_ModalReportar.Text_Titulo}>
              Evalua al agente
            </Text>

            <Section_BtnStart
              start_opinion={start_opinion}
              setLevelStar={setLevelStar}
              setStatus_S={setStatus_S}
              StatusConducto={StatusConducto}
              Status_S={Status_S}
            />

            <View style={{ gap: 10 }}>
              <Text style={{ fontSize: 16 }}>Descripción Detallada</Text>
              <TextInput
                placeholder="Describe sobre la retencion del agente..."
                style={Style_ModalReportar.Text_Input}
                multiline={true}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "flex-end",
                  height: 22,
                }}
              >
                <Text style={{ fontSize: 15 }}>Evidencias</Text>
                <Text style={{ color: "red", fontWeight: "600", fontSize: 20 }}>
                  *
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity style={Style_ModalReportar.BtnTomarFoto}>
                  <Entypo name="camera" size={24} color="#0F539C" />
                  <Text style={{ color: "#0F539C", fontWeight: "500" }}>
                    Tomar foto
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style_ModalReportar.BtnGrabarVideo}>
                  <FontAwesome name="video-camera" size={24} color="#0F539C" />
                  <Text style={{ color: "#0F539C", fontWeight: "500" }}>
                    Grabar video
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {Status_EnvioEva ? (
                <TouchableOpacity
                  onPress={() => setStatus_EnvioEva(true)}
                  style={Style_ModalReportar.BtnEnviadoEva}
                >
                  <FontAwesome5 name="check" size={18} color="#4CB050" />
                  <Text style={{ fontWeight: "600", color: "#4CB050" }}>
                    Su evaluación fue enviada
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setStatus_EnvioEva(true)}
                  style={Style_ModalReportar.BtnEnviarEva}
                >
                  <Text style={{ fontWeight: "600", color: "white" }}>
                    Enviar evaluación
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
