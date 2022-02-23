import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { RouteWithSubRoutes } from "./routes/RouteWithSubRoutes";

import routes from "./routes/routes";
import store from "./Store";

import "bootstrap/dist/css/bootstrap.min.css";
import "winbox-react/dist/index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
