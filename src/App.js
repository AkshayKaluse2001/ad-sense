import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { CREATE_AD, DASHBOARD, MEDIA_AD, TEXT_AD } from "./constants/routes";
import CreateAd from "./pages/CreateAd";
import Dashboard from "./pages/Dashboard";
import MediaAd from "./pages/MediaAd";
import TextAd from "./pages/TextAd";

function App() {
  return (
    <div className="App bg-light">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={DASHBOARD} element={<Dashboard />} />
          <Route path={CREATE_AD} element={<CreateAd />} />
          <Route path={TEXT_AD} element={<TextAd />} />
          <Route path={MEDIA_AD} element={<MediaAd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
