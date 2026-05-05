const express = require('express');
const router = express.Router();

const softwareServices = {
  crm: {
    title: 'CRM y Gestión de Negocio',
    eyebrow: 'CRM y gestión interna',
    heading: 'Clientes, ventas y tareas en un panel <span>ordenado.</span>',
    description: 'Creamos CRMs sencillos de usar para centralizar contactos, oportunidades, presupuestos, citas, incidencias y seguimiento comercial sin depender de hojas sueltas.',
    accent: '#67e8f9',
    accentSoft: 'rgba(103, 232, 249, 0.18)',
    accentAlt: '#a78bfa',
    accentText: '#06333b',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=85&w=1800',
    detailImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1000',
    imageLabel: 'Panel de analítica y gestión comercial',
    formAction: '/solicitar-crm',
    formTitle: 'Cuéntanos cómo gestionas ahora',
    formIntro: 'Con unas pocas respuestas podemos detectar qué pantallas y datos necesita tu CRM.',
    formQuestion: 'Qué quieres controlar',
    formPlaceholder: 'Clientes, ventas, citas, presupuestos, incidencias, tareas...',
    featuresTitle: 'Qué puede incluir',
    featuresIntro: 'Cada CRM se ajusta al flujo real del negocio, priorizando claridad, búsqueda rápida y acciones diarias.',
    features: [
      { tag: 'Clientes', title: 'Ficha completa de contacto', text: 'Historial, notas, estado, documentos, llamadas, presupuestos y próximas acciones en un único lugar.' },
      { tag: 'Ventas', title: 'Embudo comercial', text: 'Seguimiento de oportunidades por fase, importes, responsables y probabilidad de cierre.' },
      { tag: 'Equipo', title: 'Tareas y avisos', text: 'Recordatorios, asignaciones e incidencias para que nada dependa de memoria o mensajes perdidos.' }
    ],
    steps: [
      { title: 'Mapa del proceso', text: 'Definimos cómo entra un cliente, quién lo atiende y qué información se necesita.' },
      { title: 'Modelo de datos', text: 'Ordenamos clientes, productos, presupuestos, documentos y estados sin complicarlo de más.' },
      { title: 'Pantallas útiles', text: 'Diseñamos vistas para vender, buscar, filtrar y actuar con pocos clics.' },
      { title: 'Entrega por fases', text: 'Primero lo imprescindible; después automatizaciones, reportes o portal de clientes.' }
    ],
    ctaTitle: '¿Tu negocio vive entre Excel, WhatsApp y notas?',
    ctaText: 'Un CRM a medida puede empezar pequeño y crecer cuando el equipo ya lo usa con naturalidad.',
    footer: 'CRM claro para equipos que necesitan seguimiento real.'
  },
  'sistemas-venta': {
    title: 'Sistemas de Venta',
    eyebrow: 'POS e inventario',
    heading: 'Caja, catálogo e inventario conectados para <span>vender mejor.</span>',
    description: 'Desarrollamos sistemas de venta para tiendas, talleres, servicios y pequeños negocios que necesitan registrar operaciones, controlar stock y consultar datos sin fricción.',
    accent: '#a78bfa',
    accentSoft: 'rgba(167, 139, 250, 0.18)',
    accentAlt: '#67e8f9',
    accentText: '#170d2d',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=85&w=1800',
    detailImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=85&w=1000',
    imageLabel: 'Sistema de venta y catálogo digital',
    formAction: '/solicitar-sistemas-venta',
    formTitle: 'Define tu punto de venta',
    formIntro: 'Te ayudamos a convertir tus ventas diarias en un flujo más rápido y controlado.',
    formQuestion: 'Cómo vendes ahora',
    formPlaceholder: 'Caja física, productos, servicios, reservas, tickets, stock...',
    featuresTitle: 'Venta sin desorden',
    featuresIntro: 'Pensado para operar rápido en el mostrador y consultar la información cuando toca decidir.',
    features: [
      { tag: 'Caja', title: 'Registro de ventas', text: 'Tickets, métodos de pago, descuentos, devoluciones y cierres de caja diarios.' },
      { tag: 'Stock', title: 'Inventario actualizado', text: 'Productos, variantes, mínimos, movimientos y avisos para evitar roturas de stock.' },
      { tag: 'Reportes', title: 'Datos de negocio', text: 'Ventas por periodo, productos más vendidos, margen, clientes recurrentes y actividad del equipo.' }
    ],
    steps: [
      { title: 'Operación diaria', text: 'Revisamos cómo se atiende, cobra, entrega y registra cada venta.' },
      { title: 'Catálogo e inventario', text: 'Estructuramos productos, servicios, precios, impuestos y variantes.' },
      { title: 'Pantalla de caja', text: 'Diseñamos una interfaz rápida para trabajar de pie, con teclado, ratón o táctil.' },
      { title: 'Control y reportes', text: 'Añadimos cierres, listados y métricas para saber qué está pasando.' }
    ],
    ctaTitle: '¿La caja y el stock no cuentan la misma historia?',
    ctaText: 'Un sistema de venta bien planteado reduce errores y deja trazabilidad de lo que pasa cada día.',
    footer: 'Ventas e inventario con menos pasos manuales.'
  },
  'paginas-web': {
    title: 'Páginas Web',
    eyebrow: 'Webs y presencia online',
    heading: 'Una web clara, rápida y preparada para <span>convertir.</span>',
    description: 'Diseñamos páginas corporativas, catálogos, landings y webs de servicios con estructura profesional, buen rendimiento y contenido pensado para que el cliente entienda rápido qué ofreces.',
    accent: '#86efac',
    accentSoft: 'rgba(134, 239, 172, 0.18)',
    accentAlt: '#67e8f9',
    accentText: '#082411',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=85&w=1800',
    detailImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=85&w=1000',
    imageLabel: 'Diseño de página web en un portátil',
    formAction: '/solicitar-paginas-web',
    formTitle: 'Cuéntanos qué web necesitas',
    formIntro: 'Ordenamos objetivo, secciones, contenido y estilo antes de construir.',
    formQuestion: 'Objetivo de la web',
    formPlaceholder: 'Captar clientes, mostrar servicios, vender productos, portfolio...',
    featuresTitle: 'Webs útiles desde el primer día',
    featuresIntro: 'No hacemos una portada bonita sin recorrido. La web se piensa como una herramienta comercial.',
    features: [
      { tag: 'Contenido', title: 'Estructura clara', text: 'Inicio, servicios, casos, contacto y mensajes preparados para explicar tu oferta sin ruido.' },
      { tag: 'Móvil', title: 'Diseño responsive', text: 'Experiencia cuidada en móvil, tablet y escritorio, con textos que encajan y llamadas a la acción visibles.' },
      { tag: 'Base', title: 'Rendimiento y SEO', text: 'Carga rápida, etiquetas correctas, estructura semántica y una base fácil de mantener.' }
    ],
    steps: [
      { title: 'Objetivo', text: 'Definimos qué debe conseguir la web: leads, reservas, confianza, catálogo o venta.' },
      { title: 'Contenido', text: 'Organizamos secciones, textos, imágenes y prioridades de navegación.' },
      { title: 'Diseño y desarrollo', text: 'Creamos la interfaz con estilo consistente y adaptación a todos los tamaños.' },
      { title: 'Publicación', text: 'Revisamos rendimiento, enlaces, formularios, dominio y despliegue.' }
    ],
    ctaTitle: '¿Tu web actual no explica bien lo que haces?',
    ctaText: 'Podemos crear una nueva o mejorar la existente con una estructura más clara y orientada a clientes.',
    footer: 'Webs claras para negocios que quieren ser entendidos.'
  },
  automatizaciones: {
    title: 'Automatizaciones',
    eyebrow: 'Automatización y conexiones',
    heading: 'Menos tareas repetidas, más tiempo para <span>trabajo real.</span>',
    description: 'Conectamos formularios, hojas de cálculo, CRMs, correos, APIs y paneles internos para reducir copias manuales, errores y avisos que se pierden por el camino.',
    accent: '#f0abfc',
    accentSoft: 'rgba(240, 171, 252, 0.18)',
    accentAlt: '#86efac',
    accentText: '#351039',
    heroImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=85&w=1800',
    detailImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=85&w=1000',
    imageLabel: 'Conexiones y servidores para automatizaciones',
    formAction: '/solicitar-automatizaciones',
    formTitle: 'Detectemos la tarea repetitiva',
    formIntro: 'Si algo se copia, se avisa o se revisa siempre igual, probablemente se puede automatizar.',
    formQuestion: 'Qué tarea quieres automatizar',
    formPlaceholder: 'Emails, formularios, facturas, avisos, importaciones, reportes...',
    featuresTitle: 'Automatizaciones con sentido',
    featuresIntro: 'Buscamos procesos pequeños que ahorren tiempo de verdad y no creen una dependencia difícil de mantener.',
    features: [
      { tag: 'Datos', title: 'Sin copiar y pegar', text: 'Movemos información entre formularios, hojas, bases de datos y aplicaciones.' },
      { tag: 'Avisos', title: 'Notificaciones útiles', text: 'Emails, alertas internas y recordatorios cuando una acción necesita atención.' },
      { tag: 'Reportes', title: 'Informes automáticos', text: 'Resúmenes periódicos de ventas, incidencias, clientes o actividad sin prepararlos a mano.' }
    ],
    steps: [
      { title: 'Tarea repetida', text: 'Identificamos qué se hace muchas veces y cuánto tiempo o error está generando.' },
      { title: 'Herramientas actuales', text: 'Revisamos formularios, hojas, correo, CRM, tienda online o APIs disponibles.' },
      { title: 'Flujo automático', text: 'Definimos disparadores, condiciones, datos y acciones con control de errores.' },
      { title: 'Seguimiento', text: 'Dejamos registros y avisos para saber cuándo funciona y cuándo requiere revisión.' }
    ],
    ctaTitle: '¿Hay una tarea que haces igual todas las semanas?',
    ctaText: 'Empezar por una automatización pequeña suele ser la forma más rápida de notar mejora.',
    footer: 'Automatizaciones discretas para ahorrar trabajo manual.'
  }
};

function renderSoftwareService(req, res, slug) {
  res.render('software-detail', {
    title: `TechRM - ${softwareServices[slug].title}`,
    currentPage: 'software',
    success: req.query.success === 'true',
    service: softwareServices[slug]
  });
}

router.get('/', (req, res) => {
  res.render('index', {
    title: 'TechRM - Hardware & Software',
    currentPage: 'index'
  });
});

router.get('/hardware', (req, res) => {
  res.render('hardware', {
    title: 'TechRM - Hardware',
    currentPage: 'hardware'
  });
});

router.get('/software', (req, res) => {
  res.render('software', {
    title: 'TechRM - Software',
    currentPage: 'software'
  });
});

router.get('/crm', (req, res) => renderSoftwareService(req, res, 'crm'));
router.get('/sistemas-venta', (req, res) => renderSoftwareService(req, res, 'sistemas-venta'));
router.get('/paginas-web', (req, res) => renderSoftwareService(req, res, 'paginas-web'));
router.get('/automatizaciones', (req, res) => renderSoftwareService(req, res, 'automatizaciones'));

router.get('/montaje', (req, res) => {
  res.render('montaje', {
    title: 'TechRM - Montaje',
    success: req.query.success === 'true',
    currentPage: 'montaje'
  });
});

router.get('/asesoria-hardware', (req, res) => {
  res.render('asesoria-hardware', {
    title: 'TechRM - Asesoría Hardware',
    success: req.query.success === 'true',
    currentPage: 'hardware'
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

router.post('/solicitar-montaje', (req, res) => {
  console.log('Nueva solicitud de montaje:', req.body);
  res.redirect('/montaje?success=true');
});

router.post('/solicitar-reparacion', (req, res) => {
  console.log('Nueva solicitud de reparacion:', req.body);
  res.redirect('/reparacion?success=true');
});

router.post('/solicitar-asesoria-hardware', (req, res) => {
  console.log('Nueva solicitud de asesoria hardware:', req.body);
  res.redirect('/asesoria-hardware?success=true');
});

router.post('/solicitar-crm', (req, res) => {
  console.log('Nueva solicitud de CRM:', req.body);
  res.redirect('/crm?success=true');
});

router.post('/solicitar-sistemas-venta', (req, res) => {
  console.log('Nueva solicitud de sistemas de venta:', req.body);
  res.redirect('/sistemas-venta?success=true');
});

router.post('/solicitar-paginas-web', (req, res) => {
  console.log('Nueva solicitud de paginas web:', req.body);
  res.redirect('/paginas-web?success=true');
});

router.post('/solicitar-automatizaciones', (req, res) => {
  console.log('Nueva solicitud de automatizaciones:', req.body);
  res.redirect('/automatizaciones?success=true');
});

module.exports = router;
