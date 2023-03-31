import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("../pages/Home/Home"));
const Success = lazy(() => import("../pages/Success/Success"));
const Failure = lazy(() => import("../pages/Failure/Failure"));
const Pending = lazy(() => import("../pages/Pending/Pending"));
const NutritionTools = lazy(() =>
  import("../pages/NutritionTools/NutritionTools")
);
const Recetaries = lazy(() => import("../pages/Recetaries/Recetaries"));
const AboutMe = lazy(() => import("../pages/AboutMe/AboutMe"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Spinner = lazy(() => import("../components/Spinner/Spinner"));
const Tools = lazy(() => import("../pages/Tools/Tools"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Panel = lazy(() => import("../pages/Panel/Panel"));
const Detail = lazy(() => import("../pages/Detail/Detail"));

export default function AppRoute() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
            <Route path="/pending" element={<Pending />} />
            <Route
              path="/herramientas-de-nutricion"
              element={<NutritionTools />}
            />
            <Route path="/recetarios" element={<Recetaries />} />
            <Route path="/sobre-mi" element={<AboutMe />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/herramientas-de-nutricion/:title"
              element={<Tools />}
            />
            <Route
              path="/herramientas-de-nutricion/:title/detail"
              element={<Detail />}
            />
            <Route path="/adminGraciela-adminFernandez" element={<Panel />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1111}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Suspense>
  );
}
