import SeekerHeader from "../../../Components/seeker/header/header";
import SeekerSearch from "../../../Components/seeker/search/search";
import "./rec.css";

export default function SeekerReccomdendations() {
  function Container() {
    return <main className="seeker">This is the reccomendations</main>;
  }
  return (
    <>
      <SeekerHeader />
      <SeekerSearch />
      <Container />
    </>
  );
}
