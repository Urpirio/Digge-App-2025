import { StyleSheet } from "react-native";

export const Style_CardVariable = StyleSheet.create({
  Card: {
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fcfcfcff",
    borderRadius: 10,
    borderColor: "#dee2e651",
    marginBottom: 10,
  },
  SubContainerCard: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
