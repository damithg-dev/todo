import React, { useRef } from "react";
import { Platform, FlatList, Animated } from "react-native";
import { useScrollToTop } from "@react-navigation/native";
const isAndroid = Platform.OS == "android";
import {
  HEADER_MAX_HEIGHT,
  MAIN_LEFT_RIGHT_PADDING,
} from "../navigationHeader/AnimatedNavigation";

export const NavigationFlatList = (props) => {
  const ref = useRef(null);

  useScrollToTop(ref);

  return (
    <Animated.FlatList
      ref={ref}
      refreshControl={props.refreshControl}
      contentContainerStyle={{
        paddingTop: isAndroid ? HEADER_MAX_HEIGHT + 10 : 0,
        paddingBottom: isAndroid ? HEADER_MAX_HEIGHT : 0,
        paddingLeft: props.isPaddingEnable ? MAIN_LEFT_RIGHT_PADDING : 0,
        paddingRight: props.isPaddingEnable ? MAIN_LEFT_RIGHT_PADDING : 0,
      }}
      style={{
        flex: 1,
      }}
      scrollEventThrottle={16}
      onScroll={props.onScroll}
      keyExtractor={(item, index) => `___${index}`}
      data={props.data}
      renderItem={props.renderItem}
      ItemSeparatorComponent={props.ItemSeparatorComponent}
    />
  );
};
