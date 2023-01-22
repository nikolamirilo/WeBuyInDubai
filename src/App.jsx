import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, Loader, ScrollToTop } from "./components";
import { useGlobalState } from "./context/GlobalContext";
import { useLoader } from "./hooks/useLoader";

//pages
const Home = React.lazy(() => import("./pages/Home/Home"));
const LuxuryWatches = React.lazy(() => import("./pages/LuxuryWatches/LuxuryWatches"));
const Error = React.lazy(() => import("./pages/Error/Error"));

const App = () => {
  const { loading, setLoading } = useGlobalState();
  useLoader();
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback="">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/luxury-watches" element={<LuxuryWatches />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </ScrollToTop>
        </Suspense>
      )}
    </Layout>
  );
};

export default App;
