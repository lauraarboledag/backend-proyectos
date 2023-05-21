const { Router } = require('express')
const { createTipoProyecto, getTipoProyecto, updateTipoProyectoByID } =
 require('../controllers/tipoProyecto')

const router = Router()

// crear tipo proyecto
router.post('/', createTipoProyecto)

// consultar tipo proyecto
router.get('/', getTipoProyecto)


// editar tipo proyecto

router.put('/:id', updateTipoProyectoByID)

module.exports = router;