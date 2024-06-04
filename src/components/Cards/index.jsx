import { useState } from "react";

export default function Cards({ flashcard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div onClick={() => setFlip(!flip)}>
      {flip ? flashcard.german : flashcard.english}
    </div>
  );
}
