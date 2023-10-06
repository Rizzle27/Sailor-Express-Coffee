import {  TITLES_BY_TYPES } from '../constants/constants.js';

function createProductsListPage(products, type) {
  // console.log(products)
  let html = "";
  html += `
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../../index.css">
    </head>
  `
  html += `<body>`
  html += `<section id="intro-section" class="pb-5">
  <nav class="d-flex justify-content-around align-items-center py-4">
      <div>
          <h1 class="fs-4"><a href="#" class="text-light text-decoration-none">Sailor's Coffee</a></h1>
      </div>
      <div>
          <ul class="d-flex gap-5 m-0 list-unstyled">
              <li><a href="/" class="text-light text-decoration-none">Inicio</a></li>
              <li><a href="/productos/type/cafe" class="text-light text-decoration-none">Cafés</a></li>
              <li><a href="/productos/type/milkshake" class="text-light text-decoration-none">Milkshakes</a></li>
              <li><a href="/productos/type/torta" class="text-light text-decoration-none">Tortas</a></li>
              <li><a href="#" class="text-light text-decoration-none">Combos</a></li>
              <li><a href="#" class="text-light text-decoration-none">Bebidas</a></li>
              <li><a href="/admin/dashboard" class="text-light text-decoration-none">Admin</a></li>
          </ul>
      </div>
  </nav>
  <section class="d-flex flex-column justify-content-center text-center text-light py-5">
      <h2 style="font-size: 5rem;">${TITLES_BY_TYPES.find(item => item.type === type).title}</h2>
      <div class="w-75 my-4 mx-auto">
          <p>¡Bienvenido a nuestro rincón del sabor en la web! En Sailor's Coffee, estamos apasionados por ofrecer una experiencia culinaria única que deleitará tus sentidos y te transportará a un mundo de sabores irresistibles. Nuestra tienda es un paraíso para los amantes del café, los entusiastas de los milkshakes y los adoradores de las tortas. Si eres un verdadero apasionado de las delicias gastronómicas, ¡has llegado al lugar adecuado!</p>
      </div>
      <a href="#" class="d-inline-block px-4 py-1 mx-auto text-light text-decoration-none fs-5 border border-1 border-light rounded-5">Productos Destacados</a>
  </section>
</section>`
  html += `<section class="d-flex flex-wrap gap-3 justify-content-center py-5">`;
  products.forEach((product) => {
    html += `
            <div class="card border-0" style="width: 19rem">
                <img class="card-img-top" src="/images/products/${product.image}" alt="">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title">${product.name}</h5>
                    <p>${product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
                  </div>
                  <p>${product.description}</p>
                  <p>${product.size}</p>
                </div>
                <div class="d-flex justify-content-center">
                  <a class="w-100 py-1 text-dark rounded-5 text-center text-decoration-none mx-auto" style="background-color: E1D7D0;;" href="/productos/${product._id}">Ver Más Detalles</a>
                </div>
            </div>
        `;
  });
  html += `</section>`;
  html += `</body>`;
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
