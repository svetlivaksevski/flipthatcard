import { germanFlashcards } from "./FlashcardsData";
import Cards from "../Cards";

export default function CardsList() {
  return (
    <div className="container-flashcards">
      {germanFlashcards.map((flashcard) => (
        <Cards key={flashcard.id} flashcard={flashcard} />
      ))}
    </div>
  );
}
