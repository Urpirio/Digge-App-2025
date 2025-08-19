import { StyleSheet } from "react-native";

export const Style_Card_InformacionBasica = StyleSheet.create({
  Card: {
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "#e9ecef",
    boxShadow: "0px 0px 10px 0px #9a9a9a1d ",
    gap: 10,
  },
  SubContainerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  Text_Titulo: {
    fontWeight: "300",
    color: "gray",
    fontSize: 18,
  },
});
