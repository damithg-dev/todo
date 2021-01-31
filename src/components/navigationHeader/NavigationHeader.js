import React from "react";
import {
  Animated,
  Platform,
  StyleSheet
} from "react-native";

export const NavigationHeader = ({ children, headerHeight , color = "#ffffff" }) => {
    if (Platform.OS == "android") {
      return (
        <Animated.View
          style={[styles.androidContainer, {
            backgroundColor: color,
            height : headerHeight,
          }]}
        >
          {children}
        </Animated.View>
      );
    } else {
      return (
        <Animated.View
          style={[styles.iosContainer, {
            backgroundColor: color,
            transform: [
              {
                translateY: headerHeight,
              },
            ],
          }]}
        >
          {children}
        </Animated.View>
      );
    }
  };
  

const styles = StyleSheet.create({
    androidContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 6,
        alignItems: "center",
    },
    iosContainer: {
        alignItems: "center",
        // backgroundColor: 'red',
        height: 140
    }
})