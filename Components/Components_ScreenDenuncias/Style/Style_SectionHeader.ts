import { StyleSheet } from "react-native";

export const Style_SectionHeader = StyleSheet.create({
  ConatinerTop_header: {
    flexDirection: "row",
    backgroundColor: "#0F539C",
    paddingBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  ConatainerBottom_header: {
    backgroundColor: "#0F539C",
    paddingBottom: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  Text_NombreUsuario: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  Container_BtnNoti_Search: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  Container_btnDash_Historial: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  BtnDash_Historial_OUT: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    justifyContent: "center",
    backgroundColor: "white",
  },
  BtnDash_Historial_IN: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    justifyContent: "center",
    backgroundColor: "#0F539C",
  },
});
