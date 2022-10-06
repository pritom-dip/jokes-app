import { lazy, Suspense } from "react";
import Loader from "../components/Loader/index.js";

const Home = lazy(() => import("../pages/Home"));

const routes = [
  {
    name: "home",
    component: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
    path: "/",
    exact: true,
  },
];

export default routes;
