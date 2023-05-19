import SeekerHeader from "../../../Components/seeker/header/header";
import "./home.css";

export default function SeekerHome() {
  function Home() {
    return <main className="seeker"></main>;
  }

  return (
    <>
      <SeekerHeader />
      <Home />
    </>
  );
}
