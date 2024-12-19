import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AdmitCardDownload from "./components/AdmitCardDownload";
import ResultDownload from "./components/ResultDownload";
import StudyMaterialDownload from "./components/StudyMaterialDownload";
import SyllabusDownload from "./components/SyllabusDownload";
import ProfileCard from "./components/ProfileCard";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to={"profile"} replace />} />
          <Route path="profile" element={<ProfileCard />} />
          <Route path="result" element={<ResultDownload />} />
          <Route path="syllabus" element={<SyllabusDownload />} />
          <Route path="study-material" element={<StudyMaterialDownload />} />
          <Route path="admit" element={<AdmitCardDownload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
