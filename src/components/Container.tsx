import JobItemContent from './JobItemContent';
import Sidebar from './Sidebar';

export default function Container() {
  return (
    <div className="container">
      <Sidebar />
      <JobItemContent />
    </div>
  );
}
