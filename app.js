const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const cliente = require('./routes/cliente')
//const proyecto = require('./routes/proyecto')
const universidad = require('./routes/universidad')
const etapas= require('./routes/etapas')


// middlewares
app.use('/api/TipoProyecto', tipoProyecto)
app.use('/api/Cliente', cliente)
//app.use('/api/Proyecto', proyecto)
app.use('/api/Universidad', universidad)
app.use('/api/Etapas', etapas)


module.exports = app