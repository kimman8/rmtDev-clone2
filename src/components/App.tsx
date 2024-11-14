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
  const [searchText, setSearchText] = useState('test');
  useEffect(() => {
    if (!searchText) return;
    const fetchData = async () => {
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      setJobItems(data.jobItems);
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
        <SearchForm setJobItems={setJobItems} searchText={searchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItems} />
          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
