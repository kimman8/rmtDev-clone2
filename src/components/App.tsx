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
import { useJobItems } from '../lib/hooks';

function App() {
  const [searchText, setSearchText] = useState([]);
  const [debouncedSearchText, setDebouncedSearchText] = useState('');
  const { jobItemsSliced, isLoading, totalNumberOfResults } =
    useJobItems(debouncedSearchText);
  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedSearchText(searchText), 1500);
    return () => clearTimeout(timerId);
  }, [searchText]);
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResults={totalNumberOfResults} />
            <SortingControls />
          </SidebarTop>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <PaginationControls />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
