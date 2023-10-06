function createProductsListPage(products) {
  // console.log(products)
  let html = "";
  html += `<section>`;
  products.forEach((product) => {
    html += `
            <ul>
                <li><img src="/images/products/${product.image}" alt=""></li>
                <li><a href="/productos/${product._id}">${product.name}</a></li>
                <li>${product.description}</li>
                <li>${product.size}</li>
                <li>${product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</li>
                <li>${product.link}</li>
            </ul>
        `;
  });
  html += `</section>`;
  return html;
}

function createDetailedPage(product) {
  let html = "";
  if (product) {
    html += `
        <section>
            <h1>${product.name}</h1>
        </section>
    `;
  }
  return html;
}

export { createProductsListPage, createDetailedPage };
