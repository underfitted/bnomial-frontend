import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PlaceholderPage from "./components/PlaceholderPage";
import PageLayout from "./components/PageLayout";

import { pathForPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout/>}>
          <Route path={pathForPage('home')} element={<Home/>} />
          <Route path={pathForPage('leaderboard')} element={<PlaceholderPage title='Leaderboard' />} />
          <Route path={pathForPage('yesterdays')} element={<PlaceholderPage title='Yesterdays' />} />
          <Route path={pathForPage('how_it_works')} element={<PlaceholderPage title='How it works' />} />
          <Route path={pathForPage('contribute')} element={<PlaceholderPage title='Contribute' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
