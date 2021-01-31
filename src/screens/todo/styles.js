import React from "react";
import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
import { fonts, colors } from "../../styles";
import { hasNotch } from "react-native-device-info";

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.mainBackgroundColor,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },
  confirmButton: {
    marginTop: 10,
    marginBottom: 10,
  },

  
  newTodoTitle: {
    color: colors.titleColor,
    fontWeight: "300",
    fontSize: 18,
  },
  newTodoButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: hasNotch() ? 20 : 10,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  newTodoButton: {
    height: 50,
    width: "60%",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#afafaf",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
