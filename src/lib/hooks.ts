import { useEffect, useState } from 'react';

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const jobItemsSliced = jobItems.slice(0, 7);
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
  return { jobItemsSliced, isLoading };
}
