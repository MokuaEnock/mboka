import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <p>&copy; Mboka Inc</p>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms</Link>
    </footer>
  );
}
