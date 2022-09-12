import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  resume: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",

  },
  createdBox: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  createdName: {
    paddingRight: 8,
    fontWeight: "bold",
    fontSize: 14,
    color: "#4EA8DE"
  },
  createdQuantity: {
    color: "#D9D9D9",
    borderRadius: 9999,
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8
  },
  emptyList: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
  },
  titleEmpty: {
    paddingTop: 16,
    color: "#808080",
    fontWeight: "bold",
    fontSize: 14
  },
  subtitleEmpty: {
    color: "#808080",
    fontSize: 14
  }
})