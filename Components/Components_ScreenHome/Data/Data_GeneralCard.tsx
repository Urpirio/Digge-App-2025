import { ReactNode } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export interface AccionRegistro {
  Icon: ReactNode;
  Titulo: string;
  subTitulo: string;
  bgIconColor: string;
  hora: string;
  Stat: string;
  ColorStat: string;
};

export const Data_GeneralCard: AccionRegistro[] = [
  {
    Icon: (
      <MaterialCommunityIcons
        name="checkbox-outline"
        size={24}
        color="#FF980E"
      />
    ),
    Titulo: "Multa pendiente",
    subTitulo: "Multa por RD$2,500 - Vence 23 Feb",
    bgIconColor: "FFF2DF",
    hora: "4h",
    Stat: "RD$2,500",
    ColorStat: "FF980E",
  },
  {
    Icon: <Feather name="info" size={24} color="#4BB04D" />,
    Titulo: "Denuncia procesada",
    subTitulo: "Denuncia #D020 procesada y validada",
    bgIconColor: "EAF4E9",
    hora: "4h",
    Stat: "+40 pts",
    ColorStat: "43B24B",
  },
  {
    Icon: <MaterialIcons name="access-time" size={24} color="#1F96F5" />,
    Titulo: "Renovación de marbete",
    subTitulo: "Marbete vence en 12 días",
    bgIconColor: "E4F2FD",
    hora: "4h",
    Stat: "Proximo",
    ColorStat: "8E98A0",
  },
];
