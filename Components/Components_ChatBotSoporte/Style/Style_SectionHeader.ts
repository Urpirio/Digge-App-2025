import { StyleSheet } from "react-native";

export const Style_SectionHeader = StyleSheet.create({
  Container_Header: {
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
    gap: 10,
    backgroundColor: "#0F539C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  Text_HeaderTitulo: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  Text_HeaderSubTitulo: {
    fontWeight: "400",
    color: "#f8f9fa77",
  },
});
