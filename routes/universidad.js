const { Router } = require('express')
const { createUniversidad, getUniversidad, updateUniversidadByID} =
require('../controllers/universidad')

const router = Router()

// crear Universidad
router.post('/', createUniversidad)

// consultar Universidad
router.get('/', getUniversidad)

// Editar Universidad

router.put('/:id', updateUniversidadByID)


module.exports = router;