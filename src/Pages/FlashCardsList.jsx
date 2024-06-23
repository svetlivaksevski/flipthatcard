import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function FlashCardsList() {
  const [back, setBack] = useState("");
  const [front, setFront] = useState("");
  const [newFlashCards, setNewFlashCards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewFlashCards([...newFlashCards, { backCard: back, frontCard: front }]);
  };

  console.log(newFlashCards);
  return (
    <>
      <Header />
      <div className="addflashcards">
        <h2>Create Flashcards:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="front">Front:</label>
          <input
            type="text"
            onChange={(event) => setFront(event.target.value)}
          />
          <label htmlFor="back">Back:</label>
          <input
            type="text"
            onChange={(event) => setBack(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {newFlashCards.map((card, index) => (
          <h1 key={index}>
            {card.frontCard}, {card.backCard}
          </h1>
        ))}
      </div>
      <Footer />
    </>
  );
}
