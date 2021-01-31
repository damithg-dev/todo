import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { completeTodo } from "../../redux/actions/todo";

export const TodoItem = ({ data }) => {
  let { id, text, date, type, completed, typeColor } = data;

  const dispatch = useDispatch();
  const complete = (todoId) => dispatch(completeTodo(todoId));

  return (
    <TouchableOpacity
      onPress={() => {
        complete(id);
      }}
      style={styles.mainContainer}
    >
      <Icon
        name={completed ? "check-square" : "square"}
        size={20}
        color={"#afafaf"}
      />
      <Text
        style={[
          styles.titleText,
          {
            textDecorationLine: completed ? "line-through" : "none",
          },
        ]}
      >
        {text}
      </Text>
      <Icon name={"square-o"} size={20} color={typeColor} />
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
    marginLeft: 25,
    marginRight: 25,
    padding: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    color: "#afafaf",
    fontWeight: "300",
    marginLeft: 8,
    flex: 1,
  },
});
