/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import {
  store,
  persistor,
} from "./src/redux/store/configureStore";
import { PersistGate } from "redux-persist/integration/react";


const Redux = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Redux);
