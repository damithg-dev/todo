import React from "react";
import {
  Animated,
  Platform,
  Dimensions,
  StyleSheet
} from "react-native";
import { colors } from "../../styles";
import { NavigationHeader} from './NavigationHeader'
import { hasNotch } from 'react-native-device-info';


const isAndroid = Platform.OS == 'android';
const { height : SCREEN_HEIGHT  } = Dimensions.get('screen');

export const HEADER_MAX_HEIGHT = isAndroid ? SCREEN_HEIGHT * 0.10  : SCREEN_HEIGHT * 0.12;
export const HEADER_MIN_HEIGHT = isAndroid ? SCREEN_HEIGHT * 0.065  :  SCREEN_HEIGHT * 0.08;
export const HEADER_TITLE_MAX_TOP = isAndroid ? SCREEN_HEIGHT * 0.035  :  SCREEN_HEIGHT * 0.08;
export const HEADER_TITLE_MIN_TOP =isAndroid ? SCREEN_HEIGHT * 0.003  : hasNotch() ? SCREEN_HEIGHT * 0.035 : SCREEN_HEIGHT * 0.02 ;
export const HEADER_TITLE_MAX_FONT_SIZE = 35;
export const HEADER_TITLE_MIN_FONT_SIZE = 25;
export const MAIN_LEFT_RIGHT_PADDING = 25;

export const AnimatedNavigation = ({ scrollY, title }) => {

  const ios_headerHeight = scrollY.interpolate({
    inputRange: [0, 30],
    outputRange: [0, -30],
    extrapolate: "clamp",
  });

  const android_headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });


  const headerTitleFontSize = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_TITLE_MAX_FONT_SIZE, HEADER_TITLE_MIN_FONT_SIZE],
    extrapolate: "clamp",
  });


  return (
    <NavigationHeader headerHeight={ isAndroid? android_headerHeight :ios_headerHeight }>
      <Animated.View
        style={styles.mainContainer}
      >
        <Animated.Text
          style={{
            color: colors.titleColor,
            fontWeight: 'bold',
            fontSize: headerTitleFontSize,
          }}
        >
          {title}
        </Animated.Text>
      </Animated.View>
    </NavigationHeader>
  );
};


const styles = StyleSheet.create({
    mainContainer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      paddingBottom: 3,
      left: MAIN_LEFT_RIGHT_PADDING,
      right: MAIN_LEFT_RIGHT_PADDING,
      justifyContent:'space-between',
      alignItems: 'flex-end',
      alignContent: 'flex-end',
      flexDirection: 'row',
    }

})