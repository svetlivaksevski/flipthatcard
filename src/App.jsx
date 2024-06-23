import "./App.css";
import AddCard from "./Pages/AddCard";
import FlashCardsList from "./Pages/FlashCardsList";
import Home from "./Pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCard" element={<AddCard />} />
          <Route path="/FlashCardsList" element={<FlashCardsList />} />
        </Routes>
      </Router>
    </main>
  );
}
