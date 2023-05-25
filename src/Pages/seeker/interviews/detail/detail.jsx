import "./detail.css";
import CodeEditor from "../Editor/editor";

export default function SeekerInterviewDetail() {
  return (
    <main className="interview-detail">
      <section id="seeker-detail-1"></section>
      <section id="seeker-detail-2"></section>
      <section id="seeker-detail-3">
        <div id="seeker-detail-3-header">
          <h3>Smallest distance</h3>
          <button>Submit</button>
        </div>
        <CodeEditor />
      </section>
    </main>
  );
}
