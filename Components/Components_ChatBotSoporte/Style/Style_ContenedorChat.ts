import { StyleSheet } from "react-native";

export const Style_ContenedorChat = StyleSheet.create({
  Container_TextPregunta: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  Container_TextPregunta2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  Text_Pregunta: {
    backgroundColor: "#0F539C",
    padding: 5,
    color: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: 16,
  },
  Skeleton_CargandoRespuesta: {
    width: "50%",
    height: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  Container_EntradaMensaje: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "#E6E6E6",
    backgroundColor: "white",
  },
  Input_Mensaje: {
    width: "85%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E6E6E6",
    backgroundColor: "#E6E6E6",
    color: "#717171",
  },
  Container_PreguntasFrecuentes: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    gap: 5,
  },
  Container_BtnPreguntasFrecuentes: {
    width: "100%",
    paddingHorizontal: 10,
    gap: 10,
    paddingVertical: 5,
  },
  BtnPreguntasFrecuentes: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ECEBEB",
  },
});
