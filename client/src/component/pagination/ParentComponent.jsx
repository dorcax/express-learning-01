import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const ParentComponent = () => {
  const [staticData, setStaticData] = useState([
    { id: 1, name: 'Static Item 1' },
    { id: 2, name: 'Static Item 2' },
    { id: 3, name: 'Static Item 3' },
    { id: 4, name: 'Static Item 4' },
    { id: 5, name: 'Static Item 5' },
  ]);

  const [dynamicData, setDynamicData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change as needed

  useEffect(() => {
    fetchDynamicData();
  }, [currentPage]); // Fetch dynamic data when currentPage changes

  const fetchDynamicData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`);
      const result = await response.json();
      setDynamicData(result);
      // Assuming a fixed total of 100 posts for this example
      setTotalPages(Math.ceil(100 / itemsPerPage));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderStaticItems = () => {
    return staticData.map((item) => (
      <li key={item.id} className="py-2">
        {item.name}
      </li>
    ));
  };

  const renderDynamicItems = () => {
    return dynamicData.map((item) => (
      <li key={item.id} className="py-2">
        {item.title}
      </li>
    ));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mt-8 mb-4">Combined Pagination Example</h1>
      <h2 className="text-lg font-bold mb-2">Static Items:</h2>
      <ul>{renderStaticItems()}</ul>
      <h2 className="text-lg font-bold mt-8 mb-2">Dynamic Items:</h2>
      <ul>{renderDynamicItems()}</ul>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default ParentComponent;
