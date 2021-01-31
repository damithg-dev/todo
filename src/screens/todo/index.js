import React, { useRef } from "react";
import { Animated  } from "react-native";
import { useSelector } from "react-redux";
import {
  Background,
  AnimatedNavigation,
  NavigationFlatList,
  TodoItem,
} from "../../components/";
import { CreateNewTodo } from "./CreateNewTodo";

const Todo = () => {

  const baseRef = useRef();
  const scrollY = useRef(new Animated.Value(0)).current;
  const todoList = useSelector(state => state.todoReducer.todoList)

  const renderNavigationHeader = () => {
    return <AnimatedNavigation title="tODO" scrollY={scrollY} />;
  };

  const renderItem = ({ item }) => {
    return <TodoItem data={item} />;
  };

  const renderTodoList = () => {
    return (
      <NavigationFlatList
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollY } },
          },
        ])}
        data={todoList}
        renderItem={renderItem}
      />
    );
  };

  return (
    <Background
      ref={baseRef}
      outerScrollHeader={renderNavigationHeader()}
      color={"#f6f6f6"}
      scrollEnabled={false}
    >
      {renderTodoList()}
      <CreateNewTodo />
    </Background>
  );
};


export default Todo;
