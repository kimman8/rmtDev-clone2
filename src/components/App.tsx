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
import { useJobItems, useActiveId } from '../lib/hooks';

function App() {
  const [searchText, setSearchText] = useState([]);
  const [jobItems, isLoading] = useJobItems(searchText);
  const activeId = useActiveId();
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
