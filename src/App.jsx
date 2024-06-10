import "./App.css";
import AddCard from "./Pages/AddCard";
import Home from "./Pages/Home";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCard" element={<AddCard />} />
        </Routes>
      </Router>
    </>
  );
}
