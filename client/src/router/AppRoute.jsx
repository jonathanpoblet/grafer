import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Home = lazy(() => import("../pages/Home/Home"));
const NutritionTools = lazy(() =>
  import("../pages/NutritionTools/NutritionTools")
);
const Recetaries = lazy(() => import("../pages/Recetaries/Recetaries"));
const AboutMe = lazy(() => import("../pages/AboutMe/AboutMe"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Spinner = lazy(() => import("../components/Spinner/Spinner"));

export default function AppRoute() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/herramientas-de-nutricion"
              element={<NutritionTools />}
            />
            <Route path="/recetarios" element={<Recetaries />} />
            <Route path="/sobre-mi" element={<AboutMe />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}
