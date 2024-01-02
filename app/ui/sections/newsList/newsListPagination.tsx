// PaginationComponent.js (Client Component)
"use client";
// lib
import { fetchNewsList } from "@/app/lib/cms/fetchNewsList";
import React, { useState, useEffect } from "react";

export const PaginationComponent = ({ initialData }) => {
  const fetchPageData = async (pageNumber: number) => {
    return await fetchNewsList(pageNumber);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetchPageData(currentPage);
        setPageData(newData);
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };

    if (currentPage !== 1) {
      fetchData();
    }
  }, [currentPage, fetchPageData]);

  // Render pagination controls
  return (
    <div>
      {/* Display the data */}
      {pageData &&
        pageData.map((item, index) => (
          <div key={index}>{/* Render your data item here */}</div>
        ))}

      {/* Pagination Controls */}
      <div>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default PaginationComponent;
