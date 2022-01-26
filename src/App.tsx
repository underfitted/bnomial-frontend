import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageLayout from "./components/PageLayout";

import { pathForPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout/>}>
          <Route path={pathForPage('home')} element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
