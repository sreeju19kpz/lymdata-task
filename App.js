import { Provider } from "react-redux";
import { store } from "./components/app/store";
import Main from "./Main";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <StatusBar style="light" />
    </Provider>
  );
}
