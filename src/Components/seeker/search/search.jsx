import "./search.css";

export default function SeekerSearch() {
  // Define the categories of tech jobs
  const categories = [
    { id: 2, name: "Data Science" },
    { id: 3, name: "Machine Learning" },
    { id: 4, name: "Web Development" },
  ];

  return (
    <section className="seeker-search">
      <div id="seeker-search-cont">
        <form id="seeker-search-form">
          <input type="text" placeholder="Search for Jobs ..." />
          <button type="submit"></button>
        </form>

        <span className="seeker-search-conts">
          <button>All</button>
          <button>Reccomendations</button>
          {categories.map((category) => (
            <button key={category.id}>{category.name}</button>
          ))}
        </span>
      </div>
    </section>
  );
}
