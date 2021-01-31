/**
 * React-Native-Template-Nativego template
 * https://github.com/damithg-dev/react-native-template-nativego
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef, isReadyRef } from "./src/navigation/helper";
import { enableScreens } from "react-native-screens";
import { ThemeProvider  } from "./src/utilities/context/theme";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
enableScreens();

import todo from "./src/screens/todo";

const Stack = createStackNavigator();

const App = ({ Navigation }) => {
  return (
    <BottomSheetModalProvider>
    <ThemeProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
        <Stack.Navigator
          screenOptions = {{
            headerShown : false,
          }}
         >
          <Stack.Screen name="todo" component={todo} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </BottomSheetModalProvider>
  );
};

export default App;
