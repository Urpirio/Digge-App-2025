import { StyleSheet } from "react-native";

export const Style_CardInfracciones = StyleSheet.create({
  Card: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    gap: 10,
    borderColor: "#9999992f",
    marginBottom: 10,
  },
  Container_infracciones: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Text_General: {
    fontSize: 14,
    color: "#999999ff",
  },
  Text_Subtitulo: {
    color: "#999999ff",
    fontSize: 16,
    fontWeight: "300",
  },
  Text_btnDetalles: {
    color: "#0F539C",
    fontSize: 14,
    fontWeight: "500",
  },
  subContainer_general: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
