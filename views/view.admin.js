function createUsersListPage(users, products) {
  // console.log(users)
  let html = "";
  html += `<section>`;
  users.forEach((user) => {
    html += `
            <ul>
                <li>${user.photo}</li>
                <li><a href="/users/${user._id}">${user.name}</a></li>
                <li>${user.description}</li>
                <li>${user.role}</li>
                <ul>
                ${user.products.map(product => `<li>${product}</li>`)}
                </ul>
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

export { createUsersListPage, createDetailedPage };
