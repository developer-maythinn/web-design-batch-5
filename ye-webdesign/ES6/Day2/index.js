let products = document.querySelector(".products");

function renderProducts(getProducts) {
  products.innerHTML = getProducts
    .map((product) => `<p>${product.title}</p>`)
    .join("");
}
async function fetchProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await apiResponse.json();
    console.log(result);
    console.log(result?.products?.length > 0);
    if (result?.products?.length > 0) {
      renderProducts(result?.products);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchProducts();
