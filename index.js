const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Para formularios
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`TechRM servidor ejecutándose en http://localhost:${port}`);
});
