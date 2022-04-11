import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./contexts";
import { Home, SingleCycle } from "./pages";
import { Navbar } from "./components";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={`App theme-${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cycles/:cycleID" element={<SingleCycle />} />
      </Routes>
    </div>
  );
}
