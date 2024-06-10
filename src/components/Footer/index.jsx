import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/AddCard">Add a new flashcard</Link>
      <h3>Menu</h3>
    </>
  );
}
