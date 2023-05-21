const { Router } = require('express')
const { createEtapas, getEtapas, updateEtapasByID } =
 require('../controllers/etapas')

const router = Router()

// crear tipo proyecto
router.post('/', createEtapas)

// consultar tipo proyecto
router.get('/', getEtapas)


// editar tipo proyecto

router.put('/:id', updateEtapasByID)

module.exports = router;