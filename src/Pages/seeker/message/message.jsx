import "./message.css";
import SeekerHeader from "../../../Components/seeker/header/header";

export default function SeekerMessage() {
  function Container() {
    return (
      <main className="seeker">
        <section className="seeker-resumes">
          <aside id="seeker-message-1"></aside>

          <div id="seeker-message-2"></div>

          <aside id="seeker-message-3"></aside>
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
