export default function ResultsCount({
  totalNumberOfResults,
}: {
  totalNumberOfResults: number;
}) {
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfResults}</span> results
    </p>
  );
}
