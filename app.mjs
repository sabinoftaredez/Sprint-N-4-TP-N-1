import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import { text } from 'stream/consumers';

const app = express();
const PORT = 3000;

// Configurar EJS como motor de plantillas.
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Configurar express-ejs-layouts.
app.use(expressEjsLayouts);
app.set('layout', 'layout'); //Archivo base layout.ejs

// Servir Archivos Estáticos.
app.use(express.static(path.resolve('./public')));

// Ruta Principal.
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Página Principal',
        description: 'Pagina Principal del Sitio.',});
});

// Ruta Acerca de.
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Acerca de Nosotros',
        description: 'Pagina de Información.',});
});

// Ruta Contacto.
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contáctenos',
        description: 'Pagina de Contacto.',});
});

// Iniciar el servidor.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});