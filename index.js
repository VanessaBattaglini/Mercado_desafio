const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = 3001;

//Cofiguración de platilla
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.engine('hbs', exphbs.engine({
    extname: 'hbs'
}));

//Ruta static con middlewares
app.use(express.static('assets'));
app.use('/bootstrap', express.static(
    'node_modules/bootstrap/dist'));

//Rutas
app.get('/', (req, res) => {
    res.render('market', {
        products: ['banana', 'cebollas', 'pimenton', 'papas', 'lechuga', 'tomate']
    })
});


app.listen(PORT, () => console.log(`El servidor se ha levantado en el port http://localhost:${PORT}`))