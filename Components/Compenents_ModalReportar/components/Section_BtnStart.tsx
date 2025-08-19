import { View, TouchableOpacity, Text } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Style_ModalReportar } from "../style/Style_ModalReportar";
import { Dispatch, SetStateAction } from "react";

interface Tools {
  start_opinion: Function;
  setStatus_S: Dispatch<
    SetStateAction<{
      S1: boolean;
      S2: boolean;
      S3: boolean;
      S4: boolean;
      S5: boolean;
    }>
  >;
  setLevelStar: Dispatch<SetStateAction<number>>;
  Status_S: {
    S1: boolean;
    S2: boolean;
    S3: boolean;
    S4: boolean;
    S5: boolean;
  };
  StatusConducto: {
    opinion: string;
    color: string;
  } | undefined;
};

export default function Section_BtnStart({start_opinion,setLevelStar,setStatus_S,StatusConducto,Status_S}:Tools) {

  return (
    <View>
      <View style={Style_ModalReportar.Card_Star}>
        <View
          style={{
            alignItems: "center",
            width: "25%",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 20 }}>3.5</Text>
          <Text style={{ fontSize: 8 }}>Puntuación</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "75%",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              start_opinion({
                setStatus_S: setStatus_S,
                setLevelStar: setLevelStar,
                LevelStart: 1,
              })
            }
          >
            <Fontisto
              name="star"
              size={26}
              color={Status_S.S1 ? "#0F539C" : "#8BC8FE"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              start_opinion({
                setStatus_S: setStatus_S,
                setLevelStar: setLevelStar,
                LevelStart: 2,
              })
            }
          >
            <Fontisto
              name="star"
              size={26}
              color={Status_S.S2 ? "#0F539C" : "#8BC8FE"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              start_opinion({
                setStatus_S: setStatus_S,
                setLevelStar: setLevelStar,
                LevelStart: 3,
              })
            }
          >
            <Fontisto
              name="star"
              size={26}
              color={Status_S.S3 ? "#0F539C" : "#8BC8FE"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              start_opinion({
                setStatus_S: setStatus_S,
                setLevelStar: setLevelStar,
                LevelStart: 4,
              })
            }
          >
            <Fontisto
              name="star"
              size={26}
              color={Status_S.S4 ? "#0F539C" : "#8BC8FE"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              start_opinion({
                setStatus_S: setStatus_S,
                setLevelStar: setLevelStar,
                LevelStart: 5,
              })
            }
          >
            <Fontisto
              name="star"
              size={26}
              color={Status_S.S5 ? "#0F539C" : "#8BC8FE"}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: StatusConducto?.color,
        }}
      >
        {StatusConducto?.opinion}
      </Text>
    </View>
  );
}
