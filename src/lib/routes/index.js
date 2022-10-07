import { lazy, Suspense } from "react";
import Loader from "../components/Loader/index.js";

// All Imports
const Home = lazy(() => import("../pages/Home"));
const Joke = lazy(() => import("../pages/Joke"));

// All Routes
const routes = [
  {
    name: "home",
    component: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
    path: "/",
  },
  {
    name: "joke",
    component: (
      <Suspense fallback={<Loader />}>
        <Joke />
      </Suspense>
    ),
    path: "/:id",
  },
];

export default routes;
