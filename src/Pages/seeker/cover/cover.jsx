import "./cover.css";
import SeekerHeader from "../../../Components/seeker/header/header";

export default function SeekerCover() {
  function Container() {
    return (
      <main className="seeker">
        <section className="seeker-resumes">
          <aside id="seeker-resumes-1"></aside>

          <div id="seeker-resumes-2"></div>

          <aside id="seeker-resumes-3"></aside>
        </section>
      </main>
    );
  }

  return (
    <>
      <SeekerHeader />
      <Container />
    </>
  );
}
