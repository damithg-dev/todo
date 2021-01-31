import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Text, View, StyleSheet, FlatList, Keyboard, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../styles";
import { ModalContainer } from "./ModalContainer";
import { Input } from "../input";
import { TodoCategoryItem } from "../flatListItem";
import { TodoCategories } from "../enum";
import { addTodo } from "../../redux/actions/todo";

const todoCategoryArray = [
  TodoCategories.personal,
  TodoCategories.work,
  TodoCategories.home,
  TodoCategories.shopping,
  TodoCategories.appointment,
  TodoCategories.prioritize,
];

export const TodoCreateModal = forwardRef((props, ref) => {
  const { onDismiss } = props;

  const modalContainerRef = useRef();
  const [task, setTask] = useState("");
  const [category, setCategory] = useState(TodoCategories.common);
  const dispatch = useDispatch();
  const add = (todo) => dispatch(addTodo(todo));

  useImperativeHandle(ref, () => ({
    show() {
      modalContainerRef.current.show();
      setTask("");
      setCategory(TodoCategories.common);
    },
    close() {
      modalContainerRef.current.close();
    },
  }));

  const onPressDone = () => {
    const temp = {
      id: Math.random(),
      text: task,
      date: new Date(),
      type: category.title,
      completed: false,
      typeColor: category.color,
    };
    Keyboard.dismiss()
    add(temp);
    setTimeout(() => {
      modalContainerRef.current.close();
    }, 250);
    return;
  };

  const renderCategoryItem = ({ item }) => {
    const isSelected = item.title === category.title;
    return (
      <TodoCategoryItem
        data={item}
        onPress={() => setCategory(item)}
        isSelected={isSelected}
      />
    );
  };

  const renderCategories = () => {
    return (
    <View>
      <FlatList
        data={todoCategoryArray}
        renderItem={renderCategoryItem}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(_, index) => `____${index}`}
      />
      </View>
    );
  };

  const renderDoneButton = () => {
    const disabled = task.trim().length == 0;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPressDone}
        style={disabled? styles.doneDisableButton :  styles.doneEnableButton}
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>New Task</Text>
        <Input
          placeholder={"Write a new task"}
          value={task}
          onChangeText={(t) => setTask(t)}
        />
        <Text style={styles.subTitle}>Category</Text>
        {renderCategories()}
        {renderDoneButton()}
      </View>
    );
  };

  return (
    <ModalContainer
      ref={modalContainerRef}
      snapPoints={["90%"]}
      onDismiss={onDismiss}
    >
      {renderContent()}
    </ModalContainer>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: colors.titleColor,
    width: "100%",
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: "left",
    textAlignVertical: "center",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: colors.titleColor,
    width: "100%",
    letterSpacing: 0,
    textAlign: "left",
    textAlignVertical: "center",
    marginBottom: 10,
  },
  doneEnableButton: {
    width: "60%",
    backgroundColor: colors.buttonBackgroundColor,
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: colors.buttonBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    marginTop: 20
  },
  doneDisableButton: {
    width: "60%",
    backgroundColor: colors.buttonBackgroundColor,
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: colors.buttonBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    borderRadius: 8,
    opacity: 0.6,
    marginTop: 20
  },
  doneButtonText: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 28,
    color: colors.buttonTitleColor,
  },
});
