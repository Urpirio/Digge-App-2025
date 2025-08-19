import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { Style_ContenedorChat } from "../Style/Style_ContenedorChat";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useChatBot } from "../Hook/useChatBot";
import { Data_PreguntasFrecuentes } from "../Data/Data_PreguntasFrecuentes";
import { Skeleton } from "@rneui/themed";

export default function SectionContenedorChat() {
  const {
    EnviarMensaje,
    InputMensaje,
    setInputMensaje,
    DataChat,
    ComponentePregunta,
    ComponenteRespuesta,
    InicioChat,
    Preguntas,
  } = useChatBot();

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
    >
      {InputMensaje == undefined ? (
        <View style={Style_ContenedorChat.Container_PreguntasFrecuentes}>
          <Image
            style={{ objectFit: "contain" }}
            source={require("../../../Assets/Image/LogoChat.png")}
          />
          <View style={Style_ContenedorChat.Container_BtnPreguntasFrecuentes}>
            {Data_PreguntasFrecuentes.map((D) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setInputMensaje(D.Pregunta);
                  }}
                  style={Style_ContenedorChat.BtnPreguntasFrecuentes}
                >
                  <Text style={{ color: "#1569C0", fontWeight: "500" }}>
                    {D.Pregunta}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <ScrollView style={{ paddingTop: 5, paddingHorizontal: 5 }}>
          {DataChat.map((D: { pregunta: string; respuesta: string }) => {
            return (
              <View style={{ width: "100%", marginVertical: 10, gap: 5 }}>
                <ComponentePregunta pregunta={D?.pregunta} />
                <ComponenteRespuesta respuesta={`${D?.respuesta}`} />
              </View>
            );
          })}

          {InicioChat ? (
            <View style={{ gap: 5, paddingBottom: 20 }}>
              <View style={Style_ContenedorChat.Container_TextPregunta}>
                <Text style={Style_ContenedorChat.Text_Pregunta}>
                  {Preguntas}
                </Text>
              </View>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Skeleton
                  style={Style_ContenedorChat.Skeleton_CargandoRespuesta}
                />
              </View>
            </View>
          ) : (
            <View style={Style_ContenedorChat.Container_TextPregunta2}>
              <Text style={Style_ContenedorChat.Text_Pregunta}>
                {InputMensaje}
              </Text>
            </View>
          )}
        </ScrollView>
      )}

      <View style={Style_ContenedorChat.Container_EntradaMensaje}>
        <TextInput
          onSubmitEditing={EnviarMensaje}
          value={InputMensaje}
          onChangeText={InicioChat ? () => {} : setInputMensaje}
          placeholderTextColor={"#717171"}
          placeholder="Pregunta lo que necesitas..."
          style={Style_ContenedorChat.Input_Mensaje}
        />

        <TouchableOpacity
          disabled={InicioChat}
          onPress={() => EnviarMensaje()}
          style={{
            padding: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: InicioChat ? "gray" : "#0F539C",
          }}
        >
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
