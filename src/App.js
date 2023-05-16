import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Root from "./Pages/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ExerciseDetails from "./Pages/ExerciseDetails";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="exercise/:id" element={<ExerciseDetails />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
