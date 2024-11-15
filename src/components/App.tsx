import { useEffect, useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header, { HeaderTop } from './Header';
import SearchForm from './SearchForm';
import Logo from './Logo';
import BookmarksButton from './BookmarksButton';
import Sidebar, { SidebarTop } from './Sidebar';
import JobItemContent from './JobItemContent';
import PaginationControls from './PaginationControls';
import JobList from './JobList';
import SortingControls from './SortingControls';
import ResultsCount from './ResultsCount';

function App() {
  const [jobItems, setJobItems] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      setJobItems(data.jobItems);
      setIsLoading(false);
    };
    fetchData();
  }, [searchText]);
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm setSearchText={setSearchText} searchText={searchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItems} isLoading={isLoading} />
          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
