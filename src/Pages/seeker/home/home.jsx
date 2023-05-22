import SeekerHeader from "../../../Components/seeker/header/header";
import SeekerSearch from "../../../Components/seeker/search/search";
import "./home.css";

export default function SeekerHome() {
  function Home() {
    return (
      <main className="seeker">
        <section className="seeker-home">
          <div></div>
        </section>
      </main>
    );
  }

  return (
    <>
      <SeekerHeader />
      <SeekerSearch />
      <Home />
    </>
  );
}
