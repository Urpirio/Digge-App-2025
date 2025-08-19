import { StyleSheet } from "react-native";

export const Style_SectionFormulario = StyleSheet.create({
  Text_Input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 55,
    fontSize: 16,
    borderColor: "#D1D0D0",
    backgroundColor: "#efeded44",
  },
  Container_Pickers: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#D1D0D0",
    backgroundColor: "#efeded44",
  },
  Btn_AgregarUbicacion: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 5,
    borderRadius: 10,
    borderColor: "#D1D0D0",
    backgroundColor: "#efeded44",
  },
  Btn_EnviarDenuncia: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#0F539C",
    flexDirection: "row",
    gap: 5,
  },
});
