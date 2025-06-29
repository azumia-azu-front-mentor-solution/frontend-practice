import React, { useState } from "react";
import useArrayRefs from "@hooks/useArrayRefs";
import "./Pagination.module.sass";

type PaginationProps = {
  items: PaginationItem[];
  defaultPage?: number;
};

type PaginationItem = {
  key: string;
  content: React.ReactElement;
};

export default function Pagination({ items, defaultPage }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(defaultPage || 0);
  const [refs, setRefs] = useArrayRefs<HTMLLIElement>();

  function handlePrevClick() {
    setCurrentPage((prev) => {
      let newPage = prev - 1;
      if (newPage < 0) {
        newPage = items.length - 1; // Wrap around to the last page
      }
      return newPage;
    });
  }

  function handleNextClick() {
    setCurrentPage((prev) => {
      let newPage = prev + 1;
      if (newPage >= items.length) {
        newPage = 0; // Wrap around to the first page
      }
      refs.current[newPage]?.scrollIntoView({
        behavior: "smooth",
      });
      return newPage;
    });
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button pagination-prev"
        onClick={handlePrevClick}
      >
        Previous
      </button>
      <div>
        <ul className="pagination-items">
            {items.map((item, index) => (
                <li
                key={item.key}
                className={`pagination-item ${
                    index === currentPage ? "active" : ""
                }`}
                ref={setRefs(index)}>
                {item.content}
                </li>
            ))}
        </ul>
        <ul className="pagination-dots">
          {items.map((item, index) => (
            <li
              key={item.key}
              className={`pagination-dot ${
                index === currentPage ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="pagination-button pagination-next"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}
