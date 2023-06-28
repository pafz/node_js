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

/* 
Crear endpoint para poder eliminar un producto
Crear filtro por precio de producto
Crear filtro que muestre los productos con un precio entre 50 y 250.
Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto
Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto
 */

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

//Crear endpoint para poder actualizar un producto
