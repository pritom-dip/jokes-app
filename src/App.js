import "./styles/globals.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./lib/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={route.component}
          ></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
