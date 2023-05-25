import "./search.css";

export default function SeekerSearch() {
  return (
    <section className="seeker-search">
      <div id="seeker-search-cont">

        <span className="seeker-search-conts">
          <button>All</button>
          <button>Data Science</button>
          <button>Machine Learning</button>
        </span>

        <form id="seeker-search-form">
          <input type="text" placeholder="Search for Jobs ..." />
          <button type="submit"></button>
        </form>
      </div>
    </section>
  );
}
