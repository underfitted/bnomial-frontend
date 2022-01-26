import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlaceholderPage from "./components/PlaceholderPage";
import PageLayout from "./components/PageLayout";

import { ApiContext, DefaultApiClient } from "./api";
import { pathForPage } from "./pages";

function App() {
  return (
    <ApiContext.Provider value={DefaultApiClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path={pathForPage("home")} element={<HomePage />} />
            <Route
              path={pathForPage("leaderboard")}
              element={<PlaceholderPage title="Leaderboard" />}
            />
            <Route
              path={pathForPage("yesterdays")}
              element={<PlaceholderPage title="Yesterdays" />}
            />
            <Route
              path={pathForPage("how_it_works")}
              element={<PlaceholderPage title="How it works" />}
            />
            <Route
              path={pathForPage("contribute")}
              element={<PlaceholderPage title="Contribute" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  );
}

export default App;
