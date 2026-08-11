import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { NoteDetailPage } from "./pages/NoteDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const RedirectFrom404: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");

    if (!redirect) {
      return;
    }

    const cleaned = redirect.startsWith("/islam-portofolio")
      ? redirect.slice("/islam-portofolio".length)
      : redirect;

    navigate(cleaned || "/", { replace: true });
  }, [location.search, navigate]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter basename="/islam-portofolio">
      <RedirectFrom404 />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/notes/:slug" element={<NoteDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
