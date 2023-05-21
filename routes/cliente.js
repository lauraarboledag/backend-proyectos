const { Router } = require('express')
const { createCliente, getCliente, updateClienteByID} =
 require('../controllers/cliente')

const router = Router()

// crear cliente
router.post('/', createCliente)

// consultar cliente
router.get('/', getCliente)

// Editar cliente

router.put('/:id', updateClienteByID)


module.exports = router;