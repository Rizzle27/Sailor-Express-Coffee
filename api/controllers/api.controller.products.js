import * as service from "../../services/service.products.js";
import * as view from "../../views/view.products.js"

const getProducts = (req, res) => {
  service.getProducts()
    .then((products) => {
      res.send(view.createProductsListPage(products))
    });
};

const getProductsById = (req, res) => {
  const id = req.params.id
  service.getProductsById(id).then((product) => {
    if (product) {
      res.send(view.createDetailedPage(product))
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  });
};

const createProduct = (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    size: req.body.size,
    link: req.body.link,
    image: req.body.image
  };

  service.createProduct(product)
    .then((newProduct) => {
      res.status(201).json(newProduct)
    })
    .catch(res.status(503).json({error: "Producto no creado"}))
}

export { getProducts, getProductsById, createProduct };
