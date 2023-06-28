const express = require('express');
const app = express();
app.listen('3000', () => {
  console.log('Server started on port 3000');
});

//Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('Welcome!');
});

//Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos
app.get('/products', (req, res) => {
  res.send('products` list');
});

//Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post('/products', (req, res) => {
  res.send('create a product');
});

//Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put('/products', (req, res) => {
  res.send('update a product');
});

//Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete('/products', (req, res) => {
  res.send('delete a product');
});

//Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/users', (req, res) => {
  res.send(`user's list`);
});
