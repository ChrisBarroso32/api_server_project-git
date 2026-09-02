const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = 3000;

app.use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

app.listen(port, () => {
    console.log(`Aplicación de ejemplo en http://localhost${port}`)
})