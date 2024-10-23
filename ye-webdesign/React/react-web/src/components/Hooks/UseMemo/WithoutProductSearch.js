import React, { useState } from "react";

// dummy data
const products = [
  {
    id: 1,
    name: "Laptop",
  },
  {
    id: 2,
    name: "Smart phones",
  },
  {
    id: 3,
    name: "Tablet",
  },
  {
    id: 4,
    name: "Smartwatch",
  },
  {
    id: 5,
    name: "Headphone",
  },
];
function WithoutProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProducts =
    products?.length > 0 &&
    products.filter((product) => {
      console.log("Filtering products");
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <ul>
        {filterProducts?.length > 0 &&
          filterProducts.map((product, index) => {
            return (
              <React.Fragment key={product.id}>
                <li>{product.name}</li>
              </React.Fragment>
            );
          })}
      </ul>
    </>
  );
}

export default WithoutProductSearch;
