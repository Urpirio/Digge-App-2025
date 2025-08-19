import { StyleSheet } from "react-native";

export const Style_CardBlueHistorial = StyleSheet.create({
  Card: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#0F539C",
    boxShadow: "0px 0px 5px 0px #dee2e6",
    marginBottom: 10,
  },
  Text_Numero: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "600",
    color: "white",
  },
  Text_Card: {
    textAlign: "center",
    color: "#ffffff72",
  },
  SubContainerCard: {
    padding: 20,
    borderRightWidth: 1,
    borderColor: "#ffffff8a",
  },
});
