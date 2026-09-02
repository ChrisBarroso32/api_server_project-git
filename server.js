const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = 3000;

// Middleware para mostrar JSON bodies
app.use(express.json())

// Almacenamiento en memoria
let items = [{id: 1, name: "Item 1"}];

// CRUD endpoints

// GET - Read
app.get('/items', (req, res) => {
    res.json(items);
});

// POST - Create
app.post('/items', (req, res) => {
    const item = {
        id: items.length + 1,
        name: req.body.name,
    };

    items.push(item);
    res.status(201).send(item);
});

// PUT - Update
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));

    if(!item) return res.status(404).send('item no encontrado.');

    item.name = req.body.name;
    res.send(item);
});

// DELETE
app.delete('/items/:id', (req, req) => {
    items = items.filter(i => i.id !== parseInt(req.body.id));
    res.status(204).send();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Aplicación de ejemplo por medio de http://localhost:${port}`)
})