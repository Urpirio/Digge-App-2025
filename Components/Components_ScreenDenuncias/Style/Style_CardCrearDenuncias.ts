import { StyleSheet } from "react-native";

export const Style_CardCrearDenuncias = StyleSheet.create({
  Card: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor: "#e6e6e6ff",
    alignItems: "center",
    boxShadow: "0px 0px 5px 0px #dee2e6",
  },
  BtnPlus: {
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F539C",
  },
});
