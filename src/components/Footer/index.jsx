import { Link } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";
import { SlList } from "react-icons/sl";

export default function Footer() {
  return (
    <ul className="nav">
      <li className="buttons">
        <Link to="/">
          <SlHome />
          Home
        </Link>
      </li>
      <li className="buttons">
        <Link to="/AddCard">
          <SlPlus />
          Add a new flashcard
        </Link>
      </li>
      <li className="buttons">
        <Link to="/FlashCardsList">
          <SlList />
          All flash cards
        </Link>
      </li>
    </ul>
  );
}
