import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <AppRouter />
      </Provider>
  );
}

export default App;
