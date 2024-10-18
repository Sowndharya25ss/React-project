export default function basicOps(
  products,
  searchTerm,
  sortDir,
  currCategory,
  pageNum,
  pageSize
) {
  let filteredData = products;
  if (searchTerm != "") {
    filteredData = products.filter((product) => {
      let lowerSearchTerm = searchTerm.toLowerCase();
      let lowerTitle = product.title.toLowerCase();
      return lowerTitle.includes(lowerSearchTerm);
    });
  }

  let filteredSortedArr = filteredData;
  if (sortDir != 0) {
    if (sortDir == 1) {
      filteredSortedArr = filteredSortedArr.sort(increase);
    } else {
      filteredSortedArr = filteredSortedArr.sort(decrease);
    }
  }

  let filteredSortedGroupedArr = filteredSortedArr;
  if (currCategory != "All Categories") {
    filteredSortedGroupedArr = filteredSortedGroupedArr.filter((i) => {
      return i.category == currCategory;
    });
  }

  let totalPages = Math.ceil(filteredSortedGroupedArr.length / pageSize);

  let strtI = (pageNum - 1) * pageSize;
  let endI = strtI + pageSize;
  filteredSortedGroupedArr = filteredSortedGroupedArr.slice(strtI, endI);

  return { filteredSortedGroupedArr, totalPages };
}

function increase(prod1, prod2) {
  if (prod1.price > prod2.price) {
    return 1;
  } else {
    return -1;
  }
}

function decrease(prod1, prod2) {
  if (prod1.price < prod2.price) {
    return 1;
  } else {
    return -1;
  }
}
