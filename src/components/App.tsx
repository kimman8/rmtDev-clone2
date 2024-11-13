import { useEffect, useState } from 'react';
import Background from './Background';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';

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
      <Header setJobItems={setJobItems} searchText={searchText} />
      <Container jobItems={jobItems} />
      <Footer />
    </>
  );
}

export default App;
