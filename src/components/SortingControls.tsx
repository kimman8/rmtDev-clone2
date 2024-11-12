export default function SortingControls() {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button className="sorting__button sorting__button--relevant">
        Relevant
      </button>

      <button className="sorting__button sorting__button--recent">
        Recent
      </button>
    </section>
  );
}
