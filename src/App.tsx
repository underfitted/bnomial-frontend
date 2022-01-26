import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlaceholderPage from "./components/PlaceholderPage";
import PageLayout from "./components/PageLayout";
import Quiz from "./components/Quiz";

import { ApiContext, DefaultApiClient } from "./api";
import { pathForPage } from "./pages";

function App() {
  return (
    <ApiContext.Provider value={DefaultApiClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
          <Route path={pathForPage('home')} element={<HomePage/>} />
          <Route path={pathForPage('quiz')} element={<Quiz />} />
          <Route path={pathForPage('how_it_works')} element={<PlaceholderPage title='How it works' />} />
          <Route path={pathForPage('leaderboard')} element={<PlaceholderPage title='Leaderboard' />} />
          <Route path={pathForPage('practice')} element={<PlaceholderPage title='Practice' />} />
          <Route path={pathForPage('about')} element={<PlaceholderPage title='About' />} />
          <Route path={pathForPage('login')} element={<PlaceholderPage title='Login' />} />
          <Route path={pathForPage('signup')} element={<PlaceholderPage title='Signup' />} />
          <Route path={pathForPage('dashboard')} element={<PlaceholderPage title='User Dashboard' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  );
}

export default App;
