import SeekerHeader from "../../../Components/seeker/header/header";
import "./interviews.css";

export default function SeekerInterviews() {
  function Container() {
    return (
      <main className="seeker">
        <section className="seeker-interview">
          This is the seeker interview
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
