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
  } = useChatBot();

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}
    >
      {InputMensaje == undefined ? (
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            paddingVertical: 10,
            gap: 5,
          }}
        >
          <Image
            style={{ objectFit: "contain" }}
            source={require("../../../Assets/Image/LogoChat.png")}
          />
          <View
            style={{
              width: "100%",
              paddingHorizontal: 10,
              gap: 10,
              paddingVertical: 5,
            }}
          >
            {Data_PreguntasFrecuentes.map((D) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setInputMensaje(D.Pregunta);
                  }}
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "#ECEBEB",
                  }}
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
        <ScrollView
          style={{ paddingTop: 5, paddingHorizontal: 5 }}
        >
          {DataChat.map((D: { pregunta: string; respuesta: string }) => {
            return (
              <View style={{ width: "100%", marginVertical: 10, gap: 5 }}>
                <ComponentePregunta pregunta={D?.pregunta} />
                <ComponenteRespuesta respuesta={`${D?.respuesta}`} />
              </View>
            );
          })}

          {InicioChat ? (
            <View style={{ gap: 5,paddingBottom:20 }}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Text
                style={{
                  backgroundColor: "#0F539C",
                  padding: 5,
                  color: "white",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  fontSize: 16,
                }}
              >
                {InputMensaje}
              </Text>
              </View>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Skeleton
                  style={{
                    width: "50%",
                    height: 30,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                />
              </View>
            </View>
          ) : (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingBottom:20
              }}
            >
              <Text
                style={{
                  backgroundColor: "#0F539C",
                  padding: 5,
                  color: "white",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius:10,
                  fontSize: 16,
                }}
              >
                {InputMensaje}
              </Text>
            </View>
          )}
        </ScrollView>
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 15,
          paddingHorizontal: 10,
          borderTopWidth: 1,
          borderColor: "#E6E6E6",
          backgroundColor: "white",
        }}
      >
        <TextInput
          onSubmitEditing={EnviarMensaje}
          value={InputMensaje}
          onChangeText={InicioChat ? ()=>{} : setInputMensaje}
          placeholderTextColor={"#717171"}
          placeholder="Pregunta lo que necesitas..."
          style={{
            width: "85%",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#E6E6E6",
            backgroundColor: "#E6E6E6",
            color: "#717171",
          }}
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
