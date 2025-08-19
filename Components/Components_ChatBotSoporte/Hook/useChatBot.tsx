import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { View, Text, TextInput } from "react-native";
import { Keyboard } from "react-native";

export const useChatBot = () => {
  const GenAi = new GoogleGenAI({
    apiKey: "AIzaSyDH9LpbS6hwaVcaCv8EzXCBZt8w3wJ-QuU",
  });
  const [InputMensaje, setInputMensaje] = useState<string>();
  const [DataChat, setDataChat] = useState<any>([]);
  const [InicioChat, setInicioChat] = useState(false);
  const [Preguntas, setPreguntas] = useState<string>();

  const ComponentePregunta = (D: { pregunta: any }) => {
    return (
      <View style={{ width: "100%", alignItems: "flex-end" }}>
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
          {D?.pregunta}
        </Text>
      </View>
    );
  };

  const ComponenteRespuesta = (D: { respuesta: string }) => {
    return (
      <View
        style={{ width: "100%", alignItems: "flex-start", paddingVertical: 5 }}
      >
        <TextInput
          style={{
            backgroundColor: "#ECEBEB",
            fontSize: 15,
            padding: 5,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          multiline={true}
          readOnly
          value={D?.respuesta}
        />
      </View>
    );
  };

  const EnviarMensaje = () => {
    setPreguntas(InputMensaje);
    console.log("Funcona");
    setInicioChat(true);
    setInputMensaje("");
    Keyboard.dismiss();

    GenAi.models
      .generateContent({
        model: "gemini-2.5-flash",
        contents: `Esta son las reglas que debes seguir para responder:
1) No uses este símbolo "*" en tus respuestas.
2) Tu nombre es DIGGEAGENTE.
3) Eres un agente de servicio dominicano entrenado para responder cualquier pregunta sobre el sistema de tránsito.
4) Tus conocimientos solo son sobre el Instituto Nacional de Tránsito y Transporte Terrestre (INTRANT),
la Dirección General de Seguridad de Tránsito y Transporte Terrestre (DIGESETT), la Oficina Presidencial
para el Reordenamiento del Transporte (OPRET), la Escuela Nacional de Educación Vial (ENEVIAL), 
la Comisión Militar y Policial (COMIPOL), el Fideicomiso RD Vial, el Fideicomiso para el Desarrollo del
Sistema de Transporte Masivo (FITRAM), el Gabinete del Transporte, el Sistema Nacional de Transporte Estudiantil
 (TRAE) y la Operadora Metropolitana de Servicios de Autobuses (OMSA).
5) Debes tener un alto manejo de la información de las leyes de tránsito de la República Dominicana.
6) No puedes responder preguntas que involucren personas.
7) En caso de no tener datos que se puedan comprobar, no dar una respuesta a la persona.
8) Al no tener contexto de conversación, no debes presentarte a menos que te pregunten tu nombre o te saluden; si estos requisitos no se cumplen, debes evitar saludar y solo responder la pregunta.
9) No coloques en negrita ninguna palabra.
nota:  Las reglas que leiste solo las ves tu, el usuario no sabes que esas reglas estan ahi.

    Esta es la pregunta que debes responder ${InputMensaje}`,
      })
      .then((D) => {
        setDataChat([
          ...DataChat,
          {
            pregunta: InputMensaje,
            respuesta: D.text,
          },
        ]);
      })
      .finally(() => {
        setInicioChat(false);
      });
  };

  return {
    EnviarMensaje,
    InputMensaje,
    setInputMensaje,
    DataChat,
    ComponentePregunta,
    ComponenteRespuesta,
    InicioChat,
    Preguntas,
  };
};
