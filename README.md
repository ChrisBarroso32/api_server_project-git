# API de Ejemplo - CRUD con Express y Swagger

## Descripción del proyecto
Proyecto de ejemplo que consiste en un servidor API RESTful desarrollado con `Node.js` y `Express`. Implementa operaciones **CRUD** (Create, Read, Update, Delete) para gestionar una colección de "items", utilizando una estructura de datos en memoria para simular una base de datos. Además, integra `Swagger UI` para mostrar una documentación interactiva, permitiendo probar los endpoints directamente desde el navegador.

## Demo
Para ejecutar y probar este proyecto localmente, se ingresan estos comandos en tu terminal:

1. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Inicia el servidor:
    ```bash
   node server.js
   ```

3. Abre tu navegador web y navega a la interfaz de Swagger:
   http://localhost:3000/api-docs

## Explicación
El sistema se basa en un archivo principal llamdo `server.js` que levanta un servidor **HTTP** en el puerto *3000*. Utiliza el middleware `express.json()` para parsear los bodies de las peticiones en formato **JSON**. 

Los datos se almacenan temporalmente en un arreglo llamado `items`. Cada operación HTTP manipula este arreglo:
- Las peticiones **GET** devuelve la información de los items.
- Las peticiones **POST** crean un nuevo elemento con las propiedades **ID** y **nombre** (`id` y `name`).
- Las peticiones **PUT** buscan el elemento por su ID usando y actualizan su propiedad `name`.
- Las peticiones **DELETE** elimina el elemento por medio del ID.

La documentación se genera leyendo el archivo `swagger.yaml` a través de la librería `yamljs` y se sirve visualmente utilizando el paquete `swagger-ui-express`.

## Estructura del proyecto

```note
api_server/
|-- node_modules/       (Directorio con las dependencias instaladas de Node)
|-- .gitignore          (Archivos y directorios ignorados por el control de versiones)
|-- package-lock.json   (Árbol de dependencias exacto)
|-- package.json        (Configuración del proyecto, dependencias y scripts)
|-- server.js           (Lógica principal de la API y configuración de Express)
|-- swagger.yaml        (Especificación de la API en formato OpenAPI 3.0 para Swagger)
```
## Endpoints de cada método

* GET /items

* POST /items
  
* PUT /items/:id
  
* DELETE /items/:id
  
## Ejemplos de uso

Ejemplos de cómo interactuar con la API enviando peticiones HTTP. Estas pruebas se ejecutan desde la interfaz de Swagger UI.

**1. Listar items (GET)**
Petición:

GET http://localhost:3000/items

**Respuesta exitosa (200):**
```json
[
  {
    "id": 1,
    "name": "Item 1"
  }
]
```

**2. Crear un item (POST)**
Petición:

POST http://localhost:3000/items
```bash
Headers: Content-Type: application/json
Body:
{
  "name": "Nuevo componente de software"
}
```

**Respuesta exitosa (201):**
```json
{
  "id": 2,
  "name": "Nuevo componente de software"
}
```

**3. Actualizar un item (PUT)**
Petición:

PUT http://localhost:3000/items/1
```bash
Headers: Content-Type: application/json
Body:
{
  "name": "Item 1 Modificado"
}
```

**Respuesta exitosa (200):**
```json
{
  "id": 1,
  "name": "Item 1 Modificado"
}
```

**4. Eliminar un item (DELETE)**
Petición:

DELETE http://localhost:3000/items/1

**Respuesta exitosa (204):**

(Sin contenido / No content)