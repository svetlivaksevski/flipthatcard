import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AddCard() {
  return (
    <>
      <Header />
      <form>
        <label>Front side text:</label>
        <input type="text" />
        <label>Back side card text:</label>
        <input type="text" />
      </form>
      <Footer />
    </>
  );
}
