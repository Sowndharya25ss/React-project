import React from "react";
import { usePaginationContext } from "./contexts/PaginationContext";

function Categories(props) {
  const { categories, setCurrCatergory } = props;
  const {setPageNum} = usePaginationContext()
  return (
    <>
      <button
        className="category_option"
        onClick={() => {
          setCurrCatergory("All Categories");
          setPageNum(1);
        }}
      >
        All Categories
      </button>
      {categories.map((i) => {
        return (
          <button
            onClick={() => {
              setCurrCatergory(i);
            }}
            className="category_option"
          >
            {i}
          </button>
        );
      })}
    </>
  );
}

export default Categories;
