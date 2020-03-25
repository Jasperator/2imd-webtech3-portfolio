const express = require('express');
const router = express.Router();
const todosController = require('../../../controllers/api/v1/messages');

router.get('/', todosController.getAll);


router.post("/", todosController.create);

module.exports = router;