import Search from "./pages/Search";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Search />
      </div>
    </Provider>
  );
}

export default App;
