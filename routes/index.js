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
    success: req.query.success === 'true',
    currentPage: 'software'
  });
});

router.get('/montaje', (req, res) => {
  res.render('montaje', {
    title: 'TechRM - Montaje',
    success: req.query.success === 'true',
    currentPage: 'montaje'
  });
});

router.get('/reparacion', (req, res) => {
  res.render('reparacion', {
    title: 'TechRM - Reparación',
    success: req.query.success === 'true',
    currentPage: 'reparacion'
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

router.post('/solicitar-software', (req, res) => {
  console.log('Nueva solicitud de software:', req.body);
  res.redirect('/software?success=true');
});

router.post('/solicitar-montaje', (req, res) => {
  console.log('Nueva solicitud de montaje:', req.body);
  res.redirect('/montaje?success=true');
});

router.post('/solicitar-reparacion', (req, res) => {
  console.log('Nueva solicitud de reparacion:', req.body);
  res.redirect('/reparacion?success=true');
});

module.exports = router;
