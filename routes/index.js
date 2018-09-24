var express = require('express');
var router = express.Router();


const cargoController = require('..src/server/controllers').cargo;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Cargo Rota */
router.get('/api/cargo', cargoController.list);
router.get('/api/cargo/:id', cargoController.getById);
router.post('/api/cargo', cargoController.add);
router.put('/api/cargo/:id', cargoController.update);
router.delete('/api/classroom/:id', cargoController.delete);

module.exports = router;
