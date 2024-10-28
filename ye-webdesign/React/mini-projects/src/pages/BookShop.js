import React, { useContext } from "react";
import BookContextProvider from "../context/BookContext";
import BookList from "../components/BookList";

function BookShop() {
  return (
    <>
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    </>
  );
}

export default BookShop;
