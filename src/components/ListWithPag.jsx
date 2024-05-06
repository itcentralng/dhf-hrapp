import React, { useState } from "react";
import Pagination from "./Pagination";
import usersList from "../data/usersList";
import UserListView from "./UserListView";
const ListWithPagination = () => {
  // Sample list of items
  const [itemList, setItemList] = useState(usersList);

  const [currentPage, setCurrentPage] = useState(1); // Default current page
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page

  const totalItems = itemList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = itemList.slice(startIndex, endIndex);

  return (
    <div>
      {/* Display the list of current items */}
      <UserListView usersList={currentItems} />
      {/* Pass pagination props */}
      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

export default ListWithPagination;
