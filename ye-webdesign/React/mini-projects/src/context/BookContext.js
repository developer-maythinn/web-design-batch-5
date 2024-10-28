import { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book 1 title",
      author: "Book 1 Author",
    },
    {
      id: 2,
      title: "Book 2 title",
      author: "Book 2 Author",
    },
    {
      id: 3,
      title: "Book 3 title",
      author: "Book 3 Author",
    },
  ]);

  const addBook = (title, author) => {
    setBooks([
      ...books,
      {
        id: Date.now(),
        title,
        author,
      },
    ]);
  };
  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
