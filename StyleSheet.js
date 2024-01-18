import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexDirRow: {
    flexDirection: "row",
  },

  width100p: {
    width: "100%",
  },
  width240: {
    width: 240,
  },

  width44px: {
    width: 44,
  },

  height240: {
    height: 240,
  },
  height44px: {
    height: 44,
  },

  height75px: {
    height: 75,
  },

  gap10px: {
    gap: 10,
  },

  pad10px: {
    padding: 10,
  },

  borWid1px: {
    borderWidth: 1,
  },
  borColBlaLig: {
    borderColor: "rgba(0,0,0,.3)",
  },
  borRad10Px: {
    borderRadius: 10,
  },

  backcolRed: {
    backgroundColor: "red",
  },
  bacBlur: {
    ...StyleSheet.absoluteFillObject,
  },

  fonSiz18: { fontSize: 18 },
  fonSiz13: { fontSize: 13 },
  fonSiz11: { fontSize: 11 },
  fonColBlaLig1: { color: "rgba(0,0,0,.6)" },

  aliIteCnt: { alignItems: "center" },
  jusConCnt: { justifyContent: "center" },
  jusConSpcAro: { justifyContent: "space-around" },
});
