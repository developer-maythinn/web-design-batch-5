import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";
import BookDetail from "./BookDetail";

function BookList() {
  const themeValues = useContext(ThemeContext);
  const { isLightMode, light, dark, toggleTheme } = themeValues;
  const theme = isLightMode ? light : dark;

  const { books, addBook } = useContext(BookContext);
  return (
    <>
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          {books?.length > 0 ? (
            books.map((book) => {
              return (
                <React.Fragment key={book.id}>
                  <BookDetail book={book} theme={theme} />
                </React.Fragment>
              );
            })
          ) : (
            <h1>There is no book.</h1>
          )}
        </ul>
      </div>
    </>
  );
}

export default BookList;
