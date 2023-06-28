const express = require('express');
const app = express();
app.listen('3000', () => {
  console.log('Server started on port 3000');
});

//middleware
app.use(express.json());

const products = [
  { id: 1, name: 'Taza de Harry Potter', price: 300 },
  { id: 2, name: 'FIFA 22 PS5', price: 1000 },
  { id: 3, name: 'Figura Goku Super Saiyan', price: 100 },
  { id: 4, name: 'Zelda Breath of the Wild', price: 200 },
  { id: 5, name: 'Skin Valorant', price: 120 },
  { id: 6, name: 'Taza de Star Wars', price: 220 },
];

app.get('/product', (req, res) => {
  res.send({ msg: 'Here you are the products: ', products: members });
});

//Crear endpoint para poder crear un producto nuevo
app.post('/product', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  if (!req.body.name || !req.body.price) {
    res.status(400).send({ msg: 'Please fill all inputs' });
  } else {
    products.push(newProduct);
    res.status(201).send({ products });
  }
});

//Crear endpoint para poder actualizar un producto
app.put('/product/id/:id', (req, res) => {
  //console.log(req.params.id); //comprueba en la consola que se imprime el id pasado en postman localhost:3000/product/id/1
  const found = products.some(product => product.id == req.params.id); //para saber si existe lo que busco
  if (found) {
    products.forEach(product => {
      if (product.id == req.params.id) {
        (product.name = req.body.name ? req.body.name : product.name),
          (product.price = req.body.price ? req.body.price : product.price);
        res.send(product);
      }
    });
  } else {
    //si el miembro que buscamos no existe devolvemos 404
    res.status(404).send({ msg: `Member with id ${req.params.id} not found` });
  }
});

//Crear endpoint para poder eliminar un producto
app.delete('/product/id/:id', (req, res) => {
  const found = products.some(product => product.id == req.params.id); //para saber si existe lo que busco
  if (found) {
    //eliminar un product
    res.send(products.filter(product => product.id != req.params.id));
  } else {
    //si el miembro que buscamos no existe devovlemos un notfound
    res.status(404).send({ msg: `Product with id ${req.params.id} not found` });
  }
});

//Crear filtro por precio de producto
app.get('/product/price/:price', (req, res) => {
  const found = products.some(product => product.price == req.params.price);
  if (found) {
    products.forEach(product => {
      res.send(`Product's price ${req.params.price}, name ${product.name}`);
    });
  } else {
    res
      .status(404)
      .send({ msg: `Product with price ${req.params.price} not found` });
  }
});

//Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto
//postman url white spaces %20 FIFA%2022%20PS5
app.get('/product/name/:name', (req, res) => {
  const found = products.some(product => product.name == req.params.name);
  if (found) {
    products.forEach(product => {
      res.send(
        `Product's name ${req.params.name}, id ${product.id}, price ${product.price}`
      );
    });
  } else {
    res
      .status(404)
      .send({ msg: `Product with name ${req.params.name} not found` });
  }
});

//TODO:mal Crear filtro que muestre los productos con un precio entre 50 y 250.
//path changed
app.get('/product/price-filter', (req, res) => {
  //const found = products.some(product => product.price == req.params.price);
  //   if (found) {
  products.forEach(product => {
    if (product.price > 50 && product.price > 250) {
      res.send(
        `Product's price ${req.params.price}, name ${product.name}, id ${roduct.id}`
      );
    }
  });
  //   } else {
  //     res
  //       .status(404)
  //       .send({ msg: `Product with price ${req.params.price} not found` });
  //   }
});

//Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto
//path changed
app.get('/product-filter/id/:id', (req, res) => {
  const found = products.some(product => product.id == req.params.id);
  if (found) {
    products.forEach(product => {
      res.send(
        `Product's id ${req.params.id}, name ${product.name}, price ${product.price}`
      );
    });
  } else {
    res.status(404).send({ msg: `Product with id ${req.params.id} not found` });
  }
});
