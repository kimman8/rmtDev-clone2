import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';

export default function Container({ jobItems }) {
  return (
    <div className="container">
      <Sidebar jobItems={jobItems} />
      <JobItemContent />
    </div>
  );
}
