import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Products from "./ProductList";
import Categories from "./Categories";
import basicOps from "./utility/basicOps";
import { usePaginationContext } from "./contexts/PaginationContext";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [sortDir, setSortDir] = useState(0);
  const [categories, setCategories] = useState([]);
  const [currCategory, setCurrCatergory] = useState("All Categories");

  const {pageNum, pageSize, setPageNum, setPageSize} = usePaginationContext()
  

  useEffect(() => {
    (async function () {
      const response = await fetch("https://fakestoreapi.com/products/");
      const productData = await response.json();
      setProducts(productData);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoriesData = await response.json();
      setCategories(categoriesData);
    })();
  }, []);

  const obj = basicOps(
    products,
    searchTerm,
    sortDir,
    currCategory,
    pageNum,
    pageSize
  );
  const { filteredSortedGroupedArr, totalPages } = obj;

  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sort_wrapper">
          <input
            className="search_input"
            type="text"
            value={searchTerm}
            onChange={(i) => {
              setSearchTerm(i.target.value);
              setPageNum(1)
            }}
          />
          <div className="icons_container">
            <FaArrowAltCircleUp
              onClick={() => {
                setSortDir(1);
                setPageNum(1);
              }}
              style={{
                marginRight: "1rem",
                color: "white",
                fontSize: "1.5rem",
              }}
            />
            <FaArrowAltCircleDown
              onClick={() => {
                setSortDir(-1);
                setPageNum(1);
              }}
              style={{ color: "white", fontSize: "1.5rem" }}
            />
          </div>
        </div>

        <div className="categories_wrapper">
          <Categories
            setCurrCatergory={setCurrCatergory}
            categories={categories}
          ></Categories>
        </div>
      </header>
      <main className="product_wrapper">
        <Products
          filteredSortedGroupedArr={filteredSortedGroupedArr}
        ></Products>
      </main>

      <div className="pagination">
        <button
          onClick={() => {
            if (pageNum != 1) {
              return setPageNum((currPageNum) => currPageNum - 1);
            }
          }}
          disabled={pageNum == 1 ? true : false}
        >
          <MdKeyboardArrowLeft />
        </button>
        <div>{pageNum}</div>
        <button
          onClick={() => {
            if (pageNum != totalPages) {
              return setPageNum((currPageNum) => currPageNum + 1);
            }
          }}
          disabled={pageNum == totalPages ? true : false}
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </>
  );
}

export default Home;
