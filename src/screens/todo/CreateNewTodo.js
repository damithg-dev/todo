import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { TodoCreateModal } from "../../components/";

export const CreateNewTodo = () => {
  const todoCreateModal = useRef();

  renderModal = () => {
    return <TodoCreateModal ref={todoCreateModal} />;
  };

  return (
    <View style={styles.newTodoButtonContainer}>
      <TouchableOpacity
        onPress={() => {
          todoCreateModal.current.show();
        }}
        style={styles.newTodoButton}
      >
        <Text style={styles.newTodoTitle}>Create New Task</Text>
      </TouchableOpacity>
      {renderModal()}
    </View>
  );
};
