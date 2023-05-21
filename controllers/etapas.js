const Etapas = require('../models/etapas')
const { request, response} = require('express')

// crear etapas

const createEtapas = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const etapasDB = await Etapas.findOne({nombre})
        
        if(etapasDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const etapas = new Etapas(data)
        console.log(etapas)
        await etapas.save()
        return res.status(201).json(etapas)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}
// consultar etapas

const getEtapas = async (req = request, 
    res = response) => {
        try{
            const etapasDB = await Etapas.find()//select * from tipoEquipo where estado=?
            return res.json(etapasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// Actualizar etapas

const updateEtapasByID = async (req = request,
    res = response) => {
    try{
        //console.log(req.body)
        //console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        //console.log(data)
        const etapas = await etapas.findByIdAndUpdate(id, data, {new: true})
        return res.json(etapas)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createEtapas, 
    getEtapas,
    updateEtapasByID
}