import "./styles/globals.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./lib/routes";
import Layout from "./lib/components/Layout";

import { useDispatch } from "react-redux";
import { fetchAllJokes } from "./lib/features/jokes/jokesSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllJokes());
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route?.name}
              path={route?.path}
              element={route?.component}
            ></Route>
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
