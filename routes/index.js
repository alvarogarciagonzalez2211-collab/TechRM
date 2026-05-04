const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'TechRM - Hardware & Software',
    currentPage: 'index'
  });
});

router.get('/hardware', (req, res) => {
  res.render('hardware', {
    title: 'TechRM - Hardware',
    success: req.query.success === 'true',
    currentPage: 'hardware'
  });
});

router.get('/software', (req, res) => {
  res.render('software', {
    title: 'TechRM - Software',
    currentPage: 'software'
  });
});

router.get('/montaje', (req, res) => {
  res.render('montaje', {
    title: 'TechRM - Montaje',
    currentPage: 'montaje'
  });
});

router.get('/nosotros', (req, res) => {
  res.render('nosotros', {
    title: 'TechRM - Sobre Nosotros',
    currentPage: 'nosotros'
  });
});

router.post('/solicitar-servicio', (req, res) => {
  // Aquí procesarías los datos del formulario
  console.log('Nueva solicitud de servicio:', req.body);
  // Por ahora, redirigir de vuelta con un mensaje de éxito
  res.redirect('/hardware?success=true');
});

module.exports = router;
