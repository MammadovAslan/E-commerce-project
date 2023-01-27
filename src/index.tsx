import ReactDOM from "react-dom/client";
import "./css/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './redux/store/store'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store ={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

reportWebVitals();
