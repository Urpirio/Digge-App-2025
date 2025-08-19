import { StyleSheet } from "react-native";

export const Style_CardPrincipal = StyleSheet.create({
  Card: {
    padding: 15,
    borderRadius: 15,
    gap: 10,
    backgroundColor: "#0F539C",
  },
  container_icon: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    gap: 5,
  },
  Text_Matricula: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
  Text_Marbete: {
    fontSize: 12,
    color: "#22C55E",
  },
  Text_Seguro: {
    fontSize: 12,
    color: "#1B95F4",
  },
});
