import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const TodoCategoryItem = ({ data, onPress, isSelected }) => {
  let { title, color } = data;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
      ]}
    >
      <Text
        style={[
          styles.titleText,
          {
            color: color,
            fontWeight: isSelected ? '600' : '300'
          },
        ]}
      >
        {title}
      </Text>
      <Icon name={isSelected ? "square" :  "square-o"} size={20} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: "#afafaf",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#ffffff",
    margin: 8,
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    color: "#afafaf",
    fontWeight: "300",
    marginLeft: 8,
    flex: 1,
  },
});
